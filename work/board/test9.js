const mysql = require('mysql')
const obj = {
  connectionLimit: 100, //동접속자 수
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'test'
}
const pool = mysql.createPool(obj);
const sql = "SELECT id, name, email, tel FROM member"; //* 대신 이게 정석
const arr = [];

pool.getConnection((err, conn) => {
  if (err) { console.log('err', err); return; }

  conn.query(sql, arr, (err, rows) => { //여기는 rows 가 되야 한다.
    if (err) { console.log('err', err); return; }
    console.log('rows=', rows);
    conn.release();
  });
});

// release는 mug컵을 빌렸으면 반납하는 것. pooling