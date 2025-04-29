
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { LogOut, User } from "lucide-react";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="border-orange-200">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 rounded-full bg-orange-200 flex items-center justify-center">
                <User className="w-12 h-12 text-orange-600" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center">Your Profile</CardTitle>
            <CardDescription className="text-center">
              Manage your account details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">Name</p>
              <p className="font-medium">{user.name || "Not provided"}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">Email</p>
              <p className="font-medium">{user.email}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-500">Member Since</p>
              <p className="font-medium">{new Date().toLocaleDateString()}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={handleLogout} 
              variant="outline" 
              className="w-full border-orange-300 text-orange-700 hover:bg-orange-100"
            >
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
