# Operating System history
Unix => Linux
server OS의 99%는 Linux


### SQL vs NoSQL
SQL : structured query language (개발자가 DB와 소통하는 명령어)
NoSQL : Non-relational SQL
[must read][https://aws.amazon.com/nosql/]

e.g. mongoDB


## Object Oriented Programming vs Functional Programming

In all programs, there are two primary components: the data (the stuff a program knows) and the behaviors (the stuff a program can do to/with that data). OOP says that bringing together data and its associated behavior in a single location (called an “object”) makes it easier to understand how a program works. FP says that data and behavior are distinctively different things and should be kept separate for clarity.

> When you anticipate a different kind of software evolution:

Object-oriented languages are good when you have "a fixed set of operations on things", and as your code evolves, you primarily add new things. This can be accomplished by adding new classes which implement existing methods, and the existing classes are left alone.
Functional languages are good when you have "a fixed set of things", and as your code evolves, you primarily add new operations on existing things. This can be accomplished by adding new functions which compute with existing data types, and the existing functions are left alone.

> When evolution goes the wrong way, you have problems:

Adding a new operation to an object-oriented program may require editing many class definitions to add a new method.
Adding a new kind of thing to a functional program may require editing many function definitions to add a new case.


problem of oop is 
성능 & 시간 

> why does functional programming solve multi-threads problems?
=> 불변  

### type
OOP : c++, java
Hybrid : javascript, Ruby, Python, Swfit
Functional : 


함수형에서 쓰는 것
const
let 
es6로 오면서 var 대신 let 사용 why var는 전역변수라서 여기저기서 고쳐질 수 있음


array
json

### compiler
A compiler is a special program that processes statements written in a particular programming language and turns them into machine language or "code" that a computer's processor uses. 


### request <=> response
client - server
ajax호출을 통해 json만 주고 받음 (예전에는 html을 다주고 받으면 느림)
cellphone에서 

### AJAX?
Asynchronous JavaScript And XML. AJAX is not a programming language.

AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.


### Synchronous transfer vs Asynchronous transfer

Synchronous

In synchronous data transfers, the sender and receiver take some time to communicate before they make the exchange. This communication outlines the parameters of the data exchange. 

Asynchronous

In asynchronous transfers, sender and receiver do not establish the parameters of the information exchange. Rather, the sender places extra bits of data before and after each burst that indicate when each burst begins and ends. It then sends the information, and it is up to the receiver to determine how to reset its clock to match the timing of the signal. Unlike synchronous transfers, the receiver does not take time to communicate to the sender information about what it received.

Benefits and Drawbacks

Asynchronous transfers are generally faster than synchronous transfers because they do not take up time prior to the transfer. However, more errors tend to occur in asynchronous transfers

### TCP/IP

## program vs process vs thread
> program
Program is an executable file containing the set of instructions written to perform a specific job on your computer.

> process 메모리 모드
Process is an executing instance of a program. 

> thread '하나의 프로세스'의 안에 있는 작은 작업 단위 
Thread is the smallest executable unit of a process.

### javascript는 single thread


### HTTP (Hypertext Transfer Protocol)

It is designed to enable communications between clients and servers. In general, the client always initiates the conversation; the server replies. HTTP is text based.





### REST 
> HTTP verbs(get, post, put, delete) tell the server what to do with the data identified by the URL.
get / url : select
post / url : insert, update, delete
put / url : update, insert
delete / url : delete

post : create 
put : update

get /users/id : select * from users where id=?

### Get - read
The simplest type of HTTP request method; click a link or type a URL into the address bar. Data should never be modified on the server side as a result of a GET request. "a GET request is read-only", but of course, once the client receives the data, it is free to do any operation with it on its own side.

get /users : select * from users
모든 users의 정보를 얻겠다 이런 뜻 (일종의 클릭)

### Post - creat
post /users : insert
post /users/ (입력이라고 이해)

### bit vs byte
1byte = 8bit

### NaN
NaN === NaN
false

결과값이 NaN인지 아닌지 확인하기 위해서는 아래를 사용
Number.isNaN(thisIsNan); // true
Object.is(thisIsNan, NaN); // true

###