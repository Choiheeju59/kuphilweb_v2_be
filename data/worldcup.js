import db from '../db/database.js';

export async function getTitles(round, gameId){
    return db
        .execute(
            `SELECT id, title, semiTitle, img FROM worldcup where game_id = ${gameId} ORDER BY RAND() LIMIT ${round};`
        )
        .then((result)=>result[0])
        .catch((error)=> 
        console.log(`Error Message : ${error}, Date : ${new Date()}`)
    );
}
