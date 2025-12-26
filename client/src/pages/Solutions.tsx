import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { 
  Scissors, 
  UtensilsCrossed, 
  Stethoscope, 
  Scale, 
  Hotel, 
  Home,
  Users,
  Dumbbell,
  Wrench,
  ArrowRight
} from "lucide-react";

const industries = [
  {
    icon: Scissors,
    name: "Salons & Spas",
    painPoint: "Missed calls during busy hours mean lost bookings and revenue",
    solution: "24/7 appointment booking and rescheduling",
    tasks: [
      "Book haircut, coloring, and spa appointments",
      "Handle cancellations and reschedules",
      "Answer pricing and service questions"
    ]
  },
  {
    icon: UtensilsCrossed,
    name: "Cafes & Restaurants",
    painPoint: "Staff juggling calls during peak service times",
    solution: "Automated reservation and takeout order handling",
    tasks: [
      "Take table reservations",
      "Answer menu and hours questions",
      "Handle takeout orders and special requests"
    ]
  },
  {
    icon: Stethoscope,
    name: "Dentists",
    painPoint: "Front desk overwhelmed with appointment calls",
    solution: "HIPAA-compliant scheduling and reminders",
    tasks: [
      "Schedule cleanings, checkups, and procedures",
      "Send appointment reminders to reduce no-shows",
      "Answer insurance and billing questions"
    ]
  },
  {
    icon: Stethoscope,
    name: "Doctors & Clinics",
    painPoint: "Long hold times frustrate patients",
    solution: "Intelligent patient triage and scheduling",
    tasks: [
      "Book appointments by specialty",
      "Screen symptoms for urgency",
      "Route emergencies appropriately"
    ]
  },
  {
    icon: Scale,
    name: "Lawyers",
    painPoint: "Missing potential client calls costs cases",
    solution: "Professional intake and consultation booking",
    tasks: [
      "Qualify leads by practice area",
      "Schedule consultations",
      "Collect case information securely"
    ]
  },
  {
    icon: Hotel,
    name: "Resorts & Hotels",
    painPoint: "24/7 guest inquiries across time zones",
    solution: "Multilingual concierge service",
    tasks: [
      "Handle booking and availability inquiries",
      "Answer amenities and location questions",
      "Process special requests"
    ]
  },
  {
    icon: Home,
    name: "Realtors",
    painPoint: "Juggling showings while missing new leads",
    solution: "Lead capture and showing scheduler",
    tasks: [
      "Schedule property showings",
      "Qualify buyers and sellers",
      "Answer listing questions"
    ]
  },
  {
    icon: Users,
    name: "Creators & Coaches",
    painPoint: "Too much time on admin, not enough on clients",
    solution: "Automated discovery call booking",
    tasks: [
      "Screen and qualify prospects",
      "Book coaching sessions",
      "Answer program questions"
    ]
  },
  {
    icon: Dumbbell,
    name: "Gyms",
    painPoint: "Front desk can't keep up with membership inquiries",
    solution: "Member services and tour scheduling",
    tasks: [
      "Book gym tours and trial classes",
      "Answer membership and pricing questions",
      "Handle class reservations"
    ]
  },
  {
    icon: Wrench,
    name: "Local Services",
    painPoint: "Calls come in when technicians are on-site",
    solution: "Job booking and customer support",
    tasks: [
      "Schedule service appointments",
      "Provide quotes and estimates",
      "Answer service area questions"
    ]
  }
];

export default function Solutions() {
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
              Industry Solutions
            </span>
            <h1 className="text-5xl sm:text-6xl font-display font-bold leading-[1.1] mb-8">
              Tailored for
              <span className="text-gradient"> Your Industry</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              VoiceEase adapts to your industry's unique needs with custom-trained agents that understand your business inside and out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-gray-100 hover:border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <industry.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">{industry.name}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-red-600 mb-1">Problem:</p>
                      <p className="text-sm text-muted-foreground">{industry.painPoint}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-1">Solution:</p>
                      <p className="text-sm text-muted-foreground">{industry.solution}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold mb-2">What Your Agent Can Do:</p>
                      <ul className="space-y-1">
                        {industry.tasks.map((task, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-12 text-center">
              Why VoiceEase Works Across Industries
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-xl border shadow-sm">
                <h4 className="font-bold mb-3 text-lg">Industry-Specific Training</h4>
                <p className="text-muted-foreground">
                  Each agent is trained on your industry's terminology, common questions, and best practices to sound like an expert.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-xl border shadow-sm">
                <h4 className="font-bold mb-3 text-lg">Custom Workflows</h4>
                <p className="text-muted-foreground">
                  We adapt to your booking process, qualification criteria, and routing rules—not the other way around.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-xl border shadow-sm">
                <h4 className="font-bold mb-3 text-lg">Compliance Ready</h4>
                <p className="text-muted-foreground">
                  HIPAA-compliant for healthcare, secure data handling for legal, and industry-standard security across the board.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-xl border shadow-sm">
                <h4 className="font-bold mb-3 text-lg">Seamless Integration</h4>
                <p className="text-muted-foreground">
                  Works with your existing tools: Google Calendar, CRMs, booking systems, and communication platforms.
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
            Find Your Industry Solution
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Don't see your industry? VoiceEase adapts to any business with custom training.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/demo">
              <Button size="lg" className="h-16 px-10 text-lg bg-primary hover:bg-primary/90 text-white rounded-full">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-gray-700 hover:bg-gray-800 text-white hover:text-white">
                Talk to Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

