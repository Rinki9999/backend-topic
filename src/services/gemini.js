import { GoogleGenerativeAI } from "@google/generative-ai";

// ✅ Initialize Gemini with your API key
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function fetchTopicData(topic) {
  try {
    // ✅ Correct model and endpoint for latest SDK
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

    const prompt = `
You are an expert backend development tutor.  
Teach the topic: "${topic}" in a structured, complete and practical way.

Give the output in this format:

1️⃣ Definition (1–2 lines)  
2️⃣ Why it is important? (3–4 bullet points) 
5️⃣ Code Examples (basic, intermediate)  
6️⃣ Common Mistakes + Best Practices (3–4 bullets) 
7️⃣ Real-Life Analogy  
8️⃣ Mini Project idea (short, 3–4 lines) 
Do NOT add introductions, summaries, tables, step-by-step installation or extra explanations.
Keep everything short, crisp, and beginner-friendly.`;


    const result = await model.generateContent(prompt);

    // ✅ Latest SDK syntax (no await on response.text())
    const text = result.response.text();
    return text;
  } catch (error) {
    console.error(" Gemini API Error:", error);
    return "⚠️ Error fetching from Gemini API";
  }
}
