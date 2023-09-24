import db from '../db/database.js';

export async function getTenTips(){
    return db
        .execute(
            `SELECT tip FROM tip ORDER BY RAND() LIMIT 1;`
        )
        .then((result)=>result[0][0])
}