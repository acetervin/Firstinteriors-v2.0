import { motion } from "framer-motion";
import { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProjectDockProps {
  projects: Project[];
  activeProject: Project;
  onSelect: (project: Project) => void;
}

export function ProjectDock({ projects, activeProject, onSelect }: ProjectDockProps) {
  return (
    <div className="absolute bottom-8 right-8 z-20 flex flex-col items-end gap-4">
      <span className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2 mr-1">Select Project</span>
      <div className="flex gap-3 glass p-2 rounded-2xl">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => onSelect(project)}
            className="group relative"
            aria-label={`View ${project.title}`}
          >
            <div className={cn(
              "relative w-16 h-16 rounded-xl overflow-hidden transition-all duration-500 border-2",
              activeProject.id === project.id 
                ? "w-20 border-primary shadow-[0_0_20px_-5px_hsl(var(--primary))]" 
                : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"
            )}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              {activeProject.id === project.id && (
                <motion.div 
                  layoutId="active-glow"
                  className="absolute inset-0 bg-primary/20"
                />
              )}
            </div>
            
            {/* Tooltip on hover */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              <span className="text-[10px] bg-foreground/20 text-foreground px-2 py-1 rounded backdrop-blur-sm">
                {project.title}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
