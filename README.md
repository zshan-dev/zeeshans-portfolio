# Portfolio Website

A modern, responsive portfolio website built with Next.js and React, showcasing my work, skills, and experience as a software engineer. Features a clean design with dark mode support and smooth animations.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **React Icons**

## React Concepts and Notes

### 1. **Component Architecture**
   - Modular, reusable components (Navbar, Hero, Skills, Experience, Portfolio)
   - Component composition and separation of concerns
   - Single Responsibility Principle applied to each component

### 2. **React Hooks**
   - **useState**: Managing component state (theme, scroll position, mounted state)
   - **useEffect**: Side effects (localStorage sync, scroll listeners, Intersection Observer setup)
   - **useRef**: Direct DOM references for Intersection Observer and element access
   - **useContext**: Consuming theme context across components

### 3. **Context API**
   - Custom `ThemeProvider` component for global theme management
   - Context creation with `createContext`
   - Custom hook (`useTheme`) for consuming context with error handling
   - Proper context provider pattern with value passing

### 4. **Client Components**
   - Proper use of `'use client'` directive for interactive components
   - Server/Client component separation in Next.js App Router

### 5. **Event Handling**
   - Click handlers for theme toggle
   - Scroll event listeners with proper cleanup
   - Form interactions and navigation

### 6. **Conditional Rendering**
   - Theme-based icon switching (sun/moon)
   - Conditional class application based on state
   - Responsive visibility (hidden on mobile, visible on desktop)

### 7. **List Rendering**
   - Dynamic rendering with `.map()` for skills, experience, and projects
   - Proper `key` prop usage for list items
   - Dynamic styling based on array index

### 8. **Props & Data Flow**
   - Data separation in `portfolioData.js` file
   - Props passed from parent to child components
   - Data imported and consumed across components

### 9. **Side Effects & Lifecycle**
   - `useEffect` with dependency arrays
   - Cleanup functions for event listeners and observers
   - Mount/unmount lifecycle management

### 10. **DOM Manipulation**
   - Intersection Observer API for scroll animations
   - Direct DOM class manipulation for animations
   - localStorage integration for theme persistence

### 11. **Performance Optimization**
   - Proper dependency arrays in `useEffect`
   - Event listener cleanup to prevent memory leaks
   - Observer cleanup on component unmount

### 12. **Modern React Patterns**
   - Functional components throughout
   - Custom hooks for reusable logic
   - Component composition over inheritance


