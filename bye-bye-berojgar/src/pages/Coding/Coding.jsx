import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CodingTestPage = () => {
  const [allTests, setAllTests] = useState([]);
  const [selectedExam, setSelectedExam] = useState("");

  console.log("ALL CODING TESTS:", allTests);

  // Step 1: Fetch all tests having category "CODING"
  useEffect(() => {
    const fetchTests = async () => {
      try {
        const res = await axios.get(
          "https://byebye-berojgar-7.onrender.com/api/tests?category=CODING"
        );

        setAllTests(res.data);
      } catch (error) {
        console.log("Error fetching Coding tests:", error);
      }
    };

    fetchTests();
  }, []);

  // Step 2: Extract Coding exams automatically from DB
  const codingExams = [
    ...new Set(
      allTests
        .map((test) => test.exam)
        .filter(Boolean)
    ),
  ];

  // Step 3: Filter tests according to selected exam
  const selectedExamTests = allTests.filter(
    (test) => test.exam === selectedExam
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-6">

      {/* Main Heading */}
      <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
        Coding Preparation - Select Exam
      </h1>

      {/* ========================= */}
      {/* STEP A - EXAM SELECTION */}
      {/* ========================= */}

      {!selectedExam && (
        <div className="flex justify-center gap-6 mb-10 flex-wrap">

          {codingExams.length > 0 ? (
            codingExams.map((exam) => (
              <div
                key={exam}
                className="bg-white shadow-lg rounded-xl p-6 w-64 text-center cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                onClick={() => setSelectedExam(exam)}
              >

                <img
                  src="https://img.icons8.com/color/64/source-code.png"
                  alt={exam}
                  className="mx-auto mb-4 w-16 h-16"
                />

                <p className="text-xl font-semibold text-gray-800">
                  {exam}
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  Start preparing now!
                </p>

              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">
              Loading Coding exams...
            </p>
          )}

        </div>
      )}

      {/* ========================= */}
      {/* STEP B - TEST TYPES */}
      {/* ========================= */}

      {selectedExam && (
        <div>

          {/* Back Button */}
          <button
            className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors duration-300"
            onClick={() => setSelectedExam("")}
          >
            ← Back to Exam Selection
          </button>

          {/* Selected Exam Heading */}
          <h2 className="text-2xl font-semibold mb-6 text-green-600 text-center">
            {selectedExam} - Select Test Type
          </h2>

          {/* Tests Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {selectedExamTests.length > 0 ? (
              selectedExamTests.map((test) => (
                <div
                  key={test._id}
                  className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
                >

                  {/* Test Icon */}
                  <div className="bg-green-100 rounded-full p-5 mb-4 flex items-center justify-center w-20 h-20">
                    <img
                      src="https://img.icons8.com/color/48/source-code.png"
                      alt="Coding Test"
                      className="w-12 h-12"
                    />
                  </div>

                  {/* Test Title */}
                  <p className="text-center font-semibold text-gray-800 mb-1">
                    {test.title}
                  </p>

                  {/* Duration */}
                  <p className="text-sm text-gray-500 mb-1">
                    Duration: {test.duration || "60 min"}
                  </p>

                  {/* Questions */}
                  <p className="text-sm text-gray-500 mb-2">
                    Questions: {test.questions?.length || 0}
                  </p>

                  {/* Start Test */}
                  <Link to={`/test/${test._id}`}>
                    <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors duration-300">
                      Start Test
                    </button>
                  </Link>

                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">
                No coding tests available for this exam.
              </p>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default CodingTestPage;