import db from '../db/database.js';

export async function getExaminationById(examId){
    try {
        const result = await db.execute(
          `SELECT id, question, CONCAT_WS(',', choice1, choice2, choice3, choice4) AS choices FROM exam WHERE exam_id = ${examId};`
        );
    
        if (result[0].length === 0) {
          return null; // 선택된 ID에 대한 결과가 없을 경우 처리
        }
    
        const formattedResult = result[0].map(row => {
          const choicesArray = row.choices.split(',');
          return {
            id: row.id,
            question: row.question,
            choices: choicesArray
          };
        });
    
        return formattedResult; // 배열의 첫 번째 요소 반환
      } catch (error) {
        console.log(`Error Message : ${error}, Date : ${new Date()}`);
        throw error;
      }
}