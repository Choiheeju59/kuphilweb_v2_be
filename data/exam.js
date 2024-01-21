import db from '../db/database.js';

export async function getExaminationById(examId){
    try {
        const result = await db.execute(
          `SELECT id, question, CONCAT_WS(',', choice1, choice2, choice3, choice4) AS choices, answer FROM exam WHERE exam_id = ${examId};`
        );
    
        if (result[0].length === 0) {
          return null; // 선택된 ID에 대한 결과가 없을 경우 처리
        }
    
        const formattedResult = result[0].map(row => {
          const choicesArray = row.choices.split(',');
          return {
            id: row.id,
            question: row.question,
            choices: choicesArray,
            answer : row.answer
          };
        });

    
        return formattedResult; // 배열 반환
      } catch (error) {
        console.log(`Error Message : ${error}, Date : ${new Date()}`);
        throw error;
      }
}

// 정답 판별 및 개수 구하는 로직 추가하기
export async function caculateExamScore(examId, answers){
  try{
    const examQuestions = await getExaminationById(examId);
    if(!examQuestions){
      return null;
    }
    let correctAnswerCount = 0; 

    examQuestions.forEach((question, index) => {

      if(question.answer === answers.answers[index]){
        correctAnswerCount += 10;
      }
    });

    return correctAnswerCount;
  } catch(error){
    console.log(`Error Message : ${error}, Date : ${new Date()}`);
    throw error;
  }
}