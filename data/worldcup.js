import db from '../db/database.js';

export async function getComposersName(round){
    return db
        .execute(
            `SELECT title, semiTitle, img FROM worldcup ORDER BY RAND() LIMIT ${round};`
        )
        .then((result)=>result[0])
        .catch((error)=> 
        console.log(`Error Message : ${error}, Date : ${new Date()}`)
    );
}