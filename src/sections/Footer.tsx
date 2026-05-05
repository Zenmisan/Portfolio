import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

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
    <footer className="relative bg-darker border-t border-primary-dark/20">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Logo & Tagline */}
          <div>
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-2xl font-bold font-heading text-off-white hover:text-primary-light transition-colors inline-block mb-4"
            >
              Coolz<span className="text-primary-sea">.</span>Ire
            </a>
            <p className="text-slate text-sm leading-relaxed mb-4">
              Fullstack Developer & Industrial Mathematics Student building the future of tech from Lagos, Nigeria.
            </p>
            <p className="text-xs text-slate/60">
              Bridging mathematical logic with code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium text-off-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate hover:text-primary-light transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-medium text-off-white uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-primary-dark/30 flex items-center justify-center text-slate hover:text-primary-light hover:bg-primary-dark/50 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-dark/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-slate text-sm">
              © {new Date().getFullYear()} ZENMI. All rights reserved.
            </p>
            <p className="text-slate/60 text-sm flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-primary-sea fill-primary-sea" /> and precision
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
