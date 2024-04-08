const {
    promisify
} = require('util')
const mysql = require('mysql2')
const dotenv = require('dotenv');
dotenv.config();

function attachAsyncMethods(pool) {
    pool.queryAsync = (sql, values) => {
        return promisify(pool.query).call(pool, sql, values)
    }
}

function initAuroraConn() {

    console.log('process.env.DATABASE_URI==>',process.env.DATABASE_URI);

    var pool = mysql.createPool({
        connectionLimit: 10,
        host: process.env.DATABASE_URI,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: process.env.DATABASE_NAME
    })

    attachAsyncMethods(pool)

    return pool
}

module.exports = initAuroraConn()