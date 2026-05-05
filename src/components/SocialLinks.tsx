import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export function SocialLinks({ className = '', iconSize = 20 }: SocialLinksProps) {
  const links = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:coolzire@example.com', label: 'Email' }
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="p-2 rounded-lg text-slate hover:text-primary-light hover:bg-primary-dark/30 transition-all duration-200"
        >
          <Icon className="w-5 h-5" style={{ width: iconSize, height: iconSize }} />
        </a>
      ))}
    </div>
  );
}
