import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LiveDemo } from "@/components/LiveDemo";
import { ArrowRight, CheckCircle2, Zap, BarChart3, Globe2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
                  New: Multilingual Voice Support 🌍
                </span>
                <h1 className="text-5xl sm:text-7xl font-display font-bold leading-[1.1] mb-8">
                  Never Miss a <br/>
                  <span className="text-gradient">Customer Call</span> Again.
                </h1>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
                  Deploy AI voice agents that sound human, book appointments, and handle support 24/7. No coding required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/demo">
                    <Button size="lg" className="h-14 px-8 text-lg rounded-xl bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all">
                      Build My Agent
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/solutions">
                    <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-xl border-2 hover:bg-secondary/50">
                      View Solutions
                    </Button>
                  </Link>
                </div>
                
                <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span>Setup in minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span>24/7 Availability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span>Human-like voice</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="hidden lg:block relative"
            >
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform rotate-12 scale-75"></div>
              <LiveDemo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 border-y bg-gray-50/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Text logos for simplicity */}
             <span className="text-2xl font-bold font-display">Acme Corp</span>
             <span className="text-2xl font-bold font-display">GlobalTech</span>
             <span className="text-2xl font-bold font-display">HealthPlus</span>
             <span className="text-2xl font-bold font-display">LawFirm.ai</span>
             <span className="text-2xl font-bold font-display">RetailFlow</span>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-display font-bold mb-6">Capabilities that Scale</h2>
            <p className="text-xl text-muted-foreground">Our agents don't just talk. They act. Integrated with your favorite tools to get real work done.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Instant Response",
                desc: "Zero latency voice processing ensures natural, flowing conversations without awkward pauses."
              },
              {
                icon: BarChart3,
                title: "Actionable Insights",
                desc: "Every call is transcribed and analyzed. Get sentiment analysis and summary reports automatically."
              },
              {
                icon: Globe2,
                title: "Multilingual",
                desc: "Speak to your customers in over 30 languages. Auto-detects language and switches instantly."
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-gray-900 to-gray-900"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to automate your phone lines?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of businesses saving hours every day. Start your free demo call now.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="/demo">
               <Button size="lg" className="h-16 px-10 text-lg bg-primary hover:bg-primary/90 text-white rounded-full">
                 Get Started Free
               </Button>
             </Link>
             <Link href="/contact">
               <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-gray-700 hover:bg-gray-800 text-white hover:text-white">
                 Contact Sales
               </Button>
             </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
