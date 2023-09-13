import * as archiveRepository from '../data/archive.js';

export async function getArcNum(req, res, next){
    const num = req.query.num;
    
    console.log(num);
    if (!num) {
        return res.sendStatus(404);
    }

    const data = await archiveRepository.getConcertNum(num);
    res.status(200).json(data);
}

export async function getPlace(req, res, next){
    const num = req.query.num;
    
    console.log(num);
    if (!num) {
        return res.sendStatus(404);
    }

    const data = await archiveRepository.getConcertPlace(num);
    res.status(200).json(data);
}


export async function getDate(req, res, next){
    const num = req.query.num;
    
    console.log(num);
    if (!num) {
        return res.sendStatus(404);
    }

    const data = await archiveRepository.getConcertDate(num);
    res.status(200).json(data);
}

export async function getConductor(req, res, next){
    const num = req.query.num;
    
    console.log(num);
    if (!num) {
        return res.sendStatus(404);
    }

    const data = await archiveRepository.getConcertConductor(num);
    res.status(200).json(data);
}



export async function getComposer(req, res, next){
    const num = req.query.num;
    
    console.log(num);
    if (!num) {
        return res.sendStatus(404);
    }

    const data = await archiveRepository.getProgramByComposer(num);
    res.status(200).json(data);
}

export async function getSongTitle(req, res, next){
    const num = req.query.num;
    
    console.log(num);
    if (!num) {
        return res.sendStatus(404);
    }

    const data = await archiveRepository.getProgramByTitle(num);
    res.status(200).json(data);
}