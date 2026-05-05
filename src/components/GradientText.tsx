import type { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span 
      className={`bg-gradient-to-r from-primary-light via-primary-sea to-primary-light bg-clip-text text-transparent ${className}`}
      style={{
        backgroundSize: '200% auto',
        animation: 'gradient 8s linear infinite'
      }}
    >
      {children}
    </span>
  );
}
