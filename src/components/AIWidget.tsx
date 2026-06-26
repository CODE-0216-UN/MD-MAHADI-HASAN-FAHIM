import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "motion/react";
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  User, 
  Loader2, 
  Phone,
  FileText, 
  Github, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Mail, 
  ExternalLink, 
  MessageCircle 
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface AIWidgetProps {
  theme?: "dark" | "light";
}

// Map link types to appropriate Lucide icons
function LinkIcon({ type, className = "w-3.5 h-3.5" }: { type: string; className?: string }) {
  switch (type) {
    case "drive":
      return <FileText className={className} />;
    case "github":
      return <Github className={className} />;
    case "linkedin":
      return <Linkedin className={className} />;
    case "facebook":
      return <Facebook className={className} />;
    case "instagram":
      return <Instagram className={className} />;
    case "whatsapp":
      return <MessageCircle className={className} />;
    case "email":
      return <Mail className={className} />;
    default:
      return <ExternalLink className={className} />;
  }
}

// Parsed message block with text and isolated actionable button links
function FormattedMessage({ content, isDark }: { content: string; isDark: boolean }) {
  const links: { label: string; url: string; type: string }[] = [];
  const mdLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+)\)/g;
  
  let match;
  // 1. Extract markdown links
  while ((match = mdLinkRegex.exec(content)) !== null) {
    const label = match[1];
    const url = match[2];
    let type = "generic";
    
    if (
      url.includes("drive.google.com") || 
      label.toLowerCase().includes("cv") || 
      label.toLowerCase().includes("resume") || 
      label.toLowerCase().includes("biodata")
    ) {
      type = "drive";
    } else if (url.includes("github.com")) {
      type = "github";
    } else if (url.includes("linkedin.com")) {
      type = "linkedin";
    } else if (url.includes("facebook.com")) {
      type = "facebook";
    } else if (url.includes("instagram.com")) {
      type = "instagram";
    } else if (url.includes("wa.me") || url.includes("whatsapp.com")) {
      type = "whatsapp";
    } else if (url.startsWith("mailto:") || url.includes("@")) {
      type = "email";
    }
    
    links.push({ label, url, type });
  }

  // 2. Extract raw URLs not captured inside markdown links
  const rawUrlRegex = /(https?:\/\/[^\s\)\],]+)/g;
  let rawMatch;
  while ((rawMatch = rawUrlRegex.exec(content)) !== null) {
    const url = rawMatch[1];
    const alreadyCaptured = links.some((l) => l.url === url);
    const isMarkdownUrl = content.substring(rawMatch.index - 2, rawMatch.index) === "](";
    
    if (!alreadyCaptured && !isMarkdownUrl) {
      let label = "Visit Link";
      let type = "generic";
      
      if (url.includes("drive.google.com")) {
        label = "Google Drive CV";
        type = "drive";
      } else if (url.includes("github.com")) {
        label = "GitHub Profile";
        type = "github";
      } else if (url.includes("linkedin.com")) {
        label = "LinkedIn Profile";
        type = "linkedin";
      } else if (url.includes("facebook.com")) {
        label = "Facebook Profile";
        type = "facebook";
      } else if (url.includes("instagram.com")) {
        label = "Instagram Profile";
        type = "instagram";
      } else if (url.includes("wa.me") || url.includes("whatsapp.com")) {
        label = "WhatsApp Chat";
        type = "whatsapp";
      }
      
      links.push({ label, url, type });
    }
  }

  // Clean raw markdown syntax for display: replaces "[label](url)" with "label"
  const cleanText = content.replace(mdLinkRegex, (_, label) => label);

  return (
    <div className="space-y-2.5">
      <p className="whitespace-pre-wrap">{cleanText}</p>
      {links.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono tracking-wide border transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer ${
                isDark
                  ? "bg-zinc-950/80 border-[#7ED321]/30 hover:border-[#7ED321]/80 text-[#7ED321] hover:bg-[#7ED321]/10"
                  : "bg-white border-[#7ED321]/45 hover:border-[#7ED321] text-[#7ED321] hover:bg-[#7ED321]/5 shadow-2xs"
              }`}
            >
              <LinkIcon type={link.type} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// Cute minimal robot face component with idle animations
function RobotFace({ className = "w-10 h-10", isDark = true }: { className?: string; isDark?: boolean }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bobbing Head Group */}
      <motion.g
        animate={{
          y: [0, -3, 0]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Antenna Stem */}
        <line x1="50" y1="25" x2="50" y2="15" stroke="#7ED321" strokeWidth="4" strokeLinecap="round" />
        
        {/* Antenna Bulb */}
        <motion.circle
          cx="50"
          cy="12"
          r="6"
          fill="#7ED321"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Head */}
        <rect x="20" y="25" width="60" height="50" rx="18" fill={isDark ? "#09090b" : "#ffffff"} stroke="#7ED321" strokeWidth="4" />
        
        {/* Ears */}
        <rect x="13" y="42" width="6" height="16" rx="3" fill="#7ED321" />
        <rect x="81" y="42" width="6" height="16" rx="3" fill="#7ED321" />

        {/* Eye Left */}
        <motion.ellipse
          cx="38"
          cy="48"
          rx="5"
          ry="7"
          fill="#7ED321"
          style={{ transformOrigin: "38px 48px" }}
          animate={{
            scaleY: [1, 1, 0.1, 1, 1]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            times: [0, 0.85, 0.9, 0.95, 1]
          }}
        />

        {/* Eye Right */}
        <motion.ellipse
          cx="62"
          cy="48"
          rx="5"
          ry="7"
          fill="#7ED321"
          style={{ transformOrigin: "62px 48px" }}
          animate={{
            scaleY: [1, 1, 0.1, 1, 1]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            times: [0, 0.85, 0.9, 0.95, 1]
          }}
        />

        {/* Friendly Mouth */}
        <path d="M42 62 Q50 67 58 62" stroke="#7ED321" strokeWidth="3" strokeLinecap="round" fill="none" />
      </motion.g>
    </svg>
  );
}

export default function AIWidget({ theme = "dark" }: AIWidgetProps) {
  const isDark = theme === "dark";
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem("fahim_chat_history_v3");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((m: any) => ({
          ...m,
          timestamp: new Date(m.timestamp),
        }));
      } catch (e) {
        console.error("Failed to parse chat history:", e);
      }
    }
    const now = Date.now();
    return [
      {
        id: "welcome-1",
        role: "assistant",
        content: "Hi! I'm Hana,",
        timestamp: new Date(now - 2000),
      },
      {
        id: "welcome-2",
        role: "assistant",
        content: "I'm Mahadi's AI assistant.",
        timestamp: new Date(now - 1000),
      },
      {
        id: "welcome-3",
        role: "assistant",
        content: "How can I help you?",
        timestamp: new Date(now),
      },
    ];
  });

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Dragging, interaction & wandering states
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const controls = useAnimation();
  const [isSnappedLeft, setIsSnappedLeft] = useState(false);

  const lastInteractionTime = useRef<number>(Date.now());
  const isDraggingRef = useRef<boolean>(false);
  const isHoveredRef = useRef<boolean>(false);
  const isOpenRef = useRef<boolean>(isOpen);
  const currentPosRef = useRef({ x: 0, y: 0 });

  // Update isOpenRef and interaction time when chat status changes
  useEffect(() => {
    isOpenRef.current = isOpen;
    lastInteractionTime.current = Date.now();
  }, [isOpen]);

  // Save history to local storage
  useEffect(() => {
    localStorage.setItem("fahim_chat_history_v3", JSON.stringify(messages));
  }, [messages]);

  // Scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [isOpen, messages, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const messageHistory = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      console.log("[AIWidget] Sending chat request to /api/chat with message history size:", messageHistory.length);

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: messageHistory }),
      });

      if (!response.ok) {
        let errorDetails = "Unknown server error";
        try {
          const errData = await response.json();
          errorDetails = errData.details || errData.error || response.statusText;
        } catch (_) {
          errorDetails = response.statusText;
        }
        throw new Error(`HTTP ${response.status} - ${errorDetails}`);
      }

      const data = await response.json();
      
      if (!data || typeof data.reply !== "string") {
        throw new Error("Invalid response format received from server. Expected { reply: string }.");
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.reply,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error("[AIWidget] Hana AI Assistant Error:", error);
      console.warn(
        "[AIWidget] Troubleshooting tips:\n" +
        "1. Ensure GEMINI_API_KEY is added to Vercel Environment Variables.\n" +
        "2. Check if the Vercel serverless function /api/chat is compiling successfully."
      );

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `Oops! I encountered an issue connecting to my brain. (${error?.message || "Connection failed"}). Please make sure GEMINI_API_KEY is set in your Vercel environment variables or try again later!`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    const now = Date.now();
    setMessages([
      {
        id: "welcome-1",
        role: "assistant",
        content: "Hi! I'm Hana,",
        timestamp: new Date(now - 2000),
      },
      {
        id: "welcome-2",
        role: "assistant",
        content: "I'm Mahadi's AI assistant.",
        timestamp: new Date(now - 1000),
      },
      {
        id: "welcome-3",
        role: "assistant",
        content: "How can I help you?",
        timestamp: new Date(now),
      },
    ]);
  };

  const getRandomPosition = () => {
    if (!buttonRef.current) return null;
    const rect = buttonRef.current.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // Safety padding
    const padding = screenWidth < 640 ? 16 : 24;
    const buttonWidth = rect.width || 64;
    const buttonHeight = rect.height || 80;
    
    const anchorX = screenWidth - padding - buttonWidth;
    const anchorY = screenHeight - padding - buttonHeight;
    
    // Keep within visible viewport, avoiding overlap with header/navbar and footer
    const minY = padding + 80;
    const maxY = Math.max(screenHeight - buttonHeight - padding - 40, minY + 50);
    
    const minX = padding;
    const maxX = Math.max(screenWidth - buttonWidth - padding, minX + 50);
    
    const targetX = Math.random() * (maxX - minX) + minX;
    const targetY = Math.random() * (maxY - minY) + minY;
    
    return {
      x: targetX - anchorX,
      y: targetY - anchorY
    };
  };

  // Interval for autonomous wandering
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const cooldown = 4000; // 4 seconds of absolute quiet before wandering again
      
      if (
        now - lastInteractionTime.current > cooldown &&
        !isOpenRef.current &&
        !isDraggingRef.current &&
        !isHoveredRef.current
      ) {
        const nextPos = getRandomPosition();
        if (nextPos) {
          currentPosRef.current = nextPos;
          
          // Lively floating character animation: rotate & scale slightly during gliding
          controls.start({
            x: nextPos.x,
            y: nextPos.y,
            rotate: [0, -15, 15, -10, 10, 0],
            scale: [1, 1.12, 0.92, 1.08, 0.96, 1],
            transition: {
              x: { duration: 3.2, ease: "easeInOut" },
              y: { duration: 3.2, ease: "easeInOut" },
              rotate: { duration: 3.2, ease: "easeInOut" },
              scale: { duration: 3.2, ease: "easeInOut" }
            }
          });
        }
      }
    }, 4000); // Check every 4 seconds

    return () => clearInterval(interval);
  }, [controls]);

  // Handle resizing so we don't end up off-screen
  useEffect(() => {
    const handleResize = () => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const padding = screenWidth < 640 ? 16 : 24;
      const buttonWidth = rect.width || 64;
      const buttonHeight = rect.height || 80;
      
      if (
        rect.left < padding || 
        rect.right > screenWidth - padding || 
        rect.top < padding || 
        rect.bottom > screenHeight - padding
      ) {
        setIsSnappedLeft(false);
        currentPosRef.current = { x: 0, y: 0 };
        controls.start({
          x: 0,
          y: 0,
          rotate: 0,
          scale: 1,
          transition: { type: "spring", stiffness: 200, damping: 20 }
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [controls]);

  // Drag and snap to nearest edge
  const handleDragEnd = (event: any, info: any) => {
    if (!buttonRef.current) return;
    isDraggingRef.current = false;
    lastInteractionTime.current = Date.now();

    const rect = buttonRef.current.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const padding = screenWidth < 640 ? 16 : 24;
    const buttonWidth = rect.width || 64;
    const buttonHeight = rect.height || 80;
    
    const anchorX = screenWidth - padding - buttonWidth;
    const anchorY = screenHeight - padding - buttonHeight;

    const currentYOffset = rect.top - anchorY;

    const distToLeft = rect.left;
    const distToRight = screenWidth - rect.right;
    const isLeft = distToLeft < distToRight;
    
    setIsSnappedLeft(isLeft);
    
    let targetXOffset = 0;
    if (isLeft) {
      targetXOffset = padding - anchorX;
    } else {
      targetXOffset = 0;
    }

    currentPosRef.current = { x: targetXOffset, y: currentYOffset };

    controls.start({
      x: targetXOffset,
      y: currentYOffset,
      transition: { type: "spring", stiffness: 220, damping: 22 }
    });
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    lastInteractionTime.current = Date.now();
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    lastInteractionTime.current = Date.now();
  };

  const handlePointerDown = () => {
    lastInteractionTime.current = Date.now();
  };

  return (
    <>
      {/* Invisible full screen container for drag constraints */}
      <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50 overflow-hidden" />

      <div className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col pointer-events-none ${
        isSnappedLeft ? "items-start" : "items-end"
      }`}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`w-[calc(100vw-32px)] sm:w-[400px] h-[500px] max-h-[80vh] flex flex-col rounded-2xl border backdrop-blur-md shadow-2xl overflow-hidden mb-4 pointer-events-auto transition-colors duration-300 ${
                isDark ? "border-zinc-800 bg-zinc-950/98 text-white" : "border-zinc-200 bg-white/98 text-zinc-900"
              }`}
            >
              {/* Header */}
              <div className={`flex items-center justify-between px-4 py-3 border-b transition-colors duration-300 ${
                isDark ? "bg-zinc-900 border-zinc-800" : "bg-zinc-100 border-zinc-200"
              }`}>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <div className={`w-9 h-9 rounded-full border flex items-center justify-center overflow-hidden transition-colors duration-300 ${
                      isDark ? "bg-zinc-950 border-zinc-800" : "bg-white border-zinc-200"
                    }`}>
                      <RobotFace className="w-7 h-7" isDark={isDark} />
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#7ED321] border-2 border-zinc-900 animate-pulse"></span>
                  </div>
                  <div>
                    <h3 className={`font-display font-semibold text-sm flex items-center gap-1.5 transition-colors duration-300 ${
                      isDark ? "text-white" : "text-zinc-900"
                    }`}>
                      Hana <span className="text-[10px] bg-[#7ED321]/15 text-[#7ED321] px-1.5 py-0.5 rounded-md font-mono">Fahim's AI</span>
                    </h3>
                    <p className={`text-[10px] transition-colors duration-300 ${isDark ? "text-zinc-400" : "text-zinc-500"}`}>Online • Fluent in Bangla & English</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1">
                  <button
                    onClick={clearChat}
                    title="Clear Conversation"
                    className={`p-1.5 rounded-lg transition-colors ${
                      isDark ? "text-zinc-400 hover:text-white hover:bg-zinc-800" : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200"
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className={`p-1.5 rounded-lg transition-colors ${
                      isDark ? "text-zinc-400 hover:text-white hover:bg-zinc-800" : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200"
                    }`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin">
                {messages.map((m) => {
                  const isAssistant = m.role === "assistant";
                  return (
                    <div
                      key={m.id}
                      className={`flex gap-2.5 ${isAssistant ? "justify-start" : "justify-end"}`}
                    >
                      {isAssistant && (
                        <div className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 overflow-hidden transition-colors duration-300 ${
                          isDark ? "bg-zinc-900 border-zinc-800" : "bg-zinc-100 border-zinc-200"
                        }`}>
                          <RobotFace className="w-5 h-5" isDark={isDark} />
                        </div>
                      )}
                      <div
                        className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed transition-colors duration-300 ${
                          isAssistant
                            ? (isDark
                                ? "bg-zinc-900 text-zinc-100 border border-zinc-800/80 rounded-tl-sm"
                                : "bg-zinc-100 text-zinc-800 border border-zinc-200/80 rounded-tl-sm")
                            : "bg-gradient-to-tr from-[#7ED321]/90 to-[#7ED321] text-zinc-950 font-medium rounded-tr-sm"
                        }`}
                      >
                        {isAssistant ? (
                          <FormattedMessage content={m.content} isDark={isDark} />
                        ) : (
                          <p className="whitespace-pre-wrap">{m.content}</p>
                        )}
                        <span
                          className={`block text-[9px] mt-1.5 text-right transition-colors duration-300 ${
                            isAssistant 
                              ? (isDark ? "text-zinc-500" : "text-zinc-400") 
                              : "text-zinc-900/60"
                          }`}
                        >
                          {m.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </span>
                      </div>
                      {!isAssistant && (
                        <div className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300 ${
                          isDark ? "bg-zinc-800 border-zinc-700" : "bg-zinc-200 border-zinc-300"
                        }`}>
                          <User className={`w-3.5 h-3.5 transition-colors duration-300 ${isDark ? "text-zinc-300" : "text-zinc-600"}`} />
                        </div>
                      )}
                    </div>
                  );
                })}

                {isLoading && (
                  <div className="flex gap-2.5 justify-start">
                    <div className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 overflow-hidden transition-colors duration-300 ${
                      isDark ? "bg-zinc-900 border-zinc-800" : "bg-zinc-100 border-zinc-200"
                    }`}>
                      <Loader2 className="w-3.5 h-3.5 text-[#7ED321] animate-spin" />
                    </div>
                    <div className={`rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5 border transition-colors duration-300 ${
                      isDark ? "bg-zinc-900 text-zinc-400 border-zinc-800/80" : "bg-zinc-100 text-zinc-500 border-zinc-200/80"
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7ED321] animate-bounce" style={{ animationDelay: "0ms" }}></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7ED321] animate-bounce" style={{ animationDelay: "150ms" }}></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7ED321] animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Form */}
              <form
                onSubmit={handleSend}
                className={`p-3 border-t flex gap-2 items-center transition-colors duration-300 ${
                  isDark ? "bg-zinc-900 border-zinc-800" : "bg-zinc-100 border-zinc-200"
                }`}
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Hana something about Fahim..."
                  className={`flex-grow border rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-[#7ED321]/50 transition-all ${
                    isDark 
                      ? "bg-zinc-950 border-zinc-800 text-white placeholder-zinc-500" 
                      : "bg-white border-zinc-200 text-zinc-900 placeholder-zinc-400"
                  }`}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2 rounded-xl bg-gradient-to-tr from-[#7ED321]/90 to-[#7ED321] text-zinc-950 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all flex items-center justify-center flex-shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Avatar/Orb button when closed */}
        {!isOpen && (
          <motion.button
            ref={buttonRef}
            drag
            dragConstraints={containerRef}
            dragElastic={0.05}
            dragMomentum={false}
            onDragStart={() => {
              isDraggingRef.current = true;
              lastInteractionTime.current = Date.now();
            }}
            onDragEnd={handleDragEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onPointerDown={handlePointerDown}
            animate={controls}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="flex flex-col items-center gap-1.5 group focus:outline-none pointer-events-auto cursor-grab active:cursor-grabbing select-none"
          >
            <motion.div
              animate={{
                y: [0, -8, 2, -6, 0],
                x: [0, 3, -3, 1, 0],
                rotate: [0, -3, 4, -2, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex flex-col items-center gap-1.5"
            >
              {/* Label tooltip on hover */}
              <span className={`border text-[10px] px-2.5 py-1 rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none select-none ${
                isDark ? "bg-zinc-950 border-zinc-800 text-white" : "bg-white border-zinc-200 text-zinc-900"
              }`}>
                Ask Hana AI
              </span>

              <div className="relative">
                {/* Pulsing Breathing Background Neon Glowing Ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.3, 0.15, 0.3],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-[-6px] rounded-full bg-[#7ED321]/20 blur-md pointer-events-none"
                />
                
                {/* Glowing inner ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.12, 1],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full border-2 border-[#7ED321]/45 pointer-events-none"
                />

                {/* Orb Button Circle */}
                <div className={`w-12 h-12 rounded-full border-2 border-[#7ED321] flex items-center justify-center shadow-2xl relative overflow-hidden transition-colors duration-300 ${
                  isDark ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"
                }`}>
                  {/* Inside dynamic particles or lights */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#7ED321]/15 via-transparent to-transparent"></div>
                  <RobotFace className="w-8 h-8" isDark={isDark} />
                </div>

                {/* Online Status Dot */}
                <span className={`absolute top-0 right-0 w-3 h-3 rounded-full bg-[#7ED321] border-2 animate-pulse transition-colors duration-300 ${
                  isDark ? "border-zinc-950" : "border-white"
                }`}></span>
              </div>

              <span className={`text-[10px] font-mono tracking-wider transition-colors duration-200 ${
                isDark ? "text-zinc-400 group-hover:text-white" : "text-zinc-500 group-hover:text-zinc-900"
              }`}>
                Hana
              </span>
            </motion.div>
          </motion.button>
        )}
      </div>
    </>
  );
}
