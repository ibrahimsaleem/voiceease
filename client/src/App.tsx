import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

// Public Pages
import Home from "@/pages/Home";
import AuthPage from "@/pages/Auth";
import DemoPage from "@/pages/Demo";

// Dashboard Pages
import DashboardHome from "@/pages/dashboard/DashboardHome";
import RequestAgent from "@/pages/dashboard/RequestAgent";
import Recommendation from "@/pages/dashboard/Recommendation";

// Placeholder pages for Nav links to prevent 404s during demo
function Placeholder({ title }: { title: string }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-muted-foreground">This page is under construction for the demo.</p>
      <a href="/" className="mt-8 text-primary hover:underline">Go Home</a>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      {/* Public Routes */}
      <Route path="/" component={Home} />
      <Route path="/login" component={AuthPage} />
      <Route path="/demo" component={DemoPage} />
      
      {/* Marketing Placeholders */}
      <Route path="/features" component={() => <Placeholder title="Features" />} />
      <Route path="/solutions" component={() => <Placeholder title="Solutions" />} />
      <Route path="/pricing" component={() => <Placeholder title="Pricing" />} />
      <Route path="/about" component={() => <Placeholder title="About Us" />} />
      <Route path="/contact" component={() => <Placeholder title="Contact" />} />

      {/* Authenticated Dashboard Routes */}
      <Route path="/app" component={DashboardHome} />
      <Route path="/app/requests" component={DashboardHome} /> {/* Reusing home for list view for now */}
      <Route path="/app/request-agent" component={RequestAgent} />
      <Route path="/app/recommendation" component={Recommendation} />
      <Route path="/app/settings" component={() => <Placeholder title="Settings" />} />

      {/* Fallback */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
