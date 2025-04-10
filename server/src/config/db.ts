import mysql from 'mysql2/promise';


export const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'hieu@1010',
    database: 'clothes_db',
});
