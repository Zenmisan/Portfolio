import { motion } from 'framer-motion';

interface TechBadgeProps {
  tech: string;
  delay?: number;
}

export function TechBadge({ tech, delay = 0 }: TechBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.4, 
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 20px rgba(158, 197, 171, 0.3)'
      }}
      className="inline-flex items-center px-4 py-2 rounded-full border border-primary-dark/50 bg-dark/50 text-primary-light text-sm font-mono backdrop-blur-sm transition-all duration-200"
    >
      {tech}
    </motion.span>
  );
}
