import express from "express";
import * as historyController from '../controller/history.js';

const router = express.Router();

router.get('/', historyController.getHistories);

export default router;