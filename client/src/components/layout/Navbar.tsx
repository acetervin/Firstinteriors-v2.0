import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "Work", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  if (!mounted) return null;

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-6 md:px-20 flex items-center justify-between",
          scrolled || mobileMenuOpen ? "bg-background/80 backdrop-blur-md py-4 border-b border-foreground/10" : "bg-transparent"
        )}
      >
        {/* Logo */}
        <div className="relative z-50">
           <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          {location !== "/" && (
            <Link href="/">
              <a className="text-sm tracking-widest uppercase hover:text-primary transition-colors text-foreground/70">
                Home
              </a>
            </Link>
          )}
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
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3 ml-auto relative z-50">
          {/* Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground hover:text-primary transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-8 p-6 w-full max-w-sm text-center">
              {location !== "/" && (
                <Link href="/">
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-heading tracking-tight hover:text-primary transition-colors block text-foreground"
                  >
                    Home
                  </a>
                </Link>
              )}
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-2xl font-heading tracking-tight hover:text-primary transition-colors block",
                      location === item.href ? "text-primary" : "text-foreground"
                    )}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              
              <div className="w-12 h-[1px] bg-foreground/10 my-4" />

              <Link href="/contact">
                <a
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full px-10 py-4 bg-primary text-background text-sm uppercase tracking-[0.2em] font-medium rounded-full hover:scale-105 transition-transform active:scale-95 text-center"
                >
                  Inquire
                </a>
              </Link>
              
               <div className="flex gap-6 mt-8">
                  {/* Social placeholders or extra info could go here */}
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
