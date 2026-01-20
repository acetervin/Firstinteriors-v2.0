import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/home/Footer";
import { motion } from "framer-motion";

export default function Terms() {
  // Calculate date 2 months ago
  const updatedDate = new Date();
  updatedDate.setMonth(updatedDate.getMonth() - 2);
  const formattedUpdateDate = updatedDate.toLocaleDateString('en-US', { 
    month: 'long', 
    year: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-20 px-6 md:px-20 py-24 container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-heading text-foreground mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-foreground/80 font-light">
            <p>
              Last updated: {formattedUpdateDate}
            </p>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on First Interior Designs' website for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">3. Design Services</h2>
              <p>
                All design services are provided as agreed upon through our formal contract terms. Modifications may only be made with written consent from both parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">4. Limitation of Liability</h2>
              <p>
                In no event shall First Interior Designs be liable for any damages whatsoever, including direct, indirect, incidental, special, consequential, or punitive damages arising from or related to this website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">5. Contact</h2>
              <p>
                For questions about these Terms, please contact us at hello@firstinteriordesigns.ke
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
