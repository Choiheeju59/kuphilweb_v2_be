import mysql from "mysql2";
// import dbInfo from '../databaseInfo';
import dotenv from 'dotenv';

dotenv.config();

  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});


const db = pool.promise();

// let test = pool.query("select `composer` FROM concert_program");
// console.log(test);

export default db;

