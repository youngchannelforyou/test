const express = require('express');
const router = express.Router();

const mysql = require('mysql');
// MariaDB 연결 설정
const connection = mysql.createConnection({
    host: 'svc.sel5.cloudtype.app',
    port: 31081,
    user: 'root',
    password: 'test',
    database: 'okkyAccessCounts'
});


export default async function handler(req, res) {


    // 데이터베이스 연결
    await connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MariaDB:', err);
            return;
        }
        console.log('Connected to MariaDB');
    });

    const { age, occupation, aiProficiency, domainsOfInterest, purchaseIntent, additionalComments, place } = req.searchParams;

    const ageInt = parseInt(age);
    const aiProficiencyInt = parseInt(aiProficiency);
    const purchaseIntentInt = parseInt(purchaseIntent);

    // SurveyData 테이블에 데이터 삽입
    const query = `INSERT INTO SurveyData (age, occupation, aiProficiency, domainsOfInterest, purchaseIntent, additionalComments, place) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [age, occupation, aiProficiency, domainsOfInterest, purchaseIntent, additionalComments, place];



    connection.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting survey data:', err);
        } else {
        }
    });


}