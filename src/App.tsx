import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Activities from "./components/Activities";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import AIWidget from "./components/AIWidget";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const isDark = theme === "dark";

  // Handle unified premium skeleton loading transition
  useEffect(() => {
    // 1. Fallback Timeout - 3 seconds maximum as requested
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // 2. Real window load event hook
    const handlePageLoad = () => {
      // Add a slight delay of 500ms so the premium shimmer sweeps across cards elegantly
      setTimeout(() => {
        setIsLoading(false);
        clearTimeout(fallbackTimer);
      }, 500);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Set initial theme or read from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80; // sticky header height offset
      const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleDownloadCVClick = () => {
    window.open("https://drive.google.com/file/d/1m3GgbrjCkpTzVTl9qM2RKvIvZw8zWjt4/view?usp=drivesdk", "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans selection:bg-accent/30 selection:text-white transition-colors duration-500 relative ${
      isDark ? "bg-zinc-950 text-zinc-100" : "bg-zinc-50 text-zinc-900"
    }`}>
      {/* Dynamic grid backdrop adapting to light/dark themes */}
      <div className={`fixed inset-0 [background-size:24px_24px] opacity-20 pointer-events-none z-0 ${
        isDark 
          ? "bg-[radial-gradient(#27272a_1px,transparent_1px)]" 
          : "bg-[radial-gradient(#e4e4e7_1px,transparent_1px)]"
      }`}></div>

      {/* Ambient custom blur light wells */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/2 blur-[180px] pointer-events-none z-0 animate-pulse-slow"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/2 blur-[180px] pointer-events-none z-0 animate-pulse-slow" style={{ animationDelay: "2s" }}></div>

      {/* Header navigation with theme trigger */}
      <Navbar 
        onContactClick={handleContactClick} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      {/* Sections pipeline */}
      <main className="flex-grow relative z-10">
        <Hero 
          onContactClick={handleContactClick} 
          onDownloadCVClick={handleDownloadCVClick} 
          theme={theme}
          isLoading={isLoading}
        />
        
        <About theme={theme} isLoading={isLoading} />
        
        <Skills theme={theme} isLoading={isLoading} />
        
        <Projects theme={theme} isLoading={isLoading} />
        
        <Activities theme={theme} isLoading={isLoading} />
        
        <Education theme={theme} isLoading={isLoading} />

        <Certifications theme={theme} isLoading={isLoading} />
        
        <Contact theme={theme} onDownloadCVClick={handleDownloadCVClick} isLoading={isLoading} />
      </main>

      {/* Shared footer brand lines */}
      <Footer theme={theme} />

      {/* Floating AI Assistant Widget */}
      <AIWidget theme={theme} />

      {/* Interactive CV modal portal */}
      <AnimatePresence>
        {isResumeOpen && (
          <ResumeModal 
            theme={theme} 
            onClose={() => setIsResumeOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
