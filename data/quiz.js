import db from '../db/database.js';

// 사용자가 문제를 틀리기 전, 마지막으로 맞힌 문제번호를 반환
export async function getUserLevelByQuizOrder(quizId, quizOrder){
    try {
        const subtotal = `SELECT SUM(num) AS subtotal FROM quiz WHERE quiz_id = ? and quiz_order >= ?;`;
        const total = `SELECT SUM(num) AS total FROM quiz WHERE quiz_id = ? and quiz_order >= 0;`;

        const [result1] = await db.execute(subtotal, [quizId, quizOrder]);
        const [result2] = await db.execute(total, [quizId]);

        const formattedResult = {
            subtotal: result1[0].subtotal,
            total: result2[0].total
        };

        return formattedResult;
    } catch (error) {
        console.log(`Error Message : ${error}, Date : ${new Date()}`);
        throw error; 
    }
}

// 사용자가 문제를 틀리기 전, 마지막으로 맞힌 문제번호를 저장 (통계용)
export async function postUserLevelByQuizOrder(quizId, quizOrder){
    try {
        const [result] = await db.execute(
            `UPDATE quiz SET num = quiz.num + 1 WHERE quiz_id = ? AND quiz_order = ?`, 
            [quizId, quizOrder]
        );

        if (result.affectedRows > 0) {
            return {
                status: "success",
                message: `${result.affectedRows} row(s) updated.`,
                changedRows: result.changedRows
            };
        } else {
            return {
                status: "warning",
                message: "No rows were updated."
            };
        }
    } catch (error) {
        console.log(`Error Message : ${error}, Date : ${new Date()}`);
        throw error; 
    }
}

