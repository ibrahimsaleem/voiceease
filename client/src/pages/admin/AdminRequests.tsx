import { AdminLayout } from "@/components/AdminLayout";
import { useAllAgentRequests } from "@/hooks/use-admin";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, Building2, Calendar } from "lucide-react";
import { useState } from "react";

export default function AdminRequests() {
  const { data: requests, isLoading } = useAllAgentRequests();
  const [selectedRequest, setSelectedRequest] = useState<any>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "NEW":
        return "bg-blue-100 text-blue-800";
      case "RECOMMENDED":
        return "bg-yellow-100 text-yellow-800";
      case "REQUESTED":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Agent Requests</h1>
          <p className="text-muted-foreground">View and manage all agent requests from users</p>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Business</TableHead>
                      <TableHead>Industry</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {requests?.map((request: any) => (
                      <TableRow
                        key={request.id}
                        className="cursor-pointer hover:bg-gray-50"
                        onClick={() => setSelectedRequest(request)}
                      >
                        <TableCell className="font-medium">#{request.id}</TableCell>
                        <TableCell className="font-medium">{request.businessName}</TableCell>
                        <TableCell>{request.industry}</TableCell>
                        <TableCell>
                          {request.recommendationPlan && (
                            <Badge variant="outline">{request.recommendationPlan}</Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(request.status)}>
                            {request.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{formatDate(request.createdAt)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                {requests?.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    No agent requests found
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              {selectedRequest ? (
                <Card className="border-0 shadow-lg sticky top-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5" />
                      {selectedRequest.businessName}
                    </CardTitle>
                    <CardDescription>Request #{selectedRequest.id}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Industry</h4>
                      <p className="text-sm">{selectedRequest.industry}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Business Phone</h4>
                      <p className="text-sm">{selectedRequest.businessPhone}</p>
                    </div>

                    {selectedRequest.businessHours && (
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Business Hours</h4>
                        <p className="text-sm">{selectedRequest.businessHours}</p>
                      </div>
                    )}

                    {selectedRequest.servicesOffered && (
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Services Offered</h4>
                        <p className="text-sm">{selectedRequest.servicesOffered}</p>
                      </div>
                    )}

                    {selectedRequest.calendarUsed && (
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">
                          <Calendar className="h-4 w-4 inline mr-1" />
                          Calendar System
                        </h4>
                        <p className="text-sm">{selectedRequest.calendarUsed}</p>
                      </div>
                    )}

                    {selectedRequest.primaryGoal && (
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Primary Goal</h4>
                        <p className="text-sm">{selectedRequest.primaryGoal}</p>
                      </div>
                    )}

                    <div className="pt-4 border-t">
                      <h4 className="text-sm font-medium mb-2">Recommendation</h4>
                      {selectedRequest.recommendationPlan && (
                        <Badge className="mb-2">{selectedRequest.recommendationPlan} Plan</Badge>
                      )}
                      {selectedRequest.recommendationData && (
                        <div className="text-sm text-muted-foreground">
                          <p>{selectedRequest.recommendationData.expectedImpact}</p>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Status</span>
                        <Badge className={getStatusColor(selectedRequest.status)}>
                          {selectedRequest.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="text-center text-muted-foreground py-12">
                      Select a request to view details
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

