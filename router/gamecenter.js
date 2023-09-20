import express from "express";
import * as gameCenterController from '../controller/gamecenter.js';

const router = express.Router();

router.get('/test', gameCenterController.getTest);
router.get('/exam', gameCenterController.getExam);
router.get('/worldcup', gameCenterController.getWorldcup);

export default router;