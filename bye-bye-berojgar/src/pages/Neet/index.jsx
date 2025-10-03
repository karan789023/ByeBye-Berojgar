import React from "react";

// NEET-specific test types
const neetTests = [
  {
    type: "Full-Length Test",
    duration: "3 hours",
    questions: 180,
    Test: 1500,
    description: "Complete NEET pattern test with all subjects",
    icon: "https://img.icons8.com/color/48/000000/test-passed.png",
  },
  {
    type: "Mock Test (25 Questions)",
    duration: "30 minutes",
    questions: 25,
    Test: 945,
    description: "Short practice test for quick revision",
    icon: "https://img.icons8.com/color/48/000000/test-passed.png",
  },
  {
    type: "Physics Test",
    duration: "1 hour",
    questions: 50,
    Test: 1400,
    description: "Topic-wise physics practice",
    icon: "https://img.icons8.com/color/48/000000/test-passed.png",
  },
  {
    type: "Chemistry Test",
    duration: "1 hour",
    questions: 50,
    Test: 1200,
    description: "Topic-wise chemistry practice",
    icon: "https://img.icons8.com/color/48/000000/test-passed.png",
  },
  {
    type: "Biology Test",
    duration: "1 hour",
    questions: 90,
    Test: 1100,
    description: "Topic-wise biology practice",
    icon: "https://img.icons8.com/color/48/000000/test-passed.png",
  },
];

const NeetTestPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        NEET Preparation - Select Test
      </h1>

      {/* NEET Test Types Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {neetTests.map((test) => (
          <div
            key={test.type}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="bg-blue-100 rounded-full p-5 mb-4 flex items-center justify-center w-20 h-20">
              <img src={test.icon} alt={test.type} className="w-12 h-12" />
            </div>
            <p className="text-center font-semibold text-gray-800 mb-1">
              {test.type}
            </p>
            <p className="text-sm text-gray-500 mb-1">Duration: {test.duration}</p>
            <p className="text-sm text-gray-500 mb-2">Questions: {test.questions}</p>
            <p className="text-xs text-gray-400 text-center">{test.description}</p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors duration-300">
              Start Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NeetTestPage;
