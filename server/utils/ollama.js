const axios = require('axios');
require('dotenv').config();

const OLLAMA_HOST = process.env.OLLAMA_HOST || 'http://localhost:11434';
const MODEL = process.env.OLLAMA_MODEL || 'gemma-3-q4-12b';
const TIMEOUT = 120000;

async function generateWithOllamaRaw(prompt, max_tokens = 1200) {
  // This uses hypothetical /v1/generate; adapt to your Ollama version (or use CLI)
  try {
    const payload = {
      model: MODEL,
      prompt,
      max_tokens
    };
    const resp = await axios.post(`${OLLAMA_HOST}/v1/generate`, payload, { timeout: TIMEOUT });
    return resp.data;
  } catch (err) {
    // Try CLI fallback not implemented here
    throw err;
  }
}

/**
 * Strong prompt wrapper for test generation using RAG context
 */
async function generateTestUsingRAG({ exam, category, state, pyqsContext = [], numQ = 10, isFullTest = false }) {
  const ctx = pyqsContext.slice(0, 12).map((c, i) => `--- Context ${i+1} ---\n${c}`).join('\n\n');

  const prompt = `
You are an expert exam generator. Create ${numQ} high-quality ${isFullTest ? 'full-length' : 'mock'} MCQs for the exam "${exam}" (${category}) ${state ? '- ' + state : ''}.
Each question must have 4 options and the correct answer should be clearly specified. Add a 1-2 line explanation for each.
Use the following context from previous year questions/patterns to preserve style:
${ctx}

Return only a valid JSON array like:
[
  {"question":"...","options":["A","B","C","D"],"answer":"A","explanation":"..."},
  ...
]
`;

  const res = await generateWithOllamaRaw(prompt, 1500);
  return res;
}

module.exports = { generateWithOllamaRaw, generateTestUsingRAG };

