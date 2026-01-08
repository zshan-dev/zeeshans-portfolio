'use client';

import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
          Zeeshan Bombaywala
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8 animate-slide-up animation-delay-200">
          Full-Stack Developer | Software Developer @ Checklick | IBM Z Ambassador
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-500 mb-12 max-w-2xl mx-auto animate-slide-up animation-delay-400">
          Building modern web applications with React, Next.js, and cloud technologies.
          Passionate about AI integration and enterprise solutions.
        </p>
        
        <div className="flex items-center justify-center gap-6 mb-16 animate-slide-up animation-delay-600">
          <a
            href="https://github.com/zshan-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
            aria-label="GitHub"
          >
            <FiGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/zeeshan-bombaywala-8846b6289/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:zeeshanmb10@gmail.com"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-110"
            aria-label="Email"
          >
            <FiMail className="w-6 h-6" />
          </a>
        </div>

        <a
          href="#skills"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors animate-bounce"
        >
          <span>Explore</span>
          <FiArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
