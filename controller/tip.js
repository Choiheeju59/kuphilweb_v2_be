import * as tipRepository from '../data/tip.js';

export async function getTip(req, res, next){
    
    const data = await tipRepository.getTenTips();
    res.status(200).json(data);

}