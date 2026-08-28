import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // API कॉल के लिए axios इम्पोर्ट करें

// Generic exam logo
const genericLogo = "https://img.icons8.com/color/48/000000/test-passed.png";

// States + UTs + Exams (आपका डमी डेटा)
const stateExams = {
  "Andhra Pradesh": ["APPSC Group 1 Exam", "APPSC Group 2 Exam", "AP Police SI & Constable Exam", "AP TET"],
  "Arunachal Pradesh": ["Arunachal Pradesh PSC Exam", "Arunachal Pradesh Police SI/Constable Exam", "Arunachal Pradesh TET", "Arunachal Pradesh Forest & Revenue Department Exam"],
  "Assam": ["Assam PSC Exam", "Assam Police SI/Constable Exam", "Assam TET", "Assam Forest & Revenue Department Exam"],
  "Bihar": ["BPSC Group 1 Exam", "BPSC Group 2 Exam", "Bihar Police SI & Constable Exam", "Bihar TET"],
  "Chhattisgarh": ["CGPSC Group 1 Exam", "CGPSC Group 2 Exam", "Chhattisgarh Police SI/Constable Exam", "Chhattisgarh TET"],
  "Goa": ["Goa PSC Exam", "Goa Police SI/Constable Exam", "Goa TET", "Goa Forest & Revenue Department Exam"],
  "Gujarat": ["GPSC Group 1 Exam", "GPSC Group 2 Exam", "Gujarat Police SI/Constable Exam", "Gujarat TET"],
  "Haryana": ["HPSC Group 1 Exam", "HPSC Group 2 Exam", "Haryana Police SI/Constable Exam", "Haryana TET"],
  "Himachal Pradesh": ["HPPSC Group 1 Exam", "HPPSC Group 2 Exam", "Himachal Pradesh Police SI/Constable Exam", "HP TET"],
  "Jharkhand": ["JPSC Group 1 Exam", "JPSC Group 2 Exam", "Jharkhand Police SI/Constable Exam", "Jharkhand TET"],
  "Karnataka": ["KPSC Group 1 Exam", "KPSC Group 2 Exam", "Karnataka Police SI/Constable Exam", "Karnataka TET"],
  "Kerala": ["Kerala PSC Group 1 Exam", "Kerala PSC Group 2 Exam", "Kerala Police SI/Constable Exam", "Kerala TET"],
  "Madhya Pradesh": ["MPPSC Group 1 Exam", "MPPSC Group 2 Exam", "Madhya Pradesh Police SI/Constable Exam", "MP TET"],
  "Maharashtra": ["MPSC Group 1 Exam", "MPSC Group 2 Exam", "Maharashtra Police SI/Constable Exam", "Maharashtra TET"],
  "Manipur": ["Manipur PSC Group 1 Exam", "Manipur PSC Group 2 Exam", "Manipur Police SI/Constable Exam", "Manipur TET"],
  "Meghalaya": ["Meghalaya PSC Group 1 Exam", "Meghalaya PSC Group 2 Exam", "Meghalaya Police SI/Constable Exam", "Meghalaya TET"],
  "Mizoram": ["Mizoram PSC Group 1 Exam", "Mizoram PSC Group 2 Exam", "Mizoram Police SI/Constable Exam", "Mizoram TET"],
  "Nagaland": ["Nagaland PSC Group 1 Exam", "Nagaland PSC Group 2 Exam", "Nagaland Police SI/Constable Exam", "Nagaland TET"],
  "Odisha": ["Odisha PSC Group 1 Exam", "Odisha PSC Group 2 Exam", "Odisha Police SI/Constable Exam", "Odisha TET"],
  "Punjab": ["Punjab PSC Group 1 Exam", "Punjab PSC Group 2 Exam", "Punjab Police SI/Constable Exam", "Punjab TET"],
  "Rajasthan": ["RPSC Group 1 Exam", "RPSC Group 2 Exam", "Rajasthan Police SI/Constable Exam", "Rajasthan TET"],
  "Sikkim": ["Sikkim PSC Group 1 Exam", "Sikkim PSC Group 2 Exam", "Sikkim Police SI/Constable Exam", "Sikkim TET"],
  "Tamil Nadu": ["TNPSC Group 1 Exam", "TNPSC Group 2 Exam", "Tamil Nadu Police SI/Constable Exam", "Tamil Nadu TET"],
  "Telangana": ["TSPSC Group 1 Exam", "TSPSC Group 2 Exam", "Telangana Police SI/Constable Exam", "Telangana TET"],
  "Tripura": ["Tripura PSC Group 1 Exam", "Tripura PSC Group 2 Exam", "Tripura Police SI/Constable Exam", "Tripura TET"],
  "Uttar Pradesh": ["UPPSC Group 1 Exam", "UPPSC Group 2 Exam", "UP Police SI/Constable Exam", "UP TET", "SSC MTS", "RRB Railway", "SSC GD", "SSC GD Constable","UP SI", "SSC Selection Post", "SSC Stenographer"],
  "Uttarakhand": ["UKPSC Group 1 Exam", "UKPSC Group 2 Exam", "Uttarakhand Police SI/Constable Exam", "Uttarakhand TET"],
  "West Bengal": ["WBPSC Group 1 Exam", "WBPSC Group 2 Exam", "West Bengal Police SI/Constable Exam", "West Bengal TET"],
  "Delhi (NCT of Delhi)": ["Delhi Police Constable/SI Exam", "Delhi TET", "DSSSB Exam", "CAPF Recruitment Exam"],
  "Chandigarh": ["Chandigarh Police Constable/SI Exam", "Chandigarh TET", "Chandigarh Administration Recruitment Exam", "CAPF Recruitment Exam"],
  "Puducherry": ["Puducherry PSC Group 1 Exam", "Puducherry PSC Group 2 Exam", "Puducherry Police SI/Constable Exam", "Puducherry TET"],
  "Andaman & Nicobar Islands": ["Andaman & Nicobar Administration Recruitment Exam", "Police Constable/SI Exam", "CAPF Recruitment Exam", "TET"],
  "Dadra & Nagar Haveli and Daman & Diu": ["UT Administration Recruitment Exam", "Police Constable/SI Exam", "CAPF Recruitment Exam", "TET"],
  "Jammu & Kashmir": ["Jammu & Kashmir PSC Group 1 Exam", "Jammu & Kashmir PSC Group 2 Exam", "J&K Police SI/Constable Exam", "J&K TET"],
  "Ladakh": ["Ladakh Administration Recruitment Exam", "Police Constable/SI Exam", "CAPF Recruitment Exam", "TET"],
  "Lakshadweep": ["Lakshadweep Administration Recruitment Exam", "Police Constable/SI Exam", "CAPF Recruitment Exam", "TET"]
};

