// server/routes/accessCounts.js

const express = require('express');
const router = express.Router();
const db = require('../db');

export default function handler(req, res) {
    // 클라이언트로부터의 요청에서 데이터 추출
    console.log(req.body)
    // const { countParameter } = req.body;

    // // 데이터베이스에 count 값과 함께 삽입 또는 갱신하는 쿼리 실행
    // const query = `INSERT INTO AccessCounts (count) VALUES ('${countParameter}') ON DUPLICATE KEY UPDATE count = count + '${countParameter}'`;

    // db.query(query, (err, result) => {
    //     if (err) {
    //         console.error('Error updating access count:', err);
    //         res.status(500).json({ success: false, message: 'Server error' });
    //     } else {
    //         res.status(200).json({ success: true });
    //     }
    // });
}
