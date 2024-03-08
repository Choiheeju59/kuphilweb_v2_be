import db from '../db/database.js';

export async function getTestInfo(){
    return db
        .execute(
            `SELECT * FROM test;`
        )
        .then((result)=>result[0])
}