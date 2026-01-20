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
                Welcome to First Interior Designs. By engaging our services, including Interior Design Consultation, Space Planning, Project Management, and Procurement, you agree to be bound by these Terms of Service. These terms govern the contractual relationship between you (the "Client") and First Interior Designs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">2. Scope of Services</h2>
              <p>
                Our services include, but are not limited to, conceptual design, 3D rendering, selection of furniture and finishes, and project coordination. The specific scope for your project will be detailed in your individual Design Agreement or Letter of Engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">3. Intellectual Property</h2>
              <p>
                All design concepts, drawings, mood boards, and specifications prepared by First Interior Designs remain our intellectual property. Upon full payment of all fees, the Client is granted a non-exclusive license to use these designs for the specific project site intended. These designs may not be reused or resold without our express written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">4. Client Responsibilities</h2>
              <p>
                The Client agrees to provide accurate information regarding the project site, budget, and requirements. Timely decisions and access to the property are essential for the successful completion of the project. We are not responsible for delays caused by the Client's failure to provide necessary approvals or access.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">5. Payments & Cancellations</h2>
              <p>
                Payment schedules will be outlined in your specific Design Agreement. Generally, a non-refundable deposit is required to commence work. In the event of cancellation, the Client will be billed for all work completed and expenses incurred up to the date of cancellation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">6. Project Photography</h2>
              <p>
                First Interior Designs reserves the right to photograph the completed project for use in our portfolio, website, and marketing materials. We respect your privacy and will not disclose the specific street address of your residence or confidential personal details without your permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">7. Limitation of Liability</h2>
              <p>
                While we strive for perfection, First Interior Designs is not liable for the quality or workmanship of third-party contractors, builders, or product manufacturers, even if recommended by us. We act as your agent in procurement but do not warranty third-party products.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mt-8 mb-4">8. Contact Information</h2>
              <p>
                For any questions regarding these Terms, please contact us at:<br/>
                <strong>Email:</strong> hello@firstinteriordesigns.ke<br/>
                <strong>Phone:</strong> +254 (0) 723 851 318
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
