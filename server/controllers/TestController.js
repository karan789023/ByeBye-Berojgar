// controllers/TestController.js
import Test from "../models/Test.js";
import { generateTestUsingRAG } from "../utils/ollama.js";

// Create a new test by generating questions using AI (RAG)
export const createTest = async (req, res) => {
  try {
    const { category, exam, state, subject, numQuestions, isFullTest } = req.body;

    if (!category || !exam || !numQuestions) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const generatedResult = await generateTestUsingRAG({
      exam,
      category,
      state,
      subject,
      numQ: numQuestions,
      isFullTest,
    });

    // SAFETY CHECK: ensure array
    if (!Array.isArray(generatedResult.json)) {
      return res.status(500).json({
        message: "Invalid test format returned by AI",
        raw: generatedResult.raw,
      });
    }

    // SAFETY CHECK: ensure each question is an object with necessary fields
    const valid = generatedResult.json.every(
      (q) =>
        typeof q === "object" &&
        q.question &&
        Array.isArray(q.options) &&
        q.answer
    );

    if (!valid) {
      return res.status(500).json({
        message: "AI returned invalid question format",
        raw: generatedResult.raw,
      });
    }

    const test = new Test({
      title: `${exam} Mock Test`,
      category,
      exam,
      state,
      subject,
      numQuestions,
      isFullTest,
      questions: generatedResult.json,
    });

    await test.save();

    res.status(201).json({
      message: "Test generated successfully",
      test,
    });
  } catch (error) {
    console.error("createTest error:", error);
    res.status(500).json({ error: error.message });
  }
};

// Get all tests (list)
export const getTests = async (req, res) => {
  try {
    const tests = await Test.find().sort({ createdAt: -1 });
    res.json(tests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get test by ID with full details (including answers)
export const getTestById = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    if (!test) return res.status(404).json({ message: "Test not found" });
    res.json(test);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get test for student (questions + options only, no answers)
export const getTestForStudent = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    if (!test) return res.status(404).json({ message: "Test not found" });

    const studentTest = {
      _id: test._id,
      title: test.title,
      questions: test.questions.map((q) => ({
        question: q.question,
        options: q.options,
      })),
    };

    res.json(studentTest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
