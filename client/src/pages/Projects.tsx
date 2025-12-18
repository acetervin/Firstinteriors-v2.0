import { Navbar } from "@/components/layout/Navbar";
import { ProjectSidebar } from "@/components/project/ProjectSidebar";
import { ProjectDetail } from "@/components/project/ProjectDetail";
import { projects } from "@/lib/data";
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

  const selectedProject = projects.find(p => p.id === selectedId) || projects[0];

  // Close mobile menu when selection changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [selectedId]);

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <Navbar />
      
      <div className="flex-1 flex pt-20 overflow-hidden relative">
        {/* Desktop Sidebar - Hidden on mobile */}
        <div className="hidden md:block w-80 h-full">
          <ProjectSidebar projects={projects} selectedId={selectedProject.id} />
        </div>

        {/* Mobile Sidebar Trigger */}
        <div className="md:hidden absolute top-4 left-6 z-30">
          <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
            <SheetTrigger asChild>
              <button className="flex items-center gap-2 text-white/70 hover:text-white bg-black/20 backdrop-blur px-4 py-2 rounded-full border border-white/10">
                <Menu className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest">Projects</span>
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 border-r border-white/10 bg-sidebar w-80">
                <SheetTitle className="sr-only">Project Menu</SheetTitle>
              <div className="h-full pt-10">
                <ProjectSidebar projects={projects} selectedId={selectedProject.id} />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Main Content */}
        <main className="flex-1 h-full relative">
          <ProjectDetail project={selectedProject} />
        </main>
      </div>
    </div>
  );
}
