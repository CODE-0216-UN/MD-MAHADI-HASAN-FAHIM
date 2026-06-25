import { GraduationCap, Calendar, Landmark, CheckCircle, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import Skeleton from "./Skeleton";

interface EducationProps {
  theme: "dark" | "light";
  isLoading?: boolean;
}

export default function Education({ theme, isLoading = false }: EducationProps) {
  const isDark = theme === "dark";


  const educationTimeline = [
    {
      institution: "International Islamic University Chittagong (IIUC)",
      degree: "B.Sc. in Computer Science & Engineering (CSE)",
      period: "2026 – Present",
      status: "Currently in 1st Semester",
      focus: "Focused on structural programming fundamentals, logical algorithms, and basic web standards.",
      highlights: [
        "Structured C Programming & functional loops",
        "Exploring web interface layout rules (HTML)",
        "Proactive involvement in peer coding communities"
      ]
    }
  ];

  return (
    <section 
      id="education" 
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-zinc-950 text-zinc-100" : "bg-white text-zinc-900"
      }`}
    >
      {/* Visual neon light lines background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-accent/15 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal className="text-center space-y-4">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono ${
            isDark ? "bg-accent/10 border border-accent/20 text-accent" : "bg-zinc-200 text-zinc-800"
          }`}>
            <GraduationCap className="w-3.5 h-3.5" />
            Educational Path
          </div>
          <h2 className={`font-display font-extrabold text-3xl sm:text-5xl tracking-tight ${
            isDark ? "text-white" : "text-zinc-900"
          }`}>
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light drop-shadow-[0_0_10px_rgba(126,211,33,0.1)]">History</span>
          </h2>
          <p className={`max-w-xl mx-auto text-sm sm:text-base font-sans ${
            isDark ? "text-zinc-400" : "text-zinc-600"
          }`}>
            A linear trace of my educational journey and specialized focus areas in Computer Science.
          </p>
        </ScrollReveal>

        {/* Elegant Timeline Structure */}
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="education-skeleton"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="space-y-8 w-full relative z-10"
              >
                {/* Timeline Card Skeleton */}
                <div className="relative pl-8 sm:pl-12 pb-4">
                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center z-20 shadow-[0_0_10px_rgba(126,211,33,0.3)] ${
                    isDark ? "bg-zinc-950 border-accent/40" : "bg-white border-accent/40"
                  }`}>
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                  </div>

                  {/* Connecting line */}
                  <div className={`absolute left-3 top-7 bottom-0 w-0.5 ${isDark ? "bg-zinc-900" : "bg-zinc-200"}`}></div>

                  <div className={`p-6 sm:p-8 rounded-2xl border space-y-6 ${
                    isDark ? "bg-zinc-900/25 border-zinc-900" : "bg-zinc-50 border-zinc-200"
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-2 flex-grow">
                        <Skeleton theme={theme} className="h-4 w-28 rounded-md" />
                        <Skeleton theme={theme} className="h-7 w-3/4" />
                      </div>
                      <Skeleton theme={theme} className="h-8 w-32 rounded-full" />
                    </div>

                    <div className="flex items-center gap-2">
                      <Skeleton theme={theme} className="w-4 h-4 rounded-full" />
                      <Skeleton theme={theme} className="h-5 w-48" />
                    </div>

                    <div className={`p-4 rounded-xl border flex items-center justify-between ${
                      isDark ? "bg-zinc-950 border-zinc-900" : "bg-white border-zinc-200"
                    }`}>
                      <Skeleton theme={theme} className="h-4 w-24" />
                      <Skeleton theme={theme} className="h-4 w-36 rounded-md" />
                    </div>

                    <div className="space-y-3">
                      <Skeleton theme={theme} className="h-4 w-full" />
                      <Skeleton theme={theme} className="h-px w-full" />
                      <Skeleton theme={theme} className="h-3.5 w-40" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <div className="flex items-center gap-2.5">
                          <Skeleton theme={theme} className="w-4 h-4 rounded-full" />
                          <Skeleton theme={theme} className="h-4.5 w-36" />
                        </div>
                        <div className="flex items-center gap-2.5">
                          <Skeleton theme={theme} className="w-4 h-4 rounded-full" />
                          <Skeleton theme={theme} className="h-4.5 w-44" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Academic terminal output widget skeleton */}
                <div className={`rounded-xl border p-4 max-w-xl mx-auto ${
                  isDark ? "bg-zinc-950 border-zinc-900" : "bg-zinc-50 border-zinc-200"
                }`}>
                  <div className="flex items-center gap-2 border-b pb-2 mb-2">
                    <Skeleton theme={theme} className="w-3.5 h-3.5 rounded-full" />
                    <Skeleton theme={theme} className="h-4 w-32" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton theme={theme} className="h-4 w-44" />
                    <Skeleton theme={theme} className="h-4 w-1/2" />
                    <Skeleton theme={theme} className="h-4 w-2/3" />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="education-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="w-full relative z-10"
              >
                {educationTimeline.map((edu) => (
                  <div key={edu.institution}>
                    <ScrollReveal
                      className="relative pl-8 sm:pl-12 pb-4"
                    >
                      {/* Timeline dot */}
                      <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center z-20 shadow-[0_0_10px_rgba(126,211,33,0.4)] ${
                        isDark ? "bg-zinc-950 border-accent" : "bg-white border-accent"
                      }`}>
                        <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
                      </div>

                      {/* Connecting line */}
                      <div className={`absolute left-3 top-7 bottom-0 w-0.5 ${isDark ? "bg-zinc-800/80" : "bg-zinc-200"}`}></div>

                      {/* Timeline Card */}
                      <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(126,211,33,0.06)] space-y-6 group hover:border-accent/30 ${
                        isDark 
                          ? "bg-zinc-900/25 border-zinc-900" 
                          : "bg-zinc-50 border-zinc-200 shadow-xs"
                      }`}>
                        
                        {/* Degree & Period */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="space-y-1">
                            <span className="text-xs font-mono text-accent uppercase tracking-wider block">// Major Study</span>
                            <h3 className={`font-display font-bold text-xl sm:text-2xl group-hover:text-accent transition-colors duration-300 ${
                              isDark ? "text-white" : "text-zinc-900"
                            }`}>
                              {edu.degree}
                            </h3>
                          </div>
                          <div className="flex-shrink-0">
                            <span className={`inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-full border ${
                              isDark ? "text-zinc-300 bg-zinc-950 border-zinc-900" : "text-zinc-700 bg-white border-zinc-200"
                            }`}>
                              <Calendar className="w-3.5 h-3.5 text-accent" />
                              {edu.period}
                            </span>
                          </div>
                        </div>

                        {/* Institution Row */}
                        <div className={`flex items-center gap-2 font-sans text-sm sm:text-base font-medium ${
                          isDark ? "text-zinc-300" : "text-zinc-800"
                        }`}>
                          <Landmark className="w-4 h-4 text-accent" />
                          <span>{edu.institution}</span>
                        </div>

                        {/* Status Indicator Bar */}
                        <div className={`p-4 rounded-xl border flex items-center justify-between text-xs sm:text-sm font-mono ${
                          isDark ? "bg-zinc-950 border-zinc-900" : "bg-white border-zinc-200"
                        }`}>
                          <span className="text-zinc-500">Current Phase:</span>
                          <span className="text-accent font-semibold flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                            {edu.status}
                          </span>
                        </div>

                        <div className="space-y-3">
                          <p className={`text-sm font-sans leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                            {edu.focus}
                          </p>

                          <div className={`h-px my-4 ${isDark ? "bg-zinc-800/60" : "bg-zinc-200"}`}></div>

                          <p className="text-xs font-mono text-zinc-500 uppercase">Key Curricular Pillars</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                            {edu.highlights.map((hl, hlIdx) => (
                              <div key={hlIdx} className={`flex items-center gap-2.5 text-xs sm:text-sm ${
                                isDark ? "text-zinc-300" : "text-zinc-700"
                              }`}>
                                <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                                <span>{hl}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    </ScrollReveal>
                  </div>
                ))}

                {/* Academic terminal output widget */}
                <ScrollReveal
                  className={`mt-8 rounded-xl border p-4 max-w-xl mx-auto hover:scale-[1.03] transition-all duration-300 ${
                    isDark ? "bg-zinc-950 border-zinc-900 hover:border-accent/20" : "bg-zinc-50 border-zinc-200 shadow-xs hover:border-accent/30"
                  }`}
                >
                  <div className={`flex items-center gap-2 border-b pb-2 mb-2 font-mono text-[10px] text-zinc-500 ${
                    isDark ? "border-zinc-900" : "border-zinc-200"
                  }`}>
                    <Terminal className="w-3.5 h-3.5 text-accent" />
                    <span>iiuc_terminal.sh</span>
                  </div>
                  <pre className={`font-mono text-xs space-y-1 ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                    <div><span className="text-zinc-500">$</span> student info --id CODE-0216-UN</div>
                    <div className={isDark ? "text-zinc-300" : "text-zinc-800"}>Name: MD. Mahadi Hasan Fahim</div>
                    <div className={isDark ? "text-zinc-300" : "text-zinc-800"}>Dept: Computer Science & Engineering</div>
                    <div className={isDark ? "text-zinc-300" : "text-zinc-800"}>Batch: Spring 2026</div>
                    <div><span className="text-accent">Success: Academic node fully operational.</span></div>
                  </pre>
                </ScrollReveal>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
