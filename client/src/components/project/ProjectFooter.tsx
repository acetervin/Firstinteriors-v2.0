import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";

export function ProjectFooter() {
  return (
    <footer className="bg-gradient-to-t from-black/50 to-transparent border-t border-white/5 py-16 px-6 md:px-20 mt-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-heading font-light tracking-tight text-white mb-4">
              First Interior
            </h3>
            <p className="text-white/60 text-sm font-light">
              Luxury interior design crafted with intention and elevated aesthetics.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-medium text-sm uppercase tracking-widest mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-white/60 hover:text-primary transition-colors text-sm">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="text-white/60 hover:text-primary transition-colors text-sm">
                    Projects
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-white/60 hover:text-primary transition-colors text-sm">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-medium text-sm uppercase tracking-widest mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              <li className="text-white/60 hover:text-primary transition-colors text-sm cursor-pointer">
                Residential Design
              </li>
              <li className="text-white/60 hover:text-primary transition-colors text-sm cursor-pointer">
                Commercial Spaces
              </li>
              <li className="text-white/60 hover:text-primary transition-colors text-sm cursor-pointer">
                Consultation
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-medium text-sm uppercase tracking-widest mb-6">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:hello@firstinteriordesigns.ke"
                  className="text-white/60 hover:text-primary transition-colors text-sm"
                >
                  hello@firstinteriordesigns.ke
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  Westlands, Nairobi, Kenya
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs text-center md:text-left">
              © 2024 First Interior Designs. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/40 hover:text-primary transition-colors text-xs uppercase tracking-widest"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-primary transition-colors text-xs uppercase tracking-widest"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
