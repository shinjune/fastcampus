var express = require('express');
// express의 index.js 파일을 불러와라
var router = express.Router();

const mysql = require('mysql')
  // mysql의 index.js 파일을 불러와라
const obj = {
  connectionLimit: 100, //동접속자 수
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'test'
}
const pool = mysql.createPool(obj);
// 2번째 단락은 mysql을 설정

/* localhost:3000/*/
router.get('/', function(req, res, next) {
  res.render('index', { "title": 'Express' });
});
// .ejs생략  {title: 'express'}는 json


/* localhost:3000/writeform*/
router.get('/writeform', function(req, res, next) {
  res.render('writeform', { title: '게시판 글쓰기' });
});


// http://localhost:3000/write : post방식
router.post('/write', (req, res, next) => {
  console.log('req.body=', req.body);
  // body 보내는 data의 url말고 데이터의 묶음을 숨겨서 보낸다-post방식 vs params params는 url의 data를 넣어서 보내는 방식
  // 아래.. 서버가 응답하는 것
  const writer = req.body.writer;
  const pwd = req.body.pwd;
  const subject = req.body.subject;
  const content = req.body.content;

  const sql = "insert into board (writer, pwd, subject, content) values(?, ?, ?, ?)";
  const arr = [writer, pwd, subject, content];

  pool.getConnection((err, conn) => {
    // console.log('conn', conn);
    // if (err) { console.log('err', err); return; } dos에서는 되는 방식이지만 웹에서는 죽음.
    // 바로 아래줄은 express를 사용해서에서 서버가 안 죽는 방법
    if (err) { return next(err) }

    conn.query(sql, arr, (err, row) => {
      if (err) { return next(err) }
      console.log('저장 완료');
      conn.release();
      res.send('ok');
    });
  });
});

// http://localhost:3000/list : get방식
router.get('/list', (req, res, next) => {
  // res.send('여기는 list입니다')
  pool.getConnection((err, conn) => {
    if (err) { return next(err) }
    const sql =
      `SELECT num, 
          subject,
          writer,
          DATE_FORMAT(regdate, '%Y-%c-%d %T') as regdate,
            hit FROM board order by num desc`
      // `는 back quote 이다
    const arr = [];
    conn.query(sql, arr, (err, rows) => {
      if (err) { return next(err) }
      console.log('rows=', rows);
      conn.release();
      let obj = {
        title: "게시판 리스트",
        rows: rows
      };
      // rows라는 key에 rows를 쏴준다
      // res.json(obj); 모바일 서버. json으로 쏴주는 것
      res.render('list', obj); //웹서버
    });
  });
});
// 첫번째 err라는 callback하는게 관행
// next는 내가 처리 안하고 다음으로 넘기겠다. next에서는 express가 받는다

router.get('/read/:num', (req, res, next) => {
  let num = req.params.num;
  console.log('num=', num);
  pool.getConnection((err, conn) => {
    if (err) { return next(err) }
    let update_sql = "update board set hit=hit + 1 where num=?";
    let arr = [num];

    conn.query(update_sql, arr, (err, result) => {
      if (err) { return next(err) }
      console.log('result=', result);
      let sql = "SELECT * FROM board WHERE num=?";
      conn.query(sql, arr, (err, rows) => {
        if (err) { return next(err) }
        console.log('rows=', rows);
        conn.release();
        let obj = {
          title: "게시판 글 읽기",
          row: rows[0]
        };
        res.render('read', obj)
      });
    });
  });
});
// 변수를 쓸 때는 :변수명 이렇게 쓴다

router.get('/updateform/:num', (req, res, next) => {
  let num = req.params.num;
  // 1.select => 보여준다 
  pool.getConnection((err, conn) => {
    if (err) { return next(err) }
    let sql = "select * from board where num=?";
    let arr = [num];
    conn.query(sql, arr, (err, rows) => {
      if (err) { return next(err) };
      console.log('rows=', rows);
      conn.release();
      let obj = {
        title: "게시판 수정",
        row: rows[0]
      }
      res.render('updateform', obj);
    })
  });
})

router.post('/update', (req, res, next) => {
  console.log('req.body=', req.body);
  const num = req.body.num; // writeform.ejs의 <input type="hidden" name="num에 정의한 값 받기
  const writer = req.body.writer;
  const pwd = req.body.pwd;
  const subject = req.body.subject;
  const content = req.body.content;
  pool.getConnection((err, conn) => {
    if (err) { return next(err) };
    const sql = "update board set writer=?, subject=?, content=? where num=? and pwd=?";
    const arr = [writer, subject, content, num, pwd];
    conn.query(sql, arr, (err, result) => {
      if (err) { return next(err) }
      console.log("resutl=", result);
      conn.release();
      if (result.affectedRows == 1) {
        res.redirect('/list') //리스트로 이동
      } else {
        res.send("<script>alert('비밀번호가 틀려서 되돌아 갑니다'); history.back()</script>")
          //dos창에서 affectedrows가 0이라고 나와서 if/else를 써준거다.
          //history.back은 백버튼
      }
    })
  })
})

router.get('/deleteform/:num', (req, res, next) => {
  let num = req.params.num;
  // 1.select => 보여준다 
  pool.getConnection((err, conn) => {
    if (err) { return next(err) }
    let sql = "select * from board where num=?";
    let arr = [num];
    conn.query(sql, arr, (err, rows) => {
      if (err) { return next(err) };
      console.log('rows=', rows);
      conn.release();
      let obj = {
        title: "게시판 삭제",
        row: rows[0]
      }
      res.render('deleteform', obj);
    })
  });
})


router.post('/delete', (req, res, next) => {
  console.log('req.body=', req.body);
  const num = req.body.num; // writeform.ejs의 <input type="hidden" name="num에 정의한 값 받기
  // const writer = req.body.writer;
  // const pwd = req.body.pwd;
  // const subject = req.body.subject;
  // const content = req.body.content; 어차피 num만 지울 거니까 이건 해줄 필요가 없다.
  pool.getConnection((err, conn) => {
    if (err) { return next(err) };
    const sql = "delete from board where num=?";
    const arr = [num];
    conn.query(sql, arr, (err, result) => {
      if (err) { return next(err) }
      console.log("result=", result);
      conn.release();
      if (result.affectedRows == 1) {
        // delete 성공했을 때는 result의 affectedRows를 전달하는데 맞으면 1 틀리면 0
        res.redirect('/list') //리스트로 이동
      } else {
        res.send("<script>alert('비밀번호가 틀려서 되돌아 갑니다'); history.back()</script>")
          //dos창에서 affectedrows가 0이라고 나와서 if/else를 써준거다.
          //history.back은 백버튼
      }
    })
  })
})


module.exports = router;