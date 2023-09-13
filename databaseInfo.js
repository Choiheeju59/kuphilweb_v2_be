import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const data = {
    db_host: process.env.SERVER_HOST,
    db_port: process.env.SERVER_PORT,
    db_user: process.env.SERVER_NAME,
    db_password: process.env.SERVER_PASSWORD,
    db_database: process.env.SERVER_DATABASE
};


export default data;
