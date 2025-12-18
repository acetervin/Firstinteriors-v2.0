import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <section className="py-24 px-6 md:px-20 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-6xl font-heading mb-8 leading-tight max-w-3xl">
            Ready to transform your space?
          </h2>

          <p className="text-gray-300 text-lg font-light mb-12 max-w-2xl">
            Let's create something extraordinary together. Get in touch with our team to discuss your next project.
          </p>

          <Link href="/contact">
            <a className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black text-sm uppercase tracking-widest font-medium hover:bg-gray-100 transition-colors rounded-full mb-12">
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </Link>

          {/* Social Links */}
          <div className="flex gap-6 border-t border-gray-700 pt-12 w-full justify-center">
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-full">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-full">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:hello@firstinteriordesigns.ke" className="text-gray-400 hover:text-white transition-colors p-3 hover:bg-white/10 rounded-full">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-8 px-6 md:px-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2024 First Interior Designs, Nairobi. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Credits</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
