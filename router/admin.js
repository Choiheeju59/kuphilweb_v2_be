import express from 'express';
import * as adminController from '../controller/admin.js';

const router = express.Router();

router.get('/login', adminController.getLoginCheck);
router.get('/authenticated', adminController.getAuthenticatedCheck)

export default router;