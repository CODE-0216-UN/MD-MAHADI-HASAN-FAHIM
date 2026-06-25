import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Check, Sun, Moon } from "lucide-react";

interface NavbarProps {
  onContactClick: () => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export default function Navbar({ onContactClick, theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const isDark = theme === "dark";

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Activities", href: "#activities" },
    { name: "Education", href: "#education" },
  ];

  // Track window scroll progress and current active section using reliable bounding rects
  useEffect(() => {
    const handleScroll = () => {
      // 1. Update active section
      const sections = ["about", "skills", "projects", "activities", "education", "contact"];
      let currentActive = "about";
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If section is scrolled into viewport and visible relative to the navbar
          if (rect.top <= 160 && rect.bottom >= 160) {
            currentActive = section;
            break;
          }
        }
      }
      setActiveSection(currentActive);

      // 2. Update scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Run initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Standard smooth scroll with custom sticky header offset calculation
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    
    // For logo top click
    if (targetId === "") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // sticky header height offset
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("immahadihasanfahim@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
      isDark 
        ? "border-zinc-800/50 bg-zinc-950/70" 
        : "border-zinc-200/60 bg-white/70"
    }`}>
      {/* Scroll Progress Bar at the top of Navbar */}
      <div 
        className="absolute top-0 left-0 h-[3px] bg-accent z-50 transition-all duration-75" 
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a 
              href="#" 
              onClick={(e) => handleNavLinkClick(e, "#")}
              className="flex items-center gap-1.5 sm:gap-2 group"
            >
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-accent animate-pulse flex-shrink-0"></span>
              <span className={`font-display font-bold text-xs min-[360px]:text-sm sm:text-xl tracking-wide sm:tracking-wider transition-colors duration-300 group-hover:text-accent whitespace-nowrap ${
                isDark ? "text-white" : "text-zinc-900"
              }`}>
                MAHADI HASAN FAHIM
              </span>
            </a>
            {/* Compact Status Pill */}
            <span className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono border shadow-[0_0_10px_rgba(126,211,33,0.08)] transition-all duration-300 ${
              isDark 
                ? "bg-zinc-950 border-accent/20 text-accent" 
                : "bg-white border-accent/30 text-zinc-700"
            }`}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
              </span>
              Available
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-350 ${
                  activeSection === link.href.slice(1)
                    ? "text-accent bg-accent/10 font-semibold"
                    : isDark 
                      ? "text-zinc-400 hover:text-white hover:bg-zinc-800/40" 
                      : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Right Actions (Theme Toggle + Contact Button) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                isDark 
                  ? "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-accent hover:border-accent/30" 
                  : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:text-accent hover:border-accent/40"
              }`}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onContactClick}
              className="glow-btn bg-accent hover:bg-accent-light text-zinc-950 font-display font-semibold text-sm px-5 py-2.5 rounded-full shadow-[0_0_15px_rgba(126,211,33,0.25)] hover:shadow-[0_0_25px_rgba(126,211,33,0.55)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            >
              Contact Me
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu action bar */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Theme Toggle icon */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-colors duration-200 cursor-pointer ${
                isDark ? "border-zinc-800 text-zinc-400" : "border-zinc-200 text-zinc-600"
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onContactClick}
              className="bg-accent text-zinc-950 font-display font-semibold text-[10px] sm:text-xs px-2.5 sm:px-3.5 py-1.5 rounded-full transition-all duration-300 cursor-pointer hover:bg-accent-light"
            >
              Contact
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-full focus:outline-none transition-colors duration-200 ${
                isDark ? "text-zinc-400 hover:text-white hover:bg-zinc-800" : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100"
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-5 w-5" /> : <Menu className="block h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu expanded drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`lg:hidden border-b shadow-2xl absolute top-16 left-0 right-0 overflow-hidden z-50 ${
              isDark ? "border-zinc-800 bg-zinc-950/98" : "border-zinc-200 bg-white/98"
            }`}
          >
            <div className="px-4 pt-2 pb-5 space-y-1 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    activeSection === link.href.slice(1)
                      ? "text-accent bg-accent/10 border-l-2 border-accent font-semibold"
                      : isDark
                        ? "text-zinc-300 hover:text-white hover:bg-zinc-900"
                        : "text-zinc-700 hover:text-zinc-900 hover:bg-zinc-50"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className={`pt-4 pb-2 px-4 border-t mt-3 ${
                isDark ? "border-zinc-900" : "border-zinc-100"
              }`}>
                <p className="text-xs font-mono text-zinc-500 mb-2">Connect Directly</p>
                <div className="flex flex-col gap-2">
                  <div className={`text-sm font-mono py-1.5 ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>
                    immahadihasanfahim@gmail.com
                  </div>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onContactClick();
                    }}
                    className="w-full text-center bg-accent text-zinc-950 font-display font-semibold py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer hover:bg-accent-light active:scale-[0.99]"
                  >
                    Hire Me
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
