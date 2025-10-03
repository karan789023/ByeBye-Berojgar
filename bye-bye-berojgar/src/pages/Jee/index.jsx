import React, { useState } from "react";

// JEE test types
const jeeTests = {
  "JEE Main": [
    {
      type: "Full-Length Test",
      duration: "3 hours",
      questions: 90,
      description: "Complete JEE Main pattern test covering all subjects",
      icon: "https://img.icons8.com/color/48/000000/stopwatch.png",
    },
    {
      type: "Mock Test (30 Questions)",
      duration: "45 minutes",
      questions: 30,
      description: "Short practice test for quick revision",
      icon: "https://img.icons8.com/color/48/000000/quiz.png",
    },
    {
      type: "Physics Test",
      duration: "1 hour",
      questions: 30,
      description: "Topic-wise physics practice",
      icon: "https://img.icons8.com/color/48/000000/physics.png",
    },
    {
      type: "Chemistry Test",
      duration: "1 hour",
      questions: 30,
      description: "Topic-wise chemistry practice",
      icon: "https://img.icons8.com/color/48/000000/chemistry.png",
    },
    {
      type: "Mathematics Test",
      duration: "1 hour",
      questions: 30,
      description: "Topic-wise mathematics practice",
      icon: "https://img.icons8.com/color/48/000000/math.png",
    },
  ],
  "JEE Advanced": [
    {
      type: "Full-Length Test",
      duration: "3 hours",
      questions: 54,
      description: "Complete JEE Advanced pattern test covering all subjects",
      icon: "https://img.icons8.com/color/48/000000/stopwatch.png",
    },
    {
      type: "Mock Test (20 Questions)",
      duration: "40 minutes",
      questions: 20,
      description: "Short practice test for quick revision",
      icon: "https://img.icons8.com/color/48/000000/quiz.png",
    },
    {
      type: "Physics Test",
      duration: "1 hour",
      questions: 18,
      description: "Topic-wise physics practice",
      icon: "https://img.icons8.com/color/48/000000/physics.png",
    },
    {
      type: "Chemistry Test",
      duration: "1 hour",
      questions: 18,
      description: "Topic-wise chemistry practice",
      icon: "https://png.pngtree.com/png-vector/20231019/ourlarge/pngtree-the-chemical-molecule-png-image_10252966.png  ",
    },
    {
      type: "Mathematics Test",
      duration: "1 hour",
      questions: 18,
      description: "Topic-wise mathematics practice",
      icon: "https://img.icons8.com/color/48/000000/math.png",
    },
  ],
};

const JeeTestPage = () => {
  const [selectedExam, setSelectedExam] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">
        JEE Preparation - Select Exam
      </h1>

      {/* Exam Selection */}
      {!selectedExam && (
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          {Object.keys(jeeTests).map((exam) => (
            <div
              key={exam}
              className="bg-white shadow-lg rounded-xl p-6 w-64 text-center cursor-pointer hover:shadow-2xl transition-shadow duration-300"
              onClick={() => setSelectedExam(exam)}
            >
              <img
                src="https://img.icons8.com/color/64/000000/test-passed.png"
                alt={exam}
                className="mx-auto mb-4 w-16 h-16"
              />
              <p className="text-xl font-semibold text-gray-800">{exam}</p>
              <p className="text-sm text-gray-500 mt-2">Start preparing now!</p>
            </div>
          ))}
        </div>
      )}

      {/* Test Types Section */}
      {selectedExam && (
        <div>
          <button
            className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors duration-300"
            onClick={() => setSelectedExam("")}
          >
            ← Back to Exam Selection
          </button>

          <h2 className="text-2xl font-semibold mb-6 text-purple-600 text-center">
            {selectedExam} - Select Test Type
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {jeeTests[selectedExam].map((test) => (
              <div
                key={test.type}
                className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="bg-purple-100 rounded-full p-5 mb-4 flex items-center justify-center w-20 h-20">
                  <img src={test.icon} alt={test.type} className="w-12 h-12" />
                </div>
                <p className="text-center font-semibold text-gray-800 mb-1">
                  {test.type}
                </p>
                <p className="text-sm text-gray-500 mb-1">Duration: {test.duration}</p>
                <p className="text-sm text-gray-500 mb-2">Questions: {test.questions}</p>
                <p className="text-xs text-gray-400 text-center">{test.description}</p>
                <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition-colors duration-300">
                  Start Test
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default JeeTestPage;