// Flatten all static exams
const staticExams = Array.from(new Set(Object.values(stateExams).flat()));

// Test type options
const testTypes = ["PYQ", "Mock Test", "Full Test", "Chapter-wise", "Subject-wise"];

const ExamPage = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedTestType, setSelectedTestType] = useState("");
  const [search, setSearch] = useState("");
<<<<<<< HEAD

  // Live exam names
=======
  const [allTests, setAllTests] = useState([]);
  // नए जेनरेटेड एग्जाम्स को स्टोर करने के लिए स्टेट
>>>>>>> 218a764 (Initial commit)
  const [liveExams, setLiveExams] = useState([]);

  // Complete test objects from API
  const [allTests, setAllTests] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  // ---------------- FETCH LIVE EXAMS ----------------
  useEffect(() => {
    const fetchLiveExams = async () => {
      try {
<<<<<<< HEAD
        const res = await axios.get(
          `${API_URL}/api/tests?category=Government`
        );
=======
        // यहाँ हम डेटाबेस से सारे टेस्ट मंगा रहे हैं (आप अपनी API का राउट चेक कर लें)
const res = await axios.get(
  `${API_URL}/api/tests?category=Government`
);

setAllTests(res.data); 


        
        // डेटाबेस के रिस्पॉन्स में से सिर्फ एग्जाम के नाम (examName) निकालकर उनका एक Unique Set बना रहे हैं
        // मान लीजिए आपके बैकएंड से आने वाले डेटा में 'examName' या 'title' फील्ड है
      const uniqueLiveExams = Array.from(
  new Set(res.data.map(test => test.exam))
).filter(Boolean);
>>>>>>> 218a764 (Initial commit)

        // Store full test data
        setAllTests(res.data || []);

        // Extract unique exam names
        const uniqueLiveExams = [
          ...new Set(
            (res.data || [])
              .map((test) => test.exam)
              .filter(Boolean)
          ),
        ];

        setLiveExams(uniqueLiveExams);
      } catch (error) {
        console.error("Error fetching live exams:", error);
      }
    };

    fetchLiveExams();
  }, [API_URL]);

  // ---------------- MERGE STATIC & LIVE EXAMS ----------------
