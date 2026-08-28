import React, { useState } from "react";
import { createTest } from "../api";

const stateExams = {
  "Andhra Pradesh": [
    "APPSC Group 1 Exam",
    "APPSC Group 2 Exam",
    "AP Police SI & Constable Exam",
    "AP TET"
  ],
  "Arunachal Pradesh": [
    "Arunachal Pradesh PSC Exam",
    "Arunachal Pradesh Police SI/Constable Exam",
    "Arunachal Pradesh TET",
    "Arunachal Pradesh Forest & Revenue Department Exam"
  ],
  "Assam": [
    "Assam PSC Exam",
    "Assam Police SI/Constable Exam",
    "Assam TET",
    "Assam Forest & Revenue Department Exam"
  ],
  "Bihar": [
    "BPSC Group 1 Exam",
    "BPSC Group 2 Exam",
    "Bihar Police SI & Constable Exam",
    "Bihar TET"
  ],
  "Chhattisgarh": [
    "CGPSC Group 1 Exam",
    "CGPSC Group 2 Exam",
    "Chhattisgarh Police SI/Constable Exam",
    "Chhattisgarh TET"
  ],
  "Goa": [
    "Goa PSC Exam",
    "Goa Police SI/Constable Exam",
    "Goa TET",
    "Goa Forest & Revenue Department Exam"
  ],
  "Gujarat": [
    "GPSC Group 1 Exam",
    "GPSC Group 2 Exam",
    "Gujarat Police SI/Constable Exam",
    "Gujarat TET"
  ],
  "Haryana": [
    "HPSC Group 1 Exam",
    "HPSC Group 2 Exam",
    "Haryana Police SI/Constable Exam",
    "Haryana TET"
  ],
  "Himachal Pradesh": [
    "HPPSC Group 1 Exam",
    "HPPSC Group 2 Exam",
    "Himachal Pradesh Police SI/Constable Exam",
    "HP TET"
  ],
  "Jharkhand": [
    "JPSC Group 1 Exam",
    "JPSC Group 2 Exam",
    "Jharkhand Police SI/Constable Exam",
    "Jharkhand TET"
  ],
  "Karnataka": [
    "KPSC Group 1 Exam",
    "KPSC Group 2 Exam",
    "Karnataka Police SI/Constable Exam",
    "Karnataka TET"
  ],
  "Kerala": [
    "Kerala PSC Group 1 Exam",
    "Kerala PSC Group 2 Exam",
    "Kerala Police SI/Constable Exam",
    "Kerala TET"
  ],
  "Madhya Pradesh": [
    "MPPSC Group 1 Exam",
    "MPPSC Group 2 Exam",
    "Madhya Pradesh Police SI/Constable Exam",
    "MP TET"
  ],
  "Maharashtra": [
    "MPSC Group 1 Exam",
    "MPSC Group 2 Exam",
    "Maharashtra Police SI/Constable Exam",
    "Maharashtra TET"
  ],
  "Manipur": [
    "Manipur PSC Group 1 Exam",
    "Manipur PSC Group 2 Exam",
    "Manipur Police SI/Constable Exam",
    "Manipur TET"
  ],
  "Meghalaya": [
    "Meghalaya PSC Group 1 Exam",
    "Meghalaya PSC Group 2 Exam",
    "Meghalaya Police SI/Constable Exam",
    "Meghalaya TET"
  ],
  "Mizoram": [
    "Mizoram PSC Group 1 Exam",
    "Mizoram PSC Group 2 Exam",
    "Mizoram Police SI/Constable Exam",
    "Mizoram TET"
  ],
  "Nagaland": [
    "Nagaland PSC Group 1 Exam",
    "Nagaland PSC Group 2 Exam",
    "Nagaland Police SI/Constable Exam",
    "Nagaland TET"
  ],
  "Odisha": [
    "Odisha PSC Group 1 Exam",
    "Odisha PSC Group 2 Exam",
    "Odisha Police SI/Constable Exam",
    "Odisha TET"
  ],
  "Punjab": [
    "Punjab PSC Group 1 Exam",
    "Punjab PSC Group 2 Exam",
    "Punjab Police SI/Constable Exam",
    "Punjab TET"
  ],
  "Rajasthan": [
    "RPSC Group 1 Exam",
    "RPSC Group 2 Exam",
    "Rajasthan Police SI/Constable Exam",
    "Rajasthan TET"
  ],
  "Sikkim": [
    "Sikkim PSC Group 1 Exam",
    "Sikkim PSC Group 2 Exam",
    "Sikkim Police SI/Constable Exam",
    "Sikkim TET"
  ],
  "Tamil Nadu": [
    "TNPSC Group 1 Exam",
    "TNPSC Group 2 Exam",
    "Tamil Nadu Police SI/Constable Exam",
    "Tamil Nadu TET"
  ],
  "Telangana": [
    "TSPSC Group 1 Exam",
    "TSPSC Group 2 Exam",
    "Telangana Police SI/Constable Exam",
    "Telangana TET"
  ],
  "Tripura": [
    "Tripura PSC Group 1 Exam",
    "Tripura PSC Group 2 Exam",
    "Tripura Police SI/Constable Exam",
    "Tripura TET"
  ],
  "Uttar Pradesh": [
    "UP SI",
    "UPPSC Group 1 Exam",
    "UPPSC Group 2 Exam",
    "UP Police SI/Constable Exam",
    "UP TET",
    "SSC MTS",
    "RRB Railway",
    "SSC GD",
    "SSC GD Constable",
    "SSC Selection Post",
    "SSC Stenographer"
  ],
  "Uttarakhand": [
    "UKPSC Group 1 Exam",
    "UKPSC Group 2 Exam",
    "Uttarakhand Police SI/Constable Exam",
    "Uttarakhand TET"
  ],
  "West Bengal": [
    "WBPSC Group 1 Exam",
    "WBPSC Group 2 Exam",
    "West Bengal Police SI/Constable Exam",
    "West Bengal TET"
  ],
  "Delhi (NCT of Delhi)": [
    "Delhi Police Constable/SI Exam",
    "Delhi TET",
    "DSSSB Exam",
    "CAPF Recruitment Exam"
  ],
  "Chandigarh": [
    "Chandigarh Police Constable/SI Exam",
    "Chandigarh TET",
    "Chandigarh Administration Recruitment Exam",
    "CAPF Recruitment Exam"
  ],
  "Puducherry": [
    "Puducherry PSC Group 1 Exam",
    "Puducherry PSC Group 2 Exam",
    "Puducherry Police SI/Constable Exam",
    "Puducherry TET"
  ],
  "Andaman & Nicobar Islands": [
    "Andaman & Nicobar Administration Recruitment Exam",
    "Police Constable/SI Exam",
    "CAPF Recruitment Exam",
    "TET"
  ],
  "Dadra & Nagar Haveli and Daman & Diu": [
    "UT Administration Recruitment Exam",
    "Police Constable/SI Exam",
    "CAPF Recruitment Exam",
    "TET"
  ],
  "Jammu & Kashmir": [
    "Jammu & Kashmir PSC Group 1 Exam",
    "Jammu & Kashmir PSC Group 2 Exam",
    "J&K Police SI/Constable Exam",
    "J&K TET"
  ],
  "Ladakh": [
    "Ladakh Administration Recruitment Exam",
    "Police Constable/SI Exam",
    "CAPF Recruitment Exam",
    "TET"
  ],
  "Lakshadweep": [
    "Lakshadweep Administration Recruitment Exam",
    "Police Constable/SI Exam",
    "CAPF Recruitment Exam",
    "TET"
  ]
};

