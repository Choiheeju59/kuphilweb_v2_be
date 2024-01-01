import express from 'express';
import * as WorldcupController from '../controller/worldcup.js';

const router = express.Router();

router.get('/', WorldcupController.getWorldcupOfComposer);

export default router;