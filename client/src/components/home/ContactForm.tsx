import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "renovation",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <section className="py-24 px-6 md:px-20 bg-background">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left Column - Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-5xl md:text-6xl font-heading text-foreground mb-4 leading-tight">
              Let's discuss your project.
            </h2>
            <p className="text-foreground/60 text-lg font-light">
              We are currently accepting new projects for {currentYear}.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-8 border-t border-foreground/10 pt-12">
            <div className="flex gap-6 group">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-foreground/40 text-xs uppercase tracking-widest mb-1">Email</p>
                <a
                  href="mailto:hello@firstinteriordesigns.ke"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  hello@firstinteriordesigns.ke
                </a>
              </div>
            </div>

            <div className="flex gap-6 group">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-foreground/40 text-xs uppercase tracking-widest mb-1">Phone</p>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+254723851318"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +254 (0) 723 851 318
                  </a>
                  <a
                    href="tel:+254792404484"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +254 (0) 792 404 484
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-6 group">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-foreground/40 text-xs uppercase tracking-widest mb-1">Office</p>
                <p className="text-foreground">
                  Doonholm, Nairobi Kenya
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Name */}
          <div>
            <label className="text-foreground/60 text-xs uppercase tracking-widest block mb-3">
              Your Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full bg-transparent border-b border-foreground/20 text-foreground placeholder:text-foreground/30 pb-3 focus:outline-none focus:border-primary transition-colors font-light"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-foreground/60 text-xs uppercase tracking-widest block mb-3">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full bg-transparent border-b border-foreground/20 text-foreground placeholder:text-foreground/30 pb-3 focus:outline-none focus:border-primary transition-colors font-light"
              placeholder="your@email.com"
            />
          </div>

          {/* Project Type */}
          <div>
            <label className="text-foreground/60 text-xs uppercase tracking-widest block mb-3">
              Project Type
            </label>
            <select
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full bg-transparent border-b border-foreground/20 text-foreground pb-3 focus:outline-none focus:border-primary transition-colors font-light appearance-none cursor-pointer"
            >
              <option value="renovation" className="bg-background text-foreground">Renovation</option>
              <option value="new-build" className="bg-background text-foreground">New Build</option>
              <option value="commercial" className="bg-background text-foreground">Commercial</option>
              <option value="consultation" className="bg-background text-foreground">Consultation</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="text-foreground/60 text-xs uppercase tracking-widest block mb-3">
              Estimated Budget
            </label>
            <input
              type="text"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full bg-transparent border-b border-foreground/20 text-foreground placeholder:text-foreground/30 pb-3 focus:outline-none focus:border-primary transition-colors font-light"
              placeholder="e.g., KES 5M - 10M"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-foreground/60 text-xs uppercase tracking-widest block mb-3">
              Project Details
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full bg-transparent border-b border-foreground/20 text-foreground placeholder:text-foreground/30 pb-3 focus:outline-none focus:border-primary transition-colors font-light resize-none h-32"
              placeholder="Tell us about your project vision..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-primary text-background py-4 text-sm uppercase tracking-widest font-medium hover:scale-105 transition-transform duration-300 active:scale-95"
            >
              {submitted ? "Message Sent ✓" : "Send Inquiry"}
            </button>
            {submitted && (
              <p className="text-primary text-sm text-center mt-3">
                Thank you! We'll get back to you soon.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
