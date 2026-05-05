import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { TechBadge } from '@/components/TechBadge';
import { SocialLinks } from '@/components/SocialLinks';
import { GradientText } from '@/components/GradientText';

const techStack = ['Typescript', 'Python', 'React', 'Node.js', 'Web3'];

export function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-darker/80 via-darker/70 to-darker" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary-light/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-12 h-[2px] bg-primary-sea" />
            <span className="text-sm font-mono text-primary-light uppercase tracking-wider">
              Fullstack Developer & Mathematics Student
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] mb-6"
          >
            <span className="text-off-white">Bridging</span>
            <br />
            <GradientText>Mathematical Logic</GradientText>
            <br />
            <span className="text-off-white">with Code</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-slate mb-6"
          >
            <MapPin className="w-4 h-4 text-primary-sea" />
            <span className="text-sm">Lagos, Nigeria</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-slate leading-relaxed mb-8 max-w-2xl"
          >
            An analytical and detail-oriented Fullstack Developer with a strong foundation in 
            Industrial Mathematics. Passionate about building high-performance systems and 
            decentralized applications, with a focus on FinTech, Investment Banking, and Web3.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-sea text-off-white font-medium hover:bg-primary-dark transition-all duration-200 hover:shadow-glow"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary-dark/50 text-off-white font-medium hover:bg-primary-dark/20 transition-all duration-200"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mb-10"
          >
            <p className="text-xs font-mono text-slate uppercase tracking-wider mb-4">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <TechBadge key={tech} tech={tech} delay={1 + index * 0.05} />
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <SocialLinks />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-primary-dark/50 flex items-start justify-center p-2"
        >
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-primary-light"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
