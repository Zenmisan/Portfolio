import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { TimelineItem } from '@/components/TimelineItem';
import { timelineItems } from '@/data/experience';
import { Briefcase } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="relative section-padding bg-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-primary-light" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-sm font-mono text-primary-sea uppercase tracking-wider mb-4">
              <Briefcase className="w-4 h-4" />
              Experience & Education
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-off-white mb-4">
              My <span className="text-primary-light">Journey</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-slate max-w-2xl mx-auto">
              My educational background and professional experiences that have shaped 
              my career as a developer.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-primary-sea via-primary-dark to-transparent -translate-x-1/2"
          />

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-0">
            {timelineItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`md:grid md:grid-cols-2 md:gap-8 ${
                  index !== timelineItems.length - 1 ? 'md:mb-8' : ''
                }`}
              >
                {/* Left side items */}
                {index % 2 === 0 ? (
                  <>
                    <div className="md:text-right md:pr-12">
                      <TimelineItem item={item} index={index} isLeft={true} />
                    </div>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <div className="md:pl-12">
                      <TimelineItem item={item} index={index} isLeft={false} />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <ScrollReveal delay={0.4}>
          <div className="mt-16 p-6 md:p-8 rounded-2xl bg-darker/50 border border-primary-dark/30 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-sea/20 flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-off-white mb-2">
                  Always Learning, Always Growing
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  Currently engaged in a rigorous self-directed roadmap focusing on scalable 
                  web architectures, financial technology, and blockchain development. I'm always 
                  eager to take on new challenges and expand my skill set.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
