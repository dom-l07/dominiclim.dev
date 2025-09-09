import React, { useRef, useState, useEffect } from 'react';
import certificationsData from '../data/certifications.json';

interface CertificationItem {
  title: string;
  type: string;
  icon: string;
  dateOfIssue: string;
  credential: string;
  Skills?: string[];
}

interface CertificationCardProps {
  certification: CertificationItem;
  index: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  const getIconComponent = (iconName: string) => {
    return (
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 shadow-lg">
        <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center">
          <img
            src={`/src/assets/certifications/${iconName}.png`}
            alt={`${iconName} certification`}
            className="w-full h-full object-contain rounded-2xl"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              if (target.parentElement) {
                target.parentElement.innerHTML = `
                  <div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span class="text-white font-bold text-sm uppercase">${iconName}</span>
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
      className={`group relative flex-shrink-0 w-80 sm:w-96 h-[500px] transform transition-all duration-700 ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-12 opacity-0'
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 rounded-3xl"></div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 rounded-3xl p-[1px]">
        <div className="w-full h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl"></div>
      </div>

      <div className="relative pt-4 px-6 pb-6 h-full flex flex-col overflow-hidden">
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            {getIconComponent(certification.icon)}
          </div>
          
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-tight line-clamp-2">
            {certification.title}
          </h3>
          
          <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
            {certification.type}
          </div>
        </div>

        <div className="text-center mb-5">
          <div className="inline-flex items-center px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <svg className="w-3 h-3 mr-1.5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
              Issued: {certification.dateOfIssue}
            </span>
          </div>
        </div>

        {certification.Skills && certification.Skills.length > 0 && (
          <div className="flex-grow mb-5 overflow-hidden">
            <div className="max-h-32 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800">
              <div className="space-y-2">
                {certification.Skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-start group/skill"
                    style={{ animationDelay: `${skillIndex * 100}ms` }}
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-2 mt-1.5 flex-shrink-0 group-hover/skill:scale-125 transition-transform duration-200"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors duration-200">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-auto">
          <a
            href={certification.credential}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative w-full inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 text-sm">View Credential</span>
            <svg className="w-3 h-3 ml-2 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export const Certifications: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const infiniteCertifications = [
    ...certificationsData,
    ...certificationsData,
    ...certificationsData
  ];
  const originalLength = certificationsData.length;

  const handleInfiniteScroll = () => {
    if (scrollContainerRef.current && !isTransitioning) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const isMobile = window.innerWidth < 640;
      const gap = isMobile ? 16 : 32;
      const cardWidth = isMobile ? 320 + gap : 384 + gap;
      const totalCards = infiniteCertifications.length;
      const currentCardIndex = Math.round(scrollLeft / cardWidth);

      if (currentCardIndex <= 0) {
        setIsTransitioning(true);
        scrollContainerRef.current.scrollLeft = originalLength * cardWidth;
        setTimeout(() => setIsTransitioning(false), 50);
      }
      else if (currentCardIndex >= totalCards - originalLength) {
        setIsTransitioning(true);
        scrollContainerRef.current.scrollLeft = originalLength * cardWidth;
        setTimeout(() => setIsTransitioning(false), 50);
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollLeft = originalLength * (384 + 32);
      
      let scrollTimeout: NodeJS.Timeout;
      
      const handleScroll = () => {
        clearTimeout(scrollTimeout);
        
        scrollTimeout = setTimeout(handleInfiniteScroll, 150);
      };
      
      container.addEventListener('scroll', handleScroll);
      
      return () => {
        container.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout);
      };
    }
  }, [originalLength]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const isMobile = window.innerWidth < 640;
      const gap = isMobile ? 16 : 32;
      const cardWidth = isMobile ? 320 + gap : 384 + gap;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - cardWidth 
        : currentScroll + cardWidth;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="certifications" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent mb-6">
            Certifications
          </h2>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-8 overflow-x-auto scrollbar-hide py-8 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {infiniteCertifications.map((certification, index) => (
              <CertificationCard
                key={`infinite-${index}`}
                certification={certification}
                index={index % originalLength}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={() => scroll('left')}
            className="group relative p-4 rounded-2xl shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => scroll('right')}
            className="group relative p-4 rounded-2xl shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
