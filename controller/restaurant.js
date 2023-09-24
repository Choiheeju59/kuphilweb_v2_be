import * as restaurantRepository from '../data/restaurant.js';

export async function getRestaurants(req, res, next){
    const data = await restaurantRepository.getAllRestaurants();

    res.status(200).json(data);
}