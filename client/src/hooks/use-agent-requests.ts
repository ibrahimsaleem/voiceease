import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, buildUrl, type CreateAgentRequestInput, type UpdateAgentRequestInput } from "@shared/routes";

export function useAgentRequests() {
  return useQuery({
    queryKey: [api.agentRequests.list.path],
    queryFn: async () => {
      const res = await fetch(api.agentRequests.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch requests");
      return api.agentRequests.list.responses[200].parse(await res.json());
    },
  });
}

export function useAgentRequest(id: number | null) {
  return useQuery({
    queryKey: [api.agentRequests.get.path, id],
    enabled: !!id,
    queryFn: async () => {
      if (!id) return null;
      const url = buildUrl(api.agentRequests.get.path, { id });
      const res = await fetch(url, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch request details");
      return api.agentRequests.get.responses[200].parse(await res.json());
    },
  });
}

export function useCreateAgentRequest() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CreateAgentRequestInput) => {
      const res = await fetch(api.agentRequests.create.path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      if (!res.ok) {
        if (res.status === 400) {
          const err = await res.json();
          throw new Error(err.message || "Validation failed");
        }
        throw new Error("Failed to create request");
      }
      return api.agentRequests.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.agentRequests.list.path] });
    },
  });
}

export function useUpdateAgentRequest() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...data }: { id: number } & UpdateAgentRequestInput) => {
      const url = buildUrl(api.agentRequests.update.path, { id });
      const res = await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to update request");
      return api.agentRequests.update.responses[200].parse(await res.json());
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [api.agentRequests.list.path] });
      queryClient.invalidateQueries({ queryKey: [api.agentRequests.get.path, data.id] });
    },
  });
}
