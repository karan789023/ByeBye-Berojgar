import React, { useState } from "react";
import { createTest } from "../api";

const examTypes = ["Government", "JEE", "NEET", "Coding"];

const indianStates = [
  "Uttar Pradesh", "Bihar", "Maharashtra", "Gujarat", "Rajasthan",
  "Madhya Pradesh", "Tamil Nadu", "Karnataka", "Punjab", "Delhi"
];

const jeeSubjects = ["Physics", "Chemistry", "Math"];
const neetSubjects = ["Physics", "Chemistry", "Biology"];

export default function TestMaker() {
  const [examType, setExamType] = useState("");
  const [subject, setSubject] = useState("");
  const [state, setState] = useState("");
  const [testMode, setTestMode] = useState("");
  const [testCount, setTestCount] = useState(1);
  const [numQuestions, setNumQuestions] = useState(10);

  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!examType || !testMode || !numQuestions) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      for (let i = 0; i < testCount; i++) {
        await createTest({
          category: examType,
          exam: examType,
          state,
          subject,
          numQuestions,
          isFullTest: testMode === "Full Test"
        });
      }

      alert("All tests generated successfully!");
    } catch (err) {
      alert("Error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h2>Admin — Test Maker</h2>

      <div className="card">

        <label>Exam Type</label>
        <select value={examType} onChange={(e) => setExamType(e.target.value)}>
          <option value="">--Select--</option>
          {examTypes.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>

        {examType === "Government" && (
          <>
            <label>State</label>
            <select value={state} onChange={(e) => setState(e.target.value)}>
              <option value="">--Select State--</option>
              {indianStates.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </>
        )}

        {examType === "JEE" && (
          <>
            <label>Subject</label>
            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
              <option value="">--Select Subject--</option>
              {jeeSubjects.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </>
        )}

        {examType === "NEET" && (
          <>
            <label>Subject</label>
            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
              <option value="">--Select--</option>
              {neetSubjects.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </>
        )}

        <label>Test Mode</label>
        <select value={testMode} onChange={(e) => setTestMode(e.target.value)}>
          <option value="">--Select--</option>
          <option>Full Test</option>
          <option>Half Test</option>
        </select>

        <label>How Many Tests?</label>
        <input
          type="number"
          min={1}
          value={testCount}
          onChange={(e) => setTestCount(Number(e.target.value))}
        />

        <label>Number of Questions</label>
        <input
          type="number"
          min={1}
          value={numQuestions}
          onChange={(e) => setNumQuestions(Number(e.target.value))}
        />

        <button onClick={handleGenerate} disabled={loading}>
          {loading ? "Generating..." : "Generate Test"}
        </button>
      </div>
    </div>
  );
}
