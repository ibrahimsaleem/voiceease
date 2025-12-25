
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { insertUserSchema } from "@shared/schema";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import session from "express-session";
import createMemoryStore from "memorystore";

const MemoryStore = createMemoryStore(session);

// --- HELPER FOR "AI" LOGIC ---
function generateRecommendation(data: any) {
  // Deterministic Rules Engine
  const needsCustom = 
    ['dentist', 'doctor', 'clinic', 'lawyer', 'resort', 'hotel'].some(i => data.industry?.toLowerCase().includes(i)) ||
    (data.servicesOffered?.length || 0) > 200 ||
    (data.appointmentTypes?.split(',').length || 0) > 3 ||
    (data.calendarUsed && data.calendarUsed !== 'None');

  const plan = needsCustom ? 'Custom' : 'Starter';
  const price = needsCustom ? '$1000' : '$500';

  const callFlows = [
    "Greeting & Company Intro",
    "Service Inquiry & Qualification",
    "Appointment Scheduling",
    "FAQ Handling",
    "Out of Hours Routing"
  ];
  
  if (needsCustom) {
    callFlows.push("Complex Routing Logic", "CRM Integration Handshake");
  }

  const sampleScript = `Agent: "Hi, thanks for calling ${data.businessName}. I'm the AI assistant. How can I help you today?"\nCaller: "I'd like to book an appointment."\nAgent: "I can help with that. What service are you looking for?"`;

  const expectedImpact = `Reduce missed calls by up to 100% and increase booked appointments for ${data.businessName}.`;

  return {
    recommendationPlan: plan,
    recommendationData: {
      callFlows,
      sampleScript,
      expectedImpact
    }
  };
}


export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // === AUTH SETUP ===
  // Using simple session store for demo. In prod use Redis/Postgres store.
  app.use(session({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000 
    }),
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy(async (username, password, done) => {
    try {
      const user = await storage.getUserByUsername(username);
      if (!user || user.password !== password) { // Simple plaintext compare for demo speed - in prod use bcrypt
        return done(null, false);
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }));

  passport.serializeUser((user: any, done) => done(null, user.id));
  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await storage.getUser(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  // === API ROUTES ===

  // Auth
  app.post(api.auth.register.path, async (req, res) => {
    try {
      const input = api.auth.register.input.parse(req.body);
      const existing = await storage.getUserByUsername(input.username);
      if (existing) {
        return res.status(400).json({ message: "Username already exists" });
      }
      const user = await storage.createUser(input);
      req.login(user, (err) => {
        if (err) return res.status(500).json({ message: "Login failed after register" });
        return res.status(201).json(user);
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.post(api.auth.login.path, passport.authenticate('local'), (req, res) => {
    res.status(200).json(req.user);
  });

  app.post(api.auth.logout.path, (req, res) => {
    req.logout((err) => {
      if (err) return res.status(500).json({ message: "Logout failed" });
      res.status(200).json({ message: "Logged out" });
    });
  });

  app.get(api.auth.me.path, (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ message: "Unauthorized" });
    res.status(200).json(req.user);
  });

  // Agent Requests
  app.post(api.agentRequests.create.path, async (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ message: "Unauthorized" });
    
    try {
      const input = api.agentRequests.create.input.parse(req.body);
      
      // Run AI Logic
      const recommendation = generateRecommendation(input);
      
      const request = await storage.createAgentRequest({
        ...input,
        userId: (req.user as any).id,
        ...recommendation,
        status: "NEW"
      });
      
      res.status(201).json(request);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  app.get(api.agentRequests.list.path, async (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ message: "Unauthorized" });
    const requests = await storage.getAgentRequestsByUser((req.user as any).id);
    res.json(requests);
  });

  app.get(api.agentRequests.get.path, async (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ message: "Unauthorized" });
    const request = await storage.getAgentRequest(Number(req.params.id));
    if (!request) return res.status(404).json({ message: "Request not found" });
    if (request.userId !== (req.user as any).id) return res.status(401).json({ message: "Unauthorized" });
    res.json(request);
  });

  app.patch(api.agentRequests.update.path, async (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ message: "Unauthorized" });
    
    try {
      // Validate input manually since it's a partial schema in routes
      const updates = req.body; 
      const existing = await storage.getAgentRequest(Number(req.params.id));
      if (!existing) return res.status(404).json({ message: "Request not found" });
      if (existing.userId !== (req.user as any).id) return res.status(401).json({ message: "Unauthorized" });

      const updated = await storage.updateAgentRequest(existing.id, updates);
      res.json(updated);
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  // Demo Leads
  app.post(api.demo.create.path, async (req, res) => {
    try {
      const input = api.demo.create.input.parse(req.body);
      const lead = await storage.createDemoLead(input);
      res.status(201).json(lead);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  // Contact
  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const message = await storage.createContactMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  });

  // SEED DATA
  if (await storage.getUserByUsername("demo@voiceease.com") === undefined) {
    await storage.createUser({
      username: "demo@voiceease.com",
      password: "password123"
    });
    
    // Create a sample request
    const user = await storage.getUserByUsername("demo@voiceease.com");
    if (user) {
        await storage.createAgentRequest({
            userId: user.id,
            businessName: "Demo Salon",
            industry: "Salons & Spas",
            businessPhone: "555-0123",
            businessHours: "Mon-Fri 9-5",
            servicesOffered: "Haircuts, Coloring, Styling",
            appointmentTypes: "Cut, Color",
            calendarUsed: "Google Calendar",
            typicalQuestions: "How much is a cut?",
            primaryGoal: "Increase bookings",
            preferredLanguage: "English",
            status: "RECOMMENDED",
            recommendationPlan: "Starter",
            recommendationData: {
                callFlows: ["Greeting", "Booking"],
                sampleScript: "Hi, thanks for calling Demo Salon...",
                expectedImpact: "Reduce missed calls."
            }
        });
    }
  }

  return httpServer;
}
