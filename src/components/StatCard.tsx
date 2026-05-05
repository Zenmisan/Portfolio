import { useCountUp } from '@/hooks/useCountUp';

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export function StatCard({ value, suffix = '', label, delay = 0 }: StatCardProps) {
  const { count, ref } = useCountUp({ end: value, duration: 2000, delay });

  return (
    <div 
      ref={ref}
      className="p-6 rounded-2xl bg-dark/50 border border-primary-dark/30 backdrop-blur-sm card-hover"
    >
      <div className="text-4xl md:text-5xl font-bold font-heading text-off-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-primary-light font-medium">
        {label}
      </div>
    </div>
  );
}
