const PYQ = require('../models/PYQ');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const fs = require('fs');
const path = require('path');

const upload = multer({ dest: path.join(__dirname, '../uploads/') });



exports.uploadFileMiddleware = upload.single('file');

exports.uploadPYQ = async (req, res) => {
  try {
    const { exam, state, year, rawText, questions } = req.body;

    let extractedText = rawText || '';

    // If file uploaded, extract PDF text
    if (req.file) {
      const filePath = req.file.path;
      const dataBuffer = fs.readFileSync(filePath);
      try {
        const pdfData = await pdfParse(dataBuffer);
        extractedText = (extractedText ? extractedText + '\n\n' : '') + pdfData.text;
      } catch (e) {
        console.warn('PDF parse failed', e.message);
      } finally {
        // remove the uploaded file
        fs.unlinkSync(filePath);
      }
    }

    if (!exam || (!extractedText && !questions)) {
      return res.status(400).json({ message: 'exam and rawText or file or questions required' });
    }

    const doc = new PYQ({
      exam,
      state,
      year,
      rawText: extractedText,
      questions: questions ? JSON.parse(questions) : []
    });

    await doc.save();

    // TODO: enqueue background job to create embeddings and store in vector DB
    res.status(201).json({ message: 'PYQ uploaded', data: doc });
  } catch (err) {
    console.error('uploadPYQ err', err?.message || err);
    res.status(500).json({ error: err.toString() });
  }
};

exports.getPYQs = async (req, res) => {
  try {
    const { exam, state } = req.query;
    const filter = {};
    if (exam) filter.exam = exam;
    if (state) filter.state = state;
    const docs = await PYQ.find(filter).sort({ createdAt: -1 }).limit(200);
    res.json(docs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.toString() });
  }
};
