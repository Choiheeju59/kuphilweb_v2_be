import db from '../db/database.js';
import bcrypt from 'bcrypt';


export async function getLoginCheckByPassword(password){
    return db
        .execute(
            `SELECT password FROM admin WHERE id = 1`
        )
        .then((result) => verifyPassword(password, result[0][0].password))
        .catch((error) => 
            console.log(`Error Message : ${error}, Date: ${new Date()}`)
        );

}

async function verifyPassword(inputPassword, storedHash) {
    try {
      const match = await bcrypt.compare(inputPassword, storedHash);
      if(match) {
        console.log('비밀번호가 일치합니다.');
        return storedHash;
      } else {
        console.log('비밀번호가 일치하지 않습니다.');
        return null;
      }
    } catch (error) {
      console.error(error);
    }
}

export async function getAuthenticatedCheckByToken(token){
  return db
    .execute(
      `SELECT * FROM admin WHERE password = "${token}";`
    )
    .then((result) => {
      if(result[0].length > 0){
        return true;
      } else return false;
    })
    .catch((error) => 
      console.log(`Error Message : ${error}, Date : ${new Date()}`)
    );
}