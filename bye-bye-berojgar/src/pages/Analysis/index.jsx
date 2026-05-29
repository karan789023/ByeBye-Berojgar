import React from "react";
import { useLocation } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const COLORS = ["#22c55e", "#ef4444", "#facc15"];

const Analysis = () => {
  const { state } = useLocation();

  const test = state?.test;
  const selectedOptions = state?.selectedOptions || {};

  if (!test || !test.questions) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">
          No Analysis Data Found
        </h1>
      </div>
    );
  }

  const questions = test.questions;

  let correct = 0;
  let wrong = 0;
  let unattempted = 0;

  // ---------------- CHART DATA ----------------
  const chartData = questions.map((q, i) => {

    // USER ANSWER
    const userAnswer = selectedOptions[i];

    // CORRECT ANSWER
    const correctAnswer = q.answer;

    // CHECK ATTEMPTED
    const attempted = !!userAnswer;

    // CHECK CORRECT
    const isCorrect =
      attempted &&
      userAnswer.trim() === correctAnswer.trim();

    // COUNT
    if (!attempted) {
      unattempted++;
    } else if (isCorrect) {
      correct++;
    } else {
      wrong++;
    }

    return {
      name: `Q${i + 1}`,
      Correct: isCorrect ? 1 : 0,
      Wrong: attempted && !isCorrect ? 1 : 0,
    };
  });

  // ---------------- PIE DATA ----------------
  const pieData = [
    {
      name: "Correct",
      value: correct,
    },
    {
      name: "Wrong",
      value: wrong,
    },
    {
      name: "Unattempted",
      value: unattempted,
    },
  ];

  const total = questions.length;

  const percentage = (
    (correct / total) *
    100
  ).toFixed(1);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">

      {/* HEADER */}
      <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">

        <h1 className="text-3xl font-bold text-center mb-6">
          📊 Test Analysis
        </h1>

        {/* SCORE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="bg-green-100 p-5 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-green-700">
              {correct}
            </h2>
            <p className="font-semibold">
              Correct
            </p>
          </div>

          <div className="bg-red-100 p-5 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-red-700">
              {wrong}
            </h2>
            <p className="font-semibold">
              Wrong
            </p>
          </div>

          <div className="bg-yellow-100 p-5 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-yellow-700">
              {unattempted}
            </h2>
            <p className="font-semibold">
              Unattempted
            </p>
          </div>

          <div className="bg-blue-100 p-5 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-blue-700">
              {percentage}%
            </h2>
            <p className="font-semibold">
              Score
            </p>
          </div>

        </div>
      </div>

      {/* PIE CHART */}
      <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">

        <h2 className="text-2xl font-bold mb-6">
          Overall Performance
        </h2>

        <div className="w-full h-[350px]">

          <ResponsiveContainer>
            <PieChart>

              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={120}
                label
              >
                {pieData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />

            </PieChart>
          </ResponsiveContainer>

        </div>
      </div>

      {/* BAR CHART */}
      <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">

        <h2 className="text-2xl font-bold mb-6">
          Question Wise Analysis
        </h2>

        <div className="w-full h-[350px]">

          <ResponsiveContainer>
            <BarChart data={chartData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="Correct"
                fill="#22c55e"
              />

              <Bar
                dataKey="Wrong"
                fill="#ef4444"
              />

            </BarChart>
          </ResponsiveContainer>

        </div>
      </div>

      {/* ANSWER REVIEW */}
      <div className="bg-white rounded-3xl shadow-xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Answer Review
        </h2>

        <div className="space-y-6">

          {questions.map((q, i) => {

            const userAnswer =
              selectedOptions[i];

            const correctAnswer =
              q.answer;

            const isCorrect =
              userAnswer &&
              userAnswer.trim() ===
                correctAnswer.trim();

            return (
              <div
                key={i}
                className={`border-l-8 rounded-2xl p-5 ${
                  isCorrect
                    ? "border-green-500 bg-green-50"
                    : "border-red-500 bg-red-50"
                }`}
              >

                <h3 className="font-bold text-lg mb-3">
                  Q{i + 1}. {q.question}
                </h3>

                <p className="mb-2">
                  <span className="font-semibold">
                    Your Answer:
                  </span>{" "}
                  {userAnswer || "Not Attempted"}
                </p>

                <p className="mb-2 text-green-700">
                  <span className="font-semibold">
                    Correct Answer:
                  </span>{" "}
                  {correctAnswer}
                </p>

                <p className="mb-2 text-blue-700">
                  <span className="font-semibold">
                    Explanation:
                  </span>{" "}
                  {q.explanation}
                </p>

                <div
                  className={`inline-block px-4 py-1 rounded-full text-white font-bold ${
                    isCorrect
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {isCorrect
                    ? "Correct"
                    : "Wrong"}
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default Analysis;