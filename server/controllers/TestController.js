const Test = require('../models/Test');
const PYQ = require('../models/PYQ');
const { generateTestUsingRAG } = require('../utils/ollama');

// Simple retrieval: best-effort fetch of raw text from Mongo (replace with vector DB)
async function retrieveRelevantPYQs({ exam, state, limit = 30 }) {
  const filter = {};
  if (exam) filter.exam = exam;
  if (state) filter.state = state;
  const docs = await PYQ.find(filter).sort({ createdAt: -1 }).limit(limit);
  return docs.map(d => d.rawText || (d.questions?.map(q => q.question).join('\n') || ''));
}

exports.createTest = async (req, res) => {
  try {
    const { category, exam, state, numQuestions, isFullTest } = req.body;
    if (!category || !exam || !numQuestions) {
      return res.status(400).json({ message: 'category, exam and numQuestions required' });
    }

    // RAG retrieval
    const contexts = await retrieveRelevantPYQs({ exam, state, limit: 30 });
    // Generate via Ollama
    const rawGen = await generateTestUsingRAG({
      exam, category, state, pyqsContext: contexts, numQ: Number(numQuestions), isFullTest: !!isFullTest
    });

    // Parse response: try extracting JSON array
    let questionsArray = [];
    try {
      // Many LLM outputs embed JSON in text. Try to find first '[' and parse.
      const text = (rawGen?.output?.[0]?.content) || rawGen?.text || JSON.stringify(rawGen);
      const start = text.indexOf('[');
      const jsonText = start >= 0 ? text.slice(start) : text;
      questionsArray = JSON.parse(jsonText);
    } catch (err) {
      // fallback: attempt to parse loosely or store raw as single question
      console.warn('Parsing generated output failed:', err.message);
    }

    let testDoc;
    if (Array.isArray(questionsArray) && questionsArray.length > 0) {
      testDoc = new Test({
        title: `${exam} - ${isFullTest ? 'Full Test' : 'Mock Test'} - ${new Date().toISOString()}`,
        category, exam, state,
        isFullTest: !!isFullTest,
        numQuestions: Number(numQuestions),
        questions: questionsArray
      });
    } else {
      // Save raw fallback
      const fallbackText = (rawGen?.output?.[0]?.content) || JSON.stringify(rawGen);
      testDoc = new Test({
        title: `${exam} - Generated Raw - ${new Date().toISOString()}`,
        category, exam, state,
        isFullTest: !!isFullTest,
        numQuestions: Number(numQuestions),
        questions: [{
          question: fallbackText,
          options: [],
          answer: '',
          explanation: ''
        }]
      });
    }

    await testDoc.save();
    return res.status(201).json({ message: 'Test generated and saved', test: testDoc });
  } catch (err) {
    console.error('createTest error', err?.message || err);
    return res.status(500).json({ message: 'Server error', error: err.toString() });
  }
};

exports.getTests = async (req, res) => {
  try {
    const { category, exam, state } = req.query;
    const filter = {};
    if (category) filter.category = category;
    if (exam) filter.exam = exam;
    if (state) filter.state = state;
    const tests = await Test.find(filter).sort({ createdAt: -1 }).limit(200);
    res.json(tests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.toString() });
  }
};
