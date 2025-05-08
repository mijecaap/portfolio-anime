import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaCodeBranch,
  FaNodeJs,
  FaDatabase,
  FaGit,
  FaMicrosoft,
  FaCogs,
  FaAngular,
  FaDocker,
  FaStripe,
} from "react-icons/fa";
import { RiNextjsLine, RiFirebaseFill } from "react-icons/ri";
import { SiDotnet, SiGatsby, SiJest, SiStyledcomponents, SiTailwindcss, SiTypescript, SiNestjs, SiFlutter, SiFigma, SiPostman, SiGithub, SiNpm, SiZod, SiReacthookform, SiPassport, SiPostgresql, SiSwagger, SiRedux, SiOpenai, SiTypeorm } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const skillCategories = [
  { id: "all", label: "Todas" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Base de Datos" },
  { id: "tools", label: "Herramientas" },
];

export const categorizedSkills = {
  frontend: [
    "React",
    "JavaScript",
    "Next.js",
    "Gatsby",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Styled Components",
    "Microfrontends",
    "Angular",
    "TypeScript",
    "Flutter",
    "React Hook Form",
    "Zod",
    "Zustand",
    "Redux",
  ],
  backend: [
    "Node.js",
    "C# (.NET Core)",
    "NestJS",
    "TypeORM",
    "JWT",
    "Passport.js",
    "Docker",
    "Swagger",
  ],
  database: [
    "SQL Server",
    "Firebase",
    "PostgreSQL",
  ],
  tools: [
    "VS Code",
    "Git",
    "GitHub",
    "Figma",
    "Postman",
    "NPM",
    "Jest",
    "React Testing Library",
    "Chrome DevTools",
    "Stripe",
    "Azure DevOps",
    "OpenAI API",
    "CI/CD",
    "Scrum",
    "Agile",
  ],
};

const baseSkills = [
  {
    skillLevel: 4,
    color: "#E34F26",
    name: "HTML5",
    icon: () => <FaHtml5 size={24} color="#E34F26" />
  },
  {
    skillLevel: 4,
    color: "#1572B6",
    name: "CSS3",
    icon: () => <FaCss3Alt size={24} color="#1572B6" />
  },
  {
    skillLevel: 4,
    color: "#F7DF1E",
    name: "JavaScript",
    icon: () => <FaJsSquare size={24} color="#F7DF1E" />
  },
  {
    skillLevel: 4,
    color: "#3178C6",
    name: "TypeScript",
    icon: () => <SiTypescript size={24} color="#3178C6" />
  },
  {
    skillLevel: 5,
    color: "#61DAFB",
    name: "React",
    icon: () => <FaReact size={24} color="#61DAFB" />
  },
  {
    skillLevel: 3,
    color: "#DD0031",
    name: "Angular",
    icon: () => <FaAngular size={24} color="#DD0031" />
  },
  {
    skillLevel: 4,
    color: "#FFFFFF",
    name: "Next.js",
    icon: () => <RiNextjsLine size={24} color="#FFFFFF" />
  },
  {
    skillLevel: 3,
    color: "#663399",
    name: "Gatsby",
    icon: () => <SiGatsby size={24} color="#663399" />
  },
  {
    skillLevel: 4,
    color: "#06B6D4",
    name: "Tailwind CSS",
    icon: () => <SiTailwindcss size={24} color="#06B6D4" />
  },
  {
    skillLevel: 4,
    color: "#DB7093",
    name: "Styled Components",
    icon: () => <SiStyledcomponents size={24} color="#DB7093" />
  },
  {
    skillLevel: 4,
    color: "#61DAFB",
    name: "Microfrontends",
    icon: () => <FaCodeBranch size={24} color="#61DAFB" />
  },
  {
    skillLevel: 3,
    color: "#02569B",
    name: "Flutter",
    icon: () => <SiFlutter size={24} color="#02569B" />
  },
  {
    skillLevel: 3,
    color: "#339933",
    name: "Node.js",
    icon: () => <FaNodeJs size={24} color="#339933" />
  },
  {
    skillLevel: 3,
    color: "#512BD4",
    name: "C# (.NET Core)",
    icon: () => <SiDotnet size={24} color="#512BD4" />
  },
  {
    skillLevel: 3,
    color: "#E0234E",
    name: "NestJS",
    icon: () => <SiNestjs size={24} color="#E0234E" />
  },
  {
    skillLevel: 3,
    color: "#6C33F5",
    name: "TypeORM",
    icon: () => <SiTypeorm size={24} color="#6C33F5" />
  },
  {
    skillLevel: 3,
    color: "#CC2927",
    name: "SQL Server",
    icon: () => <FaDatabase size={24} color="#CC2927" />
  },
  {
    skillLevel: 3,
    color: "#0064A5",
    name: "PostgreSQL",
    icon: () => <SiPostgresql size={24} color="#0064A5" />
  },
  {
    skillLevel: 3,
    color: "#FFCA28",
    name: "Firebase",
    icon: () => <RiFirebaseFill size={24} color="#FFCA28" />
  },
  {
    skillLevel: 4,
    color: "#F05032",
    name: "Git",
    icon: () => <FaGit size={24} color="#F05032" />
  },
  {
    skillLevel: 4,
    color: "#FFFFFF",
    name: "GitHub",
    icon: () => <SiGithub size={24} color="#FFFFFF" />
  },
  {
    skillLevel: 4,
    color: "#007ACC",
    name: "VS Code",
    icon: () => <VscVscode size={24} color="#007ACC" />
  },
  {
    skillLevel: 4,
    color: "#F24E1E",
    name: "Figma",
    icon: () => <SiFigma size={24} color="#F24E1E" />
  },
  {
    skillLevel: 4,
    color: "#FF6C37",
    name: "Postman",
    icon: () => <SiPostman size={24} color="#FF6C37" />
  },
  {
    skillLevel: 4,
    color: "#CB3837",
    name: "NPM",
    icon: () => <SiNpm size={24} color="#CB3837" />
  },
  {
    skillLevel: 4,
    color: "#0078D7",
    name: "Azure DevOps",
    icon: () => <FaMicrosoft size={24} color="#0078D7" />
  },
  {
    skillLevel: 3,
    color: "#5B5BEF",
    name: "React Hook Form",
    icon: () => <SiReacthookform size={24} color="#5B5BEF" />
  },
  {
    skillLevel: 3,
    color: "#3E67B1",
    name: "Zod",
    icon: () => <SiZod size={24} color="#3E67B1" />
  },  {
    skillLevel: 3,
    color: "#7E3AF2",
    name: "Zustand",
    icon: () => <FaCogs size={24} color="#7E3AF2" />
  },
  {
    skillLevel: 3,
    color: "#764ABC",
    name: "Redux",
    icon: () => <SiRedux size={24} color="#764ABC" />
  },
  {
    skillLevel: 3,
    color: "#34E27A",
    name: "Passport.js",
    icon: () => <SiPassport size={24} color="#34E27A" />
  },
  {
    skillLevel: 3,
    color: "#85EA2D",
    name: "Swagger",
    icon: () => <SiSwagger size={24} color="#85EA2D" />
  },
  {
    skillLevel: 2,
    color: "#2496ED",
    name: "Docker",
    icon: () => <FaDocker size={24} color="#2496ED" />
  },
  {
    skillLevel: 3,
    color: "#00A3E0",
    name: "JWT",
    icon: () => <FaCodeBranch size={24} color="#00A3E0" />
  },
  {
    skillLevel: 2,
    color: "#C21325",
    name: "Jest",
    icon: () => <SiJest size={24} color="#C21325" />
  },
  {
    skillLevel: 3,
    color: "#E33332",
    name: "React Testing Library",
    icon: () => <FaReact size={24} color="#E33332" />
  },
  {
    skillLevel: 3,
    color: "#635BFF",
    name: "Stripe",
    icon: () => <FaStripe size={24} color="#635BFF" />
  },
  {
    skillLevel: 3,
    color: "#10A37F",
    name: "OpenAI API",
    icon: () => <SiOpenai size={24} color="#10A37F" />
  },  {
    skillLevel: 3,
    color: "#4285F4",
    name: "CI/CD",
    icon: () => <FaCodeBranch size={24} color="#4285F4" />
  },
  {
    skillLevel: 4,
    color: "#4285F4",
    name: "Chrome DevTools",
    icon: () => <FaCodeBranch size={24} color="#4285F4" />
  },
  {
    skillLevel: 4,
    color: "#00AEEF",
    name: "Scrum",
    icon: () => <FaCodeBranch size={24} color="#00AEEF" />
  },
  {
    skillLevel: 4,
    color: "#83CD29",
    name: "Agile",
    icon: () => <FaCodeBranch size={24} color="#83CD29" />
  },
  {
    skillLevel: 3,
    color: "#0079BF",
    name: "Kanban",
    icon: () => <FaCodeBranch size={24} color="#0079BF" />
  }
];

export const skillsConfig = baseSkills.map((skill) => ({
  ...skill,
  categories: Object.entries(categorizedSkills)
    .filter(([_, values]) => values.includes(skill.name))
    .map(([category]) => category),
}));
