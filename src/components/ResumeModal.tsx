import { motion } from "motion/react";
import { X, Printer, Copy, Check, Terminal, ExternalLink } from "lucide-react";
import { useState } from "react";

interface ResumeModalProps {
  onClose: () => void;
  theme: "dark" | "light";
}

export default function ResumeModal({ onClose, theme }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);
  const isDark = theme === "dark";

  const handlePrint = () => {
    window.print();
  };

  const resumeMarkdown = `# MD. Mahadi Hasan Fahim
CSE Student | Aspiring Software Developer
Email: immahadihasanfahim@gmail.com | Phone: +8801670358292
GitHub: github.com/CODE-0216-UN | LinkedIn: linkedin.com/in/md-mahadi-hasan-fahim-8916073bb
Facebook: facebook.com/share/1H8uCsaaiw/ | Instagram: @im_hadi_11

## EDUCATION
International Islamic University Chittagong (IIUC)
B.Sc. in Computer Science & Engineering | 2026 - Present
Current Status: 1st Semester

## CORE SKILLS
- Programming: C, Python, JavaScript
- Web: HTML, CSS Layouts, Tailwind CSS
- Tooling: Git, GitHub, VS Code
- Soft Skills: Team Collaboration, Problem Solving, Technical Writing
- Productivity: Canva, MS Word, MS Excel
- AI Co-piloting: ChatGPT, Gemini, Claude

## EXPERIENCE / INVOLVEMENT
- IIUC Computer Club - Active Member | 2026 - Present
- Nexus Coding Club - Active Member | 2026 - Present

## PROJECTS
- Web & App Development Sandbox (Python, HTML, Git) | 2026 - Present
- iiuc-cse-lab-solutions (C Language, Algorithms)
- web-portfolio-creative (TypeScript, Framer Motion)
- python-automation-scripts (Python automation)
`;

  const copyMarkdown = () => {
    navigator.clipboard.writeText(resumeMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-xs"
      ></motion.div>

      {/* Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className={`relative border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl z-10 transition-colors duration-300 ${
          isDark ? "bg-zinc-950 border-zinc-800 text-zinc-100" : "bg-white border-zinc-200 text-zinc-900"
        }`}
      >
        {/* Header bar */}
        <div className={`border-b px-6 py-4 flex items-center justify-between ${
          isDark ? "bg-zinc-900/60 border-zinc-800/80" : "bg-zinc-100 border-zinc-200"
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className={`font-display font-semibold text-sm sm:text-base ${isDark ? "text-white" : "text-zinc-900"}`}>
              Fahim_Resume_2026.md
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyMarkdown}
              title="Copy markdown content"
              className={`p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                isDark ? "text-zinc-400 hover:text-accent hover:bg-zinc-800" : "text-zinc-600 hover:text-accent hover:bg-zinc-200"
              }`}
            >
              {copied ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={handlePrint}
              title="Print Resume as PDF"
              className={`p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                isDark ? "text-zinc-400 hover:text-accent hover:bg-zinc-800" : "text-zinc-600 hover:text-accent hover:bg-zinc-200"
              }`}
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors duration-200 cursor-pointer ${
                isDark ? "text-zinc-400 hover:text-white hover:bg-zinc-800" : "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200"
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Area */}
        <div id="resume-print-area" className={`flex-grow overflow-y-auto p-6 sm:p-10 font-sans space-y-8 print:p-0 print:bg-white print:text-black ${
          isDark ? "text-zinc-300" : "text-zinc-700"
        }`}>
          
          {/* Print specific instructions overlay */}
          <div className={`border rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs font-mono print:hidden mb-4 ${
            isDark ? "bg-accent/5 border-accent/20 text-zinc-400" : "bg-zinc-50 border-accent/35 text-zinc-600"
          }`}>
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-accent animate-pulse" />
              <span>Full styled PDF on Google Drive or optimized printable A4 layout below.</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://drive.google.com/file/d/1m3GgbrjCkpTzVTl9qM2RKvIvZw8zWjt4/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline flex items-center gap-1 cursor-pointer font-bold transition-all duration-200"
              >
                Google Drive CV <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="hidden sm:inline text-zinc-600">|</span>
              <button
                onClick={handlePrint}
                className="text-accent hover:underline flex items-center gap-1 cursor-pointer font-bold transition-all duration-200"
              >
                Print layout <Printer className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* CV Contents */}
          <div className="space-y-6">
            <div className={`text-center sm:text-left border-b pb-6 print:border-zinc-300 ${isDark ? "border-zinc-800/80" : "border-zinc-200"}`}>
              <h1 className={`font-display font-bold text-3xl sm:text-4xl print:text-black ${isDark ? "text-white" : "text-zinc-900"}`}>
                MD. Mahadi Hasan Fahim
              </h1>
              <p className="text-sm font-mono text-accent uppercase tracking-wider mt-1 print:text-emerald-700 font-bold">
                Computer Science & Engineering Student | Developer
              </p>
              
              <div className={`flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1 text-xs mt-4 print:text-zinc-600 font-mono ${
                isDark ? "text-zinc-400" : "text-zinc-500"
              }`}>
                <span>Phone/WhatsApp: +8801670358292</span>
                <span className="hidden sm:inline">•</span>
                <span>Email: immahadihasanfahim@gmail.com</span>
                <span className="hidden sm:inline">•</span>
                <span>GitHub: github.com/CODE-0216-UN</span>
                <span className="hidden sm:inline">•</span>
                <span>LinkedIn: md-mahadi-hasan-fahim</span>
                <span className="hidden sm:inline">•</span>
                <span>Facebook: fb/1H8uCsaaiw</span>
                <span className="hidden sm:inline">•</span>
                <span>Instagram: @im_hadi_11</span>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono text-accent uppercase tracking-wider print:text-emerald-700 font-bold border-l-2 border-accent pl-2">
                Education
              </h2>
              <div className="pl-2 space-y-1">
                <div className="flex justify-between font-medium text-sm sm:text-base print:text-black">
                  <span className={isDark ? "text-zinc-200" : "text-zinc-950"}>International Islamic University Chittagong (IIUC)</span>
                  <span className="text-xs font-mono text-zinc-500">2026 – Present</span>
                </div>
                <p className={`text-xs sm:text-sm ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                  B.Sc. in Computer Science & Engineering | Currently in 1st Semester
                </p>
                <p className={`text-xs mt-1 italic ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                  Focused on structural programming principles, software system basics, and logic algorithms.
                </p>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono text-accent uppercase tracking-wider print:text-emerald-700 font-bold border-l-2 border-accent pl-2">
                Technical Skills
              </h2>
              <div className={`pl-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm print:text-zinc-700 font-mono ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}>
                <div>
                  <span className={`font-bold print:text-black ${isDark ? "text-zinc-200" : "text-zinc-900"}`}>Programming:</span> C, Python, JavaScript
                </div>
                <div>
                  <span className={`font-bold print:text-black ${isDark ? "text-zinc-200" : "text-zinc-900"}`}>Web Layouts:</span> HTML5, Tailwind CSS
                </div>
                <div>
                  <span className={`font-bold print:text-black ${isDark ? "text-zinc-200" : "text-zinc-900"}`}>Version Control:</span> Git, GitHub Desktop
                </div>
                <div>
                  <span className={`font-bold print:text-black ${isDark ? "text-zinc-200" : "text-zinc-900"}`}>Productivity:</span> Canva, MS Word, MS Excel
                </div>
                <div>
                  <span className={`font-bold print:text-black ${isDark ? "text-zinc-200" : "text-zinc-900"}`}>AI Co-Piloting:</span> Gemini, ChatGPT, Claude
                </div>
                <div>
                  <span className={`font-bold print:text-black ${isDark ? "text-zinc-200" : "text-zinc-900"}`}>Focus:</span> Rapid Debugging & Learning
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono text-accent uppercase tracking-wider print:text-emerald-700 font-bold border-l-2 border-accent pl-2">
                Featured Projects
              </h2>
              <div className="pl-2 space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between font-medium text-sm sm:text-base print:text-black">
                    <span className={isDark ? "text-zinc-200" : "text-zinc-950"}>Web & App Development Sandbox</span>
                    <span className="text-xs font-mono text-zinc-500">2026 – Present</span>
                  </div>
                  <p className={`text-xs ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                    Personal code sandbox built to test styling frameworks, Python scripts, and semantic pages.
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between font-medium text-sm sm:text-base print:text-black">
                    <span className={isDark ? "text-zinc-200" : "text-zinc-950"}>iiuc-cse-lab-solutions</span>
                    <span className="text-xs font-mono text-zinc-500">2026</span>
                  </div>
                  <p className={`text-xs ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                    A curation of structured C scripts, logic flows, and peer reviews for first-semester CS.
                  </p>
                </div>
              </div>
            </div>

            {/* Activities & Involvement */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono text-accent uppercase tracking-wider print:text-emerald-700 font-bold border-l-2 border-accent pl-2">
                Activities & Involvement
              </h2>
              <div className="pl-2 space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between font-medium text-xs sm:text-sm print:text-black">
                    <span className={isDark ? "text-zinc-200" : "text-zinc-950"}>IIUC Computer Club — Member</span>
                    <span className="text-xs font-mono text-zinc-500">2026 – Present</span>
                  </div>
                  <p className={`text-xs ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                    Participating in coding camps, technical events, and peer debugging sprints.
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between font-medium text-xs sm:text-sm print:text-black">
                    <span className={isDark ? "text-zinc-200" : "text-zinc-950"}>Nexus Coding Club — Member</span>
                    <span className="text-xs font-mono text-zinc-500">2026 – Present</span>
                  </div>
                  <p className={`text-xs ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                    Collaborative peer-to-peer programming study circles practicing logic syntax.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Modal footer bar */}
        <div className={`border-t px-6 py-4 flex flex-wrap gap-3 items-center justify-between ${
          isDark ? "bg-zinc-900/60 border-zinc-800/80" : "bg-zinc-100 border-zinc-200"
        }`}>
          <span className="text-[10px] font-mono text-zinc-500 font-medium">
            Download the official PDF from Google Drive or save page as PDF
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={copyMarkdown}
              className={`px-4 py-2 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                isDark ? "bg-zinc-900 border-zinc-800 hover:border-accent/30 text-zinc-300" : "bg-white border-zinc-200 hover:border-accent/40 text-zinc-700"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent" />
                  Copied MD
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-500" />
                  Copy Markdown
                </>
              )}
            </button>
            <a
              href="https://drive.google.com/file/d/1m3GgbrjCkpTzVTl9qM2RKvIvZw8zWjt4/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-lg border text-xs font-mono font-semibold flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                isDark 
                  ? "bg-zinc-900 border-accent/40 text-accent hover:border-accent" 
                  : "bg-white border-accent/40 text-accent hover:border-accent"
              }`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Google Drive CV
            </a>
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg bg-accent hover:bg-accent-light text-zinc-950 font-display font-semibold text-xs flex items-center gap-1.5 transition-all duration-300 cursor-pointer shadow-lg"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
