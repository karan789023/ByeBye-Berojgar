import React from "react";
import { Link } from "react-router-dom";

// NEET-specific test types
const neetTests = [
  {
    type: "Full-Length Test",
    duration: "180min",
    questions: 180,
    Test: 1500,
    description: "Complete NEET pattern test with all subjects",
    icon: "https://i.ibb.co/gMFtT8p7/full-test.png",
  },
  {
    type: "Mock Test (50 Questions)",
    duration: "51 minutes",
    questions: 25,
    Test: 945,
    description: "Short practice test for quick revision",
    icon: "https://i.ibb.co/gMFtT8p7/full-test.png",
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
            <Link to="/TestPage">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors duration-300">
              Start Test
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NeetTestPage;

