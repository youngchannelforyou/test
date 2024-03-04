"use client";


import { useEffect, useState } from 'react';
import axios from 'axios';
import './one.css';

function OkkySurvey({ updateAccessCount }) {
    const [accessCount, setAccessCount] = useState(0);
    const [formCompleted, setFormCompleted] = useState(false);
    const [surveyData, setSurveyData] = useState({
        age: '',
        occupation: '',
        aiProficiency: '',
        domainsOfInterest: '',
        purchaseIntent: '',
        additionalComments: ''
    });


    useEffect(() => {
        // 서버로의 요청을 보내어 조회수를 증가시킴
        const updateAccessCount = async () => {
            try {
                const data = { countParameter: 'okky' }; // 서버로 보낼 데이터
                const response = await axios.post(`server/updateAccessCount?countParameter=okky`,);
                console.log('조회수가 증가되었습니다.');
                setAccessCount(accessCount + 1); // 조회수 증가
            } catch (error) {
                console.error('조회수 증가 실패:', error);
            }
        };


        updateAccessCount(); // 컴포넌트가 처음으로 렌더링될 때만 실행

    }, []); // 빈 배열을 전달하여 컴포넌트가 처음으로 렌더링될 때 한 번만 실행되도록 함


    useEffect(() => {
        // 모든 필수 항목이 채워졌는지 확인
        const isFormCompleted = surveyData.age !== '' && surveyData.occupation !== '' && surveyData.aiProficiency !== '' && surveyData.domainsOfInterest !== '' && surveyData.purchaseIntent !== '';
        setFormCompleted(isFormCompleted);
    }, [surveyData]);

    // 설문 데이터 입력 시 상태 업데이트 함수
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSurveyData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleSubmit = (e) => {


        const updateSurveyData = async () => {
            try {
                const { age, occupation, aiProficiency, domainsOfInterest, purchaseIntent, additionalComments } = surveyData;
                const url = `server/submitSurvey?age=${age}&occupation=${occupation}&aiProficiency=${aiProficiency}&domainsOfInterest=${domainsOfInterest}&purchaseIntent=${purchaseIntent}&additionalComments=${additionalComments}&place=okky`;
                const response = await axios.post(url);
                console.log('설문 데이터가 성공적으로 제출되었습니다.');
            } catch (error) {
                console.error('설문 데이터 제출 실패:', error);
            }
        };
        e.preventDefault();
        if (surveyData.age !== '' && surveyData.occupation !== '' && surveyData.aiProficiency !== '' && surveyData.domainsOfInterest !== '' && surveyData.purchaseIntent !== '') {
            // 설문 데이터를 서버로 제출하는 함수 호출
            updateSurveyData();
        } else {
            alert('모든 항목을 입력해주세요.'); // 또는 다른 방식으로 사용자에게 안내
        }

    };

    return (
        <div class="survey-form">
            <h1>AI 중급자 매거진 계획 설문</h1>
            <div class="form-group">
                <br /><br />
                <label htmlFor="productDescription"><strong>초급에서 고급 사이의 강의를 찾고 계신가요?</strong></label>
                <br /><br />
                <p>
                    인공지능(AI) 분야에서 학습을 시작하거나 실력을 향상시키려는 많은 사람들이 기초적인 내용과 고급 내용 사이의 학습 자료에 대한 부족을 느낍니다. 유튜브나 서적 등에서는 기초적인 내용을 다루는 자료가 많거나 아예 너무 어려운 내용으로 이어지는 경우가 많아 이러한 사이의 공백을 채우기가 어렵습니다.
                    <br /><br />
                    이번 매거진에서는 이러한 공백을 채우기 위해 초급자와 고급자 사이의 온보딩을 원하는 사람들을 위한 AI 로드맵을 제시합니다. 이 로드맵은 다양한 AI 분야에 관한 학습과 최신 트렌드에 대한 이해를 돕는 목적으로 구성되었습니다.
                    <br /><br />

                    본 매거진에서는 다양한 분야(NLP, Vision, Medical 등등)의 학습 로드맵과 논문 정리, 프로젝트 내용을 통해 AI 학습자들은 초급에서 고급까지 단계적으로 실력을 향상시킬 수 있으며 최신 트렌드에 대한 업데이트를 계속 받을 수 있습니다. 함께 AI 분야에서의 레벨업을 위한 여정을 시작해보세요!
                </p>
                <br /><br />
            </div>
            <div class="divider"></div>

            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label htmlFor="age"><strong>나이:</strong></label>
                    <input type="number" id="age" name="age" value={surveyData.age} onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label htmlFor="occupation"><strong>직업:</strong></label>
                    <input type="text" id="occupation" name="occupation" value={surveyData.occupation} onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label htmlFor="aiProficiency"><strong>AI 숙련도</strong><br /><br />1단계는 공부를 시작하는 단계이며 5단계의 경우 인공지능 석사급의 수준입니다</label>
                    <select id="aiProficiency" name="aiProficiency" value={surveyData.aiProficiency} onChange={handleChange}>
                        <option value="">선택하세요</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label htmlFor="domainsOfInterest"><strong>매거진에서 기대하는 도메인</strong>(ex] NLP):</label>
                    <input type="text" id="domainsOfInterest" name="domainsOfInterest" value={surveyData.domainsOfInterest} onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label htmlFor="purchaseIntent"><strong>매거진의 구매의사</strong>:</label>
                    <select id="purchaseIntent" name="purchaseIntent" value={surveyData.purchaseIntent} onChange={handleChange}>
                        <option value="">선택하세요</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div class="form-group">
                    <label htmlFor="additionalComments"><strong>하고싶은 말</strong>:</label>
                    <textarea id="additionalComments" name="additionalComments" value={surveyData.additionalComments} onChange={handleChange}></textarea>
                </div>
                <button type="submit">제출</button>
            </form>
        </div >

    );
}
export default OkkySurvey;
