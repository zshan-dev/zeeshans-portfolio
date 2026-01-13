import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Portfolio />
      </main>
      <footer className="py-12 px-6 sm:px-8 lg:px-12 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Portfolio. Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </footer>
    </div>
  );
}
