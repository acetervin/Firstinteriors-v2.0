import { Navbar } from "@/components/layout/Navbar";
import { ContactForm } from "@/components/home/ContactForm";
import { Footer } from "@/components/home/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      <div className="pt-20" />
      <ContactForm />
      <Footer />
    </div>
  );
}
