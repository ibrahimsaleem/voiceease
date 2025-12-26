import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const starterFeatures = [
  "24/7 call answering",
  "FAQ handling",
  "Appointment booking",
  "Lead capture",
  "Calendar integration (Google, Outlook)",
  "SMS & email confirmations",
  "Basic analytics & transcripts",
  "Industry templates",
  "Multi-language support",
  "Standard voice quality"
];

const customFeatures = [
  ...starterFeatures,
  "Custom scripts & training",
  "Custom qualification logic",
  "Advanced routing rules",
  "Complex booking workflows",
  "CRM integration",
  "Custom API integrations",
  "Premium voice options",
  "Dedicated support",
  "Priority updates"
];

const faqs = [
  {
    question: "Is there a monthly fee?",
    answer: "No! Our pricing is a one-time setup fee. You only pay for the initial development and training of your AI agent. After that, you own it."
  },
  {
    question: "What's the difference between Starter and Custom?",
    answer: "Starter is perfect for straightforward appointment booking and FAQ handling. Custom is for businesses with complex workflows, specific qualification criteria, or advanced integrations."
  },
  {
    question: "How long does setup take?",
    answer: "Starter agents are typically ready in 3-5 business days. Custom agents take 7-14 days depending on complexity."
  },
  {
    question: "Can I upgrade from Starter to Custom later?",
    answer: "Yes! You can upgrade anytime. We'll credit your original $500 toward the Custom package, so you only pay the $500 difference."
  },
  {
    question: "Do you charge per call or per minute?",
    answer: "No usage fees! The one-time setup fee covers unlimited calls. You just need to cover your phone number costs (typically $5-15/month)."
  },
  {
    question: "What if I need changes after launch?",
    answer: "Minor tweaks are included. Major changes or new features can be added for a small additional fee. We'll always quote you first."
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              Simple, Transparent Pricing
            </span>
            <h1 className="text-5xl sm:text-6xl font-display font-bold leading-[1.1] mb-8">
              Pay Once.
              <span className="text-gradient"> Own Forever.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              No hidden fees. No monthly subscriptions. Just a one-time investment in your AI voice agent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full border-2 hover:shadow-xl transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Starter Agent</h3>
                  <p className="text-muted-foreground">Perfect for straightforward booking and support</p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">$500</span>
                    <span className="text-muted-foreground">one-time</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {starterFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/demo">
                  <Button className="w-full h-12 text-lg" variant="outline">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </Card>
            </motion.div>

            {/* Custom Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full border-2 border-primary/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-xs font-bold">
                  POPULAR
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Custom-Trained Agent</h3>
                  <p className="text-muted-foreground">For advanced workflows and integrations</p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">$1,000</span>
                    <span className="text-muted-foreground">one-time</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-sm font-semibold text-primary mb-4">Everything in Starter, plus:</p>
                  {customFeatures.filter(f => !starterFeatures.includes(f)).map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/demo">
                  <Button className="w-full h-12 text-lg bg-primary hover:bg-primary/90 shadow-lg">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Feature Comparison</h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Starter</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Custom</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-6 py-4 text-sm">24/7 Availability</td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm">Calendar Integration</td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm">SMS & Email Confirmations</td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm">Industry Templates</td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="bg-primary/5">
                    <td className="px-6 py-4 text-sm font-medium">Custom Scripts</td>
                    <td className="px-6 py-4 text-center text-muted-foreground text-xs">Basic</td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="bg-primary/5">
                    <td className="px-6 py-4 text-sm font-medium">CRM Integration</td>
                    <td className="px-6 py-4 text-center">–</td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="bg-primary/5">
                    <td className="px-6 py-4 text-sm font-medium">Advanced Routing</td>
                    <td className="px-6 py-4 text-center">–</td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr className="bg-primary/5">
                    <td className="px-6 py-4 text-sm font-medium">Dedicated Support</td>
                    <td className="px-6 py-4 text-center">–</td>
                    <td className="px-6 py-4 text-center"><Check className="h-5 w-5 text-primary mx-auto" /></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-bold">Setup Time</td>
                    <td className="px-6 py-4 text-center text-sm">3-5 days</td>
                    <td className="px-6 py-4 text-center text-sm">7-14 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Everything you need to know about pricing</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="font-semibold">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-gray-900 to-gray-900"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Fill out our intake form and get a personalized AI recommendation in minutes.
          </p>
          <Link href="/demo">
            <Button size="lg" className="h-16 px-10 text-lg bg-primary hover:bg-primary/90 text-white rounded-full">
              Build Your Agent Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

