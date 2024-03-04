// server/db.js

const mysql = require('mysql');

// MariaDB 연결 설정
const connection = mysql.createConnection({
    host: 'svc.sel5.cloudtype.app',
    port: 31081,
    user: 'root',
    password: 'test',
    database: 'okkyAccessCounts' // 데이터베이스 이름
});


// 데이터베이스 연결
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MariaDB:', err);
        return;
    }
    console.log('Connected to MariaDB');
});

module.exports = connection;
