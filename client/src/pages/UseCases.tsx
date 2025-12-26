import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, UserCheck, Moon, HelpCircle, PhoneForwarded, Headphones, ArrowRight } from "lucide-react";

const useCases = [
  {
    icon: Calendar,
    title: "Appointment Booking",
    description: "Automatically schedule, reschedule, and confirm appointments without human intervention.",
    scenario: "A dental office receives 50+ calls per day for appointments. VoiceEase handles all scheduling, checks calendar availability, sends confirmations, and reduces no-shows by 60%.",
    conversation: `Customer: "I'd like to book a cleaning."
Agent: "I can help with that. Do you prefer mornings or afternoons?"
Customer: "Mornings work better."
Agent: "I have Tuesday at 9 AM or Thursday at 10 AM available. Which works for you?"
Customer: "Thursday at 10."
Agent: "Perfect! You're booked for Thursday, June 15th at 10 AM. I've sent a confirmation to your phone."`,
    industries: ["Healthcare", "Salons", "Fitness", "Professional Services"]
  },
  {
    icon: UserCheck,
    title: "Lead Qualification",
    description: "Screen and qualify potential customers before routing to your sales team.",
    scenario: "A law firm receives inquiries but only 30% are good fits. VoiceEase asks qualifying questions, captures case details, and only forwards qualified leads to attorneys.",
    conversation: `Customer: "I need help with a personal injury case."
Agent: "I can connect you with the right attorney. Can you briefly describe what happened?"
Customer: "I was in a car accident last month."
Agent: "I understand. Were there any injuries?"
Customer: "Yes, I hurt my back."
Agent: "Thank you. Let me schedule a consultation with our personal injury specialist. What days work for you?"`,
    industries: ["Legal", "Real Estate", "B2B Services", "Consulting"]
  },
  {
    icon: Moon,
    title: "After-Hours Coverage",
    description: "Never miss a call, even outside business hours. Capture leads while you sleep.",
    scenario: "A restaurant gets 20+ calls after closing asking about hours and reservations. VoiceEase answers questions and books reservations for the next day automatically.",
    conversation: `Customer: "Are you open?"
Agent: "We're currently closed but open tomorrow at 11 AM. Would you like to make a reservation?"
Customer: "Yes, for tomorrow night, party of 4."
Agent: "Great! What time works best—5 PM, 6 PM, or 7 PM?"
Customer: "6 PM please."
Agent: "Perfect. You're booked for tomorrow at 6 PM for 4 people. See you then!"`,
    industries: ["Restaurants", "Retail", "Service Businesses", "Healthcare"]
  },
  {
    icon: HelpCircle,
    title: "FAQ Handling",
    description: "Answer common questions instantly without tying up your staff.",
    scenario: "A gym receives the same 10 questions repeatedly: hours, pricing, classes, parking. VoiceEase answers all FAQs instantly and offers to book a tour.",
    conversation: `Customer: "What are your membership prices?"
Agent: "We have three options: Basic at $29/month, Standard at $49/month with classes, and Premium at $79/month with personal training. Which interests you?"
Customer: "What's included in Standard?"
Agent: "Standard includes 24/7 gym access, all group classes, and locker access. Would you like to schedule a tour to see our facility?"`,
    industries: ["All Industries", "Service Businesses", "Retail", "Healthcare"]
  },
  {
    icon: PhoneForwarded,
    title: "Call Routing",
    description: "Intelligently route calls to the right department or person based on need.",
    scenario: "A medical clinic has multiple departments. VoiceEase asks screening questions and routes patients to the correct doctor or department instantly.",
    conversation: `Customer: "I need to see a doctor."
Agent: "I can help you with that. Is this for a new issue or a follow-up?"
Customer: "New issue—I have a rash."
Agent: "I'll connect you with our dermatology department. Please hold for just a moment."
[Routes to dermatology]`,
    industries: ["Healthcare", "Enterprise", "Multi-location Businesses"]
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Handle common support requests and troubleshooting before escalating.",
    scenario: "A SaaS company gets 100+ support calls daily. VoiceEase handles password resets, billing questions, and basic troubleshooting, only escalating complex issues.",
    conversation: `Customer: "I can't log into my account."
Agent: "I can help you with that. Would you like me to send a password reset link to your email?"
Customer: "Yes please."
Agent: "What's the email address for your account?"
Customer: "john@example.com"
Agent: "Perfect. I've sent a reset link to john@example.com. It should arrive within a minute. Is there anything else I can help with?"`,
    industries: ["SaaS", "E-commerce", "Service Businesses", "Healthcare"]
  }
];

export default function UseCases() {
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
              Real-World Use Cases
            </span>
            <h1 className="text-5xl sm:text-6xl font-display font-bold leading-[1.1] mb-8">
              See VoiceEase
              <span className="text-gradient"> In Action</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              From appointment booking to lead qualification, discover how businesses like yours use VoiceEase to automate customer calls.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {useCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto"
              >
                <Card className="p-8 md:p-12 border-2 hover:shadow-2xl transition-all duration-300">
                  <div className="grid md:grid-cols-5 gap-8">
                    
                    {/* Left Column - Info */}
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          <useCase.icon className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-bold">{useCase.title}</h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">{useCase.description}</p>
                      
                      <div className="p-4 bg-gray-50 rounded-lg mb-6">
                        <p className="text-sm font-semibold mb-2">Real Example:</p>
                        <p className="text-sm text-muted-foreground">{useCase.scenario}</p>
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-muted-foreground mb-2">COMMON INDUSTRIES:</p>
                        <div className="flex flex-wrap gap-2">
                          {useCase.industries.map((industry, idx) => (
                            <span key={idx} className="px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-medium">
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Conversation */}
                    <div className="md:col-span-3">
                      <div className="bg-gray-900 rounded-xl p-6 text-white font-mono text-sm">
                        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <span className="ml-2 text-xs text-gray-400">Sample Conversation</span>
                        </div>
                        <pre className="whitespace-pre-wrap text-xs md:text-sm leading-relaxed">
                          {useCase.conversation}
                        </pre>
                      </div>
                    </div>

                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Why These Use Cases Work</h2>
            <p className="text-xl text-muted-foreground">
              VoiceEase combines natural language understanding with business logic to handle complex scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm font-semibold mb-2">Call Accuracy</div>
              <p className="text-xs text-muted-foreground">Understand and respond correctly to customer needs</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm font-semibold mb-2">Always Available</div>
              <p className="text-xs text-muted-foreground">Never miss a call, day or night</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3 sec</div>
              <div className="text-sm font-semibold mb-2">Average Response</div>
              <p className="text-xs text-muted-foreground">Instant answers without hold times</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-gray-900 to-gray-900"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Ready to Try These Use Cases?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Tell us about your business and we'll recommend the best use cases for your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/demo">
              <Button size="lg" className="h-16 px-10 text-lg bg-primary hover:bg-primary/90 text-white rounded-full">
                Build Your Agent
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/solutions">
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-gray-700 hover:bg-gray-800 text-white hover:text-white">
                View Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

