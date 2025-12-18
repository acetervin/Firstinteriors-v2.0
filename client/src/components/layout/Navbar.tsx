import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Work", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  if (!mounted) return null;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-6 md:px-20 flex items-center justify-between",
        scrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-foreground/10" : "bg-transparent"
      )}
    >
      {/* Logo */}
      <Link href="/">
        <a className="text-sm md:text-2xl font-heading font-light tracking-tight text-foreground flex-shrink-0">
          First Interior
        </a>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 ml-auto">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <a
              className={cn(
                "text-sm tracking-widest uppercase hover:text-primary transition-colors",
                location === item.href ? "text-primary" : "text-foreground/70"
              )}
            >
              {item.label}
            </a>
          </Link>
        ))}
        <a
          href="mailto:hello@firstinteriordesigns.ke"
          className="px-6 py-2 border border-foreground/20 text-foreground text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-all rounded-full"
        >
          Inquire
        </a>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 hover:bg-foreground/10 rounded-full transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-foreground" />
          ) : (
            <Moon className="w-5 h-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu Toggle & Theme */}
      <div className="md:hidden flex items-center gap-3 ml-auto">
        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 hover:bg-foreground/10 rounded-full transition-colors flex-shrink-0"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-foreground" />
          ) : (
            <Moon className="w-5 h-5 text-foreground" />
          )}
        </button>

        {/* Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-foreground/70 hover:text-foreground transition-colors flex-shrink-0"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Sidebar */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-foreground/10 md:hidden z-40">
          <div className="flex flex-col p-6 space-y-6">
            {/* Divider */}
            <div className="border-t border-foreground/10" />

            {/* Menu items */}
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-sm tracking-widest uppercase hover:text-primary transition-colors block",
                      location === item.href ? "text-primary" : "text-foreground/70"
                    )}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <a
                href="mailto:hello@firstinteriordesigns.ke"
                className="px-6 py-2 border border-foreground/20 text-foreground text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-all rounded-full text-center block"
              >
                Inquire
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
