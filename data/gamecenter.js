import db from '../db/database.js';

const SELECT_FROM = `SELECT * FROM`;

export async function getInstrumentTest(){
    return db
    .execute(
        `${SELECT_FROM} test`
    )
    .then((result)=> result[0])
    .catch((error)=> 
        console.log(`Error Message : ${error}, Date : ${new Date()}`)
    );
}

export async function getClassicExam(){
    return db
    .execute(
        `${SELECT_FROM} exam`
    )
    .then((result)=> result[0])
    .catch((error)=> 
        console.log(`Error Message : ${error}, Date : ${new Date()}`)
    );
}

export async function getComposerWorldcup(){
    return db
    .execute(
        `${SELECT_FROM} worldcup`
    )
    .then((result)=> result[0])
    .catch((error)=> 
        console.log(`Error Message : ${error}, Date : ${new Date()}`)
    );
}