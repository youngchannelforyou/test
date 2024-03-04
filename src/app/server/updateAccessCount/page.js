// server/routes/accessCounts.js

const express = require('express');
const router = express.Router();
const db = require('../db');

export default function handler(req, res) {
    // 클라이언트로부터의 요청에서 데이터 추출
    const { countParameter } = req.searchParams; // URL로부터 쿼리 매개변수 추출

    // 데이터베이스에 count 값과 함께 삽입 또는 갱신하는 쿼리 실행
    const query = `INSERT INTO AccessCounts (count) VALUES ('${countParameter}') ON DUPLICATE KEY UPDATE count = count + '${countParameter}'`;

    // 데이터베이스 연결 상태 확인 후 쿼리 실행
    if (db.state === 'disconnected') {
        db.connect((err) => {
            if (err) {
                console.error('Error connecting to database:', err);
                return;
            }
            console.log('Connected to database');
            executeQuery(query);
        });
    } else {
        executeQuery(query);
    }

    // 쿼리 실행 함수
    function executeQuery(query) {
        db.query(query, (err, result) => {
            if (err) {
                console.error('Error updating access count:', err);
            } else {
                // 성공적으로 쿼리가 실행된 경우에 대한 처리
            }
        });
    }
}
