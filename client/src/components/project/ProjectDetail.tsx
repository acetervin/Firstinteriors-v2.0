import { Project } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="h-full overflow-y-auto bg-background">
      {/* Detail Header Image */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-background z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 p-8 md:p-16 z-20 w-full">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <span className="inline-block px-3 py-1 mb-4 border border-primary/30 rounded-full text-[10px] uppercase tracking-widest text-primary bg-primary/5 backdrop-blur-sm">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-heading text-white mb-4">
                  {project.title}
                </h1>
                <p className="text-white/60 text-lg font-light max-w-xl">
                  {project.description}
                </p>
              </div>
              
              <div className="flex gap-8 border-l border-white/10 pl-8">
                 <div>
                    <span className="block text-[10px] text-white/40 uppercase tracking-widest mb-1">Value</span>
                    <span className="text-xl text-white font-heading">{project.value}</span>
                 </div>
                 <div>
                    <span className="block text-[10px] text-white/40 uppercase tracking-widest mb-1">Completed</span>
                    <span className="text-xl text-white font-heading">{project.year}</span>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gallery Sections */}
      <div className="p-8 md:p-16 space-y-20">
        {project.gallery.map((section, idx) => (
          <section key={idx}>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-heading text-white">{section.category}</h3>
              <div className="h-[1px] flex-1 bg-white/10"></div>
            </div>
            
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {section.images.map((img, imgIdx) => (
                <Dialog key={`${idx}-${imgIdx}`}>
                  <DialogTrigger asChild>
                    <div className="relative group cursor-zoom-in break-inside-avoid rounded-lg overflow-hidden">
                      <img
                        src={img}
                        alt={`${project.title} - ${section.category} ${imgIdx + 1}`}
                        className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <Maximize2 className="text-white w-8 h-8 drop-shadow-lg" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] h-[90vh] p-0 bg-transparent border-none flex items-center justify-center">
                    <DialogTitle className="sr-only">Image Preview</DialogTitle>
                    <img
                      src={img}
                      alt="Full screen view"
                      className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
