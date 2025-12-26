import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { 
  Zap, 
  BarChart3, 
  Globe2, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Clock, 
  Brain,
  ArrowRight 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Response",
    description: "Zero latency voice processing ensures natural, flowing conversations without awkward pauses. Your customers get immediate answers."
  },
  {
    icon: BarChart3,
    title: "Actionable Insights",
    description: "Every call is transcribed and analyzed. Get sentiment analysis, summary reports, and key metrics automatically delivered to your dashboard."
  },
  {
    icon: Globe2,
    title: "Multilingual Support",
    description: "Speak to your customers in over 30 languages. Auto-detects language and switches instantly for a seamless experience."
  },
  {
    icon: Calendar,
    title: "Calendar Integration",
    description: "Seamlessly integrates with Google Calendar, Outlook, and Calendly. Books appointments in real-time with automatic conflict detection."
  },
  {
    icon: MessageSquare,
    title: "SMS & Email Confirmations",
    description: "Automatic confirmation messages sent via SMS and email. Reduces no-shows with timely reminders before appointments."
  },
  {
    icon: FileText,
    title: "Analytics & Transcripts",
    description: "Full call transcripts with searchable history. Track performance metrics, call duration, conversion rates, and customer satisfaction."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Never miss a call again. Your AI agent works around the clock, handling calls during business hours, after hours, and on holidays."
  },
  {
    icon: Brain,
    title: "Custom Training",
    description: "Train your agent on your specific business knowledge, FAQs, and call scripts. Adapts to your unique workflows and terminology."
  }
];

export default function Features() {
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
              Powerful Features
            </span>
            <h1 className="text-5xl sm:text-6xl font-display font-bold leading-[1.1] mb-8">
              Everything You Need to
              <span className="text-gradient"> Automate Calls</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Our AI voice agents come packed with features designed to handle every aspect of customer communication, from initial greeting to appointment confirmation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It All Works Together */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Seamless Integration</h2>
            <p className="text-xl text-muted-foreground">
              All features work together harmoniously to create a complete customer communication solution.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-6 bg-white rounded-xl border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Customer Calls</h4>
                  <p className="text-sm text-muted-foreground">Your AI agent answers instantly with natural voice, detects language, and begins the conversation.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Intelligent Processing</h4>
                  <p className="text-sm text-muted-foreground">The agent understands intent, answers questions from your knowledge base, and qualifies the lead.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Action & Confirmation</h4>
                  <p className="text-sm text-muted-foreground">Books appointment in your calendar, sends SMS/email confirmations, and logs everything in your dashboard.</p>
                </div>
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
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Get started with VoiceEase today and transform how you handle customer calls.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/demo">
              <Button size="lg" className="h-16 px-10 text-lg bg-primary hover:bg-primary/90 text-white rounded-full">
                Build Your Agent
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-gray-700 hover:bg-gray-800 text-white hover:text-white">
                Request Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

