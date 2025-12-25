import { Link, useLocation } from "wouter";
import { useUser, useLogout } from "@/hooks/use-auth";
import { 
  LayoutDashboard, 
  PlusCircle, 
  Settings, 
  LogOut, 
  Mic,
  List
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { data: user } = useUser();
  const { mutate: logout } = useLogout();

  const sidebarLinks = [
    { href: "/app", icon: LayoutDashboard, label: "Overview" },
    { href: "/app/requests", icon: List, label: "My Requests" },
    { href: "/app/request-agent", icon: PlusCircle, label: "New Agent" },
    { href: "/app/settings", icon: Settings, label: "Settings" },
  ];

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:flex flex-col fixed inset-y-0 z-50">
        <div className="h-16 flex items-center px-6 border-b">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Mic className="h-5 w-5" />
            </div>
            <span className="font-bold font-display tracking-tight text-lg">VocalAI</span>
          </Link>
        </div>

        <div className="p-4 space-y-1 flex-1">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={`w-full justify-start gap-3 ${isActive ? 'font-semibold text-primary' : 'text-muted-foreground'}`}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Button>
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t">
          <div className="flex items-center gap-3 px-2 mb-4">
             <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
               {user.username.charAt(0).toUpperCase()}
             </div>
             <div className="flex-1 overflow-hidden">
               <p className="text-sm font-medium truncate">{user.username}</p>
             </div>
          </div>
          <Button variant="outline" className="w-full gap-2" onClick={() => logout()}>
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
