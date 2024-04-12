import * as adminRepository from '../data/admin.js';

export async function getLoginCheck(req, res, next){
    const password = req.query.password;
    
    if (!password) {
        return res.sendStatus(404);
    }

    const data = await adminRepository.getLoginCheckByPassword(password);
    res.status(200).json(data);
}

export async function getAuthenticatedCheck(req, res, next){
    const token = req.query.token;

    if(!token){
        return res.sendStatus(404);
    }
    const data = await adminRepository.getAuthenticatedCheckByToken(token);
    res.status(200).json(data);
}