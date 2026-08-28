import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

const GovernmentTests = () => {
  const { state } = useLocation();

  const examName = state?.examName;
  const selectedTestType = state?.testType;

  const [tests, setTests] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/tests?category=Government`);

        let filtered = res.data.filter(
          (test) => test.exam === examName
        );

        // अगर ऊपर से Test Type चुना गया है
        if (selectedTestType) {
          filtered = filtered.filter(
            (test) => test.testMode === selectedTestType
          );
        }

        setTests(filtered);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTests();
  }, [examName, selectedTestType]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        {examName}
      </h1>

      {tests.length === 0 ? (
        <p className="text-center text-gray-500">
          No Tests Available
        </p>
      ) : (
        <div className="grid gap-4 max-w-3xl mx-auto">
          {tests.map((test) => (
            <Link
              key={test._id}
              to={`/test/${test._id}`}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition"
            >
              <h2 className="text-lg font-semibold">
                {test.title}
              </h2>

              <p className="text-sm text-gray-600">
                {test.testMode}
              </p>

              <p className="text-sm text-gray-600">
                {test.questions.length} Questions
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default GovernmentTests;