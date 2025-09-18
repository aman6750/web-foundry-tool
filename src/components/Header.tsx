import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Clients", href: "#clients" },
  { name: "Contact", href: "#contact" }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-elegant border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <img 
                src={logo} 
                alt="TechSolutions Pro - Professional Technology Services" 
                className="w-10 h-10 rounded-lg shadow-glow group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="font-bold text-xl text-foreground">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Tech</span>
              <span className="text-foreground">Solutions</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline"
              className="border-primary/20 text-primary hover:bg-primary/10"
            >
              Login
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90 shadow-elegant hover:shadow-glow transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-foreground hover:bg-primary/10"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background border-border">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={logo} 
                      alt="TechSolutions Pro Logo" 
                      className="w-8 h-8 rounded-lg"
                    />
                    <div className="font-bold text-lg text-foreground">
                      <span className="bg-gradient-primary bg-clip-text text-transparent">Tech</span>
                      <span className="text-foreground">Solutions</span>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setIsMobileOpen(false)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-6 mb-8">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left text-lg text-muted-foreground hover:text-primary transition-colors duration-300 py-2 border-b border-border/50 hover:border-primary/30"
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/20 text-primary hover:bg-primary/10"
                  >
                    Login
                  </Button>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 shadow-elegant"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-border space-y-3">
                  <div className="text-sm text-muted-foreground">
                    <div className="font-semibold text-foreground mb-2">Contact Us</div>
                    <div>hello@techsolutions.com</div>
                    <div>+1 (555) 123-4567</div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;