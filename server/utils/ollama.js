import axios from "axios";

const OLLAMA_URL = "http://localhost:11434";
const OLLAMA_MODEL = "gemma2:2b";

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
NO markdown.
NO text before or after JSON.
NO explanations outside JSON.

Generate exactly ${numQ} MCQs.

Return STRICT JSON array in this format:

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
- answer MUST be exact text from options array
- DO NOT use correctIndex
- DO NOT use A/B/C/D
- options must contain exactly 4 items
- explanation must be short and accurate
- output ONLY JSON array

Exam: ${exam}
Category: ${category}
State: ${state}
Subject: ${subject}
Test Type: ${isFullTest ? "Full Test" : "Half Test"}
`;

  try {

    const res = await axios.post(
      `${OLLAMA_URL}/api/generate`,
      {
        model: OLLAMA_MODEL,
        prompt,
        stream: false,
      },
      {
        timeout: 120000,
      }
    );

    const txt =
    console.log("RAW OLLAMA RESPONSE:");
    console.log(txt);
      res.data.response ||
      res.data.output ||
      "";

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

    return {
      raw: txt,
      json: cleaned,
    };

  } catch (error) {

    console.error(
      "OLLAMA ERROR:",
      error.message
    );

    return {
      raw: "",
      json: [],
    };
  }
}