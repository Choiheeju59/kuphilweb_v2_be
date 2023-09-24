import express from 'express';
import * as restaurantController from '../controller/restaurant.js';

const router = express.Router();
router.get('/', restaurantController.getRestaurants);

export default router;