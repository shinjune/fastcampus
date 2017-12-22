var express = require('express');
var router = express.Router();

/* http://localhost:5000 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'nodejs' });
  // res.render ( A, B)   A는 ejs별명, B는 제이슨
  // var obj = { title : 'nodejs' };
  // res.render('index.ejs', obj);  이 두문장이 윗문장 하나랑 같은 것
});

//  get 방식으로 /를 요청했을 때


// 밑에는 http://localhost:5000/abc로 접속햇을 때 = router.get('/abc')
router.get('/abc', (req, res, next) => {
  res.send("여기는 /abc 입니다!");
});


module.exports = router;