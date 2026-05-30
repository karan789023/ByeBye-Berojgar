import express from "express";
import {
  createTest,
  getTests,
  getTestById,
  getTestForStudent,
  deleteTest,
} from "../controllers/TestController.js";

const router = express.Router();

router.post("/create", createTest);
router.get("/", getTests);
router.get("/:id", getTestById);
router.get("/:id/student", getTestForStudent);
router.delete("/:id", deleteTest);

export default router;



