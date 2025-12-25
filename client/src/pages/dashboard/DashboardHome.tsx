import { AppLayout } from "@/components/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Plus, Clock, Users, PhoneCall, TrendingUp } from "lucide-react";
import { useAgentRequests } from "@/hooks/use-agent-requests";
import { useUser } from "@/hooks/use-auth";

export default function DashboardHome() {
  const { data: user } = useUser();
  const { data: requests, isLoading } = useAgentRequests();

  return (
    <AppLayout>
       <div className="space-y-8">
         <div className="flex items-center justify-between">
           <div>
             <h1 className="text-3xl font-display font-bold text-gray-900">Dashboard</h1>
             <p className="text-muted-foreground">Welcome back, {user?.username}</p>
           </div>
           <Link href="/app/request-agent">
             <Button className="gap-2 shadow-lg shadow-primary/20">
               <Plus className="h-4 w-4" />
               New Agent Request
             </Button>
           </Link>
         </div>

         {/* Stats Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border-0 shadow-sm bg-white">
               <div className="flex items-center gap-4">
                 <div className="p-3 rounded-xl bg-purple-100 text-purple-600">
                   <Clock className="h-6 w-6" />
                 </div>
                 <div>
                   <p className="text-sm font-medium text-muted-foreground">Active Requests</p>
                   <h3 className="text-2xl font-bold">{requests?.length || 0}</h3>
                 </div>
               </div>
            </Card>
            <Card className="p-6 border-0 shadow-sm bg-white">
               <div className="flex items-center gap-4">
                 <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
                   <PhoneCall className="h-6 w-6" />
                 </div>
                 <div>
                   <p className="text-sm font-medium text-muted-foreground">Total Calls</p>
                   <h3 className="text-2xl font-bold">0</h3>
                 </div>
               </div>
            </Card>
            <Card className="p-6 border-0 shadow-sm bg-white">
               <div className="flex items-center gap-4">
                 <div className="p-3 rounded-xl bg-green-100 text-green-600">
                   <TrendingUp className="h-6 w-6" />
                 </div>
                 <div>
                   <p className="text-sm font-medium text-muted-foreground">Minutes Saved</p>
                   <h3 className="text-2xl font-bold">0</h3>
                 </div>
               </div>
            </Card>
         </div>

         {/* Recent Activity */}
         <div>
           <h2 className="text-xl font-bold mb-4">Recent Requests</h2>
           <Card className="border shadow-sm overflow-hidden">
             {isLoading ? (
               <div className="p-8 text-center text-muted-foreground">Loading...</div>
             ) : requests?.length === 0 ? (
               <div className="p-12 text-center flex flex-col items-center gap-4">
                 <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                   <Users className="h-8 w-8" />
                 </div>
                 <div>
                   <h3 className="text-lg font-semibold">No requests yet</h3>
                   <p className="text-muted-foreground">Start by creating your first AI agent.</p>
                 </div>
                 <Link href="/app/request-agent">
                   <Button variant="outline">Create Agent</Button>
                 </Link>
               </div>
             ) : (
               <div className="divide-y">
                 {requests?.map((req) => (
                   <div key={req.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                     <div>
                       <h4 className="font-semibold text-gray-900">{req.businessName}</h4>
                       <p className="text-sm text-muted-foreground">{req.industry} • {new Date(req.createdAt!).toLocaleDateString()}</p>
                     </div>
                     <div className="flex items-center gap-4">
                       <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                         req.status === 'NEW' ? 'bg-blue-100 text-blue-700' : 
                         req.status === 'REQUESTED' ? 'bg-yellow-100 text-yellow-700' : 
                         'bg-green-100 text-green-700'
                       }`}>
                         {req.status}
                       </span>
                       <Link href={`/app/recommendation?id=${req.id}`}>
                         <Button variant="ghost" size="sm">View Details</Button>
                       </Link>
                     </div>
                   </div>
                 ))}
               </div>
             )}
           </Card>
         </div>
       </div>
    </AppLayout>
  );
}
