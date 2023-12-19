import * as worldcupRepository from '../data/worldcup.js';

export async function getWorldcupOfComposer(req, res, next){
    const num = req.query.num;

    console.log(num);
    if (!num){
        return res.sendStatus(404);
    }
    
    const data = await worldcupRepository.getComposersName(num);
    res.status(200).json(data);
}