import React from 'react';
import technologiesData from '../data/technologies.json';

interface Technology {
  name: string;
  icon: string;
}

interface SkillCardProps {
  technology: Technology;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ technology, index }) => {
  const getIconComponent = (iconName: string) => {
    return (
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 shadow-lg">
        <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center">
          <img
            src={`/src/assets/technologies/${iconName}.png`}
            alt={`${iconName} technology`}
            className="w-10 h-10 object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              if (target.parentElement) {
                target.parentElement.innerHTML = `
                  <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span class="text-white font-bold text-xs uppercase">${iconName.slice(0, 2)}</span>
                  </div>
                `;
              }
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div 
      className="group relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 dark:border-gray-700"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 rounded-3xl"></div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 rounded-3xl p-[1px]">
        <div className="w-full h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl"></div>
      </div>

      <div className="relative p-8 h-full flex flex-col items-center justify-center text-center space-y-4">
        <div className="group-hover:scale-110 transition-transform duration-300">
          {getIconComponent(technology.icon)}
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {technology.name}
        </h3>
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-6">
            Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologiesData.map((technology, index) => (
            <SkillCard
              key={technology.name}
              technology={technology}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
