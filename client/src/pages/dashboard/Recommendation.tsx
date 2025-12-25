import { AppLayout } from "@/components/AppLayout";
import { useLocation } from "wouter";
import { useAgentRequest, useUpdateAgentRequest } from "@/hooks/use-agent-requests";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2, Check, Sparkles, Phone, MessageSquare } from "lucide-react";
import { type RecommendationData } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";

export default function Recommendation() {
  const [location, setLocation] = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const id = Number(searchParams.get("id"));
  
  const { data: request, isLoading } = useAgentRequest(id);
  const { mutate, isPending } = useUpdateAgentRequest();
  const { toast } = useToast();

  if (isLoading) return <AppLayout><div className="flex justify-center p-20"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div></AppLayout>;
  if (!request) return <AppLayout><div>Request not found</div></AppLayout>;

  // Use typed recommendation data (parsed from JSONB)
  const recData = request.recommendationData as unknown as RecommendationData;

  const handleConfirm = () => {
    mutate({ 
      id: request.id, 
      planSelected: request.recommendationPlan || "Standard", 
      status: "REQUESTED" 
    }, {
      onSuccess: () => {
        toast({ title: "Success!", description: "Agent development has been requested." });
        setLocation("/app");
      }
    });
  };

  return (
    <AppLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-display font-bold">AI Recommendation</h1>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            Generated for {request.businessName}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Plan Card */}
          <div className="space-y-6">
            <Card className="p-8 border-2 border-primary/10 shadow-lg bg-white relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4">
                 <Sparkles className="h-6 w-6 text-yellow-400" />
               </div>
               <h2 className="text-2xl font-bold mb-2">Recommended Plan: {request.recommendationPlan}</h2>
               <p className="text-muted-foreground mb-6">Based on your goal: "{request.primaryGoal}"</p>
               
               <div className="space-y-4 mb-8">
                 <div className="flex items-start gap-3">
                   <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                   <span>Custom trained on your {request.industry} knowledge base</span>
                 </div>
                 <div className="flex items-start gap-3">
                   <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                   <span>Integrates with {request.calendarUsed || "your calendar"}</span>
                 </div>
                 <div className="flex items-start gap-3">
                   <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                   <span>Handles "{request.appointmentTypes}" appointments</span>
                 </div>
                 <div className="flex items-start gap-3">
                   <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                   <span>{request.preferredLanguage} language support</span>
                 </div>
               </div>

               <div className="p-4 bg-green-50 rounded-lg text-green-800 text-sm font-medium mb-8">
                  Expected Impact: {recData?.expectedImpact || "Reduce missed calls by 90%"}
               </div>

               <Button size="lg" className="w-full text-lg" onClick={handleConfirm} disabled={isPending || request.status === "REQUESTED"}>
                 {isPending ? <Loader2 className="animate-spin mr-2" /> : null}
                 {request.status === "REQUESTED" ? "Already Requested" : "Request Development"}
               </Button>
            </Card>
          </div>

          {/* Script Preview */}
          <div className="space-y-6">
            <Card className="p-6 bg-gray-50 border-0 h-full">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" /> Sample Conversation
              </h3>
              <div className="bg-white rounded-xl p-4 shadow-sm border space-y-4 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                {recData?.sampleScript || `Agent: Thank you for calling ${request.businessName}. This is your AI assistant. How can I help you today?

User: I'd like to book an appointment for ${request.servicesOffered?.split(',')[0] || 'service'}.

Agent: I can help with that. What day works best for you?`}
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Call Flows
                </h3>
                <div className="flex flex-wrap gap-2">
                  {recData?.callFlows?.map((flow, i) => (
                    <span key={i} className="px-3 py-1 bg-white border rounded-full text-xs font-medium text-gray-600">
                      {flow}
                    </span>
                  )) || <span className="text-muted-foreground text-sm">Standard appointment flow</span>}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
