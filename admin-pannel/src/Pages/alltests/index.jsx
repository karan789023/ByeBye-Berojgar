import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminTests = () => {

  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL =
    "https://byebye-berojgar-7.onrender.com";

  // ---------------- FETCH TESTS ----------------

  useEffect(() => {

    fetchTests();

  }, []);

  const fetchTests = async () => {

    try {

      const res = await axios.get(
        `${API_URL}/api/tests`
      );

      setTests(res.data || []);

    } catch (error) {

      console.error(
        "Error fetching tests:",
        error
      );

    } finally {

      setLoading(false);

    }

  };

  // ---------------- DELETE TEST ----------------

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this test permanently?"
    );

    if (!confirmDelete) return;

    try {

      await axios.delete(
        `${API_URL}/api/tests/${id}`
      );

      // REMOVE FROM UI
      setTests((prev) =>
        prev.filter((test) => test._id !== id)
      );

      alert("Test deleted successfully");

    } catch (error) {

      console.error(
        "Delete Error:",
        error
      );

      alert("Failed to delete test");

    }

  };

  // ---------------- LOADING ----------------

  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading Tests...
      </div>
    );

  }

  // ---------------- UI ----------------

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">

      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 text-blue-700">
        Admin Panel - All Tests
      </h1>

      {tests.length === 0 ? (

        <div className="text-center text-gray-500 text-lg">
          No tests found
        </div>

      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {tests.map((test) => (

            <div
              key={test._id}
              className="bg-white rounded-2xl shadow-lg p-5 flex flex-col justify-between"
            >

              {/* TEST INFO */}

              <div>

                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {test.title}
                </h2>

                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">
                    Exam:
                  </span>{" "}
                  {test.exam}
                </p>

                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">
                    Subject:
                  </span>{" "}
                  {test.subject}
                </p>

                <p className="text-gray-600 mb-1">
                  <span className="font-semibold">
                    Questions:
                  </span>{" "}
                  {test.questions?.length || 0}
                </p>

                <p className="text-gray-600 mb-3">
                  <span className="font-semibold">
                    Category:
                  </span>{" "}
                  {test.category}
                </p>

              </div>

              {/* BUTTONS */}

              <div className="flex gap-3 mt-4">

                <button
                  onClick={() =>
                    window.open(
                      `/test/${test._id}`,
                      "_blank"
                    )
                  }
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-xl transition"
                >
                  Start
                </button>

                <button
                  onClick={() =>
                    handleDelete(test._id)
                  }
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default AdminTests;