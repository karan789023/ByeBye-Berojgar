import React, { useState, useEffect } from "react";

const questionsData = {
  Math: [
    { id: 1, question: "5 + 7 = ?", options: ["10", "11", "12", "13"] },
    { id: 2, question: "12 - 4 = ?", options: ["6", "7", "8", "9"] },
    { id: 3, question: "3 * 4 = ?", options: ["10", "12", "14", "16"] },
  ],
  Reasoning: [
    { id: 1, question: "What comes next: 2, 4, 6, ?", options: ["7", "8", "9", "10"] },
    { id: 2, question: "Find the odd one: A, B, C, D", options: ["A", "B", "C", "D"] },
    { id: 3, question: "If A>B and B>C then A ?", options: ["<C", ">C", "=C", "None"] },
  ],
};

const TestPage = () => {
  const [subject, setSubject] = useState("Math");
  const [questions, setQuestions] = useState(questionsData[subject]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [markedReview, setMarkedReview] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 min
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    setQuestions(questionsData[subject]);
    setCurrentQuestion(0);
    setSelectedOptions({});
    setMarkedReview({});
  }, [subject]);

  // Timer
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleOptionSelect = (option) => {
    setSelectedOptions({ ...selectedOptions, [currentQuestion]: option });
  };

  const handleSaveNext = () => {
    if (currentQuestion < questions.length - 1) setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleMarkReview = () => {
    setMarkedReview({ ...markedReview, [currentQuestion]: !markedReview[currentQuestion] });
    handleSaveNext();
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m < 10 ? "0" + m : m}:${s < 10 ? "0" + s : s}`;
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col">
      {/* Top Bar */}
      <div className="flex justify-between items-center p-4 border-b shadow-md bg-white sticky top-0 z-50">
        {/* Subject Dropdown */}
        <select
          className="border rounded-md px-3 py-1 focus:outline-none shadow-sm"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="Math">Math</option>
          <option value="Reasoning">Reasoning</option>
        </select>

        {/* Timer */}
        <div className={`font-mono text-lg ${timeLeft < 60 ? "text-red-600" : "text-gray-700"}`}>
          ⏱ {formatTime(timeLeft)}
        </div>

        {/* Question Summary */}
        <button
          className="px-3 py-1 border rounded-md hover:bg-gray-100"
          onClick={() => setShowSummary(!showSummary)}
        >
          ...
        </button>
      </div>

      {/* Question Summary Overlay */}
      {showSummary && (
        <div className="absolute top-16 right-4 bg-white border shadow-lg rounded-lg p-4 z-50 w-64">
          <h4 className="font-semibold mb-2">Questions Summary</h4>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((q, idx) => (
              <div
                key={idx}
                className={`p-2 text-center rounded cursor-pointer border ${
                  selectedOptions[idx]
                    ? "bg-green-500 text-white"
                    : markedReview[idx]
                    ? "bg-yellow-400 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => {
                  setCurrentQuestion(idx);
                  setShowSummary(false);
                }}
              >
                {idx + 1}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Question Card */}
       {/* Question Card */}
<div className="flex-1 flex justify-center items-center p-4">
  <div className="w-full h-full bg-white shadow-2xl rounded-none p-6">
    <p className="text-2xl font-semibold mb-6">
      Q{currentQuestion + 1}. {questions[currentQuestion].question}
    </p>

    <div className="grid gap-4">
      {questions[currentQuestion].options.map((option, idx) => (
        <button
          key={idx}
          onClick={() => handleOptionSelect(option)}
          className={`w-full text-left px-4 py-3 rounded-xl border text-lg transition ${
            selectedOptions[currentQuestion] === option
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-gray-100 hover:bg-blue-100 border-gray-300"
          }`}
        >
          {option}
        </button>
      ))}
    </div>


          {/* Buttons */}
          <div className="flex justify-between mt-6 flex-wrap gap-3">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="bg-gray-300 px-5 py-2 rounded-xl disabled:opacity-50 hover:bg-gray-400 transition"
            >
              Previous
            </button>

            <button
              onClick={handleSaveNext}
              disabled={currentQuestion === questions.length - 1}
              className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Save & Next
            </button>

            <button
              onClick={handleMarkReview}
              className="bg-yellow-400 text-white px-5 py-2 rounded-xl hover:bg-yellow-500 transition"
            >
              Mark for Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
