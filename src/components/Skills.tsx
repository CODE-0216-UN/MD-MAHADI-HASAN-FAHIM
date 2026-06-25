import { useState } from "react";
import { 
  Code, Terminal, FileCode, GitFork, Lightbulb, FileText, FileSpreadsheet, 
  Palette, Users, Brain, Wrench, CheckCircle2, Laptop, Database, Cpu, Globe, Braces, Clock, Volume2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import Skeleton from "./Skeleton";

interface SkillsProps {
  theme: "dark" | "light";
  isLoading?: boolean;
}

export default function Skills({ theme, isLoading = false }: SkillsProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const isDark = theme === "dark";


  const skillsList = [
    {
      name: "C Programming",
      icon: <Terminal className="w-5 h-5 text-accent" />,
      category: "Programming",
      description: "Structural code structures, pointers, logical loops, functions, and memory management.",
      level: "Conceptual Foundation"
    },
    {
      name: "Python",
      icon: <FileCode className="w-5 h-5 text-accent" />,
      category: "Programming",
      description: "Scripting, rapid application prototyping, custom data structures, and automation algorithms.",
      level: "Intermediate"
    },
    {
      name: "HTML",
      icon: <Code className="w-5 h-5 text-accent" />,
      category: "Web Development",
      description: "Structuring clean, semantic page bones, interactive form schemas, and modern SEO basics.",
      level: "Core Standards"
    },
    {
      name: "JavaScript (Basic / Learning)",
      icon: <Braces className="w-5 h-5 text-accent" />,
      category: "Programming",
      description: "DOM elements rendering, event listener handlers, and basic ES6 scripting logics.",
      level: "Active Focus"
    },
    {
      name: "Responsive Web Design",
      icon: <Globe className="w-5 h-5 text-accent" />,
      category: "Web Development",
      description: "Crafting fluid responsive web systems using modern styling grids and responsive prefixes.",
      level: "Design Layouts"
    },
    {
      name: "Data Structures & Algorithms (Basic)",
      icon: <Database className="w-5 h-5 text-accent" />,
      category: "Computer Science",
      description: "Basic storage setups, binary node graphs, bubble sorts, and recursive functions.",
      level: "Theoretical Foundation"
    },
    {
      name: "Git & GitHub",
      icon: <GitFork className="w-5 h-5 text-accent" />,
      category: "Version Control",
      description: "Pull updates, stage code checkouts, handle branches, and publish online repositories.",
      level: "Collaborative"
    },
    {
      name: "VS Code",
      icon: <Laptop className="w-5 h-5 text-accent" />,
      category: "Developer Tools",
      description: "Workspace configuration, integrated terminal workflows, and extensions curation.",
      level: "Primary Editor"
    },
    {
      name: "Linux / Command Line Basics",
      icon: <Terminal className="w-5 h-5 text-accent" />,
      category: "Developer Tools",
      description: "Standard terminal navigations, managing directories, and using fundamental shell commands.",
      level: "Intermediate"
    },
    {
      name: "Problem Solving",
      icon: <Lightbulb className="w-5 h-5 text-accent" />,
      category: "Core Ability",
      description: "Deconstructing visual requirements into code loops and debugging compiler warnings.",
      level: "Strong Foundation"
    },
    {
      name: "Microsoft Word",
      icon: <FileText className="w-5 h-5 text-accent" />,
      category: "Productivity",
      description: "Document styling, styling academic papers, reports, and formal design specs.",
      level: "Fluent"
    },
    {
      name: "Microsoft Excel",
      icon: <FileSpreadsheet className="w-5 h-5 text-accent" />,
      category: "Productivity",
      description: "Structuring worksheets, grade tracking arrays, and using basic math calculators.",
      level: "Conversational"
    },
    {
      name: "Canva (Design & Presentation)",
      icon: <Palette className="w-5 h-5 text-accent" />,
      category: "Design",
      description: "Creating presentation panels, dynamic vector layouts, and beautiful portfolio assets.",
      level: "Creative Focus"
    },
    {
      name: "Team Collaboration",
      icon: <Users className="w-5 h-5 text-accent" />,
      category: "Soft Skills",
      description: "Working inside peer groups, contributing in computer clubs, and active brain-storming.",
      level: "High Alignment"
    },
    {
      name: "Public Speaking / Presentation Skills",
      icon: <Volume2 className="w-5 h-5 text-accent" />,
      category: "Soft Skills",
      description: "Presenting projects clearly, explaining logic structures, and explaining team reviews.",
      level: "Intermediate"
    },
    {
      name: "Time Management",
      icon: <Clock className="w-5 h-5 text-accent" />,
      category: "Soft Skills",
      description: "Adhering to code milestone schedules, assignment times, and active task sorting.",
      level: "Productive"
    },
    {
      name: "AI Tools Proficiency (ChatGPT, Gemini, Claude)",
      icon: <Brain className="w-5 h-5 text-accent" />,
      category: "AI & Productivity",
      description: "Using AI effectively for rapid research, code compilation verification, and automated drafting.",
      level: "Co-pilot Fluent"
    }
  ];

  const toolsAndSoftware = [
    {
      name: "Canva",
      role: "Graphic Design & Presentation",
      description: "Primary designer workspace for presentation decks, graphic banners, and identity icons."
    },
    {
      name: "Microsoft Word & Excel",
      role: "Conversational Document Processing",
      description: "Used to build academic documentation, spreadsheets, and structured student records."
    },
    {
      name: "GitHub",
      role: "Version Control",
      description: "Online code workspace. Hosts active repos, tracks project updates, and deploys pages."
    },
    {
      name: "VS Code",
      role: "Code Editor",
      description: "Primary IDE. Leverages integrated terminals, markdown visualizers, and code control plugins."
    },
    {
      name: "AI Tools",
      role: "Productivity & Development Assistance",
      description: "Speeds up logic writing, decodes cryptic warnings, and analyzes deep coding frameworks."
    }
  ];

  return (
    <section 
      id="skills" 
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-zinc-950 text-zinc-100" : "bg-white text-zinc-900"
      }`}
    >
      {/* Background decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-accent/2 filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Title */}
        <ScrollReveal className="text-center space-y-4">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono ${
            isDark ? "bg-accent/10 border border-accent/20 text-accent" : "bg-zinc-200 text-zinc-800"
          }`}>
            <Wrench className="w-3 h-3" />
            Skills & Capabilities
          </div>
          <h2 className={`font-display font-extrabold text-3xl sm:text-5xl tracking-tight ${
            isDark ? "text-white" : "text-zinc-900"
          }`}>
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light drop-shadow-[0_0_10px_rgba(126,211,33,0.1)]">Technical Toolkit</span>
          </h2>
          <p className={`max-w-xl mx-auto text-sm sm:text-base font-sans ${
            isDark ? "text-zinc-400" : "text-zinc-600"
          }`}>
            An exhaustive view of my coding capabilities, developer programs, computer science logic, and modern productivity co-pilots.
          </p>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="skills-skeleton"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="w-full relative z-10 space-y-16"
            >
              {/* Grid of Skeleton Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((idx) => (
                  <div
                    key={idx}
                    className={`p-6 rounded-2xl border space-y-5 ${
                      isDark ? "bg-zinc-900/20 border-zinc-900" : "bg-zinc-50 border-zinc-200"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <Skeleton theme={theme} className="h-10 w-10 rounded-xl" />
                      <Skeleton theme={theme} className="h-5 w-24 rounded-full" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton theme={theme} className="h-6 w-36" />
                      <Skeleton theme={theme} className="h-4 w-full" />
                      <Skeleton theme={theme} className="h-4 w-5/6" />
                    </div>
                    <div className={`pt-4 border-t flex justify-between ${
                      isDark ? "border-zinc-800/40" : "border-zinc-200/60"
                    }`}>
                      <Skeleton theme={theme} className="h-3 w-16" />
                      <Skeleton theme={theme} className="h-3 w-24" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tools Section Skeleton */}
              <div className={`pt-8 border-t grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                isDark ? "border-zinc-900" : "border-zinc-200"
              }`}>
                <div className="lg:col-span-4 space-y-4">
                  <Skeleton theme={theme} className="h-6 w-32 rounded-full" />
                  <Skeleton theme={theme} className="h-8 w-3/4" />
                  <Skeleton theme={theme} className="h-4 w-full" />
                </div>
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[1, 2].map((idx) => (
                    <div key={idx} className={`p-5 rounded-xl border space-y-3 ${
                      isDark ? "bg-zinc-950 border-zinc-900" : "bg-zinc-50 border-zinc-200"
                    }`}>
                      <div className="flex items-center gap-2">
                        <Skeleton theme={theme} className="h-4 w-4 rounded-full" />
                        <Skeleton theme={theme} className="h-5 w-32" />
                      </div>
                      <Skeleton theme={theme} className="h-3.5 w-20" />
                      <Skeleton theme={theme} className="h-3 w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="skills-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="w-full relative z-10 space-y-20"
            >
              {/* Skills Cards Grid */}
              <ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillsList.map((skill, idx) => (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className={`relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] group hover:shadow-[0_0_20px_rgba(126,211,33,0.08)] overflow-hidden ${
                        isDark 
                          ? "bg-zinc-900/30 border-zinc-800/80 hover:border-accent/40" 
                          : "bg-zinc-50 border-zinc-200 hover:border-accent/40 shadow-xs"
                      }`}
                    >
                      {/* Dynamic top edge accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent/0 to-accent/0 group-hover:via-accent/40 transition-all duration-500"></div>

                      <div className="flex items-start justify-between">
                        <div className={`p-2.5 rounded-xl border ${
                          isDark ? "bg-zinc-950 border-zinc-800" : "bg-white border-zinc-200"
                        } group-hover:border-accent/30 transition-all duration-300`}>
                          {skill.icon}
                        </div>
                        <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full ${
                          isDark ? "bg-accent/10 text-accent border border-accent/20" : "bg-zinc-200 text-zinc-800"
                        }`}>
                          {skill.category}
                        </span>
                      </div>

                      <div className="mt-5 space-y-2">
                        <h3 className={`font-display font-bold text-lg group-hover:text-accent transition-colors duration-300 ${
                          isDark ? "text-white" : "text-zinc-900"
                        }`}>
                          {skill.name}
                        </h3>
                        <p className={`text-sm leading-relaxed font-sans ${
                          isDark ? "text-zinc-400" : "text-zinc-600"
                        }`}>
                          {skill.description}
                        </p>
                      </div>

                      <div className={`mt-6 pt-4 border-t flex items-center justify-between ${
                        isDark ? "border-zinc-900/60" : "border-zinc-200"
                      }`}>
                        <span className="text-[10px] font-mono text-zinc-500 uppercase">Proficiency</span>
                        <span className={`text-xs font-mono font-semibold flex items-center gap-1.5 ${
                          isDark ? "text-zinc-300" : "text-zinc-700"
                        }`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {/* Tools & Software Highlight Section */}
              <ScrollReveal className={`pt-8 border-t ${isDark ? "border-zinc-900/60" : "border-zinc-200"}`}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Left intro text for Tools */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono ${
                      isDark ? "bg-accent/10 border border-accent/20 text-accent" : "bg-zinc-200 text-zinc-800"
                    }`}>
                      <Laptop className="w-3.5 h-3.5" />
                      Workflow Suite
                    </div>
                    <h3 className={`font-display font-bold text-2xl sm:text-3xl tracking-tight ${
                      isDark ? "text-white" : "text-zinc-900"
                    }`}>
                      Tools & Software I Lean On Daily
                    </h3>
                    <p className={`text-sm leading-relaxed font-sans ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}>
                      By integrating structured workspace utilities with modern LLM-driven research agents, I maximize speed and layout accuracy.
                    </p>
                  </div>

                  {/* Tools cards layout on the right */}
                  <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {toolsAndSoftware.map((tool) => (
                      <div
                        key={tool.name}
                        className={`p-5 rounded-xl border transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(126,211,33,0.06)] flex flex-col justify-between ${
                          isDark 
                            ? "bg-zinc-950 border-zinc-900 hover:border-accent/30" 
                            : "bg-zinc-50 border-zinc-200 hover:border-accent/40"
                        }`}
                      >
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-accent animate-pulse" />
                            <h4 className={`font-display font-semibold text-base ${isDark ? "text-white" : "text-zinc-900"}`}>{tool.name}</h4>
                          </div>
                          <p className="text-xs text-accent font-mono">{tool.role}</p>
                          <p className={`text-xs leading-relaxed font-sans mt-2 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                            {tool.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
