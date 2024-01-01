import * as worldcupRepository from '../data/worldcup.js';

export async function getWorldcupOfComposer(req, res, next){
    const round = req.query.round;
    const gameId = req.query.gameId;

    console.log(round);
    if (!round){
        return res.sendStatus(404);
    }

    console.log(gameId);
    if (!gameId){
        return res.sendStatus(404);
    }
    
    
    const data = await worldcupRepository.getComposersName(round, gameId);
    res.status(200).json(data);
}