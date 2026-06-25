import { useState, useEffect } from "react";
import { FileText, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Skeleton from "./Skeleton";

interface HeroProps {
  onContactClick: () => void;
  onDownloadCVClick: () => void;
  theme: "dark" | "light";
  isLoading?: boolean;
}

export default function Hero({ onContactClick, onDownloadCVClick, theme, isLoading = false }: HeroProps) {
  const isDark = theme === "dark";
  const [imgLoaded, setImgLoaded] = useState(false);

  // Typewriter effect state
  const fullText = "CSE Student | Aspiring Software Developer";
  const [typedText, setTypedText] = useState("");
  
  useEffect(() => {
    if (isLoading) return;
    let currentIndex = 0;
    let isCancelled = false;
    
    const interval = setInterval(() => {
      if (isCancelled) return;
      
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 60); // Speed of typewriter
    
    return () => {
      isCancelled = true;
      clearInterval(interval);
    };
  }, [isLoading]);

  return (
    <section 
      id="about-hero" 
      className={`relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-zinc-950 text-zinc-100" : "bg-zinc-50 text-zinc-900"
      }`}
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-accent/5 filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent/5 filter blur-3xl pointer-events-none" style={{ animationDelay: "2s" }}></div>
      
      {/* Decorative Grid Overlay */}
      <div className={`absolute inset-0 [background-size:16px_16px] opacity-20 pointer-events-none ${
        isDark 
          ? "bg-[radial-gradient(#27272a_1px,transparent_1px)]" 
          : "bg-[radial-gradient(#d4d4d8_1px,transparent_1px)]"
      }`}></div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="hero-skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full relative z-10"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                <Skeleton theme={theme} className="h-7 w-56 rounded-full" />
                
                <div className="space-y-3">
                  <Skeleton theme={theme} className="h-4 w-32 rounded-md" />
                  <Skeleton theme={theme} className="h-12 w-4/5 sm:w-2/3" />
                  <Skeleton theme={theme} className="h-8 w-1/2" />
                </div>

                <div className="space-y-2 max-w-xl">
                  <Skeleton theme={theme} className="h-4 w-full" />
                  <Skeleton theme={theme} className="h-4 w-11/12" />
                  <Skeleton theme={theme} className="h-4 w-4/5" />
                </div>

                <div className="flex gap-4 pt-2">
                  <Skeleton theme={theme} className="h-11 w-36 rounded-full" />
                  <Skeleton theme={theme} className="h-11 w-36 rounded-full" />
                </div>

                <div className="pt-6 border-t border-zinc-800/20 max-w-xl grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Skeleton theme={theme} className="h-3 w-16" />
                    <Skeleton theme={theme} className="h-5 w-24" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton theme={theme} className="h-3 w-16" />
                    <Skeleton theme={theme} className="h-5 w-24" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton theme={theme} className="h-3 w-16" />
                    <Skeleton theme={theme} className="h-5 w-24" />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-5 flex justify-center items-center relative h-[450px]">
                <div className="relative w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] flex items-center justify-center">
                  <Skeleton theme={theme} shape="circle" className="w-72 h-72 sm:w-80 sm:h-80" />
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="hero-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="w-full relative z-10"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Intro */}
              <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                <div
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono w-fit border shadow-[0_0_15px_rgba(126,211,33,0.12)] transition-all duration-300 hover:scale-[1.02] ${
                    isDark 
                      ? "bg-zinc-950 border-accent/30 text-accent" 
                      : "bg-white border-accent/40 text-zinc-800"
                  }`}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent shadow-[0_0_8px_#7ED321]"></span>
                  </span>
                  Available for Internships & Projects
                </div>

                <div className="space-y-3">
                  <p className="font-mono text-zinc-500 tracking-wider text-sm uppercase">Welcome to my space</p>
                  <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
                    Hi, I am <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light drop-shadow-[0_0_15px_rgba(126,211,33,0.15)]">
                      MD. Mahadi Hasan Fahim
                    </span>
                  </h1>
                  <h2 className={`font-display font-medium text-xl sm:text-2xl flex items-center min-h-[36px] ${
                    isDark ? "text-zinc-300" : "text-zinc-700"
                  }`}>
                    <span className="text-accent font-semibold mr-2.5">//</span>
                    <span>{typedText}</span>
                    <span className="inline-block w-1.5 h-6 ml-1 bg-accent animate-blink shadow-[0_0_8px_#7ED321]"></span>
                  </h2>
                </div>

                <p className={`text-base sm:text-lg max-w-xl leading-relaxed font-sans ${
                  isDark ? "text-zinc-400" : "text-zinc-600"
                }`}
                >
                  I am a Computer Science & Engineering student at <span className={isDark ? "text-white font-medium" : "text-zinc-950 font-semibold"}>International Islamic University Chittagong (IIUC)</span> with a strong passion for programming and software development. I am eager to learn and grow through real-world challenges.
                </p>

                {/* Social Links & Metrics */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={onDownloadCVClick}
                    className="px-6 py-3 rounded-full bg-accent hover:bg-accent-light text-zinc-950 font-display font-semibold text-sm transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(126,211,33,0.2)] hover:shadow-[0_0_30px_rgba(126,211,33,0.5)] hover:scale-[1.03] cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    Download CV
                  </button>
                  <button
                    onClick={onContactClick}
                    className={`px-6 py-3 rounded-full font-display font-semibold text-sm transition-all duration-300 flex items-center gap-2 hover:scale-[1.03] cursor-pointer border ${
                      isDark 
                        ? "bg-zinc-900 hover:bg-zinc-800 border-zinc-800 hover:border-zinc-700 text-white" 
                        : "bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-800"
                    }`}
                  >
                    Contact Me
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </button>
                </div>

                {/* Fact cards */}
                <div className={`pt-6 border-t max-w-xl grid grid-cols-3 gap-4 ${
                  isDark ? "border-zinc-800/60" : "border-zinc-200"
                }`}
                >
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-zinc-500">Institution</p>
                    <p className={`text-sm font-semibold ${isDark ? "text-zinc-200" : "text-zinc-800"}`}>IIUC</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-zinc-500">Department</p>
                    <p className={`text-sm font-semibold ${isDark ? "text-zinc-200" : "text-zinc-800"}`}>CSE</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-zinc-500">Focus Areas</p>
                    <p className="text-sm font-semibold text-accent font-bold">Coding & AI</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Animated Portrait with Green Accent Circle */}
              <div className="lg:col-span-5 flex justify-center items-center relative h-[450px]">
                {/* Avatar Container */}
                <div className="relative w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] flex items-center justify-center">
                  {/* Glowing Accent Halo Ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-transparent blur-xl animate-pulse-slow"></div>
                  
                  {/* Glowing border ring */}
                  <div className="absolute inset-2 rounded-full border border-dashed border-accent/30 animate-[spin_40s_linear_infinite]"></div>
                  <div className="absolute inset-6 rounded-full border border-accent/20 animate-[spin_20s_linear_infinite_reverse]"></div>

                  {/* Main Circle / Profile Wrapper */}
                  <div className={`relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 flex items-center justify-center group shadow-[0_0_40px_rgba(126,211,33,0.15)] transition-all duration-300 hover:scale-[1.03] ${
                    isDark ? "border-accent/40 bg-zinc-950" : "border-accent/40 bg-zinc-100"
                  }`}>
                    {/* Profile Background Grid */}
                    <div className={`absolute inset-0 bg-[size:12px_12px] opacity-40 z-0 ${
                      isDark 
                        ? "bg-[linear-gradient(rgba(126,211,33,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(126,211,33,0.05)_1px,transparent_1px)]"
                        : "bg-[linear-gradient(rgba(126,211,33,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(126,211,33,0.08)_1px,transparent_1px)]"
                    }`}></div>
                    
                    {/* Ambient overlay glow over the image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent z-20 pointer-events-none"></div>
                    
                    {/* Image skeleton when not loaded */}
                    {!imgLoaded && (
                      <div className="absolute inset-0 z-25">
                        <Skeleton theme={theme} shape="circle" className="w-full h-full" />
                      </div>
                    )}

                    {/* Real Profile Image from Google Drive */}
                    <img
                      src="https://lh3.googleusercontent.com/d/1-iEcmZ_U1iWXLafxVLZ37lwBTok6aRdG"
                      alt="MD. Mahadi Hasan Fahim"
                      referrerPolicy="no-referrer"
                      onLoad={() => setImgLoaded(true)}
                      className={`w-full h-full object-cover relative z-10 transition-transform duration-700 ease-out group-hover:scale-105 transition-opacity duration-500 ${
                        imgLoaded ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    
                    {/* Badge with student's initials */}
                    <div className={`absolute bottom-4 border px-4 py-1.5 rounded-full text-xs font-mono z-30 flex items-center gap-1.5 shadow-lg transition-colors duration-300 ${
                      isDark 
                        ? "bg-zinc-950/90 border-accent/20 text-zinc-300" 
                        : "bg-white/95 border-accent/30 text-zinc-800"
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping"></span>
                      <span>Fahim.dev</span>
                    </div>
                  </div>

                  {/* Glowing Corner Accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent/60"></div>
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/60"></div>
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/60"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent/60"></div>
                </div>

                {/* Floating Live Terminal Snip */}
                <div
                  className={`absolute bottom-0 right-0 border p-3.5 rounded-xl shadow-2xl backdrop-blur-md max-w-[210px] hidden sm:block z-20 transition-colors duration-300 hover:scale-[1.03] ${
                    isDark ? "bg-zinc-950/90 border-zinc-800" : "bg-white/95 border-zinc-200"
                  }`}
                >
                  <div className={`flex items-center gap-1.5 border-b pb-2 mb-2 ${
                    isDark ? "border-zinc-900" : "border-zinc-100"
                  }`}>
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-accent/80"></div>
                    <span className="text-[10px] font-mono text-zinc-500 ml-1">fahim.py</span>
                  </div>
                  <pre className="font-mono text-[10px] text-zinc-400 space-y-1">
                    <div><span className="text-accent">def</span> <span className={isDark ? "text-zinc-300" : "text-zinc-700"}>get_status():</span></div>
                    <div className="pl-3"><span className="text-zinc-500">return</span> <span className={isDark ? "text-zinc-300" : "text-zinc-700"}>"Always learning"</span></div>
                    <div className={`pt-1 text-[9px] text-zinc-500 border-t ${
                      isDark ? "border-zinc-900" : "border-zinc-100"
                    }`}>
                      &gt; python fahim.py
                      <div className="text-accent">"Always learning"</div>
                    </div>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
