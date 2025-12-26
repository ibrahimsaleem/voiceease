import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Target, Heart, Users, Zap, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We believe every business deserves enterprise-level communication tools, regardless of size or budget."
  },
  {
    icon: Heart,
    title: "Customer-Obsessed",
    description: "Your success is our success. We're committed to building agents that truly serve your customers."
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We're not just a vendor—we're your partner in transforming customer communication."
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We constantly push the boundaries of what's possible with AI voice technology."
  }
];

const stats = [
  { value: "10,000+", label: "Calls Handled Daily" },
  { value: "500+", label: "Businesses Served" },
  { value: "95%", label: "Customer Satisfaction" },
  { value: "24/7", label: "Always Available" }
];

export default function About() {
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
              About VoiceEase
            </span>
            <h1 className="text-5xl sm:text-6xl font-display font-bold leading-[1.1] mb-8">
              Transforming Business
              <span className="text-gradient"> Communication</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              We're on a mission to ensure no business ever misses another customer call. VoiceEase makes enterprise-grade AI voice technology accessible to businesses of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-8 text-center">Our Story</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                VoiceEase was born from a simple observation: <strong className="text-foreground">every missed call is a missed opportunity.</strong> Small businesses lose thousands of dollars in revenue each year simply because they can't answer every call.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6">
                Traditional call centers are expensive, difficult to manage, and often provide inconsistent service. Meanwhile, AI technology capable of solving this problem was locked behind enterprise budgets and complex implementations.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6">
                We founded VoiceEase to change that. Our goal was clear: <strong className="text-foreground">make world-class AI voice agents accessible to every business,</strong> from the solo practitioner to the growing enterprise.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Today, VoiceEase powers customer communication for businesses across dozens of industries. Our agents handle everything from appointment booking to lead qualification, ensuring our clients never miss another opportunity to serve their customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-12 text-center">Our Values</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 h-full border-2 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                      <value.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why VoiceEase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-12 text-center">Why Choose VoiceEase</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg">Simple, Transparent Pricing</h4>
                  <p className="text-muted-foreground">
                    No hidden fees, no monthly subscriptions. Pay once, own forever. We believe in straightforward pricing that makes sense for your business.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg">Industry Expertise</h4>
                  <p className="text-muted-foreground">
                    We've built agents for dozens of industries. Our team understands the unique challenges of healthcare, legal, hospitality, and more.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg">Fast Implementation</h4>
                  <p className="text-muted-foreground">
                    Most agents go live within a week. Our streamlined process means you start seeing value almost immediately.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg">Ongoing Support</h4>
                  <p className="text-muted-foreground">
                    We're here when you need us. Minor tweaks are included, and our support team is always ready to help.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-12 text-center">Meet the Founder</h2>
            
            <Card className="p-8 md:p-12 border-2 border-primary/10">
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-1 text-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-primary/60 mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                    MS
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Mohammad Ibrahim Saleem</h3>
                  <p className="text-primary font-semibold mb-4">Founder & AI Agent Expert</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>Houston, Texas, USA</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <a href="tel:+17138537974" className="hover:text-primary">+1 (713) 853-7974</a>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <a href="mailto:Ibrahimsaleem244@gmail.com" className="hover:text-primary">Ibrahimsaleem244@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex justify-center gap-3 mt-6">
                    <a 
                      href="https://linkedin.com/in/ibrahimsaleem91" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-all"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href="https://github.com/ibrahimsaleem" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-all"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <h4 className="text-xl font-bold mb-4">About</h4>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Mohammad Ibrahim Saleem is an AI Agent Development Expert and Voice AI Specialist with extensive experience in building secure, production-grade AI systems. Based in Houston, Texas, he founded VoiceEase to make enterprise-level AI voice technology accessible to businesses of all sizes.
                    </p>
                    <p>
                      With a Master's degree in Cybersecurity from the University of Houston (4.0 GPA) and hands-on experience at companies like NOV Inc, Mohammad specializes in architecting autonomous multi-agent GenAI systems, AI security, and OWASP Top 10 for LLMs implementation.
                    </p>
                    <p>
                      His expertise spans AI threat modeling, secure agentic coding, and deploying AI solutions that handle 50+ daily interactions with 95%+ accuracy. Mohammad has published research in IEEE conferences and developed innovative AI automation systems that achieve 360x speed improvements while maintaining zero security incidents.
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h5 className="font-semibold mb-3">Areas of Expertise</h5>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "AI Agent Development",
                        "Voice AI Systems",
                        "GenAI Automation",
                        "AI Security",
                        "OWASP Top 10 for LLMs",
                        "Agentic AI Architecture",
                        "LangChain & RAG",
                        "Azure OpenAI",
                        "AI Threat Modeling"
                      ].map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/5 text-primary rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h5 className="font-semibold mb-3">Publications & Research</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>IEEE FMLDS 2025: "LIMA: Leveraging Large Language Models and MCP Servers for Initial Machine Access" (First Author)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>SPE 2025: "Self-Improving GenAI Agent for Fully Automated Report Parsing" (Second Author)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Active Research: Agentic Lean Embedding System for Vulnerability Discovery</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 via-gray-900 to-gray-900"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Join Hundreds of Businesses
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Start automating your customer calls today with VoiceEase.
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
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

