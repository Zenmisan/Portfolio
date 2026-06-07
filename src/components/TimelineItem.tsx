import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import type { TimelineItem as TimelineItemType } from '@/data/experience';
import { useTheme } from '@/hooks/useTheme';

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
  isLeft: boolean;
}

export function TimelineItem({ item, index, isLeft }: TimelineItemProps) {
  const { mode } = useTheme();
  const isFuturistic = mode === 'futuristic';
  const Icon = item.type === 'education' ? GraduationCap : Briefcase;

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: isLeft ? -20 : 20 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`relative flex items-start gap-6 md:gap-10 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Icon Node */}
      <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-500 ${
        isFuturistic 
          ? 'bg-primary-dark border-primary-sea/40 text-primary-sea shadow-[0_0_15px_rgba(39,76,146,0.3)]' 
          : 'bg-white border-primary-dark/10 text-primary-dark'
      }`}>
        <Icon className="w-5 h-5" />
      </div>

      {/* Content Card */}
      <div className={`flex-1 group ${isLeft ? 'text-left' : 'md:text-left md:flex-row-reverse'}`}>
        <span className={`text-[10px] font-mono uppercase tracking-[0.2em] mb-2 block ${
          isFuturistic ? 'text-primary-sea' : 'text-slate'
        }`}>
          {item.period}
        </span>
        
        <h3 className={`text-xl font-bold font-heading mb-1 transition-colors duration-300 ${
          isFuturistic ? 'text-off-white group-hover:text-primary-light' : 'text-darker group-hover:text-primary-sea'
        }`}>
          {item.title}
        </h3>
        
        <p className="text-primary-light text-sm font-medium mb-4">
          {item.organization}
        </p>
        
        <p className={`text-sm leading-relaxed max-w-lg ${
          isFuturistic ? 'text-slate' : 'text-charcoal/80'
        }`}>
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

