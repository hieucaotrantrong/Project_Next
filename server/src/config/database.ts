import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    /*------------------------------------------
    *Connect db used MysqlWordbend
    -------------------------------------------*/
    host: 'localhost',
    user: 'root',
    password: 'hieu@1010',
    database: 'clothes_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;