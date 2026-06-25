import { Users2, Calendar, ChevronRight, ExternalLink, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import Skeleton from "./Skeleton";

interface ActivitiesProps {
  theme: "dark" | "light";
  isLoading?: boolean;
}

export default function Activities({ theme, isLoading = false }: ActivitiesProps) {
  const isDark = theme === "dark";


  const activities = [
    {
      club: "IIUC Computer Club",
      role: "Member",
      period: "2026 – Present",
      location: "Chittagong, Bangladesh",
      description: "Active member of the Computer Club at International Islamic University Chittagong (IIUC).",
      points: [
        "Participating in tech events, academic workshops, and expert-led coding bootcamps.",
        "Collaborating on programming problem sets, parsing logic concepts with peer engineers.",
        "Exploring campus-wide hackathons and software exposition events."
      ],
      icon: (
        <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center border ${
          isDark ? "bg-accent/5 border-accent/20" : "bg-zinc-100 border-accent/30"
        }`}>
          <Terminal className="w-5 h-5 text-accent" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-accent animate-ping"></span>
        </div>
      )
    },
    {
      club: "Nexus Coding Club",
      role: "Member",
      period: "2026 – Present",
      location: "Chittagong, Bangladesh",
      description: "Active member of Nexus Coding Club, collaborating with fellow students.",
      points: [
        "Collaborating with classmates and peer developers on core coding practices, syntax drills, and debugging sessions.",
        "Engaging in peer-to-peer programming learning groups and logic brainstorming exercises.",
        "Building community awareness around software development concepts, git flows, and AI utilization."
      ],
      icon: (
        <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center border ${
          isDark ? "bg-accent/5 border-accent/20" : "bg-zinc-100 border-accent/30"
        }`}>
          <Users2 className="w-5 h-5 text-accent" />
        </div>
      )
    }
  ];

  return (
    <section 
      id="activities" 
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-zinc-950 text-zinc-100" : "bg-white text-zinc-900"
      }`}
    >
      {/* Visual glowing radial background */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-accent/5 filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal className="text-center space-y-4">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono ${
            isDark ? "bg-accent/10 border border-accent/20 text-accent" : "bg-zinc-200 text-zinc-800"
          }`}>
            <Users2 className="w-3.5 h-3.5" />
            Clubs & Involvement
          </div>
          <h2 className={`font-display font-extrabold text-3xl sm:text-5xl tracking-tight ${
            isDark ? "text-white" : "text-zinc-900"
          }`}>
            Activities & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light drop-shadow-[0_0_10px_rgba(126,211,33,0.1)]">Involvement</span>
          </h2>
          <p className={`max-w-xl mx-auto text-sm sm:text-base font-sans ${
            isDark ? "text-zinc-400" : "text-zinc-600"
          }`}>
            Participating in tech communities to expand my technical network, build team alignment, and drive collaborative learning.
          </p>
        </ScrollReveal>

        {/* Bento Grid layout for activities */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="activities-skeleton"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full relative z-10"
            >
              {[1, 2].map((idx) => (
                <div
                  key={idx}
                  className={`p-6 sm:p-8 rounded-2xl border space-y-6 ${
                    isDark ? "bg-zinc-900/25 border-zinc-900" : "bg-zinc-50 border-zinc-200"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Skeleton theme={theme} className="w-12 h-12 rounded-xl" />
                      <div className="space-y-2">
                        <Skeleton theme={theme} className="h-6 w-36" />
                        <Skeleton theme={theme} className="h-4 w-24 rounded-md" />
                      </div>
                    </div>
                    <Skeleton theme={theme} className="h-8 w-32 rounded-lg" />
                  </div>

                  <div className={`h-px ${isDark ? "bg-zinc-800/40" : "bg-zinc-200/60"}`}></div>

                  <div className="space-y-4">
                    <Skeleton theme={theme} className="h-4 w-full" />
                    <div className="space-y-2.5">
                      <Skeleton theme={theme} className="h-3.5 w-11/12" />
                      <Skeleton theme={theme} className="h-3.5 w-4/5" />
                      <Skeleton theme={theme} className="h-3.5 w-5/6" />
                    </div>
                  </div>

                  <div className={`pt-4 border-t flex justify-between ${
                    isDark ? "border-zinc-800/40" : "border-zinc-200/60"
                  }`}>
                    <Skeleton theme={theme} className="h-3 w-32" />
                    <Skeleton theme={theme} className="h-3.5 w-24" />
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="activities-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="w-full relative z-10"
            >
              <ScrollReveal>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {activities.map((act) => (
                    <div
                      key={act.club}
                      className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 flex flex-col justify-between hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(126,211,33,0.06)] group hover:border-accent/40 ${
                        isDark 
                          ? "bg-zinc-900/25 border-zinc-900" 
                          : "bg-zinc-50 border-zinc-200 shadow-xs"
                      }`}
                    >
                      <div className="space-y-6">
                        
                        {/* Header Row */}
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                          <div className="flex items-center gap-4">
                            {act.icon}
                            <div className="space-y-1">
                              <h3 className={`font-display font-bold text-xl group-hover:text-accent transition-colors duration-300 ${
                                isDark ? "text-white" : "text-zinc-900"
                              }`}>
                                {act.club}
                              </h3>
                              <p className="text-xs text-accent font-mono">{act.role} // Active</p>
                            </div>
                          </div>
                          <div className="text-left sm:text-right">
                            <span className={`inline-flex items-center gap-1 text-xs font-mono px-3 py-1.5 rounded-lg border ${
                              isDark ? "bg-zinc-950 border-zinc-900 text-zinc-400" : "bg-white border-zinc-200 text-zinc-600 shadow-2xs"
                            }`}>
                              <Calendar className="w-3 h-3 text-accent" />
                              {act.period}
                            </span>
                          </div>
                        </div>

                        <div className={`h-px ${isDark ? "bg-zinc-800/60" : "bg-zinc-200"}`}></div>

                        <div className="space-y-4">
                          <p className={`text-sm font-sans leading-relaxed ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>
                            {act.description}
                          </p>

                          <ul className={`space-y-3 font-sans text-xs sm:text-sm ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                            {act.points.map((point, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2.5">
                                <ChevronRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>

                      {/* Card Footer Decorator */}
                      <div className={`mt-8 pt-4 border-t flex items-center justify-between ${
                        isDark ? "border-zinc-900/60" : "border-zinc-200"
                      }`}>
                        <span className="text-[10px] font-mono text-zinc-500 uppercase">
                          {act.location}
                        </span>
                        <span className="text-xs font-mono text-accent flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Collaborative Learning
                          <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
