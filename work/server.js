const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
// request response
// ((req, res) => {
// (function(req, res){ 같은 표현
//  ( 입력 ) => { 출력 }
// 200 : okay   404: not found    500 : 에러

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  //   console.log("Server running at http://" + hostname + ":" + port); 같은 문장
  // ` back quote
});