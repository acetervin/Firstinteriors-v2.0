import { motion } from "framer-motion";
import { Home, Building2, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential",
    description: "Transform your home into a sanctuary of style and comfort, tailored to your lifestyle.",
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Create inspiring workspaces and hospitality venues that elevate brand identity.",
  },
  {
    icon: Lightbulb,
    title: "Consultation",
    description: "Expert guidance for renovations, redesigns, and strategic space planning.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 px-6 md:px-20 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-black mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg font-light max-w-xl mx-auto">
            Comprehensive design solutions for every space and vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <Icon className="w-12 h-12 text-black mb-4 stroke-1" />
                <h3 className="text-xl font-heading text-black mb-3">{service.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
