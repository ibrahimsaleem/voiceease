
import { z } from 'zod';
import { 
  insertUserSchema, 
  insertAgentRequestSchema, 
  insertDemoLeadSchema, 
  insertContactMessageSchema,
  agentRequests,
  users,
  demoLeads,
  contactMessages,
  loginSchema
} from './schema';

export * from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  unauthorized: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  auth: {
    register: {
      method: 'POST' as const,
      path: '/api/register',
      input: loginSchema, // Using login schema for simpler register (email/pass)
      responses: {
        201: z.custom<typeof users.$inferSelect>(),
        400: errorSchemas.validation,
      }
    },
    login: {
      method: 'POST' as const,
      path: '/api/login',
      input: loginSchema,
      responses: {
        200: z.custom<typeof users.$inferSelect>(), // Returns user on success
        401: errorSchemas.unauthorized,
      }
    },
    logout: {
      method: 'POST' as const,
      path: '/api/logout',
      responses: {
        200: z.object({ message: z.string() }),
      }
    },
    me: {
      method: 'GET' as const,
      path: '/api/user',
      responses: {
        200: z.custom<typeof users.$inferSelect>(),
        401: errorSchemas.unauthorized,
      }
    }
  },
  agentRequests: {
    create: {
      method: 'POST' as const,
      path: '/api/agent-requests',
      input: insertAgentRequestSchema,
      responses: {
        201: z.custom<typeof agentRequests.$inferSelect>(), // Returns the created request WITH recommendation
        400: errorSchemas.validation,
        401: errorSchemas.unauthorized,
      }
    },
    list: {
      method: 'GET' as const,
      path: '/api/agent-requests',
      responses: {
        200: z.array(z.custom<typeof agentRequests.$inferSelect>()),
        401: errorSchemas.unauthorized,
      }
    },
    get: {
      method: 'GET' as const,
      path: '/api/agent-requests/:id',
      responses: {
        200: z.custom<typeof agentRequests.$inferSelect>(),
        404: errorSchemas.notFound,
        401: errorSchemas.unauthorized,
      }
    },
    update: {
      method: 'PATCH' as const,
      path: '/api/agent-requests/:id',
      input: z.object({
        planSelected: z.string().optional(),
        status: z.string().optional(),
      }),
      responses: {
        200: z.custom<typeof agentRequests.$inferSelect>(),
        404: errorSchemas.notFound,
        401: errorSchemas.unauthorized,
      }
    }
  },
  demo: {
    create: {
      method: 'POST' as const,
      path: '/api/demo-leads',
      input: insertDemoLeadSchema,
      responses: {
        201: z.custom<typeof demoLeads.$inferSelect>(),
        400: errorSchemas.validation,
      }
    }
  },
  contact: {
    create: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertContactMessageSchema,
      responses: {
        201: z.custom<typeof contactMessages.$inferSelect>(),
        400: errorSchemas.validation,
      }
    }
  }
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
