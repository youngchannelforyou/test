// server/routes/accessCounts.js

const express = require('express');
const router = express.Router();
const mysql = require('mysql');

export default function handler(req, res) {




    // MariaDB 연결 설정
    const connection = mysql.createConnection({
        host: 'svc.sel5.cloudtype.app',
        port: 31081,
        user: 'root',
        password: 'test',
        database: 'okkyAccessCounts'
    });


    // 데이터베이스 연결
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MariaDB:', err);
            return;
        }
        console.log('Connected to MariaDB');
    });

    // 클라이언트로부터의 요청에서 데이터 추출
    const { countParameter } = req.searchParams; // URL로부터 쿼리 매개변수 추출

    // 데이터베이스에 count 값과 함께 삽입 또는 갱신하는 쿼리 실행
    const query = `INSERT INTO AccessCounts (count) VALUES (${countParameter})`;

    connection.query(query, (err, result) => {
        if (err) {
            console.error('Error updating access count:', err);
        } else {
            // 성공적으로 쿼리가 실행된 경우에 대한 처리
        }
    });
}
