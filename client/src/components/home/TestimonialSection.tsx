import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "First Interior Designs transformed our home into a sanctuary. Their attention to detail and understanding of our vision was exceptional. Every corner tells a story.",
    author: "Sarah Kimani",
    role: "Residential Client",
    rating: 5,
  },
  {
    quote: "Working with the team was a seamless experience. They brought sophistication and functionality together in ways we couldn't have imagined. Highly recommended.",
    author: "James Ochieng",
    role: "Business Owner",
    rating: 5,
  },
  {
    quote: "The craftsmanship and aesthetic vision are unparalleled. They took our commercial space from ordinary to extraordinary. We receive compliments from every client who walks through our doors.",
    author: "Patricia Wanjiru",
    role: "Corporate Executive",
    rating: 5,
  },
];

export function TestimonialSection() {
  return (
    <section className="py-24 px-6 md:px-20 container mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-heading text-white mb-6 leading-tight"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white/70 text-lg font-light max-w-2xl mx-auto"
        >
          Transforming spaces, one project at a time. Hear from those who've experienced the First Interior Designs difference.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-primary/50 transition-colors group"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-primary text-primary"
                />
              ))}
            </div>

            {/* Quote */}
            <p className="text-white/80 text-lg font-light leading-relaxed mb-8 relative">
              <span className="text-primary text-3xl absolute -left-2 -top-4">"</span>
              {testimonial.quote}
            </p>

            {/* Author */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-white font-medium">{testimonial.author}</p>
              <p className="text-white/50 text-sm">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
