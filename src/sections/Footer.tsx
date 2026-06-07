import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/zenmisan', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/zenmisan', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/zenmisan', label: 'Twitter' },
  { icon: Mail, href: 'mailto:zenmisan@gmail.com', label: 'Email' }
];

export function Footer() {
  const { mode } = useTheme();
  const isFuturistic = mode === 'futuristic';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className={`relative border-t transition-colors duration-700 ${
      isFuturistic ? 'bg-darker border-primary-light/10' : 'bg-white border-primary-dark/5'
    }`}>
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-2xl font-bold font-heading inline-block mb-6 ${
                isFuturistic ? 'text-off-white' : 'text-darker'
              }`}
            >
              Coolz<span className="text-primary-sea">.</span>Ire
            </a>
            <p className="text-slate text-base leading-relaxed max-w-sm mb-8">
              Engineering reliable, high-performance systems with mathematical precision and a 
              focus on problem elimination.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isFuturistic 
                      ? 'bg-primary-dark/40 border border-primary-light/10 text-primary-light hover:text-off-white hover:bg-primary-sea/20' 
                      : 'bg-off-white border border-primary-dark/5 text-slate hover:text-primary-sea hover:bg-white shadow-sm'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className={`text-xs font-mono uppercase tracking-widest mb-6 ${
              isFuturistic ? 'text-primary-sea' : 'text-slate'
            }`}>
              Navigation
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm transition-colors ${
                      isFuturistic ? 'text-slate hover:text-off-white' : 'text-charcoal/60 hover:text-primary-sea'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div>
            <h3 className={`text-xs font-mono uppercase tracking-widest mb-6 ${
              isFuturistic ? 'text-primary-sea' : 'text-slate'
            }`}>
              System Status
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className={`text-sm ${isFuturistic ? 'text-slate' : 'text-charcoal/60'}`}>
                  Operational & Available
                </span>
              </div>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`flex items-center gap-2 text-sm group ${
                  isFuturistic ? 'text-slate hover:text-primary-light' : 'text-charcoal/60 hover:text-primary-sea'
                }`}
              >
                <span>Back to top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="pt-8 border-t border-primary-light/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate text-xs font-mono">
            © {new Date().getFullYear()} AKIN-DAVID IREYEMI. DETERMINISTIC SYSTEMS.
          </p>
          <p className="text-slate/60 text-xs flex items-center gap-2">
            DESIGNED FOR <span className={isFuturistic ? 'text-primary-sea' : 'text-primary-dark'}>PRECISION</span> 
            <Heart className={`w-3 h-3 ${isFuturistic ? 'text-primary-sea fill-primary-sea' : 'text-primary-dark'}`} />
          </p>
        </div>
      </div>
    </footer>
  );
}

