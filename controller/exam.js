import * as examRepository from '../data/exam.js';

export async function getAllExamination(req, res, next){
    const examId = req.query.examId;
    
    console.log(examId);
    if(!examId){
        return res.sendStatus(404);
    }

    const data = await examRepository.getExaminationById(examId);
    res.status(200).json(data);
}

export async function getExamScore(req, res, next){
    const examId = req.query.examId;
    const answers = req.body;
    
    if(!examId){
        return res.sendStatus(404);
    }
    if(!answers){
        return res.sendStatus(404);
    }
    
    const data = await examRepository.caculateExamScore(examId, answers);
    res.status(200).json(data)
}