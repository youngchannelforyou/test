const express = require('express');
const router = express.Router();
const db = require('../db');

export default function handler(req, res) {
    db.connect((err) => {
        if (err) {
            console.error('Error connecting to database:', err);
            return;
        }
        console.log('Connected to database');
        executeQuery(query);
    });

    const { age, occupation, aiProficiency, domainsOfInterest, purchaseIntent, additionalComments, place } = req.searchParams;

    const ageInt = parseInt(age);
    const aiProficiencyInt = parseInt(aiProficiency);
    const purchaseIntentInt = parseInt(purchaseIntent);

    db.connect((err) => {
        if (err) {
            console.error('Error connecting to database:', err);
            return;
        }
        console.log('Connected to database');
        executeQuery(query);
    });

    // SurveyData 테이블에 데이터 삽입
    const query = `INSERT INTO SurveyData (age, occupation, aiProficiency, domainsOfInterest, purchaseIntent, additionalComments, place) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [age, occupation, aiProficiency, domainsOfInterest, purchaseIntent, additionalComments, place];

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting survey data:', err);
        } else {
        }
    });
}