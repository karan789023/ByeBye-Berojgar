import React, { useState } from "react";


const subjects = [
  "Java",
  "C",
  "C++",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "DSA",
];

const tests = [
  { type: "Full Test", duration: "3 hours", questions: 60 },
  { type: "Mock Test", duration: "1 hour", questions: 20 },
];

const App = () => {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-700">
        Coding Practice Tests
      </h1>

      {/* Horizontal Slider for Subjects */}
      <div className="overflow-x-auto scrollbar-hide mb-6">
        <div className="flex space-x-4">
          {subjects.map((subject) => (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              className={`px-6 py-2 rounded-lg font-medium text-white ${
                selectedSubject === subject
                  ? "bg-blue-600 shadow-lg scale-105"
                  : "bg-blue-300 hover:bg-blue-400"
              } transition transform`}
            >
              {subject}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Subject Info */}
      <div className="mb-6 text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          {selectedSubject} Tests
        </h2>
        <p className="text-gray-600">
          Select a test to start practicing {selectedSubject}.
        </p>
      </div>

      {/* Test Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tests.map((test) => (
          <div
            key={test.type}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-lg font-bold mb-2 text-blue-700">
              {test.type}
            </h3>
            <p className="text-gray-600 mb-4">
              Duration: <span className="font-semibold">{test.duration}</span>
            </p>
            <p className="text-gray-600 mb-4">
              Questions: <span className="font-semibold">{test.questions}</span>
            </p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Start Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
