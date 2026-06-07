import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { Folder, LayoutGrid, Box, Cpu } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export function Projects() {
  const { mode } = useTheme();
  const isFuturistic = mode === 'futuristic';

  return (
    <section id="projects" className={`relative section-padding overflow-hidden transition-colors duration-700 ${
      isFuturistic ? 'bg-darker' : 'bg-off-white/5'
    }`}>
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-sea/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-dark/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-xs font-mono text-primary-sea uppercase tracking-[0.2em] mb-4">
                <LayoutGrid className="w-3 h-3" />
                Portfolio
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-bold font-heading text-off-white mb-6">
                Selected <span className="text-primary-light">Work</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-slate text-lg leading-relaxed">
                A selection of high-performance systems and decentralized applications built with a 
                focus on reliability and user experience.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="flex gap-4">
              <div className="p-4 rounded-2xl bg-primary-dark/20 border border-primary-light/10 text-center min-w-[100px]">
                <Box className="w-5 h-5 text-primary-sea mx-auto mb-2" />
                <span className="text-2xl font-bold text-off-white block">15+</span>
                <span className="text-[10px] text-slate uppercase font-mono">Projects</span>
              </div>
              <div className="p-4 rounded-2xl bg-primary-dark/20 border border-primary-light/10 text-center min-w-[100px]">
                <Cpu className="w-5 h-5 text-primary-sea mx-auto mb-2" />
                <span className="text-2xl font-bold text-off-white block">4+</span>
                <span className="text-[10px] text-slate uppercase font-mono">Years</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px] md:auto-rows-[220px]">
          {projects.map((project, index) => {
            // Logic for bento sizing
            const isLarge = index === 0;
            const isMedium = index === 1 || index === 4;
            
            return (
              <div 
                key={project.id}
                className={`
                  ${isLarge ? 'md:col-span-8 md:row-span-2' : ''}
                  ${isMedium ? 'md:col-span-4 md:row-span-2' : ''}
                  ${!isLarge && !isMedium ? 'md:col-span-4 md:row-span-1' : ''}
                `}
              >
                <ProjectCard project={project} index={index} compact={!isLarge && !isMedium} />
              </div>
            );
          })}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20"
        >
          <a
            href="https://github.com/zenmisan"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-primary-light/10 text-off-white font-medium hover:bg-primary-dark/40 transition-all duration-300"
          >
            <span>View All Engineering Work</span>
            <Folder className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

