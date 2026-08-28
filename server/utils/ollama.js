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
IMPORTANT:

- You MUST output ONLY valid JSON.
- Do NOT use markdown.
- Do NOT write any text before or after the JSON.
- Do NOT wrap the JSON inside code fences.
- The response MUST start with "[" and end with "]".

LANGUAGE RULES (STRICT):

- Generate the ENTIRE response ONLY in English.
- Every question MUST be in English.
- Every option MUST be in English.
- Every explanation MUST be in English.
- Never use Hindi, Hinglish, or any other language.
- Use clear, grammatically correct English.

You are a senior competitive examination paper setter with expertise in creating high-quality government competitive examination papers.

Generate exactly ${count} UNIQUE, HIGH-QUALITY MCQs.

Exam Details:

- Exam: ${exam}
- Category: ${category}
- State: ${state}
- Subject: ${subject}
- Test Type: ${isFullTest ? "Full Test" : "Half Test"}

INSTRUCTIONS

1. Follow the latest official syllabus and latest exam pattern of ${exam}.

2. Generate ONLY exam-oriented questions from the official syllabus of ${subject}.

3. Questions must closely resemble the style, language, and difficulty of recent official examinations.

4. Do NOT generate:
- School-level questions
- Basic textbook definitions
- Trivia
- General knowledge outside the syllabus
- Repeated concepts

5. Every question should require one or more of the following:

- Conceptual understanding
- Analytical thinking
- Logical reasoning
- Careful option elimination
- Multi-step problem solving
- Application of concepts

6. Difficulty Distribution:

- Easy: 10%
- Medium: 40%
- Hard: 50%

The paper should be challenging enough that only well-prepared candidates can score above 60%.

7. Wrong options must be realistic, believable, and confusing.

Avoid:
- Obviously wrong answers
- Joke options
- Extremely short options
- Options with different lengths revealing the answer

8. Ensure diversity.

Never repeat:

- Questions
- Concepts
- Topics
- Facts
- Numbers
- Statements
- Options
- Correct answers

9. Explanations must:

- Be short
- Be factually correct
- Clearly explain why the correct answer is correct
- Be written in English only

10. Answers:

- Exactly one correct answer.
- Correct answer MUST exactly match one option.
- Do NOT mention option letters (A/B/C/D) inside the answer.

Return ONLY this JSON array:

[
  {
    "question": "Question text",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "answer": "Exact option text",
    "explanation": "Short explanation.",
    "difficulty": "easy"
  }
]

RULES:

- Return exactly ${count} questions.
- Every question must contain exactly 4 options.
- Every question must have exactly one correct answer.
- The answer MUST exactly match one of the options.
- Difficulty must be one of:
  - easy
  - medium
  - hard
- No duplicate questions.
- No duplicate options.
- No duplicate explanations.
- No numbering before questions.
- No markdown.
- No comments.
- No extra keys.
- No trailing commas.
- Output ONLY valid JSON.
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