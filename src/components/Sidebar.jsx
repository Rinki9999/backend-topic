import React, { useState } from "react";

const Sidebar = ({ backendTopics, currentTopicId, handleTopicClick }) => {
  const [openTopic, setOpenTopic] = useState(null);

  const toggleTopic = (topic) => {
    setOpenTopic(openTopic === topic ? null : topic);
  };

  return (
    <aside className="w-64 bg-gray-800 p-4 border-r border-gray-700 min-h-screen">
      <h1 className="text-2xl font-bold text-indigo-400 mb-6">
        Backend Topics
      </h1>

      {/* MAIN TOPICS */}
      <nav className="space-y-2">
        {backendTopics.map((topic) => (
          <div key={topic.title}>
            {/* MAIN TOPIC BUTTON */}
            <button
              onClick={() => toggleTopic(topic.title)}
              className={`w-full text-left px-3 py-2 rounded-md font-semibold transition ${
                openTopic === topic.title ? "bg-indigo-500" : "hover:bg-gray-700"
              }`}
            >
              {topic.title}
            </button>

            {/* SUBTOPICS */}
            {openTopic === topic.title && (
              <div className="ml-4 mt-2 space-y-1">
                {topic.subtopics.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => handleTopicClick(sub)}
                    className={`block w-full text-left px-3 py-1 rounded-md text-sm transition ${
                      currentTopicId === sub ? "bg-indigo-400" : "hover:bg-gray-700"
                    }`}
                  >
                    • {sub}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
