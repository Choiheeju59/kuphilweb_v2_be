import express from "express";
import * as quizController from '../controller/quiz.js';

const router = express.Router();

router.get('/result', quizController.getQuizOrder);
router.post('/result', quizController.postQuizOrder);

export default router;