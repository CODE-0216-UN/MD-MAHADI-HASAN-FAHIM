import { Sparkles, BrainCircuit, Code, Terminal, BookOpen, Target } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import Skeleton from "./Skeleton";

interface AboutProps {
  theme: "dark" | "light";
  isLoading?: boolean;
}

export default function About({ theme, isLoading = false }: AboutProps) {
  const isDark = theme === "dark";

  const highlights = [
    {
      icon: <BrainCircuit className="w-5 h-5 text-accent" />,
      title: "AI-Powered Productivity",
      description: "Proficient in using AI tools like ChatGPT, Gemini, and Claude to accelerate learning, coding, and logical problem-solving."
    },
    {
      icon: <Code className="w-5 h-5 text-accent" />,
      title: "Aspiring Software Developer",
      description: "Eagerly exploring the intersection of web engineering, scripting, and system algorithms using C and Python."
    },
    {
      icon: <Terminal className="w-5 h-5 text-accent" />,
      title: "Continuous Learner",
      description: "Currently a first-semester Computer Science & Engineering student, proactively participating in tech clubs and coding bootcamps."
    }
  ];

  return (
    <section 
      id="about" 
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-zinc-950/40 border-y border-zinc-900/60" : "bg-white border-y border-zinc-200"
      }`}
    >
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/2 filter blur-[120px] pointer-events-none"></div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="about-skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full relative z-10"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left Column Skeleton */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Visual Profile Card */}
                  <div className={`p-6 sm:p-8 rounded-2xl border space-y-4 ${
                    isDark ? "bg-zinc-900/20 border-zinc-900" : "bg-zinc-50 border-zinc-200"
                  }`}>
                    <Skeleton theme={theme} className="h-4 w-24" />
                    <Skeleton theme={theme} className="h-8 w-48" />
                    <Skeleton theme={theme} className="h-3 w-36" />
                    
                    <div className={`h-px my-4 ${isDark ? "bg-zinc-800/40" : "bg-zinc-200/60"}`}></div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <Skeleton theme={theme} className="h-3 w-16" />
                        <Skeleton theme={theme} className="h-3 w-28" />
                      </div>
                      <div className="flex justify-between">
                        <Skeleton theme={theme} className="h-3 w-16" />
                        <Skeleton theme={theme} className="h-3 w-12" />
                      </div>
                      <div className="flex justify-between">
                        <Skeleton theme={theme} className="h-3 w-20" />
                        <Skeleton theme={theme} className="h-3 w-32" />
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <Skeleton theme={theme} className="h-16 w-full rounded-xl" />
                    </div>
                  </div>

                  {/* Current learning block */}
                  <div className={`p-6 rounded-2xl border space-y-4 ${
                    isDark ? "bg-zinc-900/10 border-zinc-900" : "bg-zinc-50 border-zinc-200"
                  }`}>
                    <div className="flex gap-3">
                      <Skeleton theme={theme} className="h-8 w-8 rounded-lg" />
                      <div className="space-y-2 flex-grow">
                        <Skeleton theme={theme} className="h-4 w-36" />
                        <Skeleton theme={theme} className="h-3 w-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column Skeleton */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="space-y-4">
                    <Skeleton theme={theme} className="h-6 w-24 rounded-full" />
                    <Skeleton theme={theme} className="h-10 w-3/4" />
                    <div className="space-y-2 pt-2">
                      <Skeleton theme={theme} className="h-4 w-full" />
                      <Skeleton theme={theme} className="h-4 w-11/12" />
                      <Skeleton theme={theme} className="h-4 w-4/5" />
                    </div>
                  </div>

                  {/* Strengths Cards */}
                  <div className="space-y-4">
                    <div className={`flex gap-4 p-4 rounded-xl border ${
                      isDark ? "bg-zinc-900/20 border-zinc-900" : "bg-zinc-50 border-zinc-200"
                    }`}>
                      <Skeleton theme={theme} className="h-10 w-10 rounded-lg flex-shrink-0" />
                      <div className="space-y-2 flex-grow">
                        <Skeleton theme={theme} className="h-5 w-36" />
                        <Skeleton theme={theme} className="h-3 w-full" />
                      </div>
                    </div>
                    <div className={`flex gap-4 p-4 rounded-xl border ${
                      isDark ? "bg-zinc-900/20 border-zinc-900" : "bg-zinc-50 border-zinc-200"
                    }`}>
                      <Skeleton theme={theme} className="h-10 w-10 rounded-lg flex-shrink-0" />
                      <div className="space-y-2 flex-grow">
                        <Skeleton theme={theme} className="h-5 w-40" />
                        <Skeleton theme={theme} className="h-3 w-5/6" />
                      </div>
                    </div>
                    <div className={`flex gap-4 p-4 rounded-xl border ${
                      isDark ? "bg-zinc-900/20 border-zinc-900" : "bg-zinc-50 border-zinc-200"
                    }`}>
                      <Skeleton theme={theme} className="h-10 w-10 rounded-lg flex-shrink-0" />
                      <div className="space-y-2 flex-grow">
                        <Skeleton theme={theme} className="h-5 w-32" />
                        <Skeleton theme={theme} className="h-3 w-4/5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="about-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="w-full relative z-10"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left Block: Visual Card with Details */}
                <ScrollReveal className="lg:col-span-5 space-y-6">
                  <div className={`relative p-6 sm:p-8 rounded-2xl border backdrop-blur-sm overflow-hidden hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(126,211,33,0.06)] group hover:border-accent/40 transition-all duration-350 ${
                    isDark ? "bg-zinc-900/40 border-zinc-800/80" : "bg-zinc-50 border-zinc-200 shadow-sm"
                  }`}>
                    {/* Corner decor */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full pointer-events-none"></div>
                    
                    <div className="space-y-4">
                      <span className="text-xs font-mono text-accent uppercase tracking-wider block">// Core Profile</span>
                      <h3 className={`font-display font-bold text-2xl group-hover:text-accent transition-colors duration-300 ${isDark ? "text-white" : "text-zinc-900"}`}>
                        MD. Mahadi Hasan Fahim
                      </h3>
                      <p className="text-xs font-mono text-zinc-500">Computer Science & Engineering Student</p>
                      
                      <div className={`h-px my-4 ${isDark ? "bg-zinc-800" : "bg-zinc-200"}`}></div>
                      
                      <div className={`space-y-3 font-mono text-xs ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                        <div className={`flex justify-between items-center py-1 border-b ${isDark ? "border-zinc-900" : "border-zinc-100"}`}>
                          <span className="text-zinc-500">Location:</span>
                          <span>Chittagong, Bangladesh</span>
                        </div>
                        <div className={`flex justify-between items-center py-1 border-b ${isDark ? "border-zinc-900" : "border-zinc-100"}`}>
                          <span className="text-zinc-500">Affiliation:</span>
                          <span className="text-accent font-semibold">IIUC</span>
                        </div>
                        <div className={`flex justify-between items-center py-1 border-b ${isDark ? "border-zinc-900" : "border-zinc-100"}`}>
                          <span className="text-zinc-500">Preferred Stack:</span>
                          <span>Python & C Fundamentals</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-zinc-500">Workflow:</span>
                          <span>Git + VS Code + AI Partners</span>
                        </div>
                      </div>

                      <div className="pt-4">
                        <div className={`p-4 rounded-xl border text-xs font-mono leading-relaxed ${
                          isDark 
                            ? "bg-zinc-950 border-zinc-800 text-zinc-400" 
                            : "bg-white border-zinc-200 text-zinc-600 shadow-sm"
                        }`}>
                          <span className="text-accent font-semibold">&gt;</span> <span>"Comfortable and fast-paced at researching programming patterns, fixing syntax, and parsing complex API documentations using modern LLMs."</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Current learning / Goals block */}
                  <div className={`p-6 rounded-2xl border hover:scale-[1.03] transition-all duration-350 ${
                    isDark ? "bg-zinc-900/10 border-zinc-800/80 hover:border-accent/20" : "bg-zinc-50 border-zinc-200 hover:border-accent/30 shadow-sm"
                  }`}>
                    <div className="space-y-4">
                      {/* What I'm Learning Now */}
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-accent/10 rounded-lg text-accent mt-0.5 animate-pulse">
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className={`text-sm font-semibold font-display ${isDark ? "text-zinc-200" : "text-zinc-800"}`}>
                            What I'm Learning Now
                          </h4>
                          <p className={`text-xs mt-1 leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                            Currently learning JavaScript and exploring full-stack web development.
                          </p>
                        </div>
                      </div>

                      <div className={`h-px ${isDark ? "bg-zinc-800" : "bg-zinc-200"}`}></div>

                      {/* Future Goals */}
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-accent/10 rounded-lg text-accent mt-0.5">
                          <Target className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className={`text-sm font-semibold font-display ${isDark ? "text-zinc-200" : "text-zinc-800"}`}>
                            Future Goals
                          </h4>
                          <p className={`text-xs mt-1 leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                            Aspiring to specialize in Web Development and Software Engineering.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Right Block: Narrative and Core Strengths */}
                <ScrollReveal className="lg:col-span-7 space-y-8">
                  <div className="space-y-4">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono ${
                      isDark ? "bg-accent/10 border border-accent/20 text-accent" : "bg-zinc-200 text-zinc-800"
                    }`}>
                      <Sparkles className="w-3 h-3 text-accent animate-spin" style={{ animationDuration: "3s" }} />
                      About Me
                    </div>
                    <h2 className={`font-display font-extrabold text-3xl sm:text-4xl tracking-tight ${
                      isDark ? "text-white" : "text-zinc-900"
                    }`}>
                      Embracing the Future of <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light drop-shadow-[0_0_10px_rgba(126,211,33,0.1)]">
                        Software Engineering
                      </span>
                    </h2>
                    <div className={`space-y-4 font-sans text-sm sm:text-base leading-relaxed ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}>
                      <p>
                        As an ambitious CSE Student at the International Islamic University Chittagong (IIUC), I believe that modern software development is not just about writing syntax — it is about rapid iteration, adaptive learning, and robust problem-solving.
                      </p>
                      <p>
                        I am highly proficient in utilizing next-generation AI platforms to accelerate learning curves, streamline development loops, write unit test cases, and implement clean architecture. This allows me to approach problems with a structured mindset and focus deeply on system logic and creative solution design.
                      </p>
                    </div>
                  </div>

                  {/* Core Pillars / Strengths cards */}
                  <div className="grid grid-cols-1 gap-4 pt-2">
                    {highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex gap-4 p-4 rounded-xl border transition-all duration-350 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(126,211,33,0.04)] ${
                          isDark 
                            ? "bg-zinc-900/20 border-zinc-900 hover:border-accent/20" 
                            : "bg-zinc-50 border-zinc-200/80 hover:border-accent/30 shadow-xs"
                        }`}
                      >
                        <div className="flex-shrink-0 p-2 bg-accent/5 rounded-lg border border-accent/10 h-10 w-10 flex items-center justify-center">
                          {item.icon}
                        </div>
                        <div className="space-y-1">
                          <h4 className={`font-display font-semibold text-base ${isDark ? "text-white" : "text-zinc-900"}`}>{item.title}</h4>
                          <p className={`text-sm leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>{item.description}</p>
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
    </section>
  );
}
