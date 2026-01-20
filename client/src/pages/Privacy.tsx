import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/home/Footer";
import { motion } from "framer-motion";

export default function Privacy() {
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
          <h1 className="text-5xl md:text-6xl font-heading text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-foreground/80 font-light">
            <p>
              Last updated: {formattedUpdateDate}
            </p>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">1. Information We Collect</h2>
              <p>
                To provide tailored interior design services, we collect various types of information, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and billing address.</li>
                <li><strong>Property Details:</strong> Floor plans, blueprints, existing site photos, and property addresses.</li>
                <li><strong>Project Preferences:</strong> Lifestyle requirements, design inspirations, budget estimates, and family needs relevant to the design process.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
              <p>
                We use your information strictly to execute your interior design project. This includes creating design proposals, creating 3D visualizations, processing furniture and material orders, and coordinating deliveries to your site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">3. Sharing with Third Parties</h2>
              <p>
                We value your privacy and do not sell your personal data. However, to execute your project, we may share necessary details (such as your delivery address and site contact number) with trusted third parties, including:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Contractors and tradespeople working on your site.</li>
                <li>Furniture suppliers and logistics companies for product delivery.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">4. Visual Documentation</h2>
              <p>
                We may document the progress of your project through photography and video ("Before and After" shots). These images may be used in our portfolio, website, and social media to showcase our work. We ensure that these images do not reveal specific location data or compromise your security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information, design files, and payment details from unauthorized access or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">6. Contact Us</h2>
              <p>
                For privacy concerns or to request the removal of your data, please contact us at:<br/>
                <strong>Email:</strong> hello@firstinteriordesigns.ke
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
