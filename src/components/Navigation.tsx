import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, Shield, Phone, User, Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: Car },
    { path: "/booking", label: "Book Ride", icon: Car },
    { path: "/admin", label: "Admin", icon: Shield },
    { path: "/support", label: "Support", icon: Phone },
    { path: "/profile", label: "Profile", icon: User },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-background/20 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Car className="h-8 w-8 text-primary group-hover:animate-float" />
              <div className="absolute -inset-1 bg-stellar rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold bg-cosmic bg-clip-text text-transparent">
              Galaxy Rides
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={`flex items-center space-x-2 transition-all duration-300 ${
                      isActive 
                        ? "bg-cosmic text-primary-foreground animate-cosmic-pulse" 
                        : "hover:bg-muted hover:animate-float"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border animate-slide-up">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link 
                    key={item.path} 
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      className={`w-full justify-start flex items-center space-x-2 ${
                        isActive 
                          ? "bg-cosmic text-primary-foreground" 
                          : "hover:bg-muted"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;