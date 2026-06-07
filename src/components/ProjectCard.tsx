import { motion } from 'framer-motion';
import { ExternalLink, Github, FileCode, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { useTheme } from '@/hooks/useTheme';

interface ProjectCardProps {
  project: Project;
  index: number;
  compact?: boolean;
}

export function ProjectCard({ project, index, compact = false }: ProjectCardProps) {
  const { mode } = useTheme();
  const isFuturistic = mode === 'futuristic';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`group relative h-full rounded-3xl overflow-hidden border transition-all duration-500 ${
        isFuturistic 
          ? 'bg-dark/40 border-primary-sea/20 backdrop-blur-md hover:border-primary-sea/50 hover:shadow-futuristic' 
          : 'bg-white/5 border-primary-light/10 hover:border-primary-light/30 hover:bg-white/10'
      }`}
    >
      {/* Background Image */}
      <div className={`absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110 ${
        compact ? 'opacity-20' : 'opacity-40'
      }`}>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-darker via-darker/80 to-transparent`} />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col p-6 md:p-8">
        <div className="flex justify-between items-start mb-auto">
          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, compact ? 2 : 4).map((t) => (
              <span 
                key={t}
                className={`px-3 py-1 text-[10px] font-mono rounded-full border transition-colors duration-300 ${
                  isFuturistic 
                    ? 'bg-primary-sea/10 border-primary-sea/20 text-primary-light' 
                    : 'bg-white/5 border-white/10 text-slate'
                }`}
              >
                {t}
              </span>
            ))}
          </div>

          <div className={`p-2 rounded-full border transition-all duration-300 ${
            isFuturistic 
              ? 'border-primary-sea/20 bg-primary-dark/50 text-primary-sea group-hover:bg-primary-sea group-hover:text-white' 
              : 'border-white/10 bg-white/5 text-slate group-hover:bg-white group-hover:text-darker'
          }`}>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl md:text-2xl font-bold font-heading text-off-white mb-3 transition-transform duration-300 group-hover:-translate-y-1">
            {project.title}
          </h3>
          
          {!compact && (
            <p className="text-slate text-sm mb-6 line-clamp-2 font-body leading-relaxed">
              {project.description}
            </p>
          )}

          {/* Links */}
          <div className="flex gap-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-light hover:text-off-white transition-colors"
                title="Live Demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-light hover:text-off-white transition-colors"
                title="GitHub Repo"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.contractUrl && (
              <a 
                href={project.contractUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-light hover:text-off-white transition-colors"
                title="Smart Contract"
              >
                <FileCode className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

