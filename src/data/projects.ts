export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  contractUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "NexusAcademia",
    description: "A high-performance academic record system designed for efficiency and data integrity. Streamlines student management with real-time updates and intuitive dashboards.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/images/project-1.jpg",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "ZenFinance",
    description: "A personal expense tracker focused on clean UI and financial management. Features intuitive dashboards, spending analytics, and budget planning tools.",
    tech: ["React", "TypeScript", "Chart.js"],
    image: "/images/project-2.jpg",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "ScholarshipFund (Web3)",
    description: "A decentralized scholarship application built with Hardhat and smart contracts to automate and secure funding distribution on the blockchain.",
    tech: ["Solidity", "Hardhat", "React"],
    image: "/images/project-3.jpg",
    githubUrl: "#",
    contractUrl: "#"
  },
  {
    id: 4,
    title: "F&D Delight",
    description: "An end-to-end e-commerce platform and business plan for a bakery/catering venture. Complete with order management, payment integration, and inventory tracking.",
    tech: ["React", "Node.js", "Stripe"],
    image: "/images/project-4.jpg",
    liveUrl: "#"
  },
  {
    id: 5,
    title: "Automation Bots",
    description: "Custom-built WhatsApp and Telegram bots for task automation and AI integration. Streamlines communication workflows and enhances productivity.",
    tech: ["Python", "Node.js", "AI APIs"],
    image: "/images/project-5.jpg",
    githubUrl: "#"
  }
];
