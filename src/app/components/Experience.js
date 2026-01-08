'use client';

import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import { useEffect, useRef } from 'react';
import { workExperience } from '../data/portfolioData';

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll('.experience-item');
      items.forEach((item) => observer.observe(item));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Experience
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          My professional journey
        </p>

        <div className="space-y-8">
          {workExperience.map((exp, index) => (
            <div
              key={exp.id}
              className="experience-item opacity-0 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500 dark:border-blue-400"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {exp.position}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                    <FiBriefcase className="w-4 h-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <FiCalendar className="w-4 h-4" />
                  <span>{exp.date}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {exp.description}
              </p>
              
              {exp.techStack && (
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {exp.techStack.map((tech, techIndex) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-700/50 transition-all duration-200 hover:scale-110"
                        title={tech.name}
                      >
                        <Icon 
                          className="w-5 h-5" 
                          style={{ color: tech.color }}
                        />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
