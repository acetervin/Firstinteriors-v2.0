import { motion } from "framer-motion";
import { Link } from "wouter";
import penthouseImg from '@assets/generated_images/luxury_penthouse_living_room.png';
import villaImg from '@assets/generated_images/coastal_villa_interior.png';
import loftImg from '@assets/generated_images/industrial_loft_interior.png';
import retreatImg from '@assets/generated_images/zen_minimalist_retreat.png';

const recentWorks = [
  { id: 1, title: "The Azure Penthouse", location: "New York, NY", image: penthouseImg, height: "h-80" },
  { id: 2, title: "Serenity Bay Villa", location: "Malibu, CA", image: villaImg, height: "h-96" },
  { id: 3, title: "Ironworks Lofts", location: "Chicago, IL", image: loftImg, height: "h-80" },
  { id: 4, title: "Kiso Mountain Lodge", location: "Nagano, Japan", image: retreatImg, height: "h-96" },
  { id: 5, title: "The Azure Penthouse", location: "New York, NY", image: penthouseImg, height: "h-80" },
  { id: 6, title: "Serenity Bay Villa", location: "Malibu, CA", image: villaImg, height: "h-96" },
];

export function RecentWorkSection() {
  return (
    <section className="py-24 px-6 md:px-20 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">Recent Work</h2>
        <p className="text-white/70 text-lg font-light max-w-xl mx-auto">
          A curated selection of our most recent luxury interior projects
        </p>
      </motion.div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {recentWorks.map((work, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-lg break-inside-avoid cursor-pointer"
          >
            <div className={`${work.height} relative overflow-hidden rounded-lg`}>
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex flex-col items-end justify-end p-6 opacity-0 group-hover:opacity-100">
                <div className="text-right">
                  <p className="text-white font-heading text-lg">{work.title}</p>
                  <p className="text-white/80 text-sm">{work.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex justify-center mt-16"
      >
        <Link 
          href="/projects"
          className="px-8 py-4 border border-white/20 text-white text-sm uppercase tracking-widest font-medium hover:bg-white hover:text-black transition-all rounded-full"
        >
          View Full Portfolio
        </Link>
      </motion.div>
    </section>
  );
}
