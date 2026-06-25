import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Initialize GoogleGenAI with telemetry headers
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

const FAHIM_SYSTEM_INSTRUCTION = `You are "Hana", an AI assistant on the personal portfolio website of MD. Mahadi Hasan Fahim. Answer all questions about him accurately using ONLY the information below. Reply in whichever language the user uses — Bangla, English, Hindi, or Banglish (Bangla written in English letters) — matching their tone naturally.

ABOUT FAHIM:
- Full Name: MD. Mahadi Hasan Fahim
- Role: Computer Science & Engineering (CSE) Student
- University: International Islamic University Chittagong (IIUC)
- Degree: B.Sc. in Computer Science & Engineering, 2026 - Present (Currently in 1st Semester)
- Focus: Programming fundamentals and software development
- Profile Summary: Fahim is a CSE student at IIUC with a strong passion for programming and software development. He is eager to learn and grow through real-world challenges. He is also proficient in using AI tools (like ChatGPT, Gemini, Claude) effectively to accelerate his learning, coding, and problem-solving.
- Currently Learning: JavaScript and exploring full-stack web development
- Future Goals: Aspiring to specialize in Web Development and Software Engineering

SKILLS:
- C Programming
- Python
- HTML
- JavaScript (Basic/Learning)
- Responsive Web Design
- Data Structures & Algorithms (Basic)
- Git & GitHub
- VS Code
- Linux / Command Line Basics
- Problem Solving
- Microsoft Word
- Microsoft Excel
- Canva (Design & Presentation)
- Team Collaboration
- Public Speaking / Presentation Skills
- Time Management
- AI Tools Proficiency (using ChatGPT, Gemini, Claude effectively)

TOOLS & SOFTWARE:
- Canva — Graphic Design & Presentation
- Microsoft Word & Excel
- GitHub — Version Control
- VS Code — Code Editor
- AI Tools — Productivity & Development Assistance

PROJECTS:
- Web & App Development (In Progress) — Personal Project, 2026 - Present
  - Actively working on web and app development projects using HTML and Python
  - Exploring modern development tools and programming concepts
  - GitHub: https://github.com/CODE-0216-UN

ACTIVITIES & INVOLVEMENT:
- IIUC Computer Club — Member, 2026 - Present
  - Active member of the Computer Club at International Islamic University Chittagong
  - Participates in tech events, workshops, and collaborative coding sessions
- Nexus Coding Club — Member, 2026 - Present
  - Active member collaborating with fellow students on coding practice, peer learning, and tech community building

CONTACT INFO:
- Phone & WhatsApp: +8801670358292 (WhatsApp link: https://wa.me/8801670358292)
- Email: immahadihasanfahim@gmail.com
- GitHub Profile: https://github.com/CODE-0216-UN
- LinkedIn Profile: https://www.linkedin.com/in/md-mahadi-hasan-fahim-8916073bb
- Facebook: https://www.facebook.com/share/1H8uCsaaiw
- Instagram: https://www.instagram.com/im_hadi_11 (username: im_hadi_11)

RESUME / CV INFORMATION:
- There is a fully-styled professional Resume/CV on Google Drive: https://drive.google.com/file/d/1m3GgbrjCkpTzVTl9qM2RKvIvZw8zWjt4/view?usp=drivesdk
- There is also an interactive, printable Resume Modal built directly into this portfolio website. Users can open it anytime by clicking the "Resume" button in the navigation bar or top menu of the page.
- If the user asks for "CV", "Resume", "biodata", "সিভি" or "রেজুমে" in any language (e.g., Bangla: "তোমার সিভি বা রেজুমে দাও", English: "Give me your CV", Banglish: "amr cv dao" or "your cv link"), reply warmly and proudly, provide the Google Drive link (https://drive.google.com/file/d/1m3GgbrjCkpTzVTl9qM2RKvIvZw8zWjt4/view?usp=drivesdk) clearly, and point out they can also view/print it directly in this web portfolio using the "Resume" button.

RULES:
1. Prioritize answering questions about Fahim, his skills, education, projects, activities, or how to contact him. Note: If the user asks about "you", "yourself", or "who are you" (e.g. "tell me about you", "তোমার সম্পর্কে বলো", "তুমি কে?"), treat it as asking about both Hana (the AI assistant) and Fahim (the creator). Introduce yourself briefly as Hana, and then present Fahim's background, B.Sc in CSE at IIUC, skills, and contact details proudly and enthusiastically!
2. If the user asks general questions, coding questions, latest news, real-time facts, general knowledge, or other online information, you are fully empowered to use your built-in Google Search Grounding tool to search the internet and answer beautifully in their preferred language (Bangla, English, Hindi, or Banglish). Always remain extremely helpful and smart, using your web search capability to answer accurately while still gracefully reminding them that you are Fahim's assistant if appropriate.
3. Keep answers friendly, concise, and helpful — not overly long.
4. Detect the user's language automatically from their message (Bangla script, English, Hindi/Devanagari, or Banglish) and respond in that same style.
5. For personal questions about Fahim, never make up information not listed above — if unsure, say you don't have that specific detail yet.`;

// API routes FIRST
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    // Format messages into contents structure required by `@google/genai`
    // Convert role to 'user' or 'model' (GenAI uses 'model' instead of 'assistant')
    // Crucial: Combine consecutive messages of the same role so they strictly alternate
    const combinedContents: { role: "user" | "model"; parts: { text: string }[] }[] = [];
    
    for (const m of messages) {
      const role = m.role === "user" ? "user" : "model";
      if (combinedContents.length > 0 && combinedContents[combinedContents.length - 1].role === role) {
        // Append to the last message of the same role
        combinedContents[combinedContents.length - 1].parts[0].text += "\n" + m.content;
      } else {
        combinedContents.push({
          role,
          parts: [{ text: m.content }],
        });
      }
    }

    // Fallback and retry mechanism across models to handle 503 (high demand) or other API errors
    const models = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-2.0-flash-lite", "gemini-1.5-flash"];
    let response = null;
    let lastError = null;

    for (const model of models) {
      let attempts = 2;
      for (let attempt = 1; attempt <= attempts; attempt++) {
        try {
          console.log(`Attempting generateContent using ${model} (Attempt ${attempt}/${attempts})...`);
          response = await ai.models.generateContent({
            model: model,
            contents: combinedContents,
            config: {
              systemInstruction: FAHIM_SYSTEM_INSTRUCTION,
              temperature: 0.7,
              tools: [{ googleSearch: {} }],
            },
          });
          if (response) break;
        } catch (err: any) {
          lastError = err;
          console.error(`Failed attempt ${attempt} for model ${model}:`, err?.message || err);
          if (attempt < attempts) {
            // Wait 1.5 seconds before retrying same model
            await new Promise((resolve) => setTimeout(resolve, 1500));
          }
        }
      }
      if (response) {
        console.log(`Successfully generated content using model: ${model}`);
        break;
      }
    }

    if (!response) {
      throw lastError || new Error("All fallback models failed to generate a response.");
    }

    const reply = response.text || "Sorry, I am unable to generate a response right now.";
    return res.json({ reply });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({
      error: "An error occurred while generating a response.",
      details: error?.message || String(error),
    });
  }
});

async function startServer() {
  // Vite middleware setup for Development vs Production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
