'use client';

import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { useEffect, useRef } from 'react';
import { portfolioProjects } from '../data/portfolioData';

export default function Portfolio() {
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
      const cards = sectionRef.current.querySelectorAll('.project-card');
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 px-6 sm:px-8 lg:px-12 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Projects
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          Some of my recent work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card opacity-0 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  {project.techStack.map((tech, techIndex) => {
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

                <div className="flex flex-wrap items-center gap-3">
                  {project.githubLink ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
                    >
                      <FiGithub className="w-4 h-4" />
                      <span>GitHub</span>
                      <FiExternalLink className="w-3 h-3" />
                    </a>
                  ) : project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
                    >
                      <FiGithub className="w-4 h-4" />
                      <span>View on GitHub</span>
                      <FiExternalLink className="w-3 h-3" />
                    </a>
                  ) : null}
                  {project.devpostLink && (
                    <a
                      href={project.devpostLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors font-medium"
                    >
                      <span>Devpost</span>
                      <FiExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
