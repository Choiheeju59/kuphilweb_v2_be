import * as testRepository from '../data/test.js';

export async function getTest(req, res, next){
    
    const data = await testRepository.getTestInfo();
    res.status(200).json(data);

}