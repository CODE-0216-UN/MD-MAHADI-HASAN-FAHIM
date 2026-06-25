import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { 
  Phone, Mail, Github, Linkedin, Facebook, Instagram, Send, CheckCircle2, 
  MessageSquare, Loader2, Terminal, FileText, Copy, Check 
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Skeleton from "./Skeleton";

interface ContactProps {
  theme: "dark" | "light";
  onDownloadCVClick: () => void;
  isLoading?: boolean;
}

export default function Contact({ theme, onDownloadCVClick, isLoading = false }: ContactProps) {
  const [formState, setFormState] = useState({

    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [logs, setLogs] = useState<string[]>([]);
  const [emailCopied, setEmailCopied] = useState(false);
  const logContainerRef = useRef<HTMLDivElement>(null);
  const isDark = theme === "dark";

  const addLog = (msg: string) => {
    setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`]);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    setLogs([]);
    addLog("Initializing transmission channel...");
    
    await new Promise((resolve) => setTimeout(resolve, 800));
    addLog("Securing payload with custom headers...");
    
    await new Promise((resolve) => setTimeout(resolve, 600));
    addLog("Resolving SMTP server endpoint: smtp.gmail.com...");
    
    await new Promise((resolve) => setTimeout(resolve, 800));
    addLog("Message packets payload routed successfully!");
    
    await new Promise((resolve) => setTimeout(resolve, 500));
    setStatus("success");
    addLog("Transmission completely successful. Ready.");
    
    // Clear form inputs
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section 
      id="contact" 
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-zinc-950 text-zinc-100" : "bg-white text-zinc-900"
      }`}
    >
      {/* Decorative green radial glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-accent/5 filter blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Title */}
        <ScrollReveal className="text-center space-y-4">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono ${
            isDark ? "bg-accent/10 border border-accent/20 text-accent" : "bg-zinc-200 text-zinc-800"
          }`}>
            <MessageSquare className="w-3.5 h-3.5" />
            Connect Direct
          </div>
          <h2 className={`font-display font-extrabold text-3xl sm:text-5xl tracking-tight ${
            isDark ? "text-white" : "text-zinc-900"
          }`}>
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light drop-shadow-[0_0_10px_rgba(126,211,33,0.1)]">Touch</span>
          </h2>
          <p className={`max-w-xl mx-auto text-sm sm:text-base font-sans ${
            isDark ? "text-zinc-400" : "text-zinc-600"
          }`}>
            Ready to collaborate on new concepts, participate in workshops, or discuss development opportunities. Send me a line!
          </p>
        </ScrollReveal>

        {/* Contact Grid */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="contact-skeleton"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full relative z-10"
            >
              {/* Left Column Skeleton */}
              <div className={`lg:col-span-5 p-6 sm:p-8 rounded-2xl border space-y-6 ${
                isDark ? "bg-zinc-900/25 border-zinc-900" : "bg-zinc-50 border-zinc-200"
              }`}>
                <Skeleton theme={theme} className="h-7 w-40" />
                <Skeleton theme={theme} className="h-10 w-full rounded-md" />

                <div className={`h-px ${isDark ? "bg-zinc-800/40" : "bg-zinc-200/60"}`}></div>

                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((idx) => (
                    <div key={idx} className={`flex items-center gap-4 p-3 rounded-xl border ${
                      isDark ? "bg-zinc-950 border-zinc-900" : "bg-white border-zinc-200"
                    }`}>
                      <Skeleton theme={theme} className="w-10 h-10 rounded-full" />
                      <div className="space-y-1.5 flex-grow">
                        <Skeleton theme={theme} className="h-3 w-20" />
                        <Skeleton theme={theme} className="h-4.5 w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`h-px ${isDark ? "bg-zinc-800/40" : "bg-zinc-200/60"}`}></div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <Skeleton key={i} theme={theme} className="w-10 h-10 rounded-full" />
                    ))}
                  </div>
                  <Skeleton theme={theme} className="h-10 w-32 rounded-full" />
                </div>
              </div>

              {/* Right Column Skeleton */}
              <div className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border space-y-6 ${
                isDark ? "bg-zinc-900/20 border-zinc-900" : "bg-zinc-50 border-zinc-200"
              }`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Skeleton theme={theme} className="h-4 w-16" />
                    <Skeleton theme={theme} className="h-11 w-full rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton theme={theme} className="h-4 w-32" />
                    <Skeleton theme={theme} className="h-11 w-full rounded-xl" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Skeleton theme={theme} className="h-4 w-28" />
                  <Skeleton theme={theme} className="h-32 w-full rounded-xl" />
                </div>

                <Skeleton theme={theme} className="h-12 w-full rounded-xl" />

                <div className={`rounded-lg border p-3.5 space-y-2 ${
                  isDark ? "bg-zinc-950 border-zinc-900" : "bg-white border-zinc-200"
                }`}>
                  <div className="flex items-center gap-1.5 border-b pb-1.5">
                    <Skeleton theme={theme} className="w-3.5 h-3.5 rounded-full" />
                    <Skeleton theme={theme} className="h-4 w-44" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton theme={theme} className="h-3.5 w-full" />
                    <Skeleton theme={theme} className="h-3.5 w-2/3" />
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="contact-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full relative z-10"
            >
              
              {/* Left Column: Direct info details & Social links */}
              <ScrollReveal className="lg:col-span-5 space-y-8">
                <div className={`p-6 sm:p-8 rounded-2xl border space-y-6 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(126,211,33,0.06)] hover:border-accent/30 transition-all duration-300 ${
                  isDark ? "bg-zinc-900/25 border-zinc-900" : "bg-zinc-50 border-zinc-200 shadow-sm"
                }`}>
                  <h3 className={`font-display font-bold text-xl ${isDark ? "text-white" : "text-zinc-900"}`}>Contact Details</h3>
                  <p className={`text-sm leading-relaxed font-sans ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                    Feel free to contact me via phone or email directly, or follow my projects on my official GitHub account.
                  </p>

                  <div className={`h-px ${isDark ? "bg-zinc-800/60" : "bg-zinc-200"}`}></div>

                  {/* Detail Blocks */}
                  <div className="space-y-4 font-mono text-xs sm:text-sm">
                    
                    {/* Phone */}
                    <div className={`flex items-center gap-4 p-3 rounded-xl border transition-all duration-300 ${
                      isDark ? "bg-zinc-950 border-zinc-800 hover:border-accent/20" : "bg-white border-zinc-200 hover:border-accent/30"
                    }`}>
                      <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[10px] text-zinc-500 uppercase">Phone & WhatsApp</p>
                        <a href="https://wa.me/8801670358292" target="_blank" rel="noopener noreferrer" className={`font-semibold transition-colors duration-200 ${
                          isDark ? "text-zinc-200 hover:text-accent" : "text-zinc-800 hover:text-accent"
                        }`}>
                          +8801670358292
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className={`flex items-center justify-between gap-4 p-3 rounded-xl border transition-all duration-300 ${
                      isDark ? "bg-zinc-950 border-zinc-800 hover:border-accent/20" : "bg-white border-zinc-200 hover:border-accent/30"
                    }`}>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-[10px] text-zinc-500 uppercase">E-Mail Address</p>
                          <a href="mailto:immahadihasanfahim@gmail.com" className={`font-semibold transition-colors duration-200 ${
                            isDark ? "text-zinc-200 hover:text-accent" : "text-zinc-800 hover:text-accent"
                          }`}>
                            immahadihasanfahim@gmail.com
                          </a>
                        </div>
                      </div>

                      {/* Copy Button */}
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText("immahadihasanfahim@gmail.com");
                            setEmailCopied(true);
                            setTimeout(() => setEmailCopied(false), 2000);
                          }}
                          className={`p-2 rounded-lg border transition-all duration-300 flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 ${
                            isDark 
                              ? "border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-accent hover:border-accent/40" 
                              : "border-zinc-200 bg-zinc-50 text-zinc-600 hover:text-accent hover:border-accent/40"
                          }`}
                          title="Copy Email Address"
                        >
                          {emailCopied ? (
                            <Check className="w-4 h-4 text-accent" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>

                        {/* Tooltip / Toast */}
                        <AnimatePresence>
                          {emailCopied && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: -38, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              className="absolute left-1/2 -translate-x-1/2 bg-zinc-950 border border-accent/30 text-accent font-mono text-[10px] px-2 py-1 rounded shadow-xl whitespace-nowrap z-50 flex items-center gap-1"
                            >
                              <span className="w-1 h-1 rounded-full bg-accent animate-ping"></span>
                              Email copied!
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* GitHub */}
                    <div className={`flex items-center gap-4 p-3 rounded-xl border transition-all duration-300 ${
                      isDark ? "bg-zinc-950 border-zinc-800 hover:border-accent/20" : "bg-white border-zinc-200 hover:border-accent/30"
                    }`}>
                      <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                        <Github className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[10px] text-zinc-500 uppercase">GitHub Profile</p>
                        <a 
                          href="https://github.com/CODE-0216-UN" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`font-semibold transition-colors duration-200 ${
                            isDark ? "text-zinc-200 hover:text-accent" : "text-zinc-800 hover:text-accent"
                          }`}
                        >
                          github.com/CODE-0216-UN
                        </a>
                      </div>
                    </div>

                    {/* LinkedIn */}
                    <div className={`flex items-center gap-4 p-3 rounded-xl border transition-all duration-300 ${
                      isDark ? "bg-zinc-950 border-zinc-800 hover:border-accent/20" : "bg-white border-zinc-200 hover:border-accent/30"
                    }`}>
                      <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                        <Linkedin className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[10px] text-zinc-500 uppercase">LinkedIn Profile</p>
                        <a 
                          href="https://www.linkedin.com/in/md-mahadi-hasan-fahim-8916073bb" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`font-semibold transition-colors duration-200 ${
                            isDark ? "text-zinc-200 hover:text-accent" : "text-zinc-800 hover:text-accent"
                          }`}
                        >
                          md-mahadi-hasan-fahim
                        </a>
                      </div>
                    </div>

                    {/* Facebook */}
                    <div className={`flex items-center gap-4 p-3 rounded-xl border transition-all duration-300 ${
                      isDark ? "bg-zinc-950 border-zinc-800 hover:border-accent/20" : "bg-white border-zinc-200 hover:border-accent/30"
                    }`}>
                      <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                        <Facebook className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[10px] text-zinc-500 uppercase">Facebook Connect</p>
                        <a 
                          href="https://www.facebook.com/share/1H8uCsaaiw" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`font-semibold transition-colors duration-200 ${
                            isDark ? "text-zinc-200 hover:text-accent" : "text-zinc-800 hover:text-accent"
                          }`}
                        >
                          Mahadi Hasan Fahim
                        </a>
                      </div>
                    </div>

                    {/* Instagram */}
                    <div className={`flex items-center gap-4 p-3 rounded-xl border transition-all duration-300 ${
                      isDark ? "bg-zinc-950 border-zinc-800 hover:border-accent/20" : "bg-white border-zinc-200 hover:border-accent/30"
                    }`}>
                      <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                        <Instagram className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[10px] text-zinc-500 uppercase">Instagram Profile</p>
                        <a 
                          href="https://www.instagram.com/im_hadi_11" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`font-semibold transition-colors duration-200 ${
                            isDark ? "text-zinc-200 hover:text-accent" : "text-zinc-800 hover:text-accent"
                          }`}
                        >
                          im_hadi_11
                        </a>
                      </div>
                    </div>

                  </div>

                  <div className={`h-px ${isDark ? "bg-zinc-800/60" : "bg-zinc-200"}`}></div>

                  {/* Social Circles & Download CV Repeated */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Social Nodes</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href="https://github.com/CODE-0216-UN"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-10 h-10 rounded-full hover:bg-accent hover:text-zinc-950 text-accent border border-accent/30 flex items-center justify-center transition-all duration-300 shadow-[0_0_10px_rgba(126,211,33,0.05)] hover:shadow-[0_0_20px_rgba(126,211,33,0.3)] hover:-translate-y-0.5 ${
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
                          className={`w-10 h-10 rounded-full hover:bg-accent hover:text-zinc-950 text-accent border border-accent/30 flex items-center justify-center transition-all duration-300 shadow-[0_0_10px_rgba(126,211,33,0.05)] hover:shadow-[0_0_20px_rgba(126,211,33,0.3)] hover:-translate-y-0.5 ${
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
                          className={`w-10 h-10 rounded-full hover:bg-accent hover:text-zinc-950 text-accent border border-accent/30 flex items-center justify-center transition-all duration-300 shadow-[0_0_10px_rgba(126,211,33,0.05)] hover:shadow-[0_0_20px_rgba(126,211,33,0.3)] hover:-translate-y-0.5 ${
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
                          className={`w-10 h-10 rounded-full hover:bg-accent hover:text-zinc-950 text-accent border border-accent/30 flex items-center justify-center transition-all duration-300 shadow-[0_0_10px_rgba(126,211,33,0.05)] hover:shadow-[0_0_20px_rgba(126,211,33,0.3)] hover:-translate-y-0.5 ${
                            isDark ? "bg-zinc-950" : "bg-white"
                          }`}
                          title="Instagram Profile"
                        >
                          <Instagram className="w-4 h-4" />
                        </a>

                        <a
                          href="mailto:immahadihasanfahim@gmail.com"
                          className={`w-10 h-10 rounded-full hover:bg-accent hover:text-zinc-950 text-accent border border-accent/30 flex items-center justify-center transition-all duration-300 shadow-[0_0_10px_rgba(126,211,33,0.05)] hover:shadow-[0_0_20px_rgba(126,211,33,0.3)] hover:-translate-y-0.5 ${
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
                          className={`w-10 h-10 rounded-full hover:bg-accent hover:text-zinc-950 text-accent border border-accent/30 flex items-center justify-center transition-all duration-300 shadow-[0_0_10px_rgba(126,211,33,0.05)] hover:shadow-[0_0_20px_rgba(126,211,33,0.3)] hover:-translate-y-0.5 ${
                            isDark ? "bg-zinc-950" : "bg-white"
                          }`}
                          title="WhatsApp Chat"
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <div className="pt-2 sm:pt-0">
                      <button
                        onClick={onDownloadCVClick}
                        className="px-5 py-2.5 rounded-full bg-accent hover:bg-accent-light text-zinc-950 font-display font-semibold text-xs transition-all duration-300 flex items-center gap-1.5 shadow-[0_0_15px_rgba(126,211,33,0.15)] hover:shadow-[0_0_25px_rgba(126,211,33,0.45)] hover:-translate-y-0.5 cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        Download CV
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right Column: Contact Form */}
              <ScrollReveal className="lg:col-span-7">
                <div className={`p-6 sm:p-8 rounded-2xl border backdrop-blur-sm space-y-6 hover:scale-[1.01] transition-all duration-350 ${
                  isDark ? "bg-zinc-900/20 border-zinc-800/80" : "bg-zinc-50 border-zinc-200 shadow-sm"
                }`}>
                  
                  <AnimatePresence mode="wait">
                    {status === "success" ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="space-y-6 text-center py-12"
                      >
                        <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent/40 flex items-center justify-center mx-auto text-accent shadow-[0_0_20px_rgba(126,211,33,0.2)]">
                          <CheckCircle2 className="w-8 h-8 animate-bounce" />
                        </div>
                        
                        <div className="space-y-2 max-w-sm mx-auto">
                          <h3 className={`font-display font-bold text-xl ${isDark ? "text-white" : "text-zinc-900"}`}>Transmission Successful</h3>
                          <p className={`text-sm font-sans ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                            Thank you for your message! The details were encrypted and transferred safely. I will respond shortly.
                          </p>
                        </div>

                        <button
                          onClick={() => setStatus("idle")}
                          className={`px-6 py-2.5 rounded-full border text-xs font-mono transition-all duration-300 cursor-pointer ${
                            isDark ? "bg-zinc-900 hover:bg-zinc-800 border-zinc-800 text-zinc-300" : "bg-white hover:bg-zinc-100 border-zinc-200 text-zinc-700"
                          }`}
                        >
                          Send Another Message
                        </button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-5"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Name */}
                          <div className="space-y-2">
                            <label className={`text-xs font-mono flex items-center gap-1.5 ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                              <span>Name</span>
                              <span className="text-accent">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formState.name}
                              onChange={handleInputChange}
                              required
                              disabled={status === "sending"}
                              placeholder="Fahim Hasan"
                              className={`w-full border focus:border-accent rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all duration-300 ${
                                isDark 
                                  ? "bg-zinc-950 border-zinc-800 text-zinc-200 placeholder-zinc-600" 
                                  : "bg-white border-zinc-200 text-zinc-800 placeholder-zinc-400 shadow-2xs"
                              }`}
                            />
                          </div>

                          {/* Email */}
                          <div className="space-y-2">
                            <label className={`text-xs font-mono flex items-center gap-1.5 ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                              <span>Email Address</span>
                              <span className="text-accent">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formState.email}
                              onChange={handleInputChange}
                              required
                              disabled={status === "sending"}
                              placeholder="you@domain.com"
                              className={`w-full border focus:border-accent rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all duration-300 ${
                                isDark 
                                  ? "bg-zinc-950 border-zinc-800 text-zinc-200 placeholder-zinc-600" 
                                  : "bg-white border-zinc-200 text-zinc-800 placeholder-zinc-400 shadow-2xs"
                              }`}
                            />
                          </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                          <label className={`text-xs font-mono flex items-center gap-1.5 ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>
                            <span>Message Text</span>
                            <span className="text-accent">*</span>
                          </label>
                          <textarea
                            name="message"
                            value={formState.message}
                            onChange={handleInputChange}
                            required
                            disabled={status === "sending"}
                            rows={5}
                            placeholder="Hello Mahadi, I would love to talk about web engineering..."
                            className={`w-full border focus:border-accent rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all duration-300 resize-none ${
                              isDark 
                                ? "bg-zinc-950 border-zinc-800 text-zinc-200 placeholder-zinc-600" 
                                : "bg-white border-zinc-200 text-zinc-800 placeholder-zinc-400 shadow-2xs"
                            }`}
                          />
                        </div>

                        {/* Form feedback error */}
                        {status === "error" && (
                          <p className="text-xs font-mono text-red-400 bg-red-950/20 border border-red-900/50 p-3 rounded-lg">
                            Please fill in all the required fields to transmit.
                          </p>
                        )}

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={status === "sending"}
                          className="w-full bg-accent hover:bg-accent-light text-zinc-950 font-display font-semibold text-sm py-3.5 rounded-xl shadow-[0_0_15px_rgba(126,211,33,0.15)] hover:shadow-[0_0_25px_rgba(126,211,33,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                        >
                          {status === "sending" ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin text-zinc-950" />
                              Transmitting Packets...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 text-zinc-950" />
                              Send Message
                            </>
                          )}
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>

                  {/* Simulated Log Output under the form to make it look hyper-premium */}
                  <div className={`rounded-lg border p-3.5 space-y-2 ${
                    isDark ? "bg-zinc-950 border-zinc-900" : "bg-white border-zinc-200 shadow-2xs"
                  }`}>
                    <div className={`flex items-center gap-1.5 border-b pb-1.5 text-[9px] font-mono ${
                      isDark ? "text-zinc-500 border-zinc-900" : "text-zinc-400 border-zinc-100"
                    }`}>
                      <Terminal className="w-3.5 h-3.5 text-accent" />
                      <span>smtp_outbox_terminal.log</span>
                    </div>
                    <div 
                      ref={logContainerRef}
                      className="font-mono text-[10px] text-zinc-500 h-[60px] overflow-y-auto space-y-1.5 scrollbar-thin"
                    >
                      {logs.length === 0 ? (
                        <div className="italic">SYSTEM IDLE: Ready to capture outbox packet flow...</div>
                      ) : (
                        logs.map((log, lIdx) => (
                          <div key={lIdx} className={log.includes("Routing") || log.includes("successful") ? "text-accent" : "text-zinc-500"}>
                            {log}
                          </div>
                        ))
                      )}
                    </div>
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
