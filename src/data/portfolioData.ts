export interface Project {
  id: string;
  title: string;
  category: string;
  status: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  year: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  focus: string;
  coursework: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const portfolioData = {
  personal: {
    name: 'Akin-David Ireyemi',
    handle: 'zenmisan',
    role: 'Full-Stack Software Engineer',
    specialization: 'Backend Focused',
    location: 'Lagos, Nigeria',
    email: 'zenmisan@gmail.com',
    github: 'https://github.com/zenmisan',
    linkedin: 'https://linkedin.com/in/zenmisan',
    twitter: 'https://x.com/zenmisan',
    bio: 'Full-Stack Software Engineer based in Lagos, Nigeria, specializing primarily in backend systems and APIs while versatile in frontend development. Currently studying Industrial Mathematics at the University of Lagos. Self-taught, deeply curious about how systems work under the hood, and focused on writing clean, maintainable code.',
  },

  skills: [
    {
      title: 'Backend & APIs',
      skills: [
        'Python',
        'FastAPI',
        'Node.js',
        'Express',
        'PostgreSQL',
        'SQL',
        'REST APIs',
        'WebSocket APIs',
        'GraphQL',
      ],
    },
    {
      title: 'Languages',
      skills: [
        'Python',
        'TypeScript',
        'JavaScript',
        'Rust',
        'C++',
        'Java',
        'Solidity',
        'SQL',
      ],
    },
    {
      title: 'Frontend & UI',
      skills: [
        'React',
        'Next.js',
        'Vite',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
      ],
    },
    {
      title: 'Tools & DevOps',
      skills: [
        'Docker',
        'Linux',
        'Git',
        'CI/CD',
        'Bun',
        'PowerShell',
        'Windows',
      ],
    },
    {
      title: 'Mathematics & Data',
      skills: [
        'Industrial Mathematics',
        'Linear Algebra',
        'Statistics',
        'NumPy',
        'Pandas',
        'MATLAB',
        'LaTeX',
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: 'manga-dl',
      title: 'manga-dl',
      category: 'Web Application & Scraper',
      status: 'In Progress',
      year: '2024',
      summary:
        'A web application and scraping tool for manga discovery, automated chapter fetching, and online reading.',
      highlights: [
        'Scrapes and fetches manga chapters with rate limiting and error recovery.',
        'Clean, responsive web interface built for mobile and desktop reading.',
        'Integrated with Firebase for deployment and hosting.',
      ],
      techStack: ['Python', 'TypeScript', 'React', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://manga-dl.web.app',
      githubUrl: 'https://github.com/zenmisan/manga-dl',
    },
  ] as Project[],

  education: {
    degree: 'B.Sc. Industrial Mathematics',
    institution: 'University of Lagos (UNILAG)',
    location: 'Lagos, Nigeria',
    period: '2024 | 2028 (Expected)',
    focus: 'Applied mathematical logic, statistics, and computational modeling.',
    coursework: [
      'Linear Algebra',
      'Statistics',
      'Calculus',
      'Discrete Mathematics',
      'Differential Equations',
    ],
  } as EducationItem,
};
