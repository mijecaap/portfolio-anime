import React from 'react';
import { BsCircle, BsCircleFill } from 'react-icons/bs';

export default function MobileSkills({ skills }) {
  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-lg mx-auto">
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className="bg-[#1a1a1a]/50 p-4 rounded-lg border border-[#2196F3]/20 hover:border-[#2196F3]/50 
                   transition-all duration-300 hover:transform hover:scale-105 group"
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="text-3xl group-hover:scale-110 transition-transform">
              {skill.icon()}
            </div>
            
            <div className="text-center">
              <h3 className="text-white font-medium mb-2">{skill.name}</h3>
              <div className="flex gap-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  i < skill.skillLevel ? (
                    <BsCircleFill 
                      key={i} 
                      className="text-[#2196F3]" 
                      size={8}
                    />
                  ) : (
                    <BsCircle 
                      key={i} 
                      className="text-[#2196F3]/50" 
                      size={8}
                    />
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
