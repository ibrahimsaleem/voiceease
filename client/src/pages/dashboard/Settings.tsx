import { AppLayout } from "@/components/AppLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useUser, useLogout } from "@/hooks/use-auth";
import { useLocation } from "wouter";
import { User, Mail, LogOut, Shield } from "lucide-react";

export default function Settings() {
  const { data: user } = useUser();
  const { mutate: logout, isPending } = useLogout();
  const [, setLocation] = useLocation();

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        setLocation("/");
      }
    });
  };

  return (
    <AppLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-display font-bold text-gray-900">Settings</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        {/* Profile Information */}
        <Card className="p-6 border-0 shadow-sm bg-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Profile Information</h2>
              <p className="text-sm text-muted-foreground">Your account details</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium text-muted-foreground">Email Address</div>
                <div className="font-semibold">{user?.username || "Not available"}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <Shield className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="text-sm font-medium text-muted-foreground">Account Status</div>
                <div className="font-semibold text-green-600">Active</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Account Actions */}
        <Card className="p-6 border-0 shadow-sm bg-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
              <LogOut className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Account Actions</h2>
              <p className="text-sm text-muted-foreground">Manage your session</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Sign Out</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sign out of your VoiceEase account on this device.
              </p>
              <Button 
                variant="destructive" 
                onClick={handleLogout}
                disabled={isPending}
                className="gap-2"
              >
                <LogOut className="h-4 w-4" />
                {isPending ? "Signing out..." : "Sign Out"}
              </Button>
            </div>
          </div>
        </Card>

        {/* Security Info */}
        <Card className="p-6 border-0 shadow-sm bg-blue-50 border-blue-100">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">Security Note</h3>
              <p className="text-sm text-blue-700">
                Your account information is encrypted and secure. We never share your data with third parties.
              </p>
            </div>
          </div>
        </Card>

        {/* Additional Settings (Placeholder) */}
        <Card className="p-6 border-0 shadow-sm bg-white">
          <h2 className="text-xl font-bold mb-4">Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="font-semibold">Email Notifications</div>
                <div className="text-sm text-muted-foreground">Receive updates about your agents</div>
              </div>
              <div className="text-sm text-muted-foreground">Coming soon</div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="font-semibold">Weekly Reports</div>
                <div className="text-sm text-muted-foreground">Get weekly performance summaries</div>
              </div>
              <div className="text-sm text-muted-foreground">Coming soon</div>
            </div>
          </div>
        </Card>
      </div>
    </AppLayout>
  );
}

