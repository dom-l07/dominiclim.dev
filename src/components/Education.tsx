import React, { useState, useEffect, useRef } from 'react';
import { education } from '../data/index.js';

interface EducationItem {
  title: string;
  institution_name: string;
  link: string;
  date: string;
  logo: string | { src: string };
  awards?: string[];
  positions?: string[];
  events?: string[];
}

interface TimelineProgressProps {
  progress: number;
}

const TimelineProgress: React.FC<TimelineProgressProps> = ({ progress }) => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-600 h-full">
      <div 
        className="w-full bg-blue-600 dark:bg-blue-400 transition-all duration-300 ease-out"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
};

interface TabContentProps {
  items: string[];
  type: 'awards' | 'positions' | 'events';
}

const TabContent: React.FC<TabContentProps> = ({ items, type }) => {
  if (!items || items.length === 0) {
    return (
      <div className="text-gray-500 dark:text-gray-400 italic">
        No {type} available
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-3">
          <span className="text-lg flex-shrink-0">•</span>
          <span className="text-gray-700 dark:text-gray-300">{item}</span>
        </li>
      ))}
    </ul>
  );
};

interface EducationCardProps {
  education: EducationItem;
  index: number;
  isLeft: boolean;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, index, isLeft }) => {
  const [activeTab, setActiveTab] = useState<'awards' | 'positions' | 'events'>('awards');
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: 'awards' as const, label: 'Awards', count: education.awards?.length || 0 },
    { id: 'positions' as const, label: 'Positions', count: education.positions?.length || 0 },
    { id: 'events' as const, label: 'Events', count: education.events?.length || 0 },
  ];

  return (
    <div
      ref={cardRef}
      className={`relative flex items-center w-full ${
        isLeft ? 'md:justify-start justify-center' : 'md:justify-end justify-center'
      }`}
    >
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 z-10" />
      
      <div
        className={`w-full md:w-5/12 px-4 md:px-0 ${
          isLeft ? 'md:pr-8' : 'md:pl-8'
        } transform transition-all duration-700 ${
          isVisible 
            ? 'translate-x-0 opacity-100' 
            : 'md:' + (isLeft 
              ? '-translate-x-full opacity-0' 
              : 'translate-x-full opacity-0') + ' translate-y-8 opacity-0'
        }`}
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-start gap-3 sm:gap-4 mb-4">
            <div className="flex-shrink-0">
              <img
                src={typeof education.logo === 'string' ? education.logo : education.logo.src}
                alt={`${education.institution_name} logo`}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {education.title}
              </h3>
              <a 
                href={education.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 cursor-pointer underline decoration-transparent hover:decoration-current"
              >
                {education.institution_name}
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {education.date}
              </p>
            </div>
          </div>

          <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
            <nav className="flex space-x-1 overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium rounded-t-lg transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  {tab.label}
                  {tab.count > 0 && (
                    <span className="ml-1 text-xs bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-1.5 py-0.5 rounded-full">
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="min-h-[100px]">
            <TabContent
              items={education[activeTab] || []}
              type={activeTab}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Education: React.FC = () => {
  const [timelineProgress, setTimelineProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const sectionStart = sectionTop - windowHeight;
      const sectionEnd = sectionTop + sectionHeight;
      const progress = Math.max(0, Math.min(100, 
        ((scrollPosition - sectionStart) / (sectionEnd - sectionStart)) * 100
      ));

      setTimelineProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="education" 
      className="min-h-screen py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </div>

        <div className="relative">
          <TimelineProgress progress={timelineProgress} />
          
          <div className="space-y-8 md:space-y-16">
            {education.map((educationItem, index) => (
              <EducationCard
                key={index}
                education={educationItem}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
