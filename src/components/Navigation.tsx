import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Sparkles, Zap, User, Code, Briefcase, Mail } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const navLinks = [
  { name: 'About', href: '#about', icon: <User className="w-4 h-4" /> },
  { name: 'Projects', href: '#projects', icon: <Code className="w-4 h-4" /> },
  { name: 'Experience', href: '#experience', icon: <Briefcase className="w-4 h-4" /> },
  { name: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4" /> }
];

export function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { mode, toggleMode } = useTheme();
  const isFuturistic = mode === 'futuristic';

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) setIsScrolled(true);
    else setIsScrolled(false);
  });

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 inset-x-0 mx-auto z-50 flex items-center justify-center pointer-events-none px-4"
    >
      <div className={`pointer-events-auto flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-500 ease-out border ${
        isScrolled 
          ? 'bg-darker/80 backdrop-blur-xl border-primary-light/10 shadow-2xl' 
          : 'bg-transparent border-transparent'
      }`}>
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-sea text-white font-bold font-heading text-sm transition-transform hover:scale-110"
        >
          AI
        </a>

        {/* Links */}
        <nav className="flex items-center gap-1 mx-2">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-colors duration-300"
            >
              <span className={`relative z-10 ${
                hoveredIndex === idx ? 'text-primary-sea' : 'text-slate'
              }`}>
                <span className="hidden sm:block">{link.name}</span>
                <span className="block sm:hidden">{link.icon}</span>
              </span>
              
              {hoveredIndex === idx && (
                <motion.div
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-primary-sea/10 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleMode}
            className={`p-2.5 rounded-full transition-all duration-300 border ${
              isFuturistic 
                ? 'bg-primary-dark border-primary-light/10 text-primary-sea shadow-[0_0_15px_rgba(39,76,146,0.2)]' 
                : 'bg-off-white border-primary-dark/5 text-primary-dark shadow-sm'
            }`}
          >
            {mode === 'minimal' ? <Zap className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="px-6 py-2.5 rounded-full bg-primary-sea text-white text-xs font-bold tracking-widest uppercase hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary-sea/20"
          >
            TALK
          </a>
        </div>
      </div>
    </motion.div>
  );
}

