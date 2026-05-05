import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { Folder } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="relative section-padding bg-darker overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-dark/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-sea/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-sm font-mono text-primary-sea uppercase tracking-wider mb-4">
              <Folder className="w-4 h-4" />
              Featured Projects
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-off-white mb-4">
              Selected <span className="text-primary-light">Work</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-slate max-w-2xl mx-auto">
              A collection of projects that showcase my skills in fullstack development, 
              Web3, and building scalable applications.
            </p>
          </ScrollReveal>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/zenmisan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary-dark/50 text-off-white font-medium hover:bg-primary-dark/20 transition-all duration-200"
          >
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
