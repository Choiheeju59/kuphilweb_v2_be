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

export async function postWorldcupResultData(id,gameId){
    return db 
    .execute(
        `UPDATE worldcup SET win = worldcup.win + 1 WHERE id = ${id} and game_id = ${gameId};` 
    )
    .then()
    .catch((error) => 
        console.log(`Error Message : ${error}, Date : ${new Date()}`)
    );
}


export async function getRankData(gameId){
    try{
        const [nums, fields] = await db.execute(
            `SELECT title, semiTitle, img, win FROM worldcup WHERE game_id = ? ORDER BY win DESC;`,
            [parseInt(gameId)]  
        );

        const rankData = nums.map(num => ({
            title : num.title,
            semiTitle : num.semiTitle,
            win : num.win,
            img : num.img
        }));

        return rankData;
    }
    catch (error) {
        console.log(`Error Message : ${error}, Date : ${new Date()}`);
        throw error;
    }
};
