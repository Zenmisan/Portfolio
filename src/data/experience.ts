export interface TimelineItem {
  id: number;
  type: 'education' | 'experience';
  title: string;
  organization: string;
  period: string;
  description: string;
}

export const timelineItems: TimelineItem[] = [
  {
    id: 1,
    type: 'education',
    title: "B.Sc. Industrial Mathematics",
    organization: "University of Lagos (UNILAG)",
    period: "2024 - 2028",
    description: "Focusing on the application of mathematical principles to industrial and financial systems. Relevant coursework includes Statistics, Linear Algebra, Calculus, and Discrete Mathematics."
  },
  {
    id: 2,
    type: 'experience',
    title: "Founder & Creative Director",
    organization: "Zenmi",
    period: "2023 - Present",
    description: "Directing brand identity and creative projects for diverse clients. Leading design strategy and visual storytelling initiatives."
  },
  {
    id: 3,
    type: 'experience',
    title: "Fullstack Developer Journey",
    organization: "Self-Directed Learning",
    period: "2023 - Present",
    description: "Currently engaged in a rigorous self-directed roadmap focusing on scalable web architectures, financial technology, and blockchain development."
  }
];

export const stats = [
  { label: "Years of Coding", value: 3, suffix: "+" },
  { label: "Projects Completed", value: 10, suffix: "+" },
  { label: "Technologies Mastered", value: 5, suffix: "+" },
  { label: "Commitment to Excellence", value: 100, suffix: "%" }
];
