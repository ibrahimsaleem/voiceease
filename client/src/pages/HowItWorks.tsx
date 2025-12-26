import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FileText, Sparkles, Wrench, Rocket, ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: FileText,
    title: "Request Your Agent",
    description: "Fill out our simple intake form with details about your business, services, and goals.",
    details: [
      "Takes just 5 minutes",
      "Tell us about your industry and services",
      "Specify your calendar system",
      "Share common customer questions"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    number: 2,
    icon: Sparkles,
    title: "Get AI Recommendation",
    description: "Our system analyzes your needs and recommends the perfect plan—Starter or Custom.",
    details: [
      "Instant AI analysis",
      "See sample call scripts",
      "Review recommended features",
      "Transparent pricing"
    ],
    color: "from-purple-500 to-purple-600"
  },
  {
    number: 3,
    icon: Wrench,
    title: "We Build Your Agent",
    description: "Our team trains your AI agent on your business knowledge and integrates with your tools.",
    details: [
      "Custom voice training",
      "Industry-specific knowledge",
      "Calendar integration setup",
      "Testing and refinement"
    ],
    color: "from-pink-500 to-pink-600"
  },
  {
    number: 4,
    icon: Rocket,
    title: "Go Live",
    description: "Your agent goes live and starts handling calls 24/7. Monitor performance in your dashboard.",
    details: [
      "24/7 automated answering",
      "Real-time transcripts",
      "Analytics dashboard",
      "Ongoing support"
    ],
    color: "from-green-500 to-green-600"
  }
];

export default function HowItWorks() {
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
              Simple Process
            </span>
            <h1 className="text-5xl sm:text-6xl font-display font-bold leading-[1.1] mb-8">
              From Idea to
              <span className="text-gradient"> Live Agent</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Getting started with VoiceEase is straightforward. We handle the complexity so you can focus on your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-24">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content */}
                  <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                        <step.icon className="h-8 w-8" />
                      </div>
                      <div className="text-5xl font-bold text-gray-100">
                        {step.number.toString().padStart(2, '0')}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                    
                    <div className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                    <div className={`relative h-80 rounded-2xl bg-gradient-to-br ${step.color} p-8 shadow-2xl overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="relative z-10 h-full flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <step.icon className="h-12 w-12" />
                          </div>
                          <div className="text-2xl font-bold">Step {step.number}</div>
                        </div>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
                      <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full"></div>
                    </div>
                  </div>

                </div>

                {/* Connection Line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-12 w-0.5 h-12 bg-gradient-to-b from-gray-300 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-12">Typical Timeline</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl border shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">Day 1</div>
                <div className="text-sm font-semibold mb-2">Request & Recommendation</div>
                <p className="text-xs text-muted-foreground">Submit your intake form and receive instant AI recommendation</p>
              </div>
              
              <div className="p-6 bg-white rounded-xl border shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">Days 2-7</div>
                <div className="text-sm font-semibold mb-2">Building & Training</div>
                <p className="text-xs text-muted-foreground">We build and train your agent on your business knowledge</p>
              </div>
              
              <div className="p-6 bg-white rounded-xl border shadow-sm">
                <div className="text-3xl font-bold text-primary mb-2">Day 7+</div>
                <div className="text-sm font-semibold mb-2">Go Live!</div>
                <p className="text-xs text-muted-foreground">Your agent starts handling calls 24/7 automatically</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Custom agents</strong> may take 10-14 days for complex integrations and advanced training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens After Launch */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-12 text-center">
              What Happens After Launch?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl border bg-gray-50">
                <h4 className="font-bold mb-3 text-lg">Continuous Monitoring</h4>
                <p className="text-muted-foreground text-sm">
                  We monitor your agent's performance and make adjustments to improve accuracy and customer satisfaction.
                </p>
              </div>
              
              <div className="p-6 rounded-xl border bg-gray-50">
                <h4 className="font-bold mb-3 text-lg">Analytics Dashboard</h4>
                <p className="text-muted-foreground text-sm">
                  Access real-time metrics, call transcripts, and insights through your personal dashboard.
                </p>
              </div>
              
              <div className="p-6 rounded-xl border bg-gray-50">
                <h4 className="font-bold mb-3 text-lg">Ongoing Support</h4>
                <p className="text-muted-foreground text-sm">
                  Need tweaks or updates? Our team is here to help with minor adjustments and technical support.
                </p>
              </div>
              
              <div className="p-6 rounded-xl border bg-gray-50">
                <h4 className="font-bold mb-3 text-lg">Scale as You Grow</h4>
                <p className="text-muted-foreground text-sm">
                  Easily add new features, services, or integrations as your business evolves.
                </p>
              </div>
            </div>
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
            Begin your journey to never missing another customer call.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/demo">
              <Button size="lg" className="h-16 px-10 text-lg bg-primary hover:bg-primary/90 text-white rounded-full">
                Start Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-gray-700 hover:bg-gray-800 text-white hover:text-white">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

