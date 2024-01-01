import * as worldcupRepository from '../data/worldcup.js';

export async function getWorldcupOfComposer(req, res, next){
    const round = req.query.round;

    console.log(round);
    if (!round){
        return res.sendStatus(404);
    }
    
    const data = await worldcupRepository.getComposersName(round);
    res.status(200).json(data);
}