import { FiCode, FiServer, FiCloud, FiCpu } from 'react-icons/fi';
import { 
  SiJavascript, 
  SiPhp, 
  SiMysql, 
  SiHtml5, 
  SiCss3,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiDotnet,
  SiUnity,
  SiC,
  SiPython,
  SiDocker,
  SiFirebase,
  SiVercel,
  SiAmazon,
  SiOpenai
} from 'react-icons/si';

export const skills = [
  {
    id: "1",
    icon: FiCode,
    title: "Front-End Development",
    description: "Expert in building responsive, modern web interfaces using React.js, Next.js, HTML5, CSS3, and JavaScript. Experienced with Tailwind CSS for mobile-first responsive layouts and creating reusable component libraries."
  },
  {
    id: "2",
    icon: FiServer,
    title: "Back-End & Full-Stack",
    description: "Proficient in PHP, MySQL, SQL for server-side logic and data persistence. Built secure full-stack applications with authentication, session management, and role-based access control. Experience with Node.js and RESTful APIs."
  },
  {
    id: "3",
    icon: FiCloud,
    title: "AI & Cloud Development",
    description: "Built and deployed AI-powered applications using OpenAI API, React, Next.js, and Firebase. Implemented CI/CD practices with Vercel and AWS. Created production-ready AI chatbots with 60% automation rate."
  },
  {
    id: "4",
    icon: FiCpu,
    title: "Enterprise & Mainframe",
    description: "IBM Z Student Ambassador with expertise in COBOL, JCL, Zowe CLI, Unix System Services, and REXX. Experienced in mainframe automation, Docker, Python scripting, and contributing to IBM Z open source projects."
  }
];

export const workExperience = [
  {
    id: 1,
    position: "Software Engineering Intern - Web Development",
    company: "Checklick",
    date: "December 2024 – February 2025",
    description: "Built and refactored React-based interfaces, creating responsive modal components, data management interfaces, and standardized UI elements. Refactored code to integrate shared component libraries and eliminate code duplication, improving maintainability and establishing reusable patterns across the application. Implemented mobile-first responsive layouts using Tailwind CSS, ensuring UI/UX consistency across all devices through standardized styling and compatibility testing. Followed agile development methodologies with iterative development cycles, code reviews, and component-based architecture which delivered production-ready features that align with project standards and improve code quality.",
    techStack: [
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" }
    ]
  },
  {
    id: 2,
    position: "IBM Z Student Ambassador",
    company: "IBM, YourBigYear",
    date: "September 2024 – PRESENT",
    description: "Earned IBM Z Xplore Concepts and Advanced badges, demonstrating proficiency in mainframe systems, automation, and enterprise computing environments. Using this knowledge to contribute to IBM Z and Linux open source projects. Hands-on experience with JCL, COBOL, REXX, Zowe CLI/VS Code, Docker, and Python. Automating routine batch workflows and reducing manual job effort through Zowe CLI and Ansible scripting. Created and led an IBM Z University Club, hosting events and growing a campus community of 150+ members.",
    techStack: [
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiDocker, name: "Docker", color: "#2496ED" },
      { icon: SiC, name: "COBOL/JCL", color: "#A8B9CC" }
    ]
  },
  {
    id: 3,
    position: "Software Engineering Fellow",
    company: "Headstarter",
    date: "June 2024 – August 2024",
    description: "Built and deployed AI projects using OpenAI, React JS, Next.js, Firebase, and Vercel, with cloud deployment (AWS) and incorporated CI/CD practices for production-ready builds with real users and iterative deployment. Created AI-powered customer support chatbot using Next.js, React, Tailwind CSS, and OpenRouter API, automating 60% of user inquiries and reducing average response time from minutes to seconds.",
    techStack: [
      { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiOpenai, name: "OpenAI", color: "#412991" },
      { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
      { icon: SiVercel, name: "Vercel", color: "#000000" },
      { icon: SiAmazon, name: "AWS", color: "#FF9900" }
    ]
  }
];

export const portfolioProjects = [
  {
    id: "1",
    title: "BookMate - Full Stack Booking Platform",
    description: "Developed a full-stack booking platform in a team of 3 for a local landscaping business, reducing workload by 150+ hours. Built with JavaScript, PHP, MySQL, HTML, and CSS. Implemented secure authentication, session management, role-based access control, and real-time calendar updates using AJAX and FullCalendar API. Managed 200+ bookings with improved response speed.",
    link: "https://github.com/zshan-dev/bangyourhead",
    techStack: [
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiPhp, name: "PHP", color: "#777BB4" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
      { icon: SiCss3, name: "CSS3", color: "#1572B6" }
    ]
  },
  {
    id: "2",
    title: "RAG-AI Customer Support Bot",
    description: "AI-powered customer support chatbot using Next.js, React, Tailwind CSS, and OpenRouter API. Uses Retrieval Augmented Generation (RAG) and vector databases for highly tailored responses. Automates 60% of user inquiries, reducing average response time from minutes to seconds.",
    link: "https://github.com/zshan-dev/RagAI-Customer-Support",
    techStack: [
      { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" }
    ]
  },
  {
    id: "3",
    title: "Cyber Swing",
    description: "A 3D parkour/runner game built in Unity with physics-based mechanics. Developed core gameplay systems including grappling hook swinging mechanics with realistic pendulum physics, wall-running, dynamic camera systems, and checkpoint/respawn systems. Created custom shaders using HLSL and ShaderLab for visual effects. Designed and implemented challenging levels with progressive difficulty. Showcases expertise in 3D game development, physics programming, and Unity engine architecture.",
    link: "https://github.com/zshan-dev/Cyber-Swing",
    techStack: [
      { icon: SiDotnet, name: "C#", color: "#512BD4" },
      { icon: SiUnity, name: "Unity", color: "#000000" }
    ]
  },
  {
    id: "4",
    title: "High-Performance CSV Data Parser",
    description: "A high-performance C application for ingesting large CSV datasets (1.7M+ records) with streaming I/O and in-memory hash indexing. Implemented separate chaining hash table with DJB2 hash function for O(1) average lookup time, achieving 2,600x speedup over linear search (0.84s vs 0.0003s). Features memory-efficient streaming CSV parsing, dynamic array growth, and comprehensive benchmarking with load factor analysis. Demonstrates expertise in systems programming, data structures, and performance optimization.",
    link: "https://github.com/zshan-dev/DataParsing",
    techStack: [
      { icon: SiC, name: "C", color: "#A8B9CC" }
    ]
  }
];
