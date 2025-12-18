import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-6 md:px-20 flex items-center justify-between",
        scrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent"
      )}
    >
      <Link href="/">
        <a className="text-sm md:text-2xl font-heading font-light tracking-tight text-white uppercase flex-shrink-0">
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
                location === item.href ? "text-primary" : "text-white/80"
              )}
            >
              {item.label}
            </a>
          </Link>
        ))}
        <a
          href="mailto:hello@firstinteriordesigns.ke"
          className="px-6 py-2 border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-full"
        >
          Inquire
        </a>
      </div>

      {/* Mobile Menu Toggle - Right aligned */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-white/70 hover:text-white transition-colors ml-auto flex-shrink-0"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-white/5 md:hidden z-40">
          <div className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-sm tracking-widest uppercase hover:text-primary transition-colors",
                    location === item.href ? "text-primary" : "text-white/80"
                  )}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <a
              href="mailto:hello@firstinteriordesigns.ke"
              className="px-6 py-2 border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-full text-center"
            >
              Inquire
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
