import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const JeeTestPage = () => {
  const [allTests, setAllTests] = useState([]);
  const [selectedExam, setSelectedExam] = useState("");

  // Step 1: Fetch all tests having category "JEE"
  useEffect(() => {
    const fetchTests = async () => {
      try {
        const res = await axios.get("http:// https://byebye-berojgar-7.onrender.com/api/tests?category=JEE");
        setAllTests(res.data);
      } catch (error) {
        console.log("Error fetching JEE tests:", error);
      }
    };

    fetchTests();
  }, []);

  // Step 2: Extract JEE Main & Advanced automatically from DB
  const jeeExams = [...new Set(allTests.map((t) => t.exam))];

  // Step 3: Filter test types based on selected exam
  const selectedExamTests = allTests.filter((t) => t.exam === selectedExam);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">
        JEE Preparation - Select Exam
      </h1>

      {/* Step A — Exam Selection */}
      {!selectedExam && (
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          {jeeExams.map((exam) => (
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

      {/* Step B — Test Types */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {selectedExamTests.map((test) => (
              <div
                key={test._id}
                className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="bg-purple-100 rounded-full p-5 mb-4 flex items-center justify-center w-20 h-20">
                  <img
                    src="https://img.icons8.com/color/48/quiz.png"
                    alt="icon"
                    className="w-12 h-12"
                  />
                </div>

                <p className="text-center font-semibold text-gray-800 mb-1">
                  {test.title}
                </p>

                <p className="text-sm text-gray-500 mb-1">
                  Duration: {test.duration || "60 min"}
                </p>

                <p className="text-sm text-gray-500 mb-2">
                  Questions: {test.questions?.length}
                </p>

                <Link to={`/test/${test._id}`}>
                  <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full transition-colors duration-300">
                    Start Test
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default JeeTestPage;