const examTypes = ["Government", "JEE", "NEET", "Coding"];
const indianStates = Object.keys(stateExams);
const jeeSubjects = ["Physics", "Chemistry", "Math"];
const neetSubjects = ["Physics", "Chemistry", "Biology"];

export default function TestMaker() {
  const [examType, setExamType] = useState("");
  const [subject, setSubject] = useState("");
  const [state, setState] = useState("");
  const [testMode, setTestMode] = useState("");
  const [testCount, setTestCount] = useState(1);
  const [numQuestions, setNumQuestions] = useState(10);
  const [duration, setDuration] = useState(30); // 1. नया स्टेट Duration (Minutes) के लिए
  const [exam, setExam] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    // 2. वैलिडेशन में Duration को भी चेक किया
    if (!examType || !testMode || !numQuestions || !duration) {
      alert("Please fill all fields, including duration.");
      return;
    }

    if (examType === "Government" && (!state || !exam)) {
      alert("Please select State and Government Exam");
      return;
    }

    setLoading(true);

    try {
      for (let i = 0; i < testCount; i++) {
        await createTest({
          category: examType,
          exam: examType === "Government" ? exam : examType,
          state: examType === "Government" ? state : "",
          subject: (examType === "JEE" || examType === "NEET") ? subject : "",
          numQuestions,
          duration, // 3. API में duration पास किया
          isFullTest: testMode === "Full Test"
        });
      }

      alert("All tests generated successfully!");
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Admin — Test Maker</h2>

      <div className="card">
        <label>Exam Type</label>
        <select
          value={examType}
          onChange={(e) => {
            setExamType(e.target.value);
            setState("");
            setExam("");
            setSubject("");
          }}
        >
          <option value="">--Select--</option>
          {examTypes.map((e) => (
            <option key={e}>{e}</option>
          ))}
        </select>

        {examType === "Government" && (
          <>
            <label>State</label>
            <select
              value={state}
              onChange={(e) => {
                setState(e.target.value);
                setExam(""); 
              }}
            >
              <option value="">--Select State--</option>
              {indianStates.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </>
        )}

        {examType === "Government" && state && stateExams[state] && (
          <>
            <label>Government Exam</label>
            <select value={exam} onChange={(e) => setExam(e.target.value)}>
              <option value="">--Select Government Exam--</option>
              {stateExams[state].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
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
              <option value="">--Select Subject--</option>
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

        {/* 4. Duration इनपुट फील्ड */}
        <label>Test Duration (Minutes)</label>
        <input
          type="number"
          min={1}
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
        />

        <button onClick={handleGenerate} disabled={loading}>
          {loading ? "Generating..." : "Generate Test"}
        </button>
      </div>
    </div>
  );
}