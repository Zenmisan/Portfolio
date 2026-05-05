import { motion } from 'framer-motion';
import { ExternalLink, Github, FileCode } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="group relative rounded-2xl overflow-hidden bg-dark/50 border border-primary-dark/30 backdrop-blur-sm card-hover"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold font-heading text-off-white mb-3 group-hover:text-primary-light transition-colors">
          {project.title}
        </h3>
        <p className="text-slate text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span 
              key={t}
              className="px-3 py-1 text-xs font-mono rounded-full bg-primary-dark/30 text-primary-light"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-sea/20 text-primary-light text-sm font-medium hover:bg-primary-sea/30 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-dark/50 text-off-white text-sm font-medium hover:bg-primary-dark/20 transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {project.contractUrl && (
            <a 
              href={project.contractUrl}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary-dark/50 text-off-white text-sm font-medium hover:bg-primary-dark/20 transition-colors"
            >
              <FileCode className="w-4 h-4" />
              Contract
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
