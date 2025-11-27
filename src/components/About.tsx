import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" aria-label="About Dominic Lim" className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-16 max-w-6xl w-full">
        <figure className="flex-shrink-0">
          <img 
            src="/photoOfMe.jpg" 
            alt="Dominic Lim - Aspiring Software Engineer and Student Developer" 
            className="h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-3xl object-cover shadow-2xl"
            loading="eager"
            decoding="async"
          />
        </figure>
        
        <div className="text-center lg:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            Hi, I'm Dominic!
          </h2>
          <p className="text-lg md:text-xl description-text max-w-lg leading-relaxed">
            I am passionate about coding, solving complex problems, and building useful projects that make a difference!
          </p>
        </div>
      </div>
    </section>
  );
};
