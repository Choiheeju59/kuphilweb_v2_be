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

export async function postWorldcupResultData(id, gameId){
    return db
        .execute(
            `UPDATE worldcup SET win = win + 1 WHERE id = ${id};`
        )
        .then((result)=>result[0])
        .catch((error)=>
        console.log(`Error Message : ${error}, Date : ${new Date()}`)
        );
}

export async function getRankData(gameId){
    return db
        .execute(
            `SELECT title, semiTitle, img, win FROM worldcup WHERE game_id = ${gameId};`
        )
        .then((result)=>result[0])
        .catch((error)=>
        console.log(`Error Message : ${error}, Date : ${new Date()}`)
        );
}