import { motion } from 'framer-motion';
import { ArrowRight, Download, ShieldCheck, Github, Linkedin, Mail } from 'lucide-react';
import { GradientText } from '@/components/GradientText';
import { useTheme } from '@/hooks/useTheme';

export function Hero() {
  const { mode } = useTheme();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isFuturistic = mode === 'futuristic';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className={`relative min-h-screen flex items-center overflow-hidden transition-colors duration-700 ${
      isFuturistic ? 'bg-futuristic-gradient' : 'bg-minimal-gradient'
    }`}>
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-sea/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-dark/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Status/Context */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-primary-sea" />
            <span className="text-xs font-mono text-primary-light uppercase tracking-[0.3em]">Fullstack Engineer • Industrial Mathematics</span>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl md:text-8xl font-bold font-heading leading-[1.05] mb-8"
          >
            I build systems <br />
            that <GradientText>Don't Break.</GradientText>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate leading-relaxed mb-12 max-w-2xl font-body"
          >
            Passionate about building high-performance systems and decentralized applications. 
            I leverage <span className="text-off-white font-medium italic mx-1">mathematical logic</span> 
             to create fault-tolerant architectures that scale. Focus: FinTech, Web3, and Enterprise Tools.
          </motion.p>
          
          {/* Tech Pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-16">
            {['React', 'Node.js', 'TypeScript', 'Web3', 'Python'].map((tech) => (
              <span key={tech} className="px-4 py-1.5 rounded-xl border border-primary-light/10 bg-primary-light/5 text-xs font-mono text-primary-light">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 mb-16">
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className={`group inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-bold text-sm tracking-widest transition-all duration-300 ${
                isFuturistic 
                  ? 'bg-primary-sea text-white shadow-glow hover:shadow-glow-lg' 
                  : 'bg-darker text-white hover:bg-primary-dark'
              }`}
            >
              EXPLORE SOLUTIONS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/cv.pdf"
              className={`group inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl border font-bold text-sm tracking-widest transition-all duration-300 ${
                isFuturistic 
                  ? 'border-primary-sea/30 text-off-white hover:bg-primary-sea/10' 
                  : 'border-slate/20 text-slate hover:border-darker hover:text-darker'
              }`}
            >
              <Download className="w-4 h-4" />
              DOWNLOAD CV
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div variants={itemVariants} className="flex items-center gap-8 border-t border-primary-light/10 pt-10">
            <div className="flex gap-6">
              <a href="https://github.com/zenmisan" target="_blank" className="text-slate hover:text-primary-sea transition-colors"><Github className="w-5 h-5" /></a>
              <a href="https://linkedin.com/in/zenmisan" target="_blank" className="text-slate hover:text-primary-sea transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="mailto:Zenmisan@gmail.com" className="text-slate hover:text-primary-sea transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
            <div className="h-4 w-px bg-primary-light/20" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary-sea" />
              <span className="text-[10px] font-mono text-slate uppercase tracking-widest">Verified Engineer</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}


