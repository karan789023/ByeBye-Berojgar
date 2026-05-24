import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Trophy,
  Target,
  Award,
  BarChart2,
  CheckCircle,
  XCircle,
  HelpCircle,
} from "lucide-react";

// Pie chart colors
const COLORS = ["#22c55e", "#ef4444", "#a1a1aa"];

// Dummy performance data for Line Chart
const performanceData = [
  { test: "Test 1", score: 65 },
  { test: "Test 2", score: 70 },
  { test: "Test 3", score: 80 },
  { test: "Test 4", score: 75 },
  { test: "Test 5", score: 90 },
];

// Dummy MCQ Data
const questionData = {
  correct: [
    {
      id: 1,
      question: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
      correct: "Delhi",
    },
    {
      id: 2,
      question: "2 + 2 = ?",
      options: ["3", "4", "5", "6"],
      correct: "4",
    },
  ],
  incorrect: [
    {
      id: 3,
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Venus", "Mars", "Jupiter"],
      correct: "Mars",
    },
  ],
  unattempted: [
    {
      id: 4,
      question: "What is H2O commonly known as?",
      options: ["Oxygen", "Water", "Hydrogen", "Carbon"],
      correct: "Water",
    },
  ],
};

export default function AnalysisPage() {
  const [selectedTab, setSelectedTab] = useState("correct");

  const pieData = [
    { name: "Correct", value: 20 },
    { name: "Incorrect", value: 5 },
    { name: "Unattempted", value: 10 },
  ];

  return (
    <div className="p-6 space-y-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-indigo-700">
        Test Analysis - Bye Bye Berojgar
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard icon={<Target />} title="Accuracy" value="80%" />
        <StatCard icon={<BarChart2 />} title="Percentile" value="92" />
        <StatCard icon={<Trophy />} title="Rank" value="150/5000" />
        <StatCard icon={<Award />} title="Score" value="120/150" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-white shadow-md rounded-2xl p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Answer Breakdown
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white shadow-md rounded-2xl p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Performance Over Tests
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="test" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#6366f1"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Question Selector */}
      <div className="bg-white shadow-md rounded-2xl p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Question Review
        </h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setSelectedTab("correct")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
              selectedTab === "correct"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <CheckCircle size={18} /> Correct
          </button>
          <button
            onClick={() => setSelectedTab("incorrect")}
            className={`flex items-center gap-1 px-2 py-1 rounded-xl ${
              selectedTab === "incorrect"
                ? "bg-red-100 text-red-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <XCircle size={18} /> Incorrect
          </button>
          <button
            onClick={() => setSelectedTab("unattempted")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
              selectedTab === "unattempted"
                ? "bg-gray-300 text-gray-800"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <HelpCircle size={5} /> Unattempted
          </button>
        </div>

{/* Questions List */}
<div className="space-y-4">
  {questionData[selectedTab].map((q) => (
    <div
      key={q.id}
      className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
    >
      <p className="font-medium mb-3">
        Q{q.id}. {q.question}
      </p>

      <div className="space-y-2">
        {q.options.map((opt, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg border ${
              opt === q.correct
                ? "border-green-500 bg-green-50"
                : "border-gray-200"
            }`}
          >
            {opt}
          </div>
        ))}

        {/* ⭐ EXPLANATION BOX (Add this only) */}
        {q.explanation && (
          <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
            💡 <span className="font-semibold">Explanation:</span> {q.explanation}
          </div>
        )}
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}

// StatCard Component
function StatCard({ icon, title, value }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center">
      <div className="text-indigo-600 mb-2">{icon}</div>
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-xl font-bold text-gray-800">{value}</h3>
    </div>
  );
}

