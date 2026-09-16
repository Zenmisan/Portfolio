import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Resume', href: '/cv.pdf', isExternal: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'skills', 'projects', 'education'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#090b0e]/95 backdrop-blur-md border-b border-white/[0.08]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4">
        {/* Brand / Name */}
        <a
          href="#hero"
          onClick={() => setMobileMenuOpen(false)}
          className="text-sm font-semibold tracking-tight text-white hover:text-sky-400 transition-colors truncate max-w-[200px] sm:max-w-none"
        >
          {portfolioData.personal.name}
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden sm:flex items-center gap-6 text-sm" aria-label="Main Navigation">
          {links.map((link) => {
            const isActive = activeSection === link.label.toLowerCase();
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className={`transition-colors duration-150 py-1 ${
                  isActive && !link.isExternal
                    ? 'text-white font-medium'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="sm:hidden flex items-center justify-center h-10 w-10 rounded-md border border-white/[0.08] bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/[0.06] active:scale-95 transition-all"
        >
          {mobileMenuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <nav
          className="sm:hidden border-t border-white/[0.08] bg-[#090b0e] px-4 py-3 space-y-1 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150"
          aria-label="Mobile Navigation"
        >
          {links.map((link) => {
            const isActive = activeSection === link.label.toLowerCase();
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive && !link.isExternal
                    ? 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                    : 'text-slate-300 hover:bg-white/[0.04] hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {link.isExternal && (
                  <svg className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
};
