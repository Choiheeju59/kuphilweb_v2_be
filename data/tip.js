import db from '../db/database.js';

export async function getTenTips(){
    return db
        .execute(
            `SELECT * FROM tip ORDER BY RAND() LIMIT 10;`
        )
        .then((result)=>result[0])
}