import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  answer: String,
  explanation: String,
});

const testSchema = new mongoose.Schema({
  title: String,
  category: String,
  exam: String,
  state: String,
  subject: String,
  numQuestions: Number,
  isFullTest: Boolean,
  questions: [questionSchema],
}, { timestamps: true });

const Test = mongoose.model("Test", testSchema);

export default Test;
