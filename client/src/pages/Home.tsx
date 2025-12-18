import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/project/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
    </div>
  );
}
