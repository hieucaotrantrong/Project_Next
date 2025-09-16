import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


export default pool;

 /*------------------------------------------
    Docker
    -------------------------------------------*/
    // const pool = mysql.createPool({
    //     host: process.env.DB_HOST || 'localhost',
    //     user: process.env.DB_USER || 'root',
    //     password: process.env.DB_PASSWORD || 'hieu@1010',
    //     database: process.env.DB_NAME || 'clothes_db',
    //     waitForConnections: true,
    //     connectionLimit: 10,
    //     queueLimit: 0
    // });
    
    // export default pool;