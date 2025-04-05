import React, { useState } from "react";
import TagCloud from "./TagCloud";
import { skills, skillCategories } from "./skillsData.jsx";

export default function SkillsCloud() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.categories.includes(activeCategory));

  return (
    <div className="space-y-8">
      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-4">
        {skillCategories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full transition-all duration-300
              ${activeCategory === category.id 
                ? 'bg-[#2196F3] text-white' 
                : 'bg-[#1a1a1a] text-gray-400 hover:bg-[#2196F3]/10 hover:text-[#2196F3]'}
              border border-[#2196F3]/20`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* TagCloud */}
      <div className="h-[600px] w-full flex items-center justify-center">
        <TagCloud words={filteredSkills} />
      </div>
    </div>
  );
}
