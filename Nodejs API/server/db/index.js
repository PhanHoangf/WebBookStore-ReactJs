const mysql =  require('mysql')
require('dotenv').config();

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'root',
    user: 'root',
    database: 'bookstore',
    host: 'localhost',
    port: '3306'
})


module.exports = pool;