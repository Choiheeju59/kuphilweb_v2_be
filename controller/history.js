import * as historyRepository from '../data/history.js';

export async function getHistories(req, res, next){
    const year = req.query.year;

    const data = await (year
    ? historyRepository.getHistoryByYear(year)
    : historyRepository.getAllHistory());

    res.status(200).json(data);
}