import db from '../db/database.js';


const FROM_INFO = `FROM concert_info i`;
const FROM_PROGRAM = `FROM concert_program p`;
const JOIN_PROGRAM = `JOIN concert_program p ON i.id = p.id`;

export async function getAllArchiveInformation(){
    
    return db
        .execute(
            `SELECT * ${FROM_INFO} ${JOIN_PROGRAM}`
        )
        .then((result) => result[0])
        .catch((error)=> 
            console.log(`Error Message : ${error}, Date: ${new Date()}`)
        );
}

export async function getConcertNum(num){
    return db
        .execute(
            `SELECT DISTINCT i.id ${FROM_INFO} ${JOIN_PROGRAM} where i.id = ?;`, [parseInt(num)]
        )
        .then((result) => result[0][0])
        .catch((error) => 
            console.log(`Error Message : ${error}, Date: ${new Date()}`)
        );
}

export async function getConcertPlace(num){
    return db
        .execute(
            `SELECT i.place ${FROM_INFO} ${JOIN_PROGRAM} where i.id = 1;`, [parseInt(num)]
        )
        .then((result) => result[0][0])
        .catch((error) => 
            console.log(`Error Message : ${error}, Date: ${new Date()}`)
        );
}

export async function getConcertDate(num){
    return db
        .execute(
            `SELECT i.date ${FROM_INFO} ${JOIN_PROGRAM} where i.id = 1;`, [parseInt(num)]
        )
        .then((result) => result[0][0])
        .catch((error) => 
            console.log(`Error Message : ${error}, Date: ${new Date()}`)
        );
}

export async function getConcertConductor(num){
    return db
        .execute(
            `SELECT i.conductor ${FROM_INFO} ${JOIN_PROGRAM} where i.id = 1;`, [parseInt(num)]
        )
        .then((result) => result[0][0])
        .catch((error) => 
            console.log(`Error Message : ${error}, Date: ${new Date()}`)
        );
}

export async function getProgramByComposer(num){
    return db
        .execute(
            `SELECT p.program_num, p.composer ${FROM_PROGRAM} where p.concert_id = ?;`, [parseInt(num)]
        )
        .then((result) => result[0][0])
        .catch((error) => 
            console.log(`Error Message : ${error}, Date: ${new Date()}`)
        );
}

export async function getProgramByTitle(num){
    return db
        .execute(
            `SELECT p.program_num, p.program ${FROM_PROGRAM} where p.concert_id = 1;`, [parseInt(num)]
        )
        .then((result) => result[0])
        .catch((error) => 
            console.log(`Error Message : ${error}, Date: ${new Date()}`)
        );
}
