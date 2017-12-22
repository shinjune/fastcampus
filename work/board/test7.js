const mysql = require('mysql')
const obj = {
  connectionLimit: 100, //동접속자 수
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'test'
}


const pool = mysql.createPool(obj);

const sql = "update member set name=?, email=?, tel=? where id=?";

const arr = ['홍길순', 'soon@a.com', '010-1111-2222', 'hong'];

pool.getConnection((err, conn) => {

  if (err) { console.log('err', err); return; }

  conn.query(sql, arr, (err, row) => {
    if (err) { console.log('err', err); return; }
    console.log('저장 완료');
    conn.release();
  });
});

// release는 mug컵을 빌렸으면 반납하는 것. pooling