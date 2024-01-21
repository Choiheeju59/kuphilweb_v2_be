import express from 'express';
import * as WorldcupController from '../controller/worldcup.js';

const router = express.Router();

router.get('/', WorldcupController.getWorldcupByGameId);
router.post('/result', WorldcupController.postWorldcupResult);
router.get('/result', WorldcupController.getWorldcupRank);


export default router;