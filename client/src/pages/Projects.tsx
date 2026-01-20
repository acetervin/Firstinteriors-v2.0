import { Navbar } from "@/components/layout/Navbar";
import { ProjectSidebar } from "@/components/project/ProjectSidebar";
import { ProjectDetail } from "@/components/project/ProjectDetail";
import { Footer } from "@/components/home/Footer";
import { getProjects, Project } from "@/lib/data";
import { useLocation, useSearch } from "wouter";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Projects() {
  const [location] = useLocation();
  const search = useSearch();
  const queryParams = new URLSearchParams(search);
  const selectedId = queryParams.get("id");
  
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getProjects();
        
        if (!data || data.length === 0) {
          setError(true);
          setLoading(false);
          return;
        }
        
        setProjects(data);
        
        const project = selectedId 
          ? data.find(p => p.id === selectedId) 
          : data[0];
        
        setSelectedProject(project || data[0]);
        setLoading(false);
      } catch (err) {
        console.error('Failed to load projects:', err);
        setError(true);
        setLoading(false);
      }
    };

    loadProjects();
  }, [selectedId]);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [selectedId]);

  if (loading) {
    return (
      <div className="h-screen flex flex-col bg-background overflow-hidden items-center justify-center">
        <div className="text-white/40">Loading projects...</div>
      </div>
    );
  }

  if (error || !selectedProject) {
    return (
      <div className="h-screen flex flex-col bg-background overflow-hidden items-center justify-center">
        <div className="text-white/40">Failed to load projects. Please try again.</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <Navbar />
      
      <div className="flex flex-1 pt-20 relative overflow-hidden">
        {/* Desktop Sidebar - Hidden on mobile */}
        <div className="hidden md:block w-80 h-full overflow-y-auto">
          <ProjectSidebar projects={projects} selectedId={selectedProject.id} />
        </div>

        {/* Mobile Sidebar Trigger - Below navbar */}
        <div className="md:hidden absolute top-24 left-6 z-30">
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
              <button className="flex items-center gap-2 text-white/70 hover:text-white bg-black/30 backdrop-blur px-4 py-2 rounded-full border border-white/10 hover:border-white/20 transition-all">
                <Menu className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest">Projects</span>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 border-r border-white/10 bg-sidebar w-[85vw] sm:w-80">
                <SheetTitle className="sr-only">Project Menu</SheetTitle>
              <div className="h-full pt-6">
                <ProjectSidebar projects={projects} selectedId={selectedProject.id} />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto relative">
          <ProjectDetail project={selectedProject} />
        </main>
      </div>

      {/* Footer - Full width at bottom */}
      <Footer />
    </div>
  );
}
