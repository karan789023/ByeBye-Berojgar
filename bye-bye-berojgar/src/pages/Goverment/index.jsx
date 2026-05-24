import React, { useState } from "react";
import { Link } from "react-router-dom";

// Generic exam logo
const genericLogo = "https://img.icons8.com/color/48/000000/test-passed.png";

// States + UTs + Exams
const stateExams = {
  "Andhra Pradesh": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "APPSC Group 1 Exam",
    "APPSC Group 2 Exam",
    "AP Police SI & Constable Exam",
    "AP TET"
  ],
  "Arunachal Pradesh": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "Arunachal Pradesh PSC Exam",
    "Arunachal Pradesh Police SI/Constable Exam",
    "Arunachal Pradesh TET",
    "Arunachal Pradesh Forest & Revenue Department Exam"
  ],
  "Assam": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "Assam PSC Exam",
    "Assam Police SI/Constable Exam",
    "Assam TET",
    "Assam Forest & Revenue Department Exam"
  ],

   "Bihar": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "BPSC Group 1 Exam",
    "BPSC Group 2 Exam",
    "Bihar Police SI & Constable Exam",
    "Bihar TET"
  ],
  "Chhattisgarh": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "CGPSC Group 1 Exam",
    "CGPSC Group 2 Exam",
    "Chhattisgarh Police SI/Constable Exam",
    "Chhattisgarh TET"
  ],
  "Goa": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "Goa PSC Exam",
    "Goa Police SI/Constable Exam",
    "Goa TET",
    "Goa Forest & Revenue Department Exam"
  ],
  "Gujarat": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "GPSC Group 1 Exam",
    "GPSC Group 2 Exam",
    "Gujarat Police SI/Constable Exam",
    "Gujarat TET"
  ],
  "Haryana": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "HPSC Group 1 Exam",
    "HPSC Group 2 Exam",
    "Haryana Police SI/Constable Exam",
    "Haryana TET"
  ],
  "Himachal Pradesh": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "HPPSC Group 1 Exam",
    "HPPSC Group 2 Exam",
    "Himachal Pradesh Police SI/Constable Exam",
    "HP TET"
  ],
  "Jharkhand": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "JPSC Group 1 Exam",
    "JPSC Group 2 Exam",
    "Jharkhand Police SI/Constable Exam",
    "Jharkhand TET"
  ],
  "Karnataka": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "KPSC Group 1 Exam",
    "KPSC Group 2 Exam",
    "Karnataka Police SI/Constable Exam",
    "Karnataka TET"
  ],
  "Kerala": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "Kerala PSC Group 1 Exam",
    "Kerala PSC Group 2 Exam",
    "Kerala Police SI/Constable Exam",
    "Kerala TET"
  ],
  "Madhya Pradesh": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "MPPSC Group 1 Exam",
    "MPPSC Group 2 Exam",
    "Madhya Pradesh Police SI/Constable Exam",
    "MP TET"
  ],
  "Maharashtra": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "MPSC Group 1 Exam",
    "MPSC Group 2 Exam",
    "Maharashtra Police SI/Constable Exam",
    "Maharashtra TET"
  ],
  "Manipur": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "Manipur PSC Group 1 Exam",
    "Manipur PSC Group 2 Exam",
    "Manipur Police SI/Constable Exam",
    "Manipur TET"
  ],
  "Meghalaya": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "Meghalaya PSC Group 1 Exam",
    "Meghalaya PSC Group 2 Exam",
    "Meghalaya Police SI/Constable Exam",
    "Meghalaya TET"
  ],
  "Mizoram": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "Mizoram PSC Group 1 Exam",
    "Mizoram PSC Group 2 Exam",
    "Mizoram Police SI/Constable Exam",
    "Mizoram TET"
  ],
  "Nagaland": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "Nagaland PSC Group 1 Exam",
    "Nagaland PSC Group 2 Exam",
    "Nagaland Police SI/Constable Exam",
    "Nagaland TET"
  ],
  "Odisha": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "Odisha PSC Group 1 Exam",
    "Odisha PSC Group 2 Exam",
    "Odisha Police SI/Constable Exam",
    "Odisha TET"
  ],
  "Punjab": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "Punjab PSC Group 1 Exam",
    "Punjab PSC Group 2 Exam",
    "Punjab Police SI/Constable Exam",
    "Punjab TET"
  ],
  "Rajasthan": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "RPSC Group 1 Exam",
    "RPSC Group 2 Exam",
    "Rajasthan Police SI/Constable Exam",
    "Rajasthan TET"
  ],
  "Sikkim": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "Sikkim PSC Group 1 Exam",
    "Sikkim PSC Group 2 Exam",
    "Sikkim Police SI/Constable Exam",
    "Sikkim TET"
  ],
  "Tamil Nadu": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "TNPSC Group 1 Exam",
    "TNPSC Group 2 Exam",
    "Tamil Nadu Police SI/Constable Exam",
    "Tamil Nadu TET"
  ],
  "Telangana": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "TSPSC Group 1 Exam",
    "TSPSC Group 2 Exam",
    "Telangana Police SI/Constable Exam",
    "Telangana TET"
  ],
  "Tripura": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "Tripura PSC Group 1 Exam",
    "Tripura PSC Group 2 Exam",
    "Tripura Police SI/Constable Exam",
    "Tripura TET"
  ],
  "Uttar Pradesh": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "UPPSC Group 1 Exam",
    "UPPSC Group 2 Exam",
    "UP Police SI/Constable Exam",
    "UP TET"
  ],
  "Uttarakhand": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "UKPSC Group 1 Exam",
    "UKPSC Group 2 Exam",
    "Uttarakhand Police SI/Constable Exam",
    "Uttarakhand TET"
  ],
  "West Bengal": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "WBPSC Group 1 Exam",
    "WBPSC Group 2 Exam",
    "West Bengal Police SI/Constable Exam",
    "West Bengal TET"
  ],
  // UTs
  "Delhi (NCT of Delhi)": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "Delhi Police Constable/SI Exam",
    "Delhi TET",
    "DSSSB Exam",
    "CAPF Recruitment Exam"
  ],
  "Chandigarh": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "Chandigarh Police Constable/SI Exam",
    "Chandigarh TET",
    "Chandigarh Administration Recruitment Exam",
    "CAPF Recruitment Exam"
  ],
  "Puducherry": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "Puducherry PSC Group 1 Exam",
    "Puducherry PSC Group 2 Exam",
    "Puducherry Police SI/Constable Exam",
    "Puducherry TET"
  ],
  "Andaman & Nicobar Islands": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "Andaman & Nicobar Administration Recruitment Exam",
    "Police Constable/SI Exam",
    "CAPF Recruitment Exam",
    "TET"
  ],
  "Dadra & Nagar Haveli and Daman & Diu": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "UT Administration Recruitment Exam",
    "Police Constable/SI Exam",
    "CAPF Recruitment Exam",
    "TET"
  ],
  "Jammu & Kashmir": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "Jammu & Kashmir PSC Group 1 Exam",
    "Jammu & Kashmir PSC Group 2 Exam",
    "J&K Police SI/Constable Exam",
    "J&K TET"
  ],
  "Ladakh": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "Ladakh Administration Recruitment Exam",
    "Police Constable/SI Exam",
    "CAPF Recruitment Exam",
    "TET"
  ],
  "Lakshadweep": [
    "UPSC Civil Services Exam",
    "SSC CGL Exam",
    "SSC CHSL Exam",
    "IBPS PO Exam",
    "IBPS Clerk Exam",
    "SBI PO Exam",
    "SBI Clerk Exam",
    "NDA Exam",
    "CDS Exam",
    "Indian Air Force X/Y Group Exam",
    "Indian Navy SSR & AA Exam",
    "Lakshadweep Administration Recruitment Exam",
    "Police Constable/SI Exam",
    "CAPF Recruitment Exam",
    "TET"
  ]

  // Add remaining states & UTs...
};

// Flatten all exams
const allExams = Array.from(new Set(Object.values(stateExams).flat()));

// Test type options
const testTypes = ["PYQ", "Mock Test", "Full Test", "Chapter-wise", "Subject-wise"];

const ExamPage = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedTestType, setSelectedTestType] = useState("");
  const [search, setSearch] = useState("");

  const exams = selectedState ? stateExams[selectedState] || [] : allExams;

  const filteredExams = exams.filter((exam) =>
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

      {/* State/UT Dropdown */}
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

      {/* Search Box */}
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
          filteredExams.map((exam, index) => (
            <Link
              to="/TestPage"
              key={exam}
              className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="bg-blue-100 rounded-full p-4 mb-4 flex items-center justify-center w-16 h-16">
                <img
                  src={genericLogo}
                  alt={exam}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <p className="text-center font-medium text-gray-800 mb-2">
                {exam}
              </p>
              <p className="text-sm text-gray-500">
                {1000 - index} tests available
              </p>

              {selectedTestType && (
                <p className="mt-1 text-xs text-blue-600 font-semibold">
                  {selectedTestType}
                </p>
              )}
            </Link>
          ))
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