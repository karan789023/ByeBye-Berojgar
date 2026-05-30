import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Testpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [test, setTest] = useState(null);
  const [loading, setLoading] = useState(true);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [markedReview, setMarkedReview] = useState({});
  const [timeLeft, setTimeLeft] = useState(600);
  const [showSummary, setShowSummary] = useState(false);
const API_URL = import.meta.env.VITE_API_URL;

const res = await axios.get(
  `${API_URL}/api/tests/${id}/student`
);

  // ---------------- FETCH TEST ----------------
  useEffect(() => {
    const fetchTestData = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/api/tests/${id}/student`
        );

        setTest(res.data);
      } catch (error) {
        console.error("Error loading test:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestData();
  }, [id]);

  // ---------------- TIMER ----------------
  useEffect(() => {
    if (timeLeft <= 0) {
      handleFinishTest();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // ---------------- FINISH TEST ----------------
  const handleFinishTest = () => {
    navigate("/Analysis", {
      state: {
        test,
        selectedOptions,
      },
    });
  };

  // ---------------- LOADING ----------------
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold animate-pulse">
          Loading Test...
        </h1>
      </div>
    );
  }

  if (!test) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-red-500">
          Test Not Found
        </h1>
      </div>
    );
  }

  const questions = test.questions || [];
  const currentQ = questions[currentQuestion];

  // ---------------- SELECT OPTION ----------------
const handleOptionSelect = (optionText) => {
  setSelectedOptions((prev) => ({
    ...prev,
    [currentQuestion]: optionText,
  }));
};

  // ---------------- FORMAT TIME ----------------
  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;

    return `${m}:${s < 10 ? "0" + s : s}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

      {/* HEADER */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur shadow-md border-b">

        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">

          {/* TITLE */}
          <div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
              {test.title}
            </h1>

            <p className="text-xs sm:text-sm text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>

          {/* TIMER */}
          <div className="bg-red-100 text-red-600 px-4 py-2 rounded-xl font-bold text-sm sm:text-lg shadow">
            ⏱ {formatTime(timeLeft)}
          </div>

          {/* SUMMARY BUTTON */}
          <button
            onClick={() => setShowSummary(!showSummary)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-5 py-2 rounded-xl transition-all text-sm sm:text-base"
          >
            Summary
          </button>
        </div>
      </div>

      {/* SUMMARY PANEL */}
      {showSummary && (
        <div className="fixed right-3 top-24 w-[92%] sm:w-80 bg-white rounded-2xl shadow-2xl border p-4 z-50">

          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-lg">
              Question Summary
            </h2>

            <button
              onClick={() => setShowSummary(false)}
              className="text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-5 gap-3">

            {questions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentQuestion(idx);
                  setShowSummary(false);
                }}
                className={`h-11 w-11 rounded-xl font-bold transition-all ${
                  selectedOptions[idx]
                    ? "bg-green-500 text-white"
                    : markedReview[idx]
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-200"
                }`}
              >
                {idx + 1}
              </button>
            ))}

          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-3 sm:px-6 py-6">

        {/* QUESTION CARD */}
        <div className="bg-white rounded-3xl shadow-xl border p-4 sm:p-6 md:p-8">

          {/* QUESTION */}
          <div className="mb-8">

            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Question {currentQuestion + 1}
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
              {currentQ.question}
            </h2>
          </div>

          {/* OPTIONS */}
          <div className="grid gap-4">

            {(currentQ.options || []).map((op, idx) => {
              const isSelected =
                selectedOptions[currentQuestion] === op;

              return (
                <button
                  key={idx}
                  onClick={() => handleOptionSelect(op)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 text-sm sm:text-base md:text-lg font-medium ${
                    isSelected
                      ? "bg-blue-600 border-blue-600 text-white shadow-lg scale-[1.01]"
                      : "bg-gray-50 border-gray-200 hover:border-blue-400 hover:bg-blue-50"
                  }`}
                >
                  <span className="font-bold mr-2">
                    {String.fromCharCode(65 + idx)}.
                  </span>

                  {op}
                </button>
              );
            })}

          </div>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between">

            {/* PREVIOUS */}
            <button
              disabled={currentQuestion === 0}
              onClick={() =>
                setCurrentQuestion((prev) => prev - 1)
              }
              className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-2xl font-semibold disabled:opacity-50 transition-all"
            >
              ← Previous
            </button>

            {/* MIDDLE */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

              <button
                onClick={() =>
                  setMarkedReview((prev) => ({
                    ...prev,
                    [currentQuestion]: true,
                  }))
                }
                className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-2xl font-semibold transition-all"
              >
                Mark Review
              </button>

              {currentQuestion === questions.length - 1 ? (
                <button
                  onClick={handleFinishTest}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-2xl font-bold transition-all shadow-lg"
                >
                  Finish Test
                </button>
              ) : (
                <button
                  onClick={() =>
                    setCurrentQuestion((prev) => prev + 1)
                  }
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-bold transition-all shadow-lg"
                >
                  Save & Next →
                </button>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Testpage;