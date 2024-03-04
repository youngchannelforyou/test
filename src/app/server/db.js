// server/db.js

const mysql = require('mysql');

// MariaDB 연결 풀 생성
const pool = mysql.createPool({
    connectionLimit: 10, // 연결 풀의 최대 연결 수
    host: 'svc.sel5.cloudtype.app',
    port: 31081,
    user: 'root',
    password: 'test',
    database: 'okkyAccessCounts'
});

// 데이터베이스 연결 풀 사용
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MariaDB:', err);
        return;
    }
    console.log('Connected to MariaDB');

    // 연결을 반환하여 풀에 다시 반환
    connection.release();
});

module.exports = pool;
