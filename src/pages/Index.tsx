
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { LogIn, UserPlus, User } from "lucide-react";

const Index = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-100 to-yellow-50">
      {/* Header with Authentication Controls */}
      <header className="w-full bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-600">Combo Craze Kitchen</h1>
          <div className="flex gap-3">
            {isAuthenticated ? (
              <Button 
                variant="outline" 
                className="flex items-center gap-2 border-orange-300"
                asChild
              >
                <Link to="/profile">
                  <User className="h-4 w-4" />
                  {user?.name || user?.email || "Profile"}
                </Link>
              </Button>
            ) : (
              <>
                <Button 
                  variant="outline"
                  className="border-orange-300 text-orange-700 hover:bg-orange-50"
                  asChild
                >
                  <Link to="/login">
                    <LogIn className="mr-2 h-4 w-4" /> 
                    Login
                  </Link>
                </Button>
                <Button 
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                  asChild
                >
                  <Link to="/register">
                    <UserPlus className="mr-2 h-4 w-4" /> 
                    Register
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl md:text-6xl font-bold text-orange-600 mb-4">
          Welcome to Combo Craze Kitchen Joy
        </h1>
        <p className="text-xl max-w-2xl mb-8 text-gray-600">
          Discover delicious food combinations tailored to your mood.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button className="bg-orange-600 hover:bg-orange-700 text-lg py-6 px-8">
            Get Started
          </Button>
          <Button variant="outline" className="text-lg py-6 px-8 border-orange-300">
            View Menu
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2025 Combo Craze Kitchen Joy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
