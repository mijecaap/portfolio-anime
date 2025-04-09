import React from "react";
import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

export const skillCategories = [
  { id: 'all', label: 'Todas' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Base de Datos' },
  { id: 'tools', label: 'Herramientas' }
];

export const categorizedSkills = {
  frontend: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind"],
  backend: ["Node.js", "NestJS"],
  database: ["MongoDB", "PostgreSQL"],
  tools: ["Git", "Docker", "AWS"]
};

const baseSkills = [
    {
      skillLevel: 1,
      color: "#61DAFB",
      name: "React",
      icon: () => <FaReact size={24} color="#61DAFB" />
    },
    {
      skillLevel: 1,
      color: "#3178C6",
      name: "TypeScript",
      icon: () => <SiTypescript size={24} color="#3178C6" />
    },
    {
      skillLevel: 5,
      color: "#F7DF1E",
      name: "JavaScript",
      icon: () => <SiJavascript size={24} color="#F7DF1E" />
    },
    {
      skillLevel: 5,
      color: "#339933",
      name: "Node.js",
      icon: () => <FaNode size={24} color="#339933" />
    },
    {
      skillLevel: 4,
      color: "#E0234E",
      name: "NestJS",
      icon: () => <SiNestjs size={24} color="#E0234E" />
    },
    {
      skillLevel: 4,
      color: "#47A248",
      name: "MongoDB",
      icon: () => <SiMongodb size={24} color="#47A248" />
    },
    {
      skillLevel: 3,
      color: "#4169E1",
      name: "PostgreSQL",
      icon: () => <SiPostgresql size={24} color="#4169E1" />
    },
    {
      skillLevel: 3,
      color: "#E34F26",
      name: "HTML5",
      icon: () => <FaHtml5 size={24} color="#E34F26" />
    },
    {
      skillLevel: 3,
      color: "#1572B6",
      name: "CSS3",
      icon: () => <FaCss3Alt size={24} color="#1572B6" />
    },
    {
      skillLevel: 2,
      color: "#06B6D4",
      name: "Tailwind",
      icon: () => <SiTailwindcss size={24} color="#06B6D4" />
    },
    {
      skillLevel: 2,
      color: "#F05032",
      name: "Git",
      icon: () => <FaGitAlt size={24} color="#F05032" />
    },
    {
      skillLevel: 3,
      color: "#2496ED",
      name: "Docker",
      icon: () => <FaDocker size={24} color="#2496ED" />
    },
    {
      skillLevel: 3,
      color: "#FF9900",
      name: "AWS",
      icon: () => <FaAws size={24} color="#FF9900" />
    }
  ];

export const skillsConfig = baseSkills.map(skill => ({
  ...skill,
  categories: Object.entries(categorizedSkills)
    .filter(([_, values]) => values.includes(skill.name))
    .map(([category]) => category)
}));
