
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Home, UtensilsCrossed, User, ShoppingCart, Menu } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <UtensilsCrossed className="h-8 w-8 text-orange-600" />
            <span className="font-bold text-xl md:text-2xl text-orange-600">CraveCraze</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors">
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-orange-600">
                    Explore
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/mood-picker" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-100 hover:text-orange-600">
                            <div className="text-sm font-medium">Mood Picker</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Find food based on your current mood
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/restaurants" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-100 hover:text-orange-600">
                            <div className="text-sm font-medium">Restaurants</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Browse our partner restaurants
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/combo-builder" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-orange-100 hover:text-orange-600">
                            <div className="text-sm font-medium">Combo Builder</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Create your perfect food combination
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about" className="text-gray-700 hover:text-orange-600 transition-colors">
                    About
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="text-gray-700 hover:text-orange-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            {isAuthenticated ? (
              <Button 
                variant="outline" 
                className="flex items-center gap-2 border-orange-300"
                asChild
              >
                <Link to="/profile">
                  <User className="h-4 w-4" />
                  {user?.name || "Profile"}
                </Link>
              </Button>
            ) : (
              <Button 
                className="bg-orange-600 hover:bg-orange-700 text-white"
                asChild
              >
                <Link to="/login">
                  Log In
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-orange-600 px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/restaurants" 
                className="text-gray-700 hover:text-orange-600 px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Restaurants
              </Link>
              <Link 
                to="/mood-picker" 
                className="text-gray-700 hover:text-orange-600 px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mood Picker
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-orange-600 px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-orange-600 px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/cart" 
                className="text-gray-700 hover:text-orange-600 px-2 py-1 flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ShoppingCart className="h-5 w-5" /> Cart
              </Link>
              {isAuthenticated ? (
                <Link 
                  to="/profile" 
                  className="text-gray-700 hover:text-orange-600 px-2 py-1 flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="h-5 w-5" /> Profile
                </Link>
              ) : (
                <Link 
                  to="/login" 
                  className="text-orange-600 font-medium px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log In
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
