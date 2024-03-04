const express = require('express');
const router = express.Router();
const db = require('../db');

export default function handler(req, res) {
    const { age, occupation, aiProficiency, domainsOfInterest, purchaseIntent, additionalComments, place } = req.searchParams;

    const ageInt = parseInt(age);
    const aiProficiencyInt = parseInt(aiProficiency);
    const purchaseIntentInt = parseInt(purchaseIntent);

    // SurveyData 테이블에 데이터 삽입
    const query = `INSERT INTO SurveyData (age, occupation, aiProficiency, domainsOfInterest, purchaseIntent, additionalComments, place) VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [age, occupation, aiProficiency, domainsOfInterest, purchaseIntent, additionalComments, place];
    function executeQuery(query) {
        db.query(query, values, (err, result) => {
            if (err) {
                console.error('Error inserting survey data:', err);
            } else {
            }
        });
    }


    executeQuery(query);


}