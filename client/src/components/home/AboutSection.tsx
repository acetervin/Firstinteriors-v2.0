import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-24 px-6 md:px-20 container mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image - Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden"
        >
          <img
            src="https://media.joomeo.com/large/68a45f90b27a5.jpg"
            alt="Interior Design Detail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
        </motion.div>

        {/* Content - Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-5xl md:text-6xl font-heading text-foreground mb-6 leading-tight">
              Crafting Timeless Spaces
            </h2>
            <p className="text-foreground/70 text-lg font-light leading-relaxed">
              With over 15 years of experience in luxury interior design, we create environments that transcend trends. Each project is a dialogue between architecture, light, and the lives of those who inhabit these spaces. We believe in the power of intentional design—where every material, every color, every form serves a purpose.
            </p>
          </div>

          <div className="space-y-4 border-t border-foreground/10 pt-8">
            <div className="flex gap-4">
              <span className="text-primary font-heading text-xl">✓</span>
              <p className="text-foreground/80">Bespoke residential and commercial projects</p>
            </div>
            <div className="flex gap-4">
              <span className="text-primary font-heading text-xl">✓</span>
              <p className="text-foreground/80">Sustainable materials and timeless aesthetics</p>
            </div>
            <div className="flex gap-4">
              <span className="text-primary font-heading text-xl">✓</span>
              <p className="text-foreground/80">Award-winning designs and international recognition</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