<<<<<<< HEAD
  const baseExams = selectedState
    ? stateExams[selectedState] || []
    : staticExams;

  const combinedExams = Array.from(
    new Set([...liveExams, ...baseExams])
  );

  // ---------------- SEARCH FILTER ----------------
=======
  // अगर कोई स्टेट सिलेक्टेड है, तो सिर्फ उसके एग्जाम दिखाएं, वरना डमी + लाइव दोनों दिखाएं
  const baseExams = selectedState ? stateExams[selectedState] || [] : staticExams;
  
  // डुप्लीकेट्स हटाने के लिए Set का इस्तेमाल कर रहे हैं ताकि जो लाइव एग्जाम डमी में भी हो वो दो बार ना दिखे
  const combinedExams = Array.from(new Set([...liveExams, ...baseExams]));
  
  // सर्च फिल्टर
>>>>>>> 218a764 (Initial commit)
  const filteredExams = combinedExams.filter((exam) =>
    exam.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Select Test Type & State / UT
      </h1>

      {/* Test Type Slider */}
      <div className="mb-4 overflow-x-auto whitespace-nowrap py-2">
        {testTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedTestType(type)}
            className={`inline-block mr-3 px-4 py-2 rounded-full border ${
              selectedTestType === type
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-800 border-gray-300"
            } hover:bg-blue-500 hover:text-white transition-colors`}
          >
            {type}
          </button>
        ))}

        <button
          onClick={() => setSelectedTestType("")}
          className="inline-block mr-3 px-4 py-2 rounded-full border bg-gray-100 text-gray-700 hover:bg-gray-300 transition-colors"
        >
          Clear
        </button>
      </div>

      {/* State Dropdown */}
      <div className="flex justify-center mb-6">
        <select
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          <option value="">-- Select State or UT (Optional) --</option>

          {Object.keys(stateExams).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {/* Search */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Exam..."
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Exam Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredExams.length > 0 ? (
          filteredExams.map((exam) => {
            const isLive = liveExams.includes(exam);

            const firstTest = allTests.find(
              (test) => test.exam === exam
            );

            return (
              <Link
<<<<<<< HEAD
=======
               to={`/government-tests`}
                state={{ 
                  examName: exam, 
                  testType: selectedTestType 
                }}
>>>>>>> 218a764 (Initial commit)
                key={exam}
                to={firstTest ? `/test/${firstTest._id}` : "#"}
                state={{
                  examName: exam,
                  testType: selectedTestType,
                }}
                className={`bg-white shadow-lg rounded-xl p-4 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 cursor-pointer border-t-4 ${
                  isLive
                    ? "border-green-500"
                    : "border-blue-100"
                }`}
              >
                <div className="bg-blue-100 rounded-full p-4 mb-4 flex items-center justify-center w-16 h-16 relative">
                  <img
                    src={genericLogo}
                    alt={exam}
                    className="w-10 h-10 object-contain"
                  />

                  {isLive && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                      Live
                    </span>
                  )}
                </div>

                <p className="text-center font-medium text-gray-800 mb-2">
                  {exam}
                </p>

                <p className="text-sm text-gray-500">
                  {isLive
                    ? "Latest tests available"
                    : "Practice tests"}
                </p>

                {selectedTestType && (
                  <p className="mt-1 text-xs text-blue-600 font-semibold">
                    {selectedTestType}
                  </p>
                )}
              </Link>
            );
          })
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No exams found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ExamPage;