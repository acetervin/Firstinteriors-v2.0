import { Link } from "wouter";

export function Logo() {
  return (
    <Link href="/">
      <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        {/* Logo Icon */}
        <svg
          className="w-8 h-8 md:w-10 md:h-10"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Red/Orange geometric shapes */}
          <path d="M25 50 L35 35 L35 65 Z" fill="currentColor" className="text-primary" />
          <path d="M40 35 L50 20 L50 50 Z" fill="currentColor" className="text-primary" />
          <path d="M55 25 L70 10 L70 40 Z" fill="currentColor" className="text-primary" />
          {/* Black outlines */}
          <rect x="15" y="55" width="40" height="8" fill="currentColor" className="text-foreground" />
          <rect x="55" y="50" width="35" height="8" fill="currentColor" className="text-foreground" />
        </svg>

        {/* Text Logo */}
        <span className="hidden md:block text-sm md:text-lg font-heading font-light tracking-tight text-foreground uppercase">
          First Interior
        </span>
      </a>
    </Link>
  );
}
