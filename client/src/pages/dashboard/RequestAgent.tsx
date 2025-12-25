import { AppLayout } from "@/components/AppLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertAgentRequestSchema, type CreateAgentRequestInput } from "@shared/routes";
import { useCreateAgentRequest } from "@/hooks/use-agent-requests";
import { useLocation } from "wouter";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const INDUSTRIES = ["Healthcare", "Real Estate", "Retail", "Restaurant", "Legal", "Service Business", "Other"];
const CALENDARS = ["Google Calendar", "Outlook", "Calendly", "Other", "None"];

export default function RequestAgent() {
  const [, setLocation] = useLocation();
  const { mutate, isPending } = useCreateAgentRequest();
  const { toast } = useToast();

  const form = useForm<CreateAgentRequestInput>({
    resolver: zodResolver(insertAgentRequestSchema),
    defaultValues: {
      businessName: "",
      industry: "",
      businessPhone: "",
      businessHours: "",
      servicesOffered: "",
      appointmentTypes: "",
      calendarUsed: "",
      typicalQuestions: "",
      primaryGoal: "",
      preferredLanguage: "English"
    }
  });

  const onSubmit = (data: CreateAgentRequestInput) => {
    mutate(data, {
      onSuccess: (res) => {
        toast({ title: "Request Submitted!", description: "Generating your AI recommendation..." });
        setLocation(`/app/recommendation?id=${res.id}`);
      },
      onError: (err) => {
        toast({ variant: "destructive", title: "Error", description: err.message });
      }
    });
  };

  return (
    <AppLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
           <h1 className="text-3xl font-display font-bold text-gray-900">Build Your AI Agent</h1>
           <p className="text-muted-foreground">Tell us about your business so we can tailor the agent to your needs.</p>
        </div>

        <Card className="p-8 border-0 shadow-sm bg-white">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Name</FormLabel>
                      <FormControl><Input placeholder="Acme Clinic" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Industry</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {INDUSTRIES.map(i => <SelectItem key={i} value={i}>{i}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <FormField
                  control={form.control}
                  name="businessPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Phone</FormLabel>
                      <FormControl><Input placeholder="+1..." {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="calendarUsed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Calendar System</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select calendar" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {CALENDARS.map(i => <SelectItem key={i} value={i}>{i}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="primaryGoal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Goal</FormLabel>
                    <FormControl><Input placeholder="e.g. Increase bookings, filter spam, answer FAQs" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="servicesOffered"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Services Offered</FormLabel>
                    <FormControl><Textarea placeholder="List your main services..." className="min-h-[80px]" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="typicalQuestions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Typical Customer Questions</FormLabel>
                    <FormControl><Textarea placeholder="What do people ask most often?" className="min-h-[80px]" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-4 flex justify-end">
                <Button type="submit" size="lg" disabled={isPending}>
                  {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                  {isPending ? "Analyzing..." : "Generate Recommendation"}
                </Button>
              </div>

            </form>
          </Form>
        </Card>
      </div>
    </AppLayout>
  );
}
