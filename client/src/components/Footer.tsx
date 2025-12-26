import { Link } from "wouter";
import { Mic } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Mic className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold font-display tracking-tight">VoiceEase</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Never Miss a Call. Never Miss a Lead. 24/7 AI voice receptionist for your business.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/features" className="hover:text-primary">Features</Link></li>
              <li><Link href="/solutions" className="hover:text-primary">Solutions</Link></li>
              <li><Link href="/pricing" className="hover:text-primary">Pricing</Link></li>
              <li><Link href="/how-it-works" className="hover:text-primary">How It Works</Link></li>
              <li><Link href="/use-cases" className="hover:text-primary">Use Cases</Link></li>
              <li><Link href="/demo" className="hover:text-primary">Request Demo</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} VoiceEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
