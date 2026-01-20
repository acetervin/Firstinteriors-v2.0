import { Link } from "wouter";

export function Logo() {
  return (
    <Link href="/">
      <a className="flex items-center hover:opacity-80 transition-opacity">
        {/* Public logo image */}
        <img
          src="/logo1.png"
          alt="First Interiors logo"
          className="h-8 md:h-10 w-auto object-contain"
        />
      </a>
    </Link>
  );
}
