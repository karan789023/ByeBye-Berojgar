const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String,
  explanation: String,
});

const TestSchema = new mongoose.Schema({
  title: String,
  category: String,
  exam: String,
  state: String,
  isFullTest: { type: Boolean, default: false },
  numQuestions: Number,
  questions: [QuestionSchema],
  createdBy: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Test', TestSchema);
