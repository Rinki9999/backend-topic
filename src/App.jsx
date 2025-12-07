import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import { fetchTopicData } from "./services/gemini";

// ✅ Updated backend topics with subtopics
const backendTopics = [
  {
    title: "Node.js Basics",
    subtopics: [
      "What is Node.js",
      "Event Loop",
      "Modules (CommonJS & ES)",
      "NPM & Packages",
      "Async Programming",
      "File System (fs)",
      "HTTP Module",
      "Environment Variables (.env)",
      "Callbacks / Promises / async-await",

    ],
  },
  {
    title: "Express.js",
    subtopics: [
      "What is Express?",
      "Routing (GET/POST/PUT/DELETE)",
      "Middleware",
      "Error Handling",
      "Request & Response",
      "Serving Static Files",
      "Express Router",
      "Controllers",
      "CORS",
    ],
  },
  {
    title: "MongoDB",
    subtopics: [
      "MongoDB Basics",
      "CRUD Operations",
      "Schema & Documents",
      "Mongoose Models",
      "Relations (ref, embed)",
      "Indexes",
      "Aggregation Pipeline",
    ],
  },
  {
    title: "Authentication",
    subtopics: [
      "Authentication vs Authorization",
      "Hashing (bcrypt)",
      "Sessions vs Tokens",
      "Cookies",
      "OAuth",
      "Role-Based Auth",
      "Refresh Tokens",
      "Logout Mechanisms",
    ],
  },
  {
    title: "APIs Integration",
    subtopics: [
      "What is API",
      "REST APIs",
     "HTTP Status Codes",
      "Fetch & Axios",
      "Third-Party APIs",
      "Rate Limiting",
     "Pagination",
      "Caching",
      "API Error Handling",
    ],
  },
  {
    title: "JWT Tokens",
    subtopics: [
      "What is JWT",
      "How JWT Works",
      "JWT Structure",
      "Access Token vs Refresh Token",
      "Create JWT",
      "Verify JWT",
      "Access & Refresh Token",
      "Protecting Routes",
      "Storing JWT Safely",
      "JWT Expiry",
    ],
  },
];


const App = () => {
  const [currentTopicId, setCurrentTopicId] = useState(null);
  const [topicContent, setTopicContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleTopicClick = async (topic) => {
    setCurrentTopicId(topic);
    setLoading(true);
    setTopicContent("");

    const data = await fetchTopicData(topic);
    setTopicContent(data);
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar
        backendTopics={backendTopics}
        currentTopicId={currentTopicId}
        handleTopicClick={handleTopicClick}
        firebaseStatus="Gemini Connected 🤖"
        isSidebarOpen={isSidebarOpen}
      />

      <main className="flex-1 p-6 overflow-y-auto">
        {loading ? (
          <p className="text-indigo-400 animate-pulse">Loading from Gemini...</p>
        ) : currentTopicId ? (
          <>
            <h2 className="text-3xl font-bold text-indigo-400 mb-4">
              {currentTopicId}
            </h2>
            <div
  className="prose prose-indigo max-w-full bg-gray-100 p-4 rounded-lg border border-gray-700"
  dangerouslySetInnerHTML={{ __html: topicContent }}
/>

          </>
        ) : (
          <p className="text-gray-500 text-lg">Select a topic to explore ✨</p>
        )}
      </main>
    </div>
  );
};

export default App;
