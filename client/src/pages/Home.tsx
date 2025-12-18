import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/project/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { RecentWorkSection } from "@/components/home/RecentWorkSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TestimonialSection />
      <RecentWorkSection />
      <Footer />
    </div>
  );
}
