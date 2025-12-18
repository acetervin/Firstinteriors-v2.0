import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/home/Footer";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Credits() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-20 px-6 md:px-20 py-24 container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-heading text-foreground mb-8">Credits</h1>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-heading text-foreground mb-4">Design & Development</h2>
              <p className="text-foreground/80 font-light mb-2">
                Built with modern web technologies including React, TypeScript, Tailwind CSS, and Framer Motion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mb-4">Image Sourcing</h2>
              <p className="text-foreground/80 font-light mb-4">
                Project photography and lifestyle images sourced from:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary">→</span>
                  <a href="https://unsplash.com" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                    Unsplash <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mb-4">Typography</h2>
              <ul className="space-y-2 text-foreground/80 font-light">
                <li>• Headings: Outfit Font Family</li>
                <li>• Body: Inter Font Family</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mb-4">Libraries & Frameworks</h2>
              <ul className="space-y-2 text-foreground/80 font-light">
                <li>• React 18+</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Framer Motion</li>
                <li>• Wouter (Routing)</li>
                <li>• Radix UI Components</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading text-foreground mb-4">Icons</h2>
              <p className="text-foreground/80 font-light">
                Icons provided by
                <a href="https://lucide.dev" className="text-primary hover:text-primary/80 transition-colors mx-1">Lucide Icons</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
