import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-6 flex items-center justify-between",
        scrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent"
      )}
    >
      <Link href="/" className="text-2xl font-heading font-light tracking-tight text-white uppercase z-50 relative mix-blend-difference">
        Lumière
      </Link>

      <div className="flex items-center gap-8">
        <Link 
          href="/projects" 
          className={cn(
            "text-sm tracking-widest uppercase hover:text-primary transition-colors",
            location === "/projects" ? "text-primary" : "text-white/80"
          )}
        >
          Projects
        </Link>
        <button className="hidden md:block px-6 py-2 border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-full">
          Inquire
        </button>
      </div>
    </nav>
  );
}
