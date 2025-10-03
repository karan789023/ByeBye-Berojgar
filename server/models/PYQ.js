const mongoose = require('mongoose');

const PYQSchema = new mongoose.Schema({
  exam: { type: String, required: true },
  state: String,
  year: String,
  rawText: String,
  questions: [{
    question: String,
    options: [String],
    answer: String
  }],
  embeddingsStored: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PYQ', PYQSchema);
