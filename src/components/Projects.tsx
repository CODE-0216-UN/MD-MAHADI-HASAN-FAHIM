import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { 
  FolderGit2, Calendar, 
  MonitorPlay, Github, ArrowUpRight, ExternalLink
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Skeleton from "./Skeleton";

interface ProjectsProps {
  theme: "dark" | "light";
  isLoading?: boolean;
}

export default function Projects({ theme, isLoading = false }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState<"html" | "python" | "preview">("html");
  const isDark = theme === "dark";


  const codeSnippets = {
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fahim's Creative Space</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="glow-header">
        <h1>Welcome to IIUC Dev Lab</h1>
        <p>Student ID: CODE-0216-UN</p>
    </header>
    <main>
        <section id="status-card">
            <h2>Current Status: Active</h2>
            <div class="glow-indicator"></div>
        </section>
    </main>
</body>
</html>`,
    python: `def main():
    print("---------------------------------")
    print("Welcome to IIUC Computer Club Lab")
    print("---------------------------------")
    
    student_name = "MD. Mahadi Hasan Fahim"
    preferred_language = "Python"
    is_learning = True
    
    if is_learning:
        print(f"Developer {student_name} is coding in {preferred_language}!")
        print("Exploring data structures & web automation.")

if __name__ == "__main__":
    main()`,
    preview: "Fahim's Active Lab View"
  };

  const githubRepos = [
    {
      name: "iiuc-cse-lab-solutions",
      description: "Practical code snippets, programming assignments, and algorithm flowcharts created as part of the first-semester CSE curriculum.",
      language: "C Language",
      link: "https://github.com/CODE-0216-UN"
    },
    {
      name: "web-portfolio-creative",
      description: "A highly customized single-page personal portfolio featuring animated intro screens, custom code widgets, and dark/light dynamic styling.",
      language: "TypeScript",
      link: "https://github.com/CODE-0216-UN"
    },
    {
      name: "python-automation-scripts",
      description: "A collection of useful Python automation tools for file categorization, directory formatting, and spreadsheet record updating.",
      language: "Python",
      link: "https://github.com/CODE-0216-UN"
    }
  ];

  return (
    <section 
      id="projects" 
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-zinc-950 text-zinc-100" : "bg-white text-zinc-900"
      }`}
    >
      {/* Decorative vector grid lines */}
      <div className={`absolute inset-0 bg-[size:32px_32px] opacity-35 ${
        isDark 
          ? "bg-[linear-gradient(rgba(126,211,33,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(126,211,33,0.01)_1px,transparent_1px)]"
          : "bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)]"
      }`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Core Projects Row */}
        <div className="space-y-16">
          {/* Section Header */}
          <ScrollReveal className="space-y-4 max-w-xl">
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono ${
              isDark ? "bg-accent/10 border border-accent/20 text-accent" : "bg-zinc-200 text-zinc-800"
            }`}>
              <FolderGit2 className="w-3.5 h-3.5" />
              Active Creations
            </div>
            <h2 className={`font-display font-extrabold text-3xl sm:text-5xl tracking-tight ${
              isDark ? "text-white" : "text-zinc-900"
            }`}>
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light drop-shadow-[0_0_10px_rgba(126,211,33,0.1)]">Projects</span>
            </h2>
            <p className={`text-sm sm:text-base font-sans ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}>
              Here's what I am currently engineering, showcasing my exploration of structural development principles and languages.
            </p>
          </ScrollReveal>
        </div>

        <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="projects-skeleton"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="space-y-24 w-full relative z-10"
              >
                {/* Core Projects Row Skeleton */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {/* Left Side Skeleton: Metadata & Description */}
                  <div className={`lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl border ${
                    isDark ? "bg-zinc-900/20 border-zinc-900" : "bg-zinc-50 border-zinc-200"
                  } space-y-6`}>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <Skeleton theme={theme} className="h-6 w-28 rounded-full" />
                        <Skeleton theme={theme} className="h-4 w-32" />
                      </div>
                      <div className="space-y-3">
                        <Skeleton theme={theme} className="h-8 w-3/4" />
                        <Skeleton theme={theme} className="h-4 w-40" />
                      </div>
                      <Skeleton theme={theme} className="h-16 w-full rounded-xl" />
                      <div className="space-y-2 pt-2">
                        <Skeleton theme={theme} className="h-3 w-11/12" />
                        <Skeleton theme={theme} className="h-3 w-10/12" />
                        <Skeleton theme={theme} className="h-3 w-8/12" />
                      </div>
                    </div>
                    <div className="flex gap-2 pt-6">
                      <Skeleton theme={theme} className="h-6 w-16 rounded-md" />
                      <Skeleton theme={theme} className="h-6 w-16 rounded-md" />
                      <Skeleton theme={theme} className="h-6 w-16 rounded-md" />
                    </div>
                  </div>

                  {/* Right Side Skeleton: Editor Mockup */}
                  <div className={`lg:col-span-7 rounded-2xl border flex flex-col justify-between ${
                    isDark ? "bg-zinc-950 border-zinc-900" : "bg-zinc-50 border-zinc-200"
                  } space-y-4`}>
                    <div className={`px-4 py-3 border-b flex items-center justify-between ${
                      isDark ? "bg-zinc-900/60 border-zinc-900" : "bg-zinc-200/60 border-zinc-200"
                    }`}>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-zinc-800/80"></span>
                        <span className="w-3 h-3 rounded-full bg-zinc-800/80"></span>
                        <span className="w-3 h-3 rounded-full bg-zinc-800/80"></span>
                      </div>
                      <Skeleton theme={theme} className="h-6 w-44 rounded-md" />
                    </div>
                    <div className="p-6 space-y-3 flex-grow">
                      <Skeleton theme={theme} className="h-4 w-1/3 font-mono" />
                      <Skeleton theme={theme} className="h-4 w-1/2 font-mono" />
                      <Skeleton theme={theme} className="h-4 w-2/3 font-mono" />
                      <Skeleton theme={theme} className="h-4 w-3/4 font-mono" />
                      <Skeleton theme={theme} className="h-4 w-1/2 font-mono" />
                    </div>
                    <div className={`px-4 py-2 border-t flex items-center justify-between ${
                      isDark ? "bg-zinc-900/40 border-zinc-900" : "bg-zinc-100 border-zinc-200"
                    }`}>
                      <Skeleton theme={theme} className="h-3 w-20" />
                      <Skeleton theme={theme} className="h-3 w-48" />
                    </div>
                  </div>
                </div>

                {/* Subsection: Featured GitHub Repositories Skeleton */}
                <div className={`pt-16 border-t ${isDark ? "border-zinc-900" : "border-zinc-200"}`}>
                  <div className="space-y-12">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                      <div className="space-y-2 flex-grow">
                        <Skeleton theme={theme} className="h-8 w-64" />
                        <Skeleton theme={theme} className="h-4 w-96" />
                      </div>
                      <Skeleton theme={theme} className="h-8 w-44 rounded-md" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[1, 2, 3].map((idx) => (
                        <div key={idx} className={`p-6 rounded-xl border space-y-6 ${
                          isDark ? "bg-zinc-900/10 border-zinc-900" : "bg-zinc-50 border-zinc-200"
                        }`}>
                          <div className="flex justify-between items-center">
                            <Skeleton theme={theme} className="h-8 w-8 rounded-lg" />
                            <Skeleton theme={theme} className="h-7 w-7 rounded-md" />
                          </div>
                          <div className="space-y-2">
                            <Skeleton theme={theme} className="h-5 w-40" />
                            <Skeleton theme={theme} className="h-12 w-full" />
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
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="projects-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="space-y-24 w-full relative z-10"
              >
                {/* Project Card Container - Full Stack Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  
                  {/* Left Side: Metadata and Description */}
                  <ScrollReveal
                    className={`lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl border backdrop-blur-sm relative overflow-hidden group hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(126,211,33,0.08)] hover:border-accent/30 transition-all duration-300 ${
                      isDark 
                        ? "bg-zinc-900/20 border-zinc-800/80" 
                        : "bg-zinc-50 border-zinc-200 shadow-sm"
                    }`}
                  >
                    {/* Ambient Background Gradient */}
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/5 rounded-full filter blur-2xl group-hover:bg-accent/10 transition-all duration-500"></div>

                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-mono font-medium px-2.5 py-1 rounded-full ${
                          isDark ? "text-accent bg-accent/10 border border-accent/20" : "text-zinc-800 bg-zinc-200"
                        }`}>
                          Personal Project
                        </span>
                        <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                          2026 – Present
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className={`font-display font-bold text-2xl group-hover:text-accent transition-colors duration-300 ${
                          isDark ? "text-white" : "text-zinc-900"
                        }`}>
                          Web & App Development
                        </h3>
                        <p className="text-xs font-mono text-accent">Status: Active & In-Progress // Exploration Phase</p>
                      </div>

                      <p className={`text-sm leading-relaxed font-sans ${
                        isDark ? "text-zinc-400" : "text-zinc-600"
                      }`}>
                        I am actively working on web and app development projects using HTML and Python. I explore modern development tools and programming concepts, with a sandbox focused on:
                      </p>

                      <ul className={`space-y-3 font-sans text-xs sm:text-sm ${
                        isDark ? "text-zinc-400" : "text-zinc-600"
                      }`}>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                          Structuring beautiful pages using semantic HTML & responsive design grids.
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                          Crafting functional logic scripts, conditional statements, and console logs with Python.
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                          Utilizing next-generation prompt engineering to speed up prototyping and learning.
                        </li>
                      </ul>
                    </div>

                    <div className={`mt-8 pt-6 border-t flex flex-wrap gap-2.5 ${isDark ? "border-zinc-800/80" : "border-zinc-200"}`}>
                      <span className={`px-2.5 py-1 text-xs font-mono rounded-lg ${isDark ? "text-zinc-400 bg-zinc-900" : "text-zinc-700 bg-zinc-200"}`}>Python</span>
                      <span className={`px-2.5 py-1 text-xs font-mono rounded-lg ${isDark ? "text-zinc-400 bg-zinc-900" : "text-zinc-700 bg-zinc-200"}`}>HTML</span>
                      <span className={`px-2.5 py-1 text-xs font-mono rounded-lg ${isDark ? "text-zinc-400 bg-zinc-900" : "text-zinc-700 bg-zinc-200"}`}>CSS</span>
                      <span className={`px-2.5 py-1 text-xs font-mono rounded-lg ${isDark ? "text-zinc-400 bg-zinc-900" : "text-zinc-700 bg-zinc-200"}`}>Git</span>
                    </div>
                  </ScrollReveal>

                  {/* Right Side: Interactive Editor Mockup */}
                  <ScrollReveal
                    className={`rounded-2xl border shadow-2xl flex flex-col overflow-hidden group lg:col-span-7 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(126,211,33,0.08)] hover:border-accent/30 transition-all duration-300 ${
                      isDark ? "bg-zinc-950 border-zinc-800/80" : "bg-zinc-50 border-zinc-200"
                    }`}
                  >
                    {/* Editor Title Bar */}
                    <div className={`px-4 py-3 border-b flex items-center justify-between ${
                      isDark ? "bg-zinc-900/60 border-zinc-800/80" : "bg-zinc-200/60 border-zinc-200"
                    }`}>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                          <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                          <span className="w-3 h-3 rounded-full bg-accent/80"></span>
                        </div>
                        <span className="text-xs font-mono text-zinc-500 ml-2">FahimCodeEditor v1.02</span>
                      </div>
                      
                      {/* Language Selector Tabs */}
                      <div className={`flex p-0.5 rounded-lg border ${
                        isDark ? "bg-zinc-950 border-zinc-800" : "bg-white border-zinc-200"
                      }`}>
                        <button
                          onClick={() => setActiveTab("html")}
                          className={`px-3 py-1 text-[11px] font-mono rounded-md transition-all duration-200 cursor-pointer ${
                            activeTab === "html"
                              ? "text-accent font-semibold"
                              : "text-zinc-500 hover:text-zinc-300"
                          }`}
                        >
                          index.html
                        </button>
                        <button
                          onClick={() => setActiveTab("python")}
                          className={`px-3 py-1 text-[11px] font-mono rounded-md transition-all duration-200 cursor-pointer ${
                            activeTab === "python"
                              ? "text-accent font-semibold"
                              : "text-zinc-500 hover:text-zinc-300"
                          }`}
                        >
                          app.py
                        </button>
                        <button
                          onClick={() => setActiveTab("preview")}
                          className={`px-3 py-1 text-[11px] font-mono rounded-md transition-all duration-200 cursor-pointer ${
                            activeTab === "preview"
                              ? "text-accent font-semibold"
                              : "text-zinc-500 hover:text-zinc-300"
                          }`}
                        >
                          Preview Layout
                        </button>
                      </div>
                    </div>

                    {/* Interactive Editor Window Content */}
                    <div className={`flex-grow p-4 font-mono text-xs overflow-auto h-[320px] ${
                      isDark ? "bg-zinc-950" : "bg-white text-zinc-800"
                    }`}>
                      <AnimatePresence mode="wait">
                        {activeTab === "preview" ? (
                          <motion.div
                            key="preview"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={`h-full flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-6 text-center ${
                              isDark ? "bg-zinc-900/20 border-zinc-800" : "bg-zinc-50 border-zinc-200"
                            }`}
                          >
                            <MonitorPlay className="w-10 h-10 text-accent animate-pulse" />
                            <div className="space-y-1">
                              <h4 className={`font-display font-bold text-base ${isDark ? "text-white" : "text-zinc-900"}`}>Lab Screen Preview</h4>
                              <p className={`text-xs max-w-sm ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                                Simulated static layout generated by index.html and modern scripts.
                              </p>
                            </div>
                            
                            {/* Simulated website frame */}
                            <div className={`w-full rounded-lg border p-3 text-left ${
                              isDark ? "bg-zinc-900/60 border-zinc-800/80" : "bg-white border-zinc-200 shadow-xs"
                            }`}>
                              <div className={`flex items-center justify-between border-b pb-1 mb-2 ${
                                isDark ? "border-zinc-800" : "border-zinc-100"
                              }`}>
                                <span className="text-[9px] text-accent font-mono uppercase font-bold">// Welcome to IIUC Dev Lab</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                              </div>
                              <p className={`text-[10px] ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                                Mahadi Hasan Fahim is exploring structural systems and backend modules in Chittagong, Bangladesh.
                              </p>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <pre className="leading-relaxed overflow-x-auto whitespace-pre-wrap">
                              <code className={isDark ? "text-zinc-400" : "text-zinc-700"}>
                                {codeSnippets[activeTab]}
                              </code>
                            </pre>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Editor Footer / Info Bar */}
                    <div className={`px-4 py-2 border-t flex items-center justify-between text-[10px] font-mono text-zinc-500 ${
                      isDark ? "bg-zinc-900/40 border-zinc-800/80" : "bg-zinc-100 border-zinc-200"
                    }`}>
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                        UTF-8
                      </span>
                      <span>Python / HTML Environment Ready</span>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Subsection: Featured GitHub Repositories */}
                <div className={`pt-16 border-t ${isDark ? "border-zinc-900/60" : "border-zinc-200"}`}>
                  <div className="space-y-12">
                    
                    {/* Subsection header */}
                    <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className={`font-display font-extrabold text-2xl sm:text-3xl tracking-tight ${
                          isDark ? "text-white" : "text-zinc-900"
                        }`}>
                          Featured <span className="text-accent font-bold">GitHub Repositories</span>
                        </h3>
                        <p className={`text-sm ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                          Direct links to CODE-0216-UN on github.com. Click to open and view source.
                        </p>
                      </div>

                      <a 
                        href="https://github.com/CODE-0216-UN"
                        target="_blank"
                        rel="noreferrer referrer"
                        className={`inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider hover:text-accent transition-colors uppercase ${
                          isDark ? "text-zinc-400" : "text-zinc-600"
                        }`}
                      >
                        View all repositories
                        <Github className="w-4 h-4 text-accent" />
                      </a>
                    </ScrollReveal>

                    {/* Repos Cards Grid */}
                    <ScrollReveal>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {githubRepos.map((repo, idx) => (
                          <div
                            key={repo.name}
                            className={`p-6 rounded-xl border flex flex-col justify-between group hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(126,211,33,0.08)] hover:border-accent/40 transition-all duration-300 relative ${
                              isDark 
                                ? "bg-zinc-900/10 border-zinc-800/80 hover:bg-zinc-900/30" 
                                : "bg-zinc-50 border-zinc-200 hover:bg-white hover:shadow-md"
                            }`}
                          >
                            <div className="space-y-4">
                              {/* Header */}
                              <div className="flex items-center justify-between">
                                <FolderGit2 className="w-5 h-5 text-accent" />
                                <a 
                                  href={repo.link}
                                  target="_blank"
                                  rel="noreferrer referrer"
                                  className={`p-1.5 rounded-md border text-zinc-500 hover:text-accent hover:bg-accent/5 transition-all duration-200 ${
                                    isDark ? "border-zinc-800" : "border-zinc-200"
                                  }`}
                                >
                                  <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                              </div>

                              {/* Meta */}
                              <div className="space-y-1.5">
                                <h4 className={`font-display font-bold text-base tracking-tight truncate group-hover:text-accent transition-colors duration-300 ${
                                  isDark ? "text-white" : "text-zinc-900"
                                }`}>
                                  {repo.name}
                                </h4>
                                <p className={`text-xs leading-relaxed line-clamp-3 font-sans h-12 ${
                                  isDark ? "text-zinc-400" : "text-zinc-600"
                                }`}>
                                  {repo.description}
                                </p>
                              </div>
                            </div>

                            {/* Footer Stats / Lang */}
                            <div className={`mt-6 pt-4 border-t flex items-center justify-between text-[11px] font-mono ${
                              isDark ? "border-zinc-900" : "border-zinc-200"
                            }`}>
                              <div className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                                <span className={isDark ? "text-zinc-400" : "text-zinc-700"}>{repo.language}</span>
                              </div>

                              <a 
                                href={repo.link}
                                target="_blank"
                                rel="noreferrer referrer"
                                className="text-xs font-semibold text-accent hover:underline flex items-center gap-1 font-display"
                              >
                                View on GitHub
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

      </div>
    </section>
  );
}
