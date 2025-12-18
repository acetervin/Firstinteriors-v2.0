import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/home/Footer";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-20 px-6 md:px-20 py-24 container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-heading text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-foreground/80 font-light">
            <p>
              Last updated: December 2024
            </p>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">1. Information We Collect</h2>
              <p>
                We collect information you voluntarily provide through our contact forms, including your name, email address, phone number, and project details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
              <p>
                Your information is used solely to respond to your inquiries and provide interior design services. We do not share your information with third parties without your consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">3. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">4. Contact Us</h2>
              <p>
                For privacy concerns, please contact us at hello@firstinteriordesigns.ke
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
