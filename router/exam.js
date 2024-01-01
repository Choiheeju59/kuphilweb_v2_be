import express from 'express';
import * as examController from '../controller/exam.js';

const router = express.Router();

router.get('/', examController.getAllExamination);

export default router;