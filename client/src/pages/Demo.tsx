import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertDemoLeadSchema, type InsertDemoLead } from "@shared/routes";
import { useCreateDemoLead } from "@/hooks/use-leads";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle } from "lucide-react";

export default function DemoPage() {
  const { mutate, isPending, isSuccess } = useCreateDemoLead();
  const { toast } = useToast();
  
  const form = useForm<InsertDemoLead>({
    resolver: zodResolver(insertDemoLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      businessName: "",
      phone: "",
      message: ""
    }
  });

  function onSubmit(data: InsertDemoLead) {
    mutate(data, {
      onSuccess: () => {
        toast({
          title: "Request Received!",
          description: "We'll be in touch shortly to schedule your personalized demo.",
        });
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: "Please try again later.",
        });
      }
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navigation />
      <div className="flex-1 flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <h1 className="text-5xl font-display font-bold text-gray-900">Experience the Future of Voice</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              See firsthand how our AI agents handle complex conversations, book appointments, and integrate with your CRM.
            </p>
            <div className="space-y-4">
              {[
                "Customized demo for your industry",
                "Technical implementation review",
                "ROI calculation and pricing",
                "Free 14-day trial access"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8 shadow-xl border-0 rounded-2xl bg-white">
            {isSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Request Sent!</h3>
                <p className="text-muted-foreground">Thank you for your interest. One of our voice AI experts will reach out to you within 24 hours.</p>
                <Button className="mt-8" onClick={() => window.location.reload()}>Submit Another</Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">Get a Demo</h3>
                    <p className="text-sm text-muted-foreground">Fill out the form below and we'll get back to you.</p>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl><Input placeholder="John Doe" className="bg-gray-50" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Work Email</FormLabel>
                        <FormControl><Input placeholder="john@company.com" className="bg-gray-50" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl><Input placeholder="Acme Inc" className="bg-gray-50" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl><Input placeholder="+1 (555) 000-0000" className="bg-gray-50" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How can we help? (Optional)</FormLabel>
                        <FormControl><Textarea placeholder="Tell us about your use case..." className="bg-gray-50 min-h-[100px]" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full text-lg h-12" disabled={isPending}>
                    {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    {isPending ? "Submitting..." : "Request Demo"}
                  </Button>
                </form>
              </Form>
            )}
          </Card>

        </div>
      </div>
      <Footer />
    </div>
  );
}
