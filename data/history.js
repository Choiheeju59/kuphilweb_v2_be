import db from '../db/database.js';

const SELECT = `SELECT year, month, day, context`
const FROM = `FROM history`

export async function getAllHistory(){
    return db
    .execute(
        `${SELECT} ${FROM}`
    )
    .then((result) => result[0])
    .catch((error) =>
        console.log(`Error Message : ${error}, Date : ${new Date()}`)
    );
}

// export async function getHistoryByYear(year){
//     return db
//     .execute(
//         `${SELECT} ${FROM} where year = ?`, [parseInt(year)]
//     )
//     .then((result) => result[0])
//     .catch((error) =>
//         console.log(`Error Message : ${error}, Date : ${new Date()}`)
//     );
// }