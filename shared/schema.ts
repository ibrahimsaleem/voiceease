
import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(), // email
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const agentRequests = pgTable("agent_requests", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(), // Foreign key handled in logic or relation
  businessName: text("business_name").notNull(),
  industry: text("industry").notNull(),
  businessPhone: text("business_phone").notNull(),
  businessHours: text("business_hours"),
  servicesOffered: text("services_offered"),
  appointmentTypes: text("appointment_types"),
  calendarUsed: text("calendar_used"),
  typicalQuestions: text("typical_questions"),
  primaryGoal: text("primary_goal"),
  preferredLanguage: text("preferred_language").default("English"),
  
  // Recommendation fields
  recommendationPlan: text("recommendation_plan"), // "Starter" | "Custom"
  recommendationData: jsonb("recommendation_data"), // { callFlows: [], sampleScript: "", expectedImpact: "" }
  
  planSelected: text("plan_selected"), // Plan confirmed by user
  status: text("status").default("NEW").notNull(), // NEW, RECOMMENDED, REQUESTED
  
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const demoLeads = pgTable("demo_leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  businessName: text("business_name"),
  phone: text("phone"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// === SCHEMAS ===

export const insertUserSchema = createInsertSchema(users).omit({ id: true, createdAt: true });
export const insertAgentRequestSchema = createInsertSchema(agentRequests).omit({ 
  id: true, 
  userId: true, 
  createdAt: true, 
  updatedAt: true,
  recommendationPlan: true,
  recommendationData: true,
  planSelected: true,
  status: true
});
export const insertDemoLeadSchema = createInsertSchema(demoLeads).omit({ id: true, createdAt: true });
export const insertContactMessageSchema = createInsertSchema(contactMessages).omit({ id: true, createdAt: true });

// === EXPLICIT TYPES ===

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type AgentRequest = typeof agentRequests.$inferSelect;
export type InsertAgentRequest = z.infer<typeof insertAgentRequestSchema>;

export type DemoLead = typeof demoLeads.$inferSelect;
export type InsertDemoLead = z.infer<typeof insertDemoLeadSchema>;

export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;

// Recommendation Data Type
export interface RecommendationData {
  callFlows: string[];
  sampleScript: string;
  expectedImpact: string;
}

// Request/Response Types
export type CreateAgentRequestInput = InsertAgentRequest;
export type UpdateAgentRequestInput = Partial<InsertAgentRequest> & {
  planSelected?: string;
  status?: string;
};

// Auth Types
export const loginSchema = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});
export type LoginInput = z.infer<typeof loginSchema>;

