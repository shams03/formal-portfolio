
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { scrollToElement } from "@/utils/scrollUtils";
import { useTheme } from "@/themes/useTheme";
import { Toggle } from "@/components/ui/toggle";
import { Switch } from "@/components/ui/switch";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["home", "projects", "skills", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToElement(sectionId);
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background shadow-md py-3" : "bg-background/50 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container-section py-0">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold text-primary hover:text-primary/80 transition-colors font-playfair"
          >
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-foreground hover:text-primary transition-colors duration-200 ${
                  activeSection === item.id ? "text-primary font-medium" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex items-center space-x-2">
              <Sun className={`h-4 w-4 ${theme === 'dark' ? 'text-muted-foreground' : 'text-primary'}`} />
              <Switch 
                checked={theme === "dark"}
                onCheckedChange={toggleTheme}
                aria-label="Toggle theme"
              />
              <Moon className={`h-4 w-4 ${theme === 'light' ? 'text-muted-foreground' : 'text-primary'}`} />
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Sun className={`h-4 w-4 ${theme === 'dark' ? 'text-muted-foreground' : 'text-primary'}`} />
              <Switch 
                checked={theme === "dark"}
                onCheckedChange={toggleTheme}
                aria-label="Toggle theme"
              />
              <Moon className={`h-4 w-4 ${theme === 'light' ? 'text-muted-foreground' : 'text-primary'}`} />
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-md animate-fade-in">
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-foreground hover:text-primary transition-colors duration-200 ${
                    activeSection === item.id ? "text-primary font-medium" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
