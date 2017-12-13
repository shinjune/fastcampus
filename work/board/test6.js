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

pool.getConnection((err, conn) => {
  // console.log('conn', conn);
  conn.query('select 1+1 as solution',
    (err, rows) => {
      console.log('rows=', rows);
      const a = rows[0];
      console.log('rows', a);
      console.log('rows.solution=', a.solution);
      conn.release();
    });
});

// release는 mug컵을 빌렸으면 반납하는 것. pooling