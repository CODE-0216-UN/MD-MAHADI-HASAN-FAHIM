import type { Request, Response } from "express";
import { generateChatResponse } from "../src/gemini-service";

export default async function handler(req: Request, res: Response) {
  // Add basic CORS headers for Vercel
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    const reply = await generateChatResponse(messages);
    return res.json({ reply });
  } catch (error: any) {
    console.error("[Vercel Serverless] Gemini API Error:", error);
    return res.status(500).json({
      error: "An error occurred while generating a response.",
      details: error?.message || String(error),
    });
  }
}
