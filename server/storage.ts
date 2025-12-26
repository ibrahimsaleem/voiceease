
import { 
  users, agentRequests, demoLeads, contactMessages,
  type User, type InsertUser, 
  type AgentRequest, type InsertAgentRequest, 
  type DemoLead, type InsertDemoLead,
  type ContactMessage, type InsertContactMessage
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Agent Requests
  createAgentRequest(request: InsertAgentRequest & { userId: number }): Promise<AgentRequest>;
  getAgentRequest(id: number): Promise<AgentRequest | undefined>;
  getAgentRequestsByUser(userId: number): Promise<AgentRequest[]>;
  updateAgentRequest(id: number, updates: Partial<AgentRequest>): Promise<AgentRequest>;

  // Demo & Contact
  createDemoLead(lead: InsertDemoLead): Promise<DemoLead>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;

  // Admin Methods
  getAllUsers(): Promise<User[]>;
  deleteUser(id: number): Promise<void>;
  updateUserRole(id: number, role: string): Promise<User>;
  getAllAgentRequests(): Promise<AgentRequest[]>;
  getAllDemoLeads(): Promise<DemoLead[]>;
  getAllContactMessages(): Promise<ContactMessage[]>;
  getSystemStats(): Promise<{ userCount: number; requestCount: number; leadCount: number; contactCount: number }>;
}

export class DatabaseStorage implements IStorage {
  // User
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Agent Requests
  async createAgentRequest(request: InsertAgentRequest & { userId: number }): Promise<AgentRequest> {
    const [agentRequest] = await db.insert(agentRequests).values(request).returning();
    return agentRequest;
  }

  async getAgentRequest(id: number): Promise<AgentRequest | undefined> {
    const [request] = await db.select().from(agentRequests).where(eq(agentRequests.id, id));
    return request;
  }

  async getAgentRequestsByUser(userId: number): Promise<AgentRequest[]> {
    return await db.select().from(agentRequests).where(eq(agentRequests.userId, userId));
  }

  async updateAgentRequest(id: number, updates: Partial<AgentRequest>): Promise<AgentRequest> {
    const [updated] = await db.update(agentRequests)
      .set(updates)
      .where(eq(agentRequests.id, id))
      .returning();
    return updated;
  }

  // Demo & Contact
  async createDemoLead(lead: InsertDemoLead): Promise<DemoLead> {
    const [created] = await db.insert(demoLeads).values(lead).returning();
    return created;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [created] = await db.insert(contactMessages).values(message).returning();
    return created;
  }

  // Admin Methods
  async getAllUsers(): Promise<User[]> {
    return await db.select().from(users);
  }

  async deleteUser(id: number): Promise<void> {
    await db.delete(users).where(eq(users.id, id));
  }

  async updateUserRole(id: number, role: string): Promise<User> {
    const [updated] = await db.update(users)
      .set({ role })
      .where(eq(users.id, id))
      .returning();
    return updated;
  }

  async getAllAgentRequests(): Promise<AgentRequest[]> {
    return await db.select().from(agentRequests);
  }

  async getAllDemoLeads(): Promise<DemoLead[]> {
    return await db.select().from(demoLeads);
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages);
  }

  async getSystemStats(): Promise<{ userCount: number; requestCount: number; leadCount: number; contactCount: number }> {
    const [userCountResult] = await db.select().from(users);
    const [requestCountResult] = await db.select().from(agentRequests);
    const [leadCountResult] = await db.select().from(demoLeads);
    const [contactCountResult] = await db.select().from(contactMessages);

    const allUsers = await db.select().from(users);
    const allRequests = await db.select().from(agentRequests);
    const allLeads = await db.select().from(demoLeads);
    const allContacts = await db.select().from(contactMessages);

    return {
      userCount: allUsers.length,
      requestCount: allRequests.length,
      leadCount: allLeads.length,
      contactCount: allContacts.length,
    };
  }
}

export const storage = new DatabaseStorage();
