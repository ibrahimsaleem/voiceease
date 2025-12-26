import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, User, Bot, Mic } from "lucide-react";

const script = [
  { role: "agent", text: "Hi there! This is Alex from VoiceEase. How can I help you today?" },
  { role: "user", text: "I'm looking to automate my dental clinic's appointment booking." },
  { role: "agent", text: "That's a perfect use case. I can integrate with your calendar, handle rescheduling, and even send reminders. Would you like to see a demo?" },
  { role: "user", text: "Yes, definitely. Does it work with Google Calendar?" },
  { role: "agent", text: "Absolutely! I sync in real-time. Let me set up a tailored demo for your clinic right now." }
];

export function LiveDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % (script.length + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mx-auto max-w-[350px] bg-white rounded-[2.5rem] shadow-2xl border-8 border-gray-900 overflow-hidden aspect-[9/19]">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl z-20"></div>
      
      {/* Screen Content */}
      <div className="h-full w-full bg-gray-50 flex flex-col relative">
        {/* Status Bar */}
        <div className="h-12 w-full bg-white flex items-center justify-between px-6 pt-2 text-xs font-medium text-gray-500 border-b">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-4 h-2.5 bg-black rounded-sm"></div>
            <div className="w-3 h-2.5 bg-black rounded-sm opacity-50"></div>
          </div>
        </div>

        {/* Call Interface */}
        <div className="flex-1 flex flex-col items-center pt-8 bg-gradient-to-b from-primary/5 to-white">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative">
             <Bot className="h-10 w-10 text-primary" />
             <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping opacity-20"></div>
          </div>
          <h3 className="font-semibold text-lg">Alex (AI Agent)</h3>
          <p className="text-sm text-muted-foreground mb-8">04:23</p>

          <div className="w-full px-4 space-y-4 flex-1 overflow-hidden">
            <AnimatePresence mode="popLayout">
              {script.slice(0, step === script.length ? script.length : step).map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  layout
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === 'agent' ? 'bg-primary/10 text-primary' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {msg.role === 'agent' ? <Bot size={14} /> : <User size={14} />}
                  </div>
                  <div className={`p-3 rounded-2xl text-xs max-w-[80%] ${
                    msg.role === 'agent' 
                      ? 'bg-white shadow-sm border border-gray-100 rounded-tl-none' 
                      : 'bg-primary text-white rounded-tr-none'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {step < script.length && (
               <motion.div 
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }}
                 className="flex gap-2 items-center justify-center pt-2"
               >
                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                 <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
               </motion.div>
            )}
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="h-24 bg-white border-t flex items-center justify-center gap-6 pb-6">
           <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
             <Mic size={20} />
           </button>
           <button className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg shadow-red-500/30">
             <Phone size={28} className="rotate-[135deg]" />
           </button>
           <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
             <div className="grid grid-cols-3 gap-0.5 w-4">
               {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-gray-500 rounded-full"></div>)}
             </div>
           </button>
        </div>
      </div>
    </div>
  );
}
