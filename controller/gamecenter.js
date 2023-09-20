import * as gamecenterRepository from '../data/gamecenter.js';

export async function getTest(req, res, next){
    
    const data = await gamecenterRepository.getInstrumentTest();

    res.status(200).json(data);
}

export async function getExam(req, res, next){
    
    const data = await gamecenterRepository.getClassicExam();

    res.status(200).json(data);
}

export async function getWorldcup(req, res, next){
    
    const data = await gamecenterRepository.getComposerWorldcup();

    res.status(200).json(data);
}