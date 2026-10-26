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
        'Go',
        'Kotlin',
        'C#',
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
        'Flutter',
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
        'Supabase',
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
      id: 'cycles',
      title: 'Cycles',
      category: 'Local-First | P2P Sync',
      status: 'v1.0.0',
      year: '2024 | Present',
      summary:
        'An offline-first, peer-to-peer proximity task synchronization platform engineered with zero cloud dependencies, no accounts, and deterministic conflict resolution.',
      highlights: [
        '4-tier proximity transport hierarchy: Wi-Fi Direct P2P (~15-50 MB/s), local LAN mDNS, BLE GATT framing, and optional self-hosted relay.',
        'Deterministic concurrent state merging via Automerge CRDTs coupled with reactive SQLite (Drift) for sub-millisecond local queries.',
        'High-performance native networking, frame validation, and cryptographic device pairing (TOFU) compiled in Rust via flutter_rust_bridge.',
      ],
      techStack: [
        'Flutter',
        'Rust',
        'Go',
        'Automerge CRDT',
        'SQLite',
        'BLE',
        'Wi-Fi Direct',
      ],
      liveUrl: 'https://z-cycles.web.app',
      githubUrl: 'https://github.com/Zenmisan/Cycle',
    },
    {
      id: 'manga-dl',
      title: 'manga-dl',
      category: 'Multi-Platform Reading Ecosystem',
      status: 'Active',
      year: '2024 | Present',
      summary:
        'A modern reading ecosystem for manga, manhwa, and web novels spanning Web (PWA), native Android, native Windows, and native Linux.',
      highlights: [
        'Tachiyomi-compatible extension engine supporting 500+ sources, 4 reading modes, and WebSocket download queue for offline CBZ/EPUB.',
        'Native multi-platform clients: Android (Kotlin & Jetpack Compose), Windows (WinUI 3, .NET, and native C++20 image decompression DLL), and Linux (GTK4).',
        'FastAPI Python backend for web scraping/proxying, integrated with Supabase for cross-device library and reading progress sync.',
      ],
      techStack: [
        'React',
        'TypeScript',
        'Kotlin',
        'C# / WinUI 3',
        'C++20',
        'Python',
        'FastAPI',
        'Supabase',
        'SQLite',
      ],
      liveUrl: 'https://manga-dl.web.app',
      githubUrl: 'https://github.com/Zenmisan/manga-dl',
    },
    {
      id: 'stytch',
      title: 'Stytch',
      category: 'WhatsApp Bot & Dashboard',
      status: 'In Progress',
      year: '2024 | Present',
      summary:
        'A high-performance WhatsApp automation bot and web developer dashboard engineered with TypeScript and Bun, replacing CLI-only bots with a modern management GUI.',
      highlights: [
        'Web management dashboard for visual QR authentication/pairing, custom command creation, and real-time log streaming over WebSockets.',
        'Modular TypeScript & Bun backend powered by Baileys, SQLite persistence, and automated sticker conversion and media pipelines.',
        'Multi-container Docker architecture with VPS deployment scripts and owner-restricted command security.',
      ],
      techStack: [
        'TypeScript',
        'Bun',
        'React',
        'WebSocket',
        'Baileys',
        'SQLite',
        'Docker',
        'Tailwind CSS',
      ],
      liveUrl: 'https://stytch.web.app',
      githubUrl: 'https://github.com/Zenmisan/stytch',
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
