import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";
import { createPortal } from "react-dom";
import { projects, Project } from "@/data/projects";
import { useTheme } from "@/hooks/useTheme";
import { SectionTitle } from "./SectionTitle";

const ProjectCard = ({ project, onClick }: { project: Project; onClick: (project: Project) => void }) => {
  const { mode } = useTheme();
  const isFuturistic = mode === "futuristic";

  return (
    <motion.div
      onClick={() => onClick(project)}
      className={`group relative h-full flex flex-col rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 border ${
        isFuturistic 
          ? 'bg-dark/40 border-primary-sea/20 backdrop-blur-md hover:border-primary-sea/50' 
          : 'bg-white border-primary-dark/5 shadow-sm hover:shadow-xl hover:border-primary-sea/20'
      }`}
      whileHover={{ y: -8 }}
    >
      <div className="h-52 w-full relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/20 to-transparent" />
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white uppercase tracking-widest">
          {project.tech[0]}
        </div>
      </div>
      
      <div className="p-6 flex flex-col grow">
        <h3 className={`text-xl font-bold font-heading mb-3 transition-colors ${
          isFuturistic ? 'text-off-white group-hover:text-primary-light' : 'text-darker group-hover:text-primary-sea'
        }`}>
          {project.title}
        </h3>
        
        <p className="text-slate text-sm leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-primary-light/10">
          <div className="flex -space-x-2">
            {project.tech.slice(0, 3).map((t, i) => (
              <div 
                key={i} 
                className="w-8 h-8 rounded-full bg-darker border border-primary-light/20 flex items-center justify-center text-[8px] font-mono text-primary-light"
                title={t}
              >
                {t.substring(0, 2).toUpperCase()}
              </div>
            ))}
            {project.tech.length > 3 && (
              <div className="w-8 h-8 rounded-full bg-primary-dark border border-primary-light/20 flex items-center justify-center text-[8px] font-mono text-slate">
                +{project.tech.length - 3}
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-1 text-xs font-bold text-primary-sea opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            DETAILS <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, isOpen, onClose }: { project: Project; isOpen: boolean; onClose: () => void }) => {
  const { mode } = useTheme();
  const isFuturistic = mode === "futuristic";

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-darker/80 backdrop-blur-sm z-[60]"
          />
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className={`w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl pointer-events-auto max-h-[90vh] flex flex-col border ${
                isFuturistic ? 'bg-dark border-primary-light/10' : 'bg-white border-primary-dark/5'
              }`}
            >
              <div className="relative h-64 sm:h-80 shrink-0">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-darker to-transparent opacity-60" />
                <button 
                  onClick={onClose}
                  className="absolute top-6 right-6 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8 sm:p-10 overflow-y-auto">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
                  <div>
                    <h2 className={`text-3xl font-bold font-heading mb-3 ${isFuturistic ? 'text-off-white' : 'text-darker'}`}>
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 rounded-full bg-primary-sea/10 text-primary-sea text-[10px] font-mono font-bold uppercase tracking-widest">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all font-bold text-xs tracking-widest ${
                        isFuturistic ? 'bg-primary-dark text-off-white hover:bg-primary-dark/80' : 'bg-off-white text-darker hover:bg-slate/10'
                      }`}>
                        <Github className="w-4 h-4" /> CODE
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-sea text-white hover:bg-primary-sea/80 transition-all font-bold text-xs tracking-widest shadow-lg shadow-primary-sea/20">
                        <ExternalLink className="w-4 h-4" /> LIVE DEMO
                      </a>
                    )}
                  </div>
                </div>

                <div className="prose prose-invert max-w-none mb-10">
                  <p className="text-slate leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export function InteractiveProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle text="PROJECTS" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject!} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
