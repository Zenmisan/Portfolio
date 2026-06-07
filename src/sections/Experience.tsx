import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ScrollReveal';
import { TimelineItem } from '@/components/TimelineItem';
import { timelineItems } from '@/data/experience';
import { Briefcase, Rocket } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export function Experience() {
  const { mode } = useTheme();
  const isFuturistic = mode === 'futuristic';

  return (
    <section id="experience" className={`relative section-padding overflow-hidden transition-colors duration-700 ${
      isFuturistic ? 'bg-darker' : 'bg-off-white/5'
    }`}>
      {/* Background Decor */}
      {isFuturistic && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-primary-sea/30" />
        </div>
      )}

      <div className="relative z-10 max-w-5xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-20">
          <ScrollReveal>
            <span className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] mb-4 ${
              isFuturistic ? 'text-primary-sea' : 'text-slate'
            }`}>
              <Briefcase className="w-3 h-3" />
              Professional Journey
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-off-white mb-6">
              Experience & <span className="text-primary-light">Education</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-slate max-w-2xl mx-auto text-lg">
              A timeline of my professional growth and academic foundations in mathematics.
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
            className={`hidden md:block absolute left-1/2 top-0 w-[1px] -translate-x-1/2 ${
              isFuturistic 
                ? 'bg-gradient-to-b from-primary-sea via-primary-dark to-transparent' 
                : 'bg-gradient-to-b from-primary-light via-primary-light/20 to-transparent'
            }`}
          />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-0">
            {timelineItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`md:grid md:grid-cols-2 md:gap-16 ${
                  index !== timelineItems.length - 1 ? 'md:mb-16' : ''
                }`}
              >
                {/* Left side items */}
                {index % 2 === 0 ? (
                  <>
                    <div className="md:text-right">
                      <TimelineItem item={item} index={index} isLeft={true} />
                    </div>
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <div>
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
          <div className={`mt-24 p-8 rounded-3xl border transition-all duration-500 ${
            isFuturistic 
              ? 'bg-primary-dark/20 border-primary-light/10 backdrop-blur-md' 
              : 'bg-white border-primary-dark/5 shadow-xl shadow-primary-dark/5'
          }`}>
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
              <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${
                isFuturistic ? 'bg-primary-sea/20 text-primary-sea' : 'bg-primary-dark text-white'
              }`}>
                <Rocket className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`text-xl font-bold font-heading mb-2 ${
                  isFuturistic ? 'text-off-white' : 'text-darker'
                }`}>
                  Committed to Continuous Improvement
                </h3>
                <p className="text-slate text-sm leading-relaxed max-w-3xl">
                  Beyond my professional history, I dedicate 10+ hours weekly to deep-diving into 
                  emerging technologies. Currently focused on Zero-Knowledge Proofs and 
                  High-Frequency Trading architectures.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

