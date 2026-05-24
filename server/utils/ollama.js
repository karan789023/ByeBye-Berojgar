import axios from "axios";

const OLLAMA_URL = "http://localhost:11434";
const OLLAMA_MODEL = "gemma:2b";

export async function generateTestUsingRAG({
  exam,
  category,
  state,
  subject,
  numQ,
  isFullTest,
}) {
  const prompt = `
You MUST output ONLY valid JSON.
NO text before or after JSON.
If you cannot output valid JSON, output: []

Generate exactly ${numQ} MCQs.

Return strict JSON array:
[
  {
    "question": "string",
    "options": ["A","B","C","D"],
    "answer": "A/B/C/D",
    "explanation": "string",
    "difficulty": "easy"
  }
]

Exam: ${exam}
Category: ${category}
State: ${state}
Subject: ${subject}
Test Type: ${isFullTest ? "Full Test" : "Half Test"}
`;

  const res = await axios.post(
    `${OLLAMA_URL}/api/generate`,
    {
      model: OLLAMA_MODEL,
      prompt,
      stream: false,
    },
    { timeout: 120000 }
  );

  const txt = res.data.response || res.data.output || JSON.stringify(res.data);

  let parsed = null;

  try {
    // Extract JSON array from text carefully
    const start = txt.indexOf("[");
    const end = txt.lastIndexOf("]");
    if (start !== -1 && end !== -1 && end > start) {
      const jsonString = txt.slice(start, end + 1);
      parsed = JSON.parse(jsonString);
    } else {
      parsed = [];
    }
  } catch (err) {
    console.error("JSON PARSE ERROR:", err.message);
    parsed = [];
  }

  return { raw: txt, json: parsed };
}
