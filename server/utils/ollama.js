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
If invalid, output: []

Generate exactly ${numQ} MCQs.

Return strict JSON array:

[
  {
    "question": "string",
    "options": ["string", "string", "string", "string"],

    "correctIndex": number between 0 and 3,

    "explanation": "string",
    "difficulty": "easy"
  }
]

RULES:
- correctIndex must be index of correct option (0-3)
- DO NOT return A/B/C/D
- DO NOT return answer text separately
- options must contain correct answer inside array

RULES:
- answer must be EXACT copy from options array
- no A/B/C/D
- no index numbers
- no extra formatting

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

  const txt = res.data.response || res.data.output || "";

  let parsed = [];

  try {
    const start = txt.indexOf("[");
    const end = txt.lastIndexOf("]");

    if (start !== -1 && end !== -1) {
      parsed = JSON.parse(txt.slice(start, end + 1));
    }
  } catch (err) {
    console.error("JSON PARSE ERROR:", err.message);
    parsed = [];
  }

  return {
    raw: txt,
    json: Array.isArray(parsed) ? parsed : [],
  };
}