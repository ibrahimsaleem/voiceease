import { AppLayout } from "@/components/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useAgentRequests } from "@/hooks/use-agent-requests";
import { Plus, Loader2, Calendar, Building2, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Requests() {
  const { data: requests, isLoading } = useAgentRequests();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "NEW":
        return "bg-blue-100 text-blue-700";
      case "RECOMMENDED":
        return "bg-yellow-100 text-yellow-700";
      case "REQUESTED":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <AppLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-display font-bold text-gray-900">Your Requests</h1>
            <p className="text-muted-foreground">View and manage all your AI agent requests</p>
          </div>
          <Link href="/app/request-agent">
            <Button className="gap-2 shadow-lg shadow-primary/20">
              <Plus className="h-4 w-4" />
              New Request
            </Button>
          </Link>
        </div>

        {/* Filter/Sort Options (Placeholder) */}
        <Card className="p-4 border-0 shadow-sm bg-white">
          <div className="flex items-center gap-4">
            <div className="text-sm text-muted-foreground">
              <strong className="text-foreground">{requests?.length || 0}</strong> total requests
            </div>
          </div>
        </Card>

        {/* Requests List */}
        {isLoading ? (
          <Card className="p-12 text-center border-0 shadow-sm">
            <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Loading your requests...</p>
          </Card>
        ) : requests?.length === 0 ? (
          <Card className="p-12 text-center border-0 shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mx-auto mb-4">
              <Building2 className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No requests yet</h3>
            <p className="text-muted-foreground mb-6">
              Start by creating your first AI agent request.
            </p>
            <Link href="/app/request-agent">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Request
              </Button>
            </Link>
          </Card>
        ) : (
          <div className="grid gap-4">
            {requests?.map((request) => (
              <Card key={request.id} className="p-6 border-0 shadow-sm bg-white hover:shadow-md transition-all duration-200">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold">{request.businessName}</h3>
                      <Badge className={getStatusColor(request.status || "NEW")}>
                        {request.status}
                      </Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building2 className="h-4 w-4" />
                        <span>{request.industry}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Created {new Date(request.createdAt!).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="text-sm text-muted-foreground mb-4">
                      <strong className="text-foreground">Goal:</strong> {request.primaryGoal || "Not specified"}
                    </div>

                    {request.recommendationPlan && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary rounded-lg text-sm font-medium">
                        Recommended: {request.recommendationPlan} Plan
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <Link href={`/app/recommendation?id=${request.id}`}>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Eye className="h-4 w-4" />
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Summary Stats */}
        {requests && requests.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-0 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100/50">
              <div className="text-sm font-medium text-blue-900 mb-1">New Requests</div>
              <div className="text-3xl font-bold text-blue-600">
                {requests.filter(r => r.status === "NEW").length}
              </div>
            </Card>
            
            <Card className="p-6 border-0 shadow-sm bg-gradient-to-br from-yellow-50 to-yellow-100/50">
              <div className="text-sm font-medium text-yellow-900 mb-1">Recommended</div>
              <div className="text-3xl font-bold text-yellow-600">
                {requests.filter(r => r.status === "RECOMMENDED").length}
              </div>
            </Card>
            
            <Card className="p-6 border-0 shadow-sm bg-gradient-to-br from-green-50 to-green-100/50">
              <div className="text-sm font-medium text-green-900 mb-1">In Progress</div>
              <div className="text-3xl font-bold text-green-600">
                {requests.filter(r => r.status === "REQUESTED").length}
              </div>
            </Card>
          </div>
        )}
      </div>
    </AppLayout>
  );
}

