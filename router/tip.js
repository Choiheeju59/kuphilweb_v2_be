import express from 'express';
import * as tipController from '../controller/tip.js';

const router = express.Router();

router.get('/', tipController.getTip);

export default router;