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
    <div className="relative w-full h-screen overflow-hidden bg-background">
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
      <div className="relative z-10 h-full flex flex-col justify-end pb-32 px-6 md:px-20 container mx-auto">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-primary text-sm font-medium tracking-widest uppercase">
                  {activeProject.category}
                </span>
                <span className="w-12 h-[1px] bg-foreground/30"></span>
                <span className="text-foreground/70 text-sm font-light tracking-widest">
                  {activeProject.location}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-foreground mb-6 leading-[0.9]">
                {activeProject.title}
              </h1>

              <p className="text-foreground/80 max-w-lg text-lg font-light leading-relaxed mb-10 text-balance">
                {activeProject.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 border-t border-foreground/10 pt-8 max-w-2xl">
                <div>
                  <p className="text-foreground/40 text-xs uppercase tracking-widest mb-1">Timeline</p>
                  <p className="text-foreground text-xl font-heading">{activeProject.timeline}</p>
                </div>
                <div>
                  <p className="text-foreground/40 text-xs uppercase tracking-widest mb-1">Year</p>
                  <p className="text-foreground text-xl font-heading">{activeProject.year}</p>
                </div>
              </div>

              <Link 
                href={`/projects?id=${activeProject.id}`}
                className="group inline-flex items-center gap-4 px-8 py-4 bg-primary text-background hover:bg-primary/90 transition-colors rounded-full text-sm font-medium tracking-widest uppercase"
              >
                View Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
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
