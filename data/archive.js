import { DATEONLY } from 'sequelize';
import db from '../db/database.js';
import { format } from 'mysql2';


const FROM_INFO = `FROM concert_info i`;
const FROM_PROGRAM = `FROM concert_program p`;
const JOIN_PROGRAM = `JOIN concert_program p ON i.id = p.concert_id`;

export async function getAllArchiveInformation(){
    return db
        .execute(
            `SELECT * ${FROM_INFO} ${JOIN_PROGRAM}`
        )
        .then((result) => result[0])
        .catch((error) => 
            console.log(`Error Message : ${error}, Date: ${new Date()}`)
        );

}

export async function getConcertNum(num){
    return db
    .execute(
        `SELECT * ${FROM_INFO} ${JOIN_PROGRAM} where p.concert_id = ?;`, [parseInt(num)]
    )
    .then((result) => {
        if(result[0].length ===0 ){
            return null;
        }

        const concertData = result[0][0];
        const programInfo = result[0].map(program => ({
            songtitle : program.songtitle,
            composer : program.composer,
            youtube_url : program.youtube_url
        }));

        const setSongtitles = [...new Set(programInfo.map(program => program.songtitle))];
        const setComposers = [...new Set(programInfo.map(program => program.composer))];
        const setYoutube_url = [...new Set(programInfo.map(program => program.youtube_url))];

        const formattedData = {
            id: concertData.id,
            place: concertData.place,
            date: concertData.date,
            conductor: concertData.conductor,
            concert_id: concertData.concert_id,
            program_num: concertData.program_num,
            songtitle: setSongtitles,
            composer: setComposers,
            youtube_url: setYoutube_url 
        }
        console.log(setSongtitles);
        return formattedData;
    })
    .catch((error) =>
        console.log(`Error Message : ${error}, Date : ${new Date()}`)
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
