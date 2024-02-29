import express from 'express';
import * as examController from '../controller/exam.js';

const router = express.Router();

router.get('/', examController.getAllExamination);
router.post('/score', examController.postExamScore);

export default router;