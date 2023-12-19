import db from '../db/database.js';

export async function getComposersName(num){
    return db
        .execute(
            `SELECT composer_kr, composer_en FROM worldcup ORDER BY RAND() LIMIT ${num};`
        )
        .then((result)=>result[0])
        .catch((error)=> 
        console.log(`Error Message : ${error}, Date : ${new Date()}`)
    );
}