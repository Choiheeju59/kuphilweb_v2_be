import * as quizRepository from '../data/quiz.js';

export async function getQuizOrder(req, res, next){
    const quizId = req.query.quizId;
    const quizOrder = req.query.quizOrder;

    console.log(quizId);
    console.log(quizOrder);

    if(!quizId){
        return res.sendStatus(404);
    }
    if(!quizOrder){
        return res.sendStatus(404);
    }

    const data = await quizRepository.getUserLevelByQuizOrder(quizId, quizOrder);
    res.status(200).json(data)
}


export async function postQuizOrder(req, res, next){
    const quizId = req.query.quizId;
    const quizOrder = req.query.quizOrder;

    
    if(!quizId){
        return res.sendStatus(404);
    }
    if(!quizOrder){
        return res.sendStatus(404);
    }

    const data = await quizRepository.postUserLevelByQuizOrder(quizId, quizOrder);
    res.status(200).json(data)

}