import express from 'express';
import * as archiveController from '../controller/archive.js';

const router = express.Router();

router.get('/', archiveController.getConcertInfo);
router.get('/place', archiveController.getPlace);
router.get('/date', archiveController.getDate);
router.get('/conductor', archiveController.getConductor);
router.get('/composer', archiveController.getComposer);
router.get('/songtitle', archiveController.getSongTitle);

export default router;