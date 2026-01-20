import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, getProjects } from "@/lib/data";
import { ProjectDock } from "./ProjectDock";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function Hero() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await getProjects();
      const featured = data.filter((p) => p.featured);
      const list = featured.length > 0 ? featured : data;
      setProjects(list);
      if (list.length > 0) {
        setActiveProject(list[0]);
      }
      setLoading(false);
    };

    loadProjects();
  }, []);

  const handleProjectChange = (project: Project) => {
    if (project.id === activeProject?.id) return;
    setActiveProject(project);
  };

  if (loading || !activeProject) {
    return (
      <div className="relative w-full h-screen overflow-hidden bg-background flex items-center justify-center">
        <div className="text-foreground/40">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-background">
      {/* Background Image Transition Layer */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
          <div className="absolute inset-0 bg-foreground/20 z-10" />
          <img
            src={activeProject.image}
            alt={activeProject.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="relative z-10 h-full flex flex-col justify-center pb-24 md:pb-32 pt-24 px-6 md:px-20 container mx-auto">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-heading font-medium text-foreground mb-6 leading-[0.9] tracking-tight">
                {activeProject.title}
              </h1>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                  {activeProject.category}
                </span>
              </div>

              <p className="text-foreground/80 max-w-lg text-lg font-light leading-relaxed mb-10 text-balance hidden md:block">
                {activeProject.description}
              </p>

              {/* Premium Stats & CTA Layout */}
              <div className="flex flex-col gap-8 md:gap-10">
                {/* Stats */}
                <div className="flex items-center gap-12 border-l-2 border-primary/50 pl-6">
                    <div>
                      <p className="text-foreground/50 text-[10px] uppercase tracking-[0.2em] mb-2">Timeline</p>
                      <p className="text-foreground text-xl font-heading font-light">{activeProject.timeline}</p>
                    </div>
                    <div>
                      <p className="text-foreground/50 text-[10px] uppercase tracking-[0.2em] mb-2">Year</p>
                      <p className="text-foreground text-xl font-heading font-light">{activeProject.year}</p>
                    </div>
                </div>

                {/* Button */}
                <Link 
                  href={`/projects?id=${activeProject.id}`}
                  className="w-fit group flex items-center gap-3 px-6 py-3 bg-primary text-background hover:bg-primary/90 transition-all rounded-full text-[10px] font-bold tracking-[0.2em] uppercase shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  View Project
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Project Dock (Bottom Right) */}
      {projects.length > 0 && (
        <ProjectDock 
          projects={projects} 
          activeProject={activeProject} 
          onSelect={handleProjectChange} 
        />
      )}
    </div>
  );
}
