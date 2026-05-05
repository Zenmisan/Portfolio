import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import type { TimelineItem as TimelineItemType } from '@/data/experience';

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
  isLeft: boolean;
}

export function TimelineItem({ item, index, isLeft }: TimelineItemProps) {
  const Icon = item.type === 'education' ? GraduationCap : Briefcase;

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: isLeft ? -40 : 40 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`relative flex items-start gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Icon */}
      <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary-dark/50 border border-primary-sea/50 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary-light" />
      </div>

      {/* Content */}
      <div className={`flex-1 p-6 rounded-2xl bg-dark/50 border border-primary-dark/30 backdrop-blur-sm ${isLeft ? 'md:text-left' : 'md:text-right'}`}>
        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
          <span className="text-xs font-mono text-primary-sea uppercase tracking-wider">
            {item.period}
          </span>
        </div>
        <h3 className="text-xl font-bold font-heading text-off-white mb-1">
          {item.title}
        </h3>
        <p className="text-primary-light font-medium mb-3">
          {item.organization}
        </p>
        <p className="text-slate text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
