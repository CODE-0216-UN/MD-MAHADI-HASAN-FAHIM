import { Award, ShieldCheck, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import Skeleton from "./Skeleton";

interface CertificationsProps {
  theme: "dark" | "light";
  isLoading?: boolean;
}

export default function Certifications({ theme, isLoading = false }: CertificationsProps) {
  const isDark = theme === "dark";


  const placeholderCertifications = [
    {
      title: "Introduction to Computer Science & Python",
      issuer: "To Be Earned",
      date: "In Progress",
      icon: <Cpu className="w-5 h-5 text-accent" />,
      tag: "Academics"
    },
    {
      title: "Responsive Web Design & Algorithms",
      issuer: "To Be Earned",
      date: "Planned",
      icon: <Award className="w-5 h-5 text-accent" />,
      tag: "Development"
    },
    {
      title: "Git, Version Control & Collaboration",
      issuer: "To Be Earned",
      date: "Planned",
      icon: <ShieldCheck className="w-5 h-5 text-accent" />,
      tag: "Core Engineering"
    }
  ];

  return (
    <section 
      id="certifications" 
      className={`py-24 relative overflow-hidden ${
        isDark ? "bg-zinc-950/20" : "bg-zinc-100/40 border-y border-zinc-200"
      }`}
    >
      {/* Decorative background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-accent/3 filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal className="text-center space-y-4">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono ${
            isDark ? "bg-accent/10 border border-accent/20 text-accent" : "bg-zinc-200 text-zinc-800"
          }`}>
            <Award className="w-3.5 h-3.5" />
            Milestones & Goals
          </div>
          <h2 className={`font-display font-extrabold text-3xl sm:text-5xl tracking-tight ${
            isDark ? "text-white" : "text-zinc-900"
          }`}>
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light drop-shadow-[0_0_10px_rgba(126,211,33,0.1)]">Courses</span>
          </h2>
          <p className={`max-w-xl mx-auto text-sm sm:text-base font-sans ${
            isDark ? "text-zinc-400" : "text-zinc-600"
          }`}>
            A space dedicated to tracking upcoming academic achievements, professional specializations, and completed web engineering courses.
          </p>
        </ScrollReveal>

        {/* Certifications Grid */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="certifications-skeleton"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
            >
              {[1, 2, 3].map((idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border flex flex-col justify-between h-[220px] ${
                    isDark ? "bg-zinc-900/25 border-zinc-900" : "bg-zinc-50 border-zinc-200"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Skeleton theme={theme} className="w-10 h-10 rounded-xl" />
                      <Skeleton theme={theme} className="h-5 w-16 rounded-full" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton theme={theme} className="h-5 w-4/5" />
                      <Skeleton theme={theme} className="h-4 w-1/3" />
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-zinc-100/10 flex items-center justify-between">
                    <Skeleton theme={theme} className="h-4 w-20" />
                    <Skeleton theme={theme} className="h-4.5 w-16 rounded" />
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="certifications-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="w-full relative z-10"
            >
              <ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {placeholderCertifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(126,211,33,0.06)] group flex flex-col justify-between relative overflow-hidden ${
                        isDark 
                          ? "bg-zinc-900/20 border-zinc-800/80 hover:border-accent/40" 
                          : "bg-white border-zinc-200 hover:border-accent/55 shadow-xs"
                      }`}
                    >
                      {/* Corner ribbon style */}
                      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-accent/5 to-transparent rounded-bl-full pointer-events-none"></div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className={`p-2.5 rounded-xl border ${
                            isDark ? "bg-zinc-950 border-zinc-800" : "bg-zinc-50 border-zinc-200"
                          } group-hover:border-accent/30 transition-all duration-300`}>
                            {cert.icon}
                          </div>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                            isDark ? "bg-accent/10 text-accent border border-accent/20" : "bg-zinc-100 text-zinc-800"
                          }`}>
                            {cert.tag}
                          </span>
                        </div>

                        <div className="space-y-1.5">
                          <h3 className={`font-display font-bold text-lg group-hover:text-accent transition-colors duration-300 ${
                            isDark ? "text-white" : "text-zinc-900"
                          }`}>
                            {cert.title}
                          </h3>
                          <p className={`text-xs font-mono text-zinc-500`}>
                            Platform: <span className={isDark ? "text-zinc-300" : "text-zinc-700"}>{cert.issuer}</span>
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-zinc-100/10 flex items-center justify-between">
                        <span className="text-[10px] font-mono text-zinc-500 uppercase">Target Date</span>
                        <span className="text-xs font-mono font-semibold text-accent flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                          {cert.date}
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
