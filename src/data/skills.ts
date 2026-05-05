export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["JavaScript", "Python", "HTML5", "CSS3", "TypeScript"]
  },
  {
    name: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Next.js", "Tailwind CSS"]
  },
  {
    name: "Web3 & Blockchain",
    skills: ["Hardhat", "Smart Contracts", "DApp Development", "Solidity"]
  },
  {
    name: "Other Skills",
    skills: ["Data Analysis", "UI/UX Design", "Automation", "REST APIs"]
  }
];

export const softSkills = [
  "Rapid Learning",
  "Logic & Problem Solving",
  "Project Management",
  "Analytical Thinking",
  "Team Collaboration"
];
