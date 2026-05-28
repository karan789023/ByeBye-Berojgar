import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TestPage = () => {
  const { id } = useParams();

  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [markedReview, setMarkedReview] = useState({});
  const [timeLeft, setTimeLeft] = useState(600);
  const [showSummary, setShowSummary] = useState(false);

  // Fetch test data
  useEffect(() => {
    const fetchTestData = async () => {
      try {
        const res = await axios.get(`https://byebye-berojgar-7.onrender.com/api/tests/${id}/student`);
        setTest(res.data);
      } catch (error) {
        console.error("Error loading test:", error);
      }
      setLoading(false);
    };

    fetchTestData();
  }, [id]);

  // Timer effect — MUST be before any early returns
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Early returns after hooks
  if (loading) return <h1 className="text-center mt-10">Loading test...</h1>;
  if (!test) return <h1 className="text-center mt-10">Test Not Found!</h1>;

  const questions = test.questions || [];

  if (questions.length === 0) {
    return <h2 className="text-center mt-10">No questions found for this test.</h2>;
  }

  const handleOptionSelect = (option) => {
    setSelectedOptions({ ...selectedOptions, [currentQuestion]: option });
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? "0" + s : s}`;
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-col">
      {/* Top Bar */}
      <div className="flex justify-between p-4 bg-white shadow items-center">
        <h2 className="font-bold text-xl">{test.title}</h2>
        <div className="font-mono text-lg">⏱ {formatTime(timeLeft)}</div>

        <button
          className="px-3 py-1 border rounded-md"
          onClick={() => setShowSummary(!showSummary)}
        >
          Summary
        </button>
      </div>

      {/* Summary */}
      {showSummary && (
        <div className="absolute top-16 right-4 bg-white shadow p-4 rounded-xl w-64 z-50">
          <h3 className="font-semibold mb-3">Question Summary</h3>

          <div className="grid grid-cols-5 gap-2">
            {questions.map((_, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setCurrentQuestion(idx);
                  setShowSummary(false);
                }}
                className={`p-2 rounded text-center cursor-pointer ${
                  selectedOptions[idx]
                    ? "bg-green-500 text-white"
                    : markedReview[idx]
                    ? "bg-yellow-400"
                    : "bg-gray-200"
                }`}
              >
                {idx + 1}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Question Box */}
      <div className="flex-1 flex justify-center items-center p-6">
        <div className="bg-white shadow-xl p-6 w-full h-full">
          <h3 className="text-2xl font-semibold mb-6">
            Q{currentQuestion + 1}. {questions[currentQuestion].question}
          </h3>

          <div className="grid gap-4">
            {questions[currentQuestion].options.map((op, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(op)}
                className={`px-4 py-3 text-left rounded-xl border text-lg ${
                  selectedOptions[currentQuestion] === op
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-100 hover:bg-blue-100 border-gray-300"
                }`}
              >
                {op}
              </button>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={() => setCurrentQuestion((q) => q - 1)}
              disabled={currentQuestion === 0}
              className="bg-gray-300 px-5 py-2 rounded disabled:opacity-50"
            >
              Previous
            </button>

            <button
              onClick={() => setMarkedReview({ ...markedReview, [currentQuestion]: true })}
              className="bg-yellow-400 px-5 py-2 rounded"
            >
              Mark for Review
            </button>

            <button
              onClick={() => {
                if (currentQuestion < questions.length - 1) setCurrentQuestion((q) => q + 1);
              }}
              className="bg-blue-600 text-white px-5 py-2 rounded"
            >
              Save & Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
