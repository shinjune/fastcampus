const mysql = require('mysql')
const obj = {
  connectionLimit: 100, //동접속자 수
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'test'
}

// 2행 - 8행이 json
// connectionLimit, host 같은게 key

const pool = mysql.createPool(obj);
const sql = "insert into member(id, name, email, tel) values(?, ?, ?, ?)";
const arr = ['hong', '홍길동', 'hong@a.com', '010-1234-5678']

pool.getConnection((err, conn) => {
  // console.log('conn', conn);
  if (err) { console.log('err', err); return; }

  conn.query(sql, arr, (err, row) => {
    if (err) { console.log('err', err); return; }
    console.log('저장 완료');
    conn.release();
  });
});

// release는 mug컵을 빌렸으면 반납하는 것. pooling