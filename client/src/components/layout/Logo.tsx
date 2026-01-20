import { Link } from "wouter";

export function Logo() {
  return (
    <Link href="/">
      <a className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        {/* Public logo image from /public/logo.png */}
        <img
          src="/logo.png"
          alt="Test First Interiors logo"
          className="w-8 h-8 md:w-10 md:h-10 object-contain"
        />

        {/* Text Logo: use Fredoka One font; second word red */}
        <span
          className="hidden md:block text-sm md:text-lg font-light tracking-tight text-foreground uppercase"
          style={{ fontFamily: "'Poppins', 'Playfair Display', sans-serif" }}
        >
          First <span className="text-red-500">Interiors</span>
        </span>
      </a>
    </Link>
  );
}
