import type { VercelRequest, VercelResponse } from "@vercel/node";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, history } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const chat = model.startChat({
      history: history || [],
      systemInstruction: `You are Kunal's portfolio assistant. Answer questions about
      Kunal's skills, projects, and experience as an ECE graduate and full-stack
      developer. Keep answers concise and friendly.`,
    });

    const result = await chat.sendMessage(message);
    res.status(200).json({ reply: result.response.text() });
  } catch (err) {
    console.error("Gemini API error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
}