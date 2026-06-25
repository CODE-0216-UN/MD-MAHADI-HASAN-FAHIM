import { useState } from "react";
import { ArrowUp, Github, Linkedin, Facebook, Instagram, Mail, Phone, Copy, Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface FooterProps {
  theme: "dark" | "light";
}

export default function Footer({ theme }: FooterProps) {
  const [copied, setCopied] = useState(false);
  const isDark = theme === "dark";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`py-12 border-t relative overflow-hidden transition-colors duration-300 ${
      isDark ? "bg-zinc-950 border-zinc-900/60" : "bg-zinc-50 border-zinc-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Top Row: Brand & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side: Brand and short tag with Copyable Email */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
              <span className={`font-display font-semibold tracking-wide ${isDark ? "text-white" : "text-zinc-900"}`}>
                Mahadi Hasan Fahim
              </span>
            </div>

            {/* Displayed Email with Copy button */}
            <div className={`relative flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono transition-colors duration-300 ${
              isDark ? "bg-zinc-900/40 border-zinc-800 text-zinc-400" : "bg-zinc-100 border-zinc-200 text-zinc-600"
            }`}>
              <span className="text-[11px]">immahadihasanfahim@gmail.com</span>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText("immahadihasanfahim@gmail.com");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className={`p-1 rounded-md transition-all duration-200 cursor-pointer hover:bg-accent/20 hover:text-accent ${
                  isDark ? "text-zinc-500" : "text-zinc-400"
                }`}
                title="Copy Email Address"
              >
                {copied ? <Check className="w-3 h-3 text-accent" /> : <Copy className="w-3 h-3" />}
              </button>

              {/* Toast animation */}
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 5, scale: 0.95 }}
                    animate={{ opacity: 1, y: -28, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                    className="absolute left-1/2 -translate-x-1/2 bg-zinc-950 border border-accent/30 text-accent font-mono text-[9px] px-2 py-0.5 rounded shadow-xl whitespace-nowrap z-50 flex items-center gap-1"
                  >
                    Copied!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Social Icons (green circular buttons) */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/CODE-0216-UN"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 rounded-full hover:bg-accent hover:text-zinc-950 text-accent border border-accent/30 flex items-center justify-center transition-all duration-300 shadow-[0_0_10px_rgba(126,211,33,0.05)] hover:shadow-[0_0_20px_rgba(126,211,33,0.3)] hover:-translate-y-0.5 ${
                isDark ? "bg-zinc-950" : "bg-white"
              }`}
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/md-mahadi-hasan-fahim-8916073bb"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 rounded-full hover:bg-accent hover:text-zinc-950 text-accent border border-accent/30 flex items-center justify-center transition-all duration-300 shadow-[0_0_10px_rgba(126,211,33,0.05)] hover:shadow-[0_0_20px_rgba(126,211,33,0.3)] hover:-translate-y-0.5 ${
                isDark ? "bg-zinc-950" : "bg-white"
              }`}
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="https://www.facebook.com/share/1H8uCsaaiw"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 rounded-full hover:bg-accent hover:text-zinc-950 text-accent border border-accent/30 flex items-center justify-center transition-all duration-300 shadow-[0_0_10px_rgba(126,211,33,0.05)] hover:shadow-[0_0_20px_rgba(126,211,33,0.3)] hover:-translate-y-0.5 ${
                isDark ? "bg-zinc-950" : "bg-white"
              }`}
              title="Facebook Profile"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href="https://www.instagram.com/im_hadi_11"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 rounded-full hover:bg-accent hover:text-zinc-950 text-accent border border-accent/30 flex items-center justify-center transition-all duration-300 shadow-[0_0_10px_rgba(126,211,33,0.05)] hover:shadow-[0_0_20px_rgba(126,211,33,0.3)] hover:-translate-y-0.5 ${
                isDark ? "bg-zinc-950" : "bg-white"
              }`}
              title="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href="mailto:immahadihasanfahim@gmail.com"
              className={`w-9 h-9 rounded-full hover:bg-accent hover:text-zinc-950 text-accent border border-accent/30 flex items-center justify-center transition-all duration-300 shadow-[0_0_10px_rgba(126,211,33,0.05)] hover:shadow-[0_0_20px_rgba(126,211,33,0.3)] hover:-translate-y-0.5 ${
                isDark ? "bg-zinc-950" : "bg-white"
              }`}
              title="Email Address"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/8801670358292"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 rounded-full hover:bg-accent hover:text-zinc-950 text-accent border border-accent/30 flex items-center justify-center transition-all duration-300 shadow-[0_0_10px_rgba(126,211,33,0.05)] hover:shadow-[0_0_20px_rgba(126,211,33,0.3)] hover:-translate-y-0.5 ${
                isDark ? "bg-zinc-950" : "bg-white"
              }`}
              title="WhatsApp Chat"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px ${isDark ? "bg-zinc-900/60" : "bg-zinc-200"}`}></div>

        {/* Bottom Row */}
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-xs text-zinc-400 font-sans">
            &copy; 2026 Mahadi Hasan Fahim. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            title="Scroll to Top"
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer hover:-translate-y-0.5 ${
              isDark 
                ? "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-accent hover:border-accent/40" 
                : "bg-white border-zinc-200 text-zinc-500 hover:text-accent hover:border-accent/50 shadow-2xs"
            }`}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
