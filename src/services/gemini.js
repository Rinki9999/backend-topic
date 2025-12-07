import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function fetchTopicData(topic) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

    const prompt = `
You are an expert backend development tutor.  
Teach the topic: "${topic}" in clean HTML with Tailwind CSS classes.

FORMAT THE ANSWER STRICTLY IN HTML USING TAILWIND CLASSES:

<h2 class="text-2xl font-bold text-blue-500 mb-2">1️⃣ Definition</h2>
<p class="text-gray-700 mb-4">1–2 lines.</p>

<h2 class="text-2xl font-bold text-blue-500 mb-2">2️⃣ Why it is important?</h2>
<ul class="list-disc pl-6 text-gray-700 mb-4">
  <li>Point 1</li>
  <li>Point 2</li>
  <li>Point 3</li>
</ul>

<h2 class="text-2xl font-bold text-blue-500 mb-2">3️⃣ Code Examples</h2>
<pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4"><code>
// code here
</code></pre>

<h2 class="text-2xl font-bold text-blue-500 mb-2">4️⃣ Common Mistakes + Best Practices</h2>
<ul class="list-disc pl-6 text-gray-700 mb-4">
  <li>Mistake 1</li>
  <li>Mistake 2</li>
  <li>Mistake 3</li>
</ul>

<h2 class="text-2xl font-bold text-blue-500 mb-2">5️⃣ Real-Life Analogy</h2>
<p class="text-gray-700 mb-4">Analogy</p>

<h2 class="text-2xl font-bold text-blue-500 mb-2">6️⃣ Mini Project Idea</h2>
<p class="text-gray-700 mb-4">Short 3–4 line idea.</p>

RULES:
- Return ONLY HTML + Tailwind classes.
- No markdown (** or ##).
- No extra intro or summary.
- Keep it short, clean, structured, beginner-friendly.

VERY IMPORTANT — output must be VALID RAW HTML, NOT escaped.
Do NOT output &lt; or &gt;. Output real <h2>, <p>, <ul>, <pre> tags.

`;


    const result = await model.generateContent(prompt);

    const text = result.response.text();
    return text;
  } catch (error) {
    console.error(" Gemini API Error:", error);
    return "Error fetching from Gemini API";
  }
}



