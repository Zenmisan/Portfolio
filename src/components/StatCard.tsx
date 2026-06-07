import { useCountUp } from '@/hooks/useCountUp';

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
  variant?: 'dark' | 'light';
}

export function StatCard({ value, suffix = '', label, delay = 0, variant = 'dark' }: StatCardProps) {
  const { count, ref } = useCountUp({ end: value, duration: 2000, delay });

  return (
    <div 
      ref={ref}
      className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
        variant === 'dark' 
          ? 'bg-primary-dark/20 border-primary-light/10 hover:border-primary-sea/30' 
          : 'bg-white border-primary-dark/5 shadow-lg shadow-primary-dark/5 hover:border-primary-sea/20'
      }`}
    >
      <div className={`text-4xl md:text-5xl font-bold font-heading mb-2 ${
        variant === 'dark' ? 'text-off-white' : 'text-darker'
      }`}>
        {count}{suffix}
      </div>
      <div className={`text-sm font-medium ${
        variant === 'dark' ? 'text-primary-light' : 'text-primary-sea'
      }`}>
        {label}
      </div>
    </div>
  );
}

