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
import Features from "@/pages/Features";
import Solutions from "@/pages/Solutions";
import Pricing from "@/pages/Pricing";
import HowItWorks from "@/pages/HowItWorks";
import UseCases from "@/pages/UseCases";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

// Dashboard Pages
import DashboardHome from "@/pages/dashboard/DashboardHome";
import RequestAgent from "@/pages/dashboard/RequestAgent";
import Recommendation from "@/pages/dashboard/Recommendation";
import Requests from "@/pages/dashboard/Requests";
import Settings from "@/pages/dashboard/Settings";

// Admin Pages
import AdminDashboard from "@/pages/admin/AdminDashboard";
import UsersManagement from "@/pages/admin/UsersManagement";
import AdminRequests from "@/pages/admin/AdminRequests";
import LeadsManagement from "@/pages/admin/LeadsManagement";

function Router() {
  return (
    <Switch>
      {/* Public Routes */}
      <Route path="/" component={Home} />
      <Route path="/login" component={AuthPage} />
      <Route path="/demo" component={DemoPage} />
      <Route path="/features" component={Features} />
      <Route path="/solutions" component={Solutions} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/use-cases" component={UseCases} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />

      {/* Authenticated Dashboard Routes */}
      <Route path="/app" component={DashboardHome} />
      <Route path="/app/requests" component={Requests} />
      <Route path="/app/request-agent" component={RequestAgent} />
      <Route path="/app/recommendation" component={Recommendation} />
      <Route path="/app/settings" component={Settings} />

      {/* Admin Routes */}
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/admin/users" component={UsersManagement} />
      <Route path="/admin/requests" component={AdminRequests} />
      <Route path="/admin/leads" component={LeadsManagement} />

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
