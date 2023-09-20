import express from "express";
import cors from "cors";
import morgan from "morgan";
import archiveRouter from './router/archive.js';
import tipRouter from './router/tip.js';
import historyRouter from './router/history.js';


const app = express();


var corsOptions = {
  origin: "*/"
};

app.use(cors(corsOptions));
app.use(morgan("tiny"));

//404 에러처리
app.use((error, req, res, next) => {
  const err = new Error("NOT FOUND");
  err.status = 404;
  next(err);
});

//500 에러처리 미들웨어
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error');
});


// 사용할 라우터 호출 메서드
app.use('/api/v1/archive', archiveRouter);
app.use('/api/v1/tip', tipRouter);
app.use('/api/v1/history', historyRouter);

const PORT = process.env.SERVER_PORT || 8888;
const HOST = process.env.SERVER_HOST || 'localhost';
app.listen(PORT, HOST, () => {
  console.log(`${HOST} 서버가 ${PORT}번 포트에서 실행 중입니다.`);
});
