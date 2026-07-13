import axios from "axios";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const MODEL = "gemini-2.5-flash";
// ---------------- SINGLE BATCH GENERATOR ----------------
async function generateBatch({
  exam,
  category,
  state,
  subject,
  count,
  isFullTest,
}) {

  const prompt = `
You MUST output ONLY valid JSON.
NO markdown.
NO text before or after JSON.

Generate exactly ${count} UNIQUE MCQs.

Return STRICT JSON array:

[
  {
    "question": "What is the atomic number of hydrogen?",
    "options": ["1", "2", "3", "4"],
    "answer": "1",
    "explanation": "Hydrogen has atomic number 1.",
    "difficulty": "easy"
  }
]

RULES:
- answer MUST exactly match one option
- options must contain exactly 4 items
- explanation must be short
- no duplicate questions
- output ONLY JSON array

Exam: ${exam}
Category: ${category}
State: ${state}
Subject: ${subject}
Test Type: ${isFullTest ? "Full Test" : "Half Test"}
`;

  try {

     const response = await ai.models.generateContent({
    model: MODEL,
    contents: prompt,
  });

  const txt = response.text;
    console.log("RAW RESPONSE:");
    console.log(txt);

    let parsed = [];

    try {

      const start = txt.indexOf("[");
      const end = txt.lastIndexOf("]");

      if (start !== -1 && end !== -1) {

        parsed = JSON.parse(
          txt.slice(start, end + 1)
        );

      }

    } catch (err) {

      console.error(
        "JSON PARSE ERROR:",
        err.message
      );

      parsed = [];
    }

    // VALIDATE QUESTIONS
    const cleaned = Array.isArray(parsed)
      ? parsed.filter((q) => {

          return (
            typeof q === "object" &&
            q.question &&
            Array.isArray(q.options) &&
            q.options.length === 4 &&
            q.answer &&
            q.options.includes(q.answer)
          );

        })
      : [];

    return cleaned;

  } catch (error) {

    console.error(
      "OLLAMA ERROR:",
      error.message
    );

    return [];
  }
}

// ---------------- MAIN FUNCTION ----------------
export async function generateTestUsingRAG({
  exam,
  category,
  state,
  subject,
  numQ,
  isFullTest,
}) {

  let finalQuestions = [];

  // GENERATE IN BATCHES
  while (finalQuestions.length < numQ) {

    const remaining =
      numQ - finalQuestions.length;

    // 10 QUESTIONS PER REQUEST
    const batchSize =
      remaining >= 10 ? 10 : remaining;

    console.log(
      `Generating batch of ${batchSize}`
    );

    const batch = await generateBatch({
      exam,
      category,
      state,
      subject,
      count: batchSize,
      isFullTest,
    });

    finalQuestions = [
      ...finalQuestions,
      ...batch,
    ];

    // REMOVE DUPLICATES
    finalQuestions = finalQuestions.filter(
      (q, index, self) =>
        index ===
        self.findIndex(
          (x) => x.question === q.question
        )
    );

    console.log(
      `TOTAL QUESTIONS: ${finalQuestions.length}`
    );
  }

  // LIMIT EXACT COUNT
  finalQuestions = finalQuestions.slice(
    0,
    numQ
  );

  return {
    raw: "Batch Generated",
    json: finalQuestions,
  };
}