// frontend/src/services/groq.js

export async function fetchTopicData(topic) {
  try {
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
- Return ONLY HTML with Tailwind CSS classes
- No markdown (** or ##)
- No intro or summary
- Output must be RAW HTML, not escaped.
`;

    // 🔥 CALL YOUR BACKEND INSTEAD OF GROQ DIRECTLY
    const res = await fetch("https://road-map-bakend.vercel.app/api/groq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic, prompt }),
    });

    const data = await res.json();
    return data.content; // contains formatted HTML
  } catch (error) {
    console.error("Frontend Fetch Error:", error);
    return "❌ Error contacting backend server";
  }
}
