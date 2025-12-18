import { motion } from "framer-motion";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { Project, getProjects } from "@/lib/data";

export function RecentWorkSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await getProjects();
      setProjects(data);
      setLoading(false);
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <section className="py-24 px-6 md:px-20 container mx-auto">
        <div className="text-white/40 text-center">Loading projects...</div>
      </section>
    );
  }

  // Create varied heights for masonry effect
  const recentWorks = projects.map((project, idx) => ({
    ...project,
    height: idx % 2 === 0 ? "h-80" : "h-96",
  }));

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
            key={work.id}
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
