import { Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "wouter";

interface ProjectSidebarProps {
  projects: Project[];
  selectedId?: string;
}

export function ProjectSidebar({ projects, selectedId }: ProjectSidebarProps) {
  return (
    <div className="w-full h-full bg-sidebar border-r border-foreground/10 flex flex-col">
      <div className="p-8 border-b border-foreground/10">
        <h2 className="text-xs uppercase tracking-[0.2em] text-foreground/40 font-medium">
          Our Projects
        </h2>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="flex flex-col p-4 gap-2">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={`/projects?id=${project.id}`}
              className={cn(
                "group flex flex-col p-4 rounded-xl transition-all duration-300",
                selectedId === project.id 
                  ? "bg-foreground/5 border border-foreground/10" 
                  : "hover:bg-foreground/5 border border-transparent"
              )}
            >
              <div className="flex justify-between items-baseline mb-1">
                <span className={cn(
                  "font-heading text-lg transition-colors",
                  selectedId === project.id ? "text-primary" : "text-foreground group-hover:text-foreground/90"
                )}>
                  {project.title}
                </span>
                <span className="text-[10px] text-foreground/30 uppercase tracking-widest">
                  {project.year}
                </span>
              </div>
              <span className="text-xs text-foreground/50 font-light truncate">
                {project.category} — {project.location}
              </span>
            </Link>
          ))}
        </div>
      </ScrollArea>

      <div className="p-8 border-t border-foreground/10">
        <p className="text-[10px] text-foreground/20 uppercase tracking-widest text-center">
          © 2024 First Interior Designs
        </p>
      </div>
    </div>
  );
}
