import * as worldcupRepository from '../data/worldcup.js';

export async function getWorldcupByGameId(req, res, next){
    const round = req.query.round;
    const gameId = req.query.gameId;

    if (!round){
        return res.sendStatus(404);
    }

    if (!gameId){
        return res.sendStatus(404);
    }
    const data = await worldcupRepository.getTitles(round, gameId);
    res.status(200).json(data);
}

export async function postWorldcupResult(req, res, next){
    const id = req.query.id;
    const gameId = req.query.gameId;

    if(!id){
        return res.sendStatus(404);
    }
    if(!gameId){
        return res.sendStatus(404);
    }

    const data = await worldcupRepository.postWorldcupResultData(id, gameId);
    res.status(200).json(data);
}

export async function getWorldcupRank(req, res, next){
    const gameId = req.query.gameId;

    if(!gameId){
        return res.sendStatus(404);
    }

    const data = await worldcupRepository.getRankData(gameId);
    res.status(200).json(data);

}

