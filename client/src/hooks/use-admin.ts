import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@shared/routes";

// Get all users
export function useAllUsers() {
  return useQuery({
    queryKey: [api.admin.getUsers.path],
    queryFn: async () => {
      const res = await fetch(api.admin.getUsers.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch users");
      return res.json();
    },
  });
}

// Delete user
export function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId: number) => {
      const res = await fetch(api.admin.deleteUser.path.replace(":id", String(userId)), {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to delete user");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.admin.getUsers.path] });
      queryClient.invalidateQueries({ queryKey: [api.admin.getStats.path] });
    },
  });
}

// Update user role
export function useUpdateUserRole() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ userId, role }: { userId: number; role: string }) => {
      const res = await fetch(api.admin.updateUserRole.path.replace(":id", String(userId)), {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role }),
        credentials: "include",
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to update user role");
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.admin.getUsers.path] });
    },
  });
}

// Get all agent requests (admin view)
export function useAllAgentRequests() {
  return useQuery({
    queryKey: [api.admin.getAllRequests.path],
    queryFn: async () => {
      const res = await fetch(api.admin.getAllRequests.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch agent requests");
      return res.json();
    },
  });
}

// Get all demo leads
export function useAllLeads() {
  return useQuery({
    queryKey: [api.admin.getAllLeads.path],
    queryFn: async () => {
      const res = await fetch(api.admin.getAllLeads.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch leads");
      return res.json();
    },
  });
}

// Get all contact messages
export function useAllContacts() {
  return useQuery({
    queryKey: [api.admin.getAllContacts.path],
    queryFn: async () => {
      const res = await fetch(api.admin.getAllContacts.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch contacts");
      return res.json();
    },
  });
}

// Get admin statistics
export function useAdminStats() {
  return useQuery({
    queryKey: [api.admin.getStats.path],
    queryFn: async () => {
      const res = await fetch(api.admin.getStats.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch stats");
      return res.json();
    },
  });
}

