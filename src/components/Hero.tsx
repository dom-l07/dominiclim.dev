import React from 'react';
import { Logo } from './ui/Logo';
import { TypingAnimation } from './ui/TypingAnimation';
import { ScrollIndicator } from './ui/ScrollIndicator';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 -mt-8 sm:-mt-12 md:-mt-16 relative">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-16 max-w-6xl w-full">
        <div className="flex-shrink-0">
          <Logo className="h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96" />
        </div>
        
        <div className="text-center lg:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            Dominic Lim
          </h1>
          <div className="text-2xl md:text-3xl lg:text-3xl relative text-gray-800 dark:text-gray-200">
            <span className="invisible whitespace-nowrap">I'm a Aspiring Software Engineer</span>
            <div className="absolute inset-0 whitespace-nowrap">
              I'm a <TypingAnimation 
                words={["Student", "Aspiring Software Engineer", "Problem Solver", "Challenge Seeker", "Seeker of Innovative Solutions"]}
              />
            </div>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-200 italic tracking-wide leading-relaxed">
            "Code with Purpose"
          </p>
        </div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
};
