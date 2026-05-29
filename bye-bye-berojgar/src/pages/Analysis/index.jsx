import React from "react";
import { useLocation } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#22c55e", "#ef4444"];

const Analysis = () => {
  const { state } = useLocation();

  const test = state?.test;
  const selected = state?.selectedOptions || {};

  // ❌ SAFE GUARD
  if (!test || !Array.isArray(test.questions)) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h2 className="text-red-500 text-2xl">No Test Data Found</h2>
      </div>
    );
  }

  const questions = test.questions;

  let correct = 0;
  let wrong = 0;

  const chartData = questions.map((q, i) => {
    const userAns = Number(selected[i]); // user selected index
    const correctAns = Number(q.correctIndex); // AI correct index

    const options = Array.isArray(q.options) ? q.options : [];

    const isValid =
      typeof correctAns === "number" &&
      correctAns >= 0 &&
      correctAns < options.length;

    const isCorrect =
      isValid && userAns === correctAns;

    if (isCorrect) correct++;
    else wrong++;

    return {
      name: `Q${i + 1}`,
      Correct: isCorrect ? 1 : 0,
      Wrong: !isCorrect ? 1 : 0,

      question: q.question,

      user: options[userAns] || "Not Attempted",
      correctAns: options[correctAns] || "Not Available",

      isCorrect,
    };
  });

  const pieData = [
    { name: "Correct", value: correct },
    { name: "Wrong", value: wrong },
  ];

  const total = questions.length;
  const percent = total ? ((correct / total) * 100).toFixed(1) : 0;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <h1 className="text-3xl font-bold text-center mb-6">
        📊 Test Analysis Report
      </h1>

      {/* SCORE CARDS */}
      <div className="grid grid-cols-3 gap-4 mb-8">

        <div className="bg-white p-4 rounded-xl text-center shadow">
          <h2 className="text-green-600 text-xl font-bold">
            {correct}
          </h2>
          <p>Correct</p>
        </div>

        <div className="bg-white p-4 rounded-xl text-center shadow">
          <h2 className="text-red-600 text-xl font-bold">
            {wrong}
          </h2>
          <p>Wrong</p>
        </div>

        <div className="bg-white p-4 rounded-xl text-center shadow">
          <h2 className="text-blue-600 text-xl font-bold">
            {percent}%
          </h2>
          <p>Score</p>
        </div>

      </div>

      {/* PIE CHART */}
      <div className="bg-white p-4 rounded-xl shadow mb-8">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieData} dataKey="value" outerRadius={120}>
              {pieData.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* BAR CHART */}
      <div className="bg-white p-4 rounded-xl shadow mb-8">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Correct" fill="#22c55e" />
            <Bar dataKey="Wrong" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* REVIEW SECTION */}
      <div className="bg-white p-4 rounded-xl shadow">

        <h2 className="text-lg font-semibold mb-4">
          Answer Review
        </h2>

        {chartData.map((q, i) => (
          <div key={i} className="border-b py-4">

            <p className="font-bold">
              Q{i + 1}. {q.question}
            </p>

            <p className="text-sm text-gray-600">
              Your Answer: {q.user}
            </p>

            <p className="text-sm text-green-600">
              Correct Answer: {q.correctAns}
            </p>

            <p className={`text-sm font-bold ${
              q.isCorrect ? "text-green-600" : "text-red-500"
            }`}>
              {q.isCorrect ? "Correct" : "Wrong"}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Analysis;