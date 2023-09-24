import db from '../db/database.js';

export async function getAllRestaurants(){
    return db
    .execute(
        `SELECT * FROM restaurant;`
    )
    .then((result) => result[0])
    .catch((error) =>
        console.log(`Error Message : ${error}, Date : ${new Date()}`)
    );
}
