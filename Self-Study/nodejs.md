# Node.js

## how to setup

Node Express - a web application framework for Node.js
nodemon - Simple monitor script for use during development of a node.js app.
ejs - (jade가 default)

### NVM - node version manager
mac - brew install nvm

### NPM
NPM is a package manager for Node.js packages, or modules.


### command line

npm install -g nodemon 

### control C
npm install -g nodemon (node monitor의 약자)

nodemon server.js

listen으로 바꾼 다음 control c하면 listen으로 바뀜 (running)

control c 하면 나감

### frontend

m model  - data
v view   -화면
c controller  - 처리(제어)


## 정리

npm i -g express-generator

express --ejs 프로젝트명

app.js //3줄 추가

npm i mysql //mysql 이라는 패키지 설치

nodemon app.js

###

express --ejs exp1
express --ejs 프로젝트명

cd exp1 && npm install


### port 바꾸는 법
www folder에서 3000 = > 5000, 7000 으로 변경

### vontes   views
vontes  controller     index.js만 컨트롤 하면 됨
views   ejs

### 서버사이드 렌더링 
client side rendering, server side rendering
server side rendering 이 필요. brower가 읽기 위해서

### 
  console.log(`Server running at http://${hostname}:${port}/`);
  //   console.log("Server running at http://" + hostname + ":" + port); 같은 문장
  var는 ${}로 묶고 :그냥 쓰는 듯
  :를 뭐라고 하는지?


nodejs는 javascript를 서버로 집어넣기 위한 툴
기존에 많은 실패 있었음
but nodejs succeded. why? chrome's v8 engine is powerful

v8 was implemented in server side by ryan dahl
nodejs's performance depends on the performance of v8(google)



기계어(assembly) - C  -  C++ (절차적 코드 + 객체지향)  - Java(객체지향)로 발전


what is object oriented programming?
object : 인간이 사물을 인식하는 방법

object = 속성 + 행위 로 구성



##
work에서
express -ejs 프로젝트명    express에서 template은 ejs를 쓰고 프로젝트를 만들겠다.
cd 프로젝트명
npm install


### 정보를 유지하는 방법
get

post

cookie 
client server에 stored. not secured so don't restore password

session
stored in memory in server
key : value 형태로 저장
eg. id: hong


### pooling
connection이 되면 (mug잔) data를 다시 반납한다.
pooling이 100명이라고 지정되면 data(mug잔) 100개를 미리 만들어 놓고,
100명 이상이 들어오면 더 들어오지 못하게 하고 기다리게 한다.
> load balancing 개념


### logical modeling(한글) 후 physical modeling

logical modeling
게시판 테이블에 필요요소

테이블명
pk (primary key) :  글번호, 
일반 컬럼 : 제목, 내용, 글쓴이, 날짜, etc


테이블명
primary key
일반 컬럼

physical modeling

table : board
pk : number
일반컬럼 : title, contents, author, regdate, hit

숫자 - int   문자 - varchar   날짜 - datetime  


### 쿼리 생성
not null은 필수
default는 default 입력
default 0 은 default 0부터 시작



### maria db에서 table 완성 후 
node와 db를 연결하는 module을 설치해야 함

npm i mysql
 package.json에 mysql을 자동으로 넣어줌

 board에 test.js 만든 후 github의 introduction test코드 붙여넣기

  user: 'root',
  password: '1234',
  database: 'test'
  바꿔줌


heidi가서 query 하나 더 만들음

SELECT 1 + 1 AS solution를 cc cv

as solution이뭐냐?  as = alias solution



### aws

### s3
simple storage service : 외장하드

### rds
relational database service   mysql이 여기 포함



### aws 
ubuntu로 접속해서 최신 version update

>sudo apt-get update

nvm을 설치하자
>curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash

nvm 설치 후

ls는 목록 보기
>ls -al 은 숨김 파일까지 모두 보기


export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads    


> $ nano .bashrc   (이제부터 .bashrc라는 파일을 편집하겠다)


^x = control X (exit)

> source ~/.bashrc

> nvm

> nvm install 8.9.1

> node -v 설치됐는지 확인

> npm i -g express-generator

> mkdir projects

> cd projects

> express --ejs exp1

> cd exp1

> npm i 

> npm start

ip로 가면 안 열린다. hacking을 막기 위해 port가 닫혀있따.
이걸 aws가 풀어줘야 한다

security group 가서
inbound rules을 바꿔야 한다.
add rule 3000번 port   and  anywhere

http://13.124.173.60/3000

가니까 expresss빙고!

putty를 종료하고 ip로 가면 아무것도 없다.
서버가 죽으니

계속 돌리는 pm2를 사용해보자

>npm i -g pm2

>pm2  도움말이 보인다

>pm2

(exp1폴더에서)
>rm -r bin

(sudo는 root로 이동 super user)

>nano app.js

아래 부분에
app.listen(3000);
console.log("server started"); 를 추가

> control x 그 다음에 저장

> cat app.js  (cat은 변경된 내용을 보겠다)

> pm2 start app.js

putty를 꺼도 서버가 살아있다

> pm2 stop app 로 중지시켰다


### js 파일 영역
html에서 순수 js를 할 때는 body에 넣고
react or jquery는 head에 넣는다
속도를 위해서


### 동기 vs 비동기
동기는 위에서부터 순차적으로 data loading
비동기는 위에서부터 순차적으로 하되, 오른쪽으로 던지고 다시 밑으로
```
setTimeout(() => console.log("world"), 1000);
console.log("hello");
```


## Routing - Express

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

Basic routing code below
```
var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})
```
[express routing][http://expressjs.com/en/guide/routing.html]

>Each route can have one or more handler functions, which are executed when the route is matched.
Route definition takes the following structure:
```
app.METHOD(PATH, HANDLER)
```
1. app is an instance of express.
2. METHOD is an HTTP request method, in lowercase.
3. PATH is a path on the server.
4. HANDLER is the function executed when the route is matched.


## express method

### app.listen 
Starts a UNIX socket and listens for connections on the given path. identical to Node’s http.Server.listen().

### req.body
Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser and multer.