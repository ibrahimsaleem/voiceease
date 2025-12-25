import { useMutation } from "@tanstack/react-query";
import { api, type InsertDemoLead, type InsertContactMessage } from "@shared/routes";

export function useCreateDemoLead() {
  return useMutation({
    mutationFn: async (data: InsertDemoLead) => {
      const res = await fetch(api.demo.create.path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit demo request");
      return api.demo.create.responses[201].parse(await res.json());
    },
  });
}

export function useCreateContactMessage() {
  return useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const res = await fetch(api.contact.create.path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send message");
      return api.contact.create.responses[201].parse(await res.json());
    },
  });
}
