import { Project } from "@/lib/data";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [filter, setFilter] = useState("All");

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set(projects.map((p) => p.category));
    return ["All", ...Array.from(cats)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter, projects]);

  return (
    <div className="container mx-auto px-6 md:px-20 py-24 min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 pt-12 gap-8"
      >
        <div>
          <h1 className="text-5xl md:text-8xl font-heading text-foreground mb-4 tracking-tight">
            Selected Works
          </h1>
          <p className="text-foreground/60 text-lg font-light max-w-xl leading-relaxed">
            Curated interior narratives where form meets function in perfect harmony.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 border",
                filter === cat
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-foreground/60 border-foreground/20 hover:border-foreground/50 hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Masonry Grid */}
      <motion.div 
        layout
        className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => {
            // vary aspect ratio for visual interest
            const aspectClass = index % 3 === 0 ? "aspect-[3/4]" : index % 2 === 0 ? "aspect-square" : "aspect-[4/3]";
            
            return (
              <Link key={project.id} href={`/projects?id=${project.id}`}>
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group break-inside-avoid cursor-pointer"
                >
                  <div className={cn("relative overflow-hidden rounded-sm mb-4 bg-secondary/30", aspectClass)}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                    
                    {/* Floating Action Button */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <div className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg">
                         <ArrowUpRight className="w-5 h-5 text-black" />
                      </div>
                    </div>

                    {/* Badge */}
                     <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 bg-black/20 backdrop-blur-md text-white text-[10px] uppercase tracking-widest rounded-sm">
                          {project.year}
                        </span>
                     </div>
                  </div>

                  <div className="flex justify-between items-start border-t border-foreground/10 pt-4">
                    <div>
                      <h3 className="text-xl font-heading text-foreground leading-tight mb-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-foreground/50 font-light">
                        {project.location}
                      </p>
                    </div>
                    <span className="text-xs text-foreground/40 font-mono">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
