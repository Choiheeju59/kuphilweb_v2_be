import express from "express";
import cors from "cors";
import morgan from "morgan";
import archiveRouter from './router/archive.js';
import tipRouter from './router/tip.js';
import historyRouter from './router/history.js';
import gamecenterRouter from './router/gamecenter.js';
import restaurantRouter from './router/restaurant.js';
import worldcupRouter from './router/worldcup.js';
import examRouter from './router/exam.js';
import testRouter from './router/test.js';
import quizRouter from './router/quiz.js';
import adminRouter from './router/admin.js';

const app = express();
app.use(express.json());

var corsOptions = {
  origin: function (origin, callback) {
    var allowedOrigins = [process.env.ORIGIN_1, process.env.ORIGIN_2];
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};


app.use(cors(corsOptions));
app.use(morgan("tiny"));

// 사용할 라우터 호출 메서드
app.use('/api/v1/archive', archiveRouter);
app.use('/api/v1/tip', tipRouter);
app.use('/api/v1/history', historyRouter);
app.use('/api/v1/etc/gamecenter', gamecenterRouter);
app.use('/api/v1/etc/restaurant', restaurantRouter);
app.use('/api/v1/etc/worldcup', worldcupRouter);
app.use('/api/v1/etc/exam', examRouter);
app.use('/api/v1/etc/test', testRouter);
app.use('/api/v1/etc/quiz', quizRouter);
app.use('/api/v1/admin', adminRouter);

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


const PORT = process.env.SERVER_PORT || 8888;
const HOST = process.env.SERVER_HOST || 'localhost';
app.listen(PORT, HOST, () => {
  console.log(`${HOST} 서버가 ${PORT}번 포트에서 실행 중입니다.`);
});