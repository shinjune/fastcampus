# javaScript

## DOM Tree
document object model

When a web page is loaded, the browser creates a Document Object Model of the page.



## Object
In JavaScript, objects are king. If you understand objects, you understand JavaScript.
In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects

### primitives

A primitive value is a value that has no properties or methods.
A primitive data type is data that has a primitive value.

JavaScript defines 5 types of primitive data types:

string
number
boolean
null
undefined

They are immutable

### method
Methods are 'ACTIONS' that can be performed on objects.

### Creating a JavaScript Object
With JavaScript, you can define and create your own objects.

There are different ways to create new objects:

> Define and create a single object, using an object literal.
> Define and create a single object, with the keyword new.
> Define an object constructor, and then create objects of the constructed type.

>> 1. Using an Object Literal
The easiest way to create a JavaScript Object.
An object literal is a list of name:value pairs (like age:50) inside curly braces {}.

>> 2. Using the JavaScript Keyword new





### picturefill.js
IE11에서 HTML picture element가 제공되지 않는 것을 해결하기 위해 사용


### JSON
JSON: JavaScript Object Notation.
 > JSON is a syntax for storing and exchanging data.
 > Exchanging Data
When exchanging data between a browser and a server, the data can only be text. JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server. We can also convert any JSON received from the server into JavaScript objects. This way we can work with the data as JavaScript objects, with no complicated parsing and translations.

const obj = {
  connectionLimit: 100, //동접속자 수
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'test'
}

### XML
XML is a software- and hardware-independent tool for storing and transporting data.
XML is a markup language much like HTML



## method

push()

map(), filter(), reduce() 매우 중요 복습

### reduce
The reduce() method reduces the array to a single value and executes a provided function for each value of the array (from left-to-right).

The return value of the function is stored in an accumulator (result/total).

### + operator
- JavaScript uses the + operator for both addition and concatenation.
먼저 나온 값부터 처리한다.


## Number
++a vs a++ 차이

### 연산자 우선순위 (Operator Precedence)


### scope

const five = 5;
function add5(x) {
  return x + five; // 바깥 스코프의 `five` 변수에 접근
}
add5(3); // 8
five는 바깥쪽의 five변수에 접근



function add(x, y) { // 식별자 `x`와 `y`가 정의됨
  return x + y;
}
add(2, 3);
console.log(x); // 에러!



### while
let i = 0; // 초기값

while (i < 5) {
  // 위 괄호의 값이 `true`인 동안에는
  // 이 안쪽의 코드를 반복해서 실행시킵니다.
  console.log(`현재 i의 값: ${i}`);
  i++; // 갱신
}

console.log('루프가 종료되었습니다.');

### continue

for (let i=1; i<100; i++) {
  if (i%5 !== 3) {
    continue
  }
  console.log(`i am ${i}`)
}


### template literals

 console.log(`현재 i의 값: ${i}`);
 
Template literals are enclosed by the back-tick (` `)  (grave accent) character instead of double or single quotes. Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}).

### NaN check, infinity check

const thisIsNan = NaN;

number.isNaN(thisIsNan); //true
object.is(thisIsNan, NaN); // true

Number.isFinite('1'); // false


### slice와 splice 차이

slice : index의 값 사이에서 추출한다고 이해
str.slice(beginIndex[, endIndex])


```js
const str = 'bingomani'
str.slice(2,3) // 2번째 index인 'i'에서 시작해서 3번째 index인 'n'사이 끝내서 그 값을 추출한다.
//결과값은 n

```

splice : start의 index값을 잘라낸다고 이해
array.splice(start, deleteCount)



### split
'hello'.split();
Array.from('hello);
[...'hello']

above 3 are equal

### splice
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 3); // [2, 3, 4]
console.log(arr); // [ 1, 5]

cut 3 values from no.1
original value를 바꾼다.
arr로 확인

### const
const는 이 값이 바뀌는 것을 막아주는게 아니라 '재대입'을 금지하는거다. 

const arr = [1, 2, 3, 4, 5];
arr.splice(1, 3); // [2, 3, 4]
console.log(arr); // [ 1, 5]

arr 값이 바뀌었다!


### array length

let arr = [1, 2, 3]

for (let i = 0; i < arr.length; i++){
  console.log(arr[i])
}

===

for (let item of arr) {
  console.log(item);
}


### toString


### filter
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

### Object 

const person = {}; // 빈 객체

// 점 표기법 (Dot notation)
person.name = '윤아준';
person.age = 19;   //person객체에 age라는 속성을 만들어서 19라는 밸류를 넣어준다
person.languages = ['Korean', 'English'];


## Need to check
```js
const obj = {
  name: 1,
  b: 2
}

const propName = 'a'

console.log(obj.name) //1
console.log(obj['name']) //1 조합해서 쓸 경우에 [''] 편하다
console.log(obj[a]) // const a = 'a'가 있는 경우와 비교. a라는 변수의 값을 속성의 이름으로 불러온다
console.log(obj[propName])
console.log(obj['propName']) // 'propName'이 key값으로 있는지 check undefined  
```

```js
const person = {
  name: '윤아준',
  age: 19,
  languages: ['Korean', 'English']
};

// 속성 읽기
// console.log(person.name); 
// console.log(person.['name']) 
// console.log(person.age); 
// console.log(person.languages[0]) 

// // 속성 쓰기
// person.name = '신하경';
// person.age = 20;

// // 새 속성 추가하기
// person.address = '서울특별시 강남구 신사동';

// // 속성 삭제하기
// delete person.address;

// // 속성이 객체에 존재하는지 확인하기
// 'name' in person; // true
// 'phoneNumber' in person; // false

```

# Javascript 기초
## Object
객체를 생성하는 3가지 방법
1. Object.create()
2. object literal
3. new keyword

### property
a property is an association between a name (or key) and a value.
A property's value can be a function, in which case the property is known as a method

### Method
A method is a 'function' which is a property of an object. 
- Instance Methods which are built-in tasks performed by an object instance
- Static Methods which are tasks that can be performed without the need of an object instance.

```js
const person = {
  greet: function() {
    return 'hello';
  }
};

person.greet(); // 'hello';
```
greet라는 속성에 함수가 '값'으로 들어있다

person.greet 의 값은?


###this

this 키워드를 사용하면, '메소드 호출 시에 해당 메소드를 갖고 있는 객체에 접근' 할 수 있습니다.

메소드를 사용하면, 데이터와, 그 데이터와 관련된 동작을 객체라는 하나의 단위로 묶어서 다룰 수 있다.

function introduce() {
  return `안녕하세요, 제 이름은 ${this.name}입니다.`;
}

const person1 = {
  name: '윤아준',
  introduce
};

const person2 = {
  name: '신하경',
  introduce: introduce //  위의 introduce와 same 문장
};

person1.introduce(); // 안녕하세요, 제 이름은 운아준입니다.
person2.introduce(); // 안녕하세요, 제 이름은 신하경입니다.

객체에 .을 찍어서 정의되는 함수가 method
this는 상황에 따라서 다른 객체를 가르킬 수 있음


### prototype
> the properties and methods are defined on the prototype property on the Objects' constructor functions, not the object instances themselves.
> 어떤 객체에 프로토타입을 지정하면, 프로토타입의 속성을 해당 객체에서 재사용할 수 있다.

function personFactory(name) {
  return {
    name,
    introduce: function() {
      return `안녕하세요, 제 이름은 ${this.name}입니다.`;
    }
  };
}
이렇게 하면 personFactory를 만들 때마다 안의 내용물 =introduce 가 같아도(실제로는 갖지 않다) 새로운 객체를 만든다
(객체는 'container'이기 때문에 같은게 없다. 모두 새로운 것)

이를 해결하기 위해 prototype


```js
const sharedMethods = {
  introduce: function() {
    return `안녕하세요, 제 이름은 ${this.name}입니다.`;
  }
};
// 윗 부분이 prototype = 객체

const person1 = Object.create(sharedMethods); // 새 객체를 생성하고 프로토타입을 지정함
person1.name = '윤아준';

const person2 = Object.create(sharedMethods);
person2.name = '신하경';

person1.introduce(); // 안녕하세요, 제 이름은 윤아준입니다.
person2.introduce(); // 안녕하세요, 제 이름은 신하경입니다.

person1.introduce === person2.introduce; // true
```

   Object.getPrototypeOf(person2) === sharedMethods
를 repl에서 실행하면 true가 나옴


```js
const parent = {
  familyName: '윤'
};
const child = Object.create(parent);

Object.getPrototypeOf(child) === parent; // true

const newParent = {
  familyName: '신'
};
Object.setPrototypeOf(child, newParent);
Object.getPrototypeOf(child) === parent; // false
console.log(child.familyName); // 신
```


### 25번
// 생성자 정의
function Person(name) {
  console.log('hello')
  console.log(this);
  this.name = name;
  console.log(this)
}

// 생성자를 통한 객체 생성
const person1 = new Person('윤아준');


### constructor (생성자)

객체를 만들 때, new 키워드와 함께 사용하는 함수를 생성자(constructor)

feature
1. 중복을 없앤다.
2. 생성자 = 객체를 만드는 역할을 하는 함수

//생성자 정의
function Person(name) {

  this.name = name;
}

Person.prototype.introduce = function() {
  return ' my name is ${this.name}   '
}

Person.prototype.getOlder = function() {
  this.age++;;
}

// 생성자를 통한 객체 생성
const person1 = new Person('윤아준');


```js
function Person() {}

var p1 = new Person ();
p1.name = 'james'
p1.introduce = function() {
  return `my name is ${this.name}`
}

var p2 = new Person ();
p1.name = 'kevin'
p1.introduce = function() {
  return `my name is ${this.name}`
}

위 코드를 constructor를 사용하여 중복 제거

function Person(name) {
  this.name = name;
  this.introduce = function() {
    return `my name is ${this.name}`
  }
}

var p1 = new Person('James');

var p2 = new Person('Kevin')
```
### instance
생성자를 통해 생성된 객체를 그 생성자의 인스턴스(instance)
```js
// 생성자 정의
function Person(name) {
  this.name = name;
}
// 생성자를 통한 객체 생성
const person1 = new Person('윤아준');
```
person1은 Person의 instance

### module bundler
- [webpack][https://webpack.js.org]

chrome의 inspect를 봐도 css나 html위치가 module burdler의 위치만 나오므로 
debugging 단점이 있다.
> 'source map'을 통해서 어떤 파일에서 왔는지 기록을 해준다.
source map setting이 중요하다.

20171212 project의 webpack - development.js의 
>>>  devtool: 'cheap-module-source-map',
요게 소스맵 setting 해주는 것

recently, parcel, rollup, fusebox, brunch 라는 것들이 인기

### transfiler


### debugger





## Arary

### array 생성하기
new Array(1); // [empty]
new Array(1000); // [empty × 1000]
Array.of(1)

### 다른 객체로부터 배열 생성하기
Array.from('hello'); // ["h", "e", "l", "l", "o"]


### 요소 수정하기

#### filter
arr.fill(value[, start[, end]])

### every() some()

const arr = ['one', 'two', 'three']

let flag = true;
for (let item of arr) {
  flag = flag && (item.length > 2)
}
flag;

위는 every랑 똑같다
every는 predicate을 인자로 받아서, 모든 요소가 조건을 만족하는 지를 검사합니다.

const arr = ['one', 'two', 'three'];

arr.every(item => item.length > 2); // true


some은 predicate을 인자로 받아서, 조건을 만족하는 요소가 하나라도 있는지 검사합니다.
const arr = ['one', 'two', 'three'];

arr.some('one'); // true
arr.some('one', 1); // false

### sort
arr.sort((x,Y) => a-b) ascending order
arr.sort((x,y) => b-a) decending order


### for each method

function forEach(arr, func) {
  for (let item of arr) {
    func(item)
  }
}

forEach method는 arg가 3개 넘어온다

const arr = [1, 2, 3];
arr.forEach((item, index, array) => {
  console.log(`현재 ${index + 1}번째 요소에 대해 함수가 실행되고 있습니다.`);
})



### array.prototype.slice

const obj = {
  x = 1,
  y = 2
}
라고 할 때 js는 {x=1, y=2}를 저장하는게 어디에 있는지를 저장한다. (참조reference한다라고 표현)
실제 데이터 {x=1, y=2}는 다른 공간에 저장된다. (힙heap에 저장)
heap에 저장된 data를 바꾸려면 obj.x 이런식으로 변경, 수정해야함
(slice example ) - deep copy, shallow copy 


const obj1 = {x:1, y:1}
const obj2 = {x:1, y:1}
obj1 === obj2 // false

const obj3 = obj1
obj1 === obj3 // true



#### map 
새로운 배열을 반환

reduce로 map
const arr  = ['one', 'two']

function map(arr, func) {
  return arr.reduce((acc, item) => {
    acc.push(func(item))
    return acc
  }, [])
  
}

### filter 
원하는 요소만을 골라내어 새로운 배열. filter 메소드에는 진리값(boolean)을 반환하는 함수를 주어야 합니다. 진리값을 반환하는 함수 = predicate


filter by reduce
const arr = ['one', 'two', 'three']

function filter(arr, func) {
  return arr.reduce((acc, item) => {
    if (func(item)) {
      acc.push(item)
    } 
  return acc;
  }
  , [])
}

### every reduce

function every(arr, func) {
  return arr.reduce((acc, item) => {
    return acc && func(item);
  }, true);
}

### some reduce

function some(arr, func) {
  return arr.reduce((acc, item) => {
    return acc || func(item)
  }, false);
}


### 문자열
'hello'[0]; // 'h'
'hello'.slice(2, 4); // 'll'
for (let c of 'hello') {
  console.log(c);
}

'hello' 문자열은 객체가 아닌데 method가 된다



# Javascript 심화1

## 값 더 알아보기

### block scope
if, for, while, function 등의 구문을 사용하면 블록이 형성. 그 안에서 let 또는 const를 통해 선언된 변수는 외부에서 접근할 수 없다.

### let var
```js
for (let i = 0; i < 3; i++) {
  console.log('outer');
  // 위아래 두 `i` 변수는 같은 함수 스코프에서 정의된 같은 변수입니다.
  // 바깥쪽 루프를 한 번 도는 동안, 안쪽 루프를 도느라 이미 `i`의 값이 3이 되어버렸습니다.
  for (let i = 0; i < 3; i++) {
    console.log('inner');
  }
}
```
let은 변수가리기가 이뤄진다 (둘다 var로 실행해볼 것)
안쪽i는 아무리 똑같은 i를 선언해도 바깥쪽의 i에 접근할 수 없다. = 변수가리기

### hoisting
```js
console.log(foo); // undefined
var foo = 1;
// var foo는 hoisting되서 console.log(foo)가 undefined가 된다. erro가 안 뜨고

function func() {
  console.log(bar); // undefined
  var bar = 1;
}

func();
```

### global scope
변수를 명시적으로 전역 스코프에서 선언하지 않더라도, 한 번도 선언되지 않은 이름으로 안쪽 스코프에서 let, const, var를 붙여주지 않고 변수를 선언하면 전역 스코프에 변수가 생성된다.
그러므로 be cautious - maintenance risk, coupling

```js
function func() {
  variable = 1
}

func();
console.log(variable)



function func() {
  let variable = 1
}

func();
console.log(variable)
```

### 불변성 (Immutability)

원시 타입의 값 자체의 내용을 변경할 수 있는 방법은 없습니다. 

문자열을 변형하는 메소드는 모두 기존 문자열의 내용을 바꾸는 것이 아니라 새 문자열을 반환합니다.

> 객체의 경우를 생각해보면, 객체 자체의 내용을 변경할 수 있는 방법이 얼마든지 많이 있습니다. 따라서 객체는 가변(mutable)입니다.

가변인 값은 어디서 어떻게 변경될 지 알 수 없습니다. 변경되지 말아야 할 객체가 있다면, 정말로 변경되지 않도록 신경 써서 코드를 작성해야 합니다. 그러나 객체가 정말로 변경되지 않았는지를 확인하는 일은 쉽지 않아서, 때때로 객체의 가변성 때문에 프로그래밍이 어려워지기도 합니다. e.g. npm - deepequal is possible, but tricky

>> Solution
1. Object.freeze(obj) 객체를 얼려서 속성의 추가/변경/삭제를 막습니다.
2. Immutable.js made by FB


## this 가리기

bind,call 

```js
function func(arg1, arg2) {
  console.log(this.name, arg1, arg2) 
}

func.call({name: 'mary'}, 1,2)
func.apply({name: 'mary'}, [1,2])
```




###
```js
function sum(...ns) {
  // `for...of` 루프 대신에 `reduce` 메소드를 사용해서 합계를 구할 수 있습니다.
  return ns.reduce((acc, item) => acc + item, 0);
}

sum(1, 2, 3, 4); // 10
```
...ns라는 '배열'에 저장된다


### arrow와 function 함수 차이점 설명  - this의 전역객체성
```js
function Person(name) {
  this.name = name;
  this.getName = function () {
    return this.name
  }
}
위에 this는 this.name을 indicating하기 위해 쓰였는데 '반드시' 그렇지만은 않을 수 있다.

const mary = new Person('mary')
mary.getName()

const getName = mary.getName
getName()
```
new Array(3).fill(0).map(getName) //mary가 나오지 않고 '' 나옴

```js
this.getName = () => {
  return this.name
}
``` 
이렇게 바꾸고 'new Array(3).fill(0).map(getName) 실행해볼 것

##
function사용시 함수가 어떻게 호출되는지에 따라서 this가 결정(e.g. apply, call)
arrow 함수는 화살표가 어디서 호출(생성)되는지에 따라 this가 결정
##

화살표함수는 생성자로 사용될 수 없다. 



## 객체 더 알아보기
### 객체 자신의 속성 (Own Property) - important
check enumerable property & onw property



```js
// 객체 `obj`는 프로토타입의 `inheritedProp` 속성을 상속받습니다.
const obj = Object.create({inheritedProp: 'inheritedProp'});
// 객체 `obj`에 직접 `ownProp` 속성을 만들어주었습니다.
obj.ownProp = 'ownProp';

console.log(obj.inheritedProp); // inheritedProp
console.log(obj.ownProp); // ownProp
console.log(obj.constructor); // [Function: Object] Object.prototpye에 constructor가 들어있다.

console.log('inheritedProp' in obj); // true
console.log('ownProp' in obj); // true
console.log('constructor' in obj); // true
```


### 접근자 속성(Accessor Property)과 그 부수속성
```js
const obj = {
  get prop() {
    console.log('read prop')
    return 1;
  },
  set prop(arg) {
    console.log(`write prop: ${arg}`)
  }
}
```

```js
function Money(won) {
  this._won = won;
}
//to conceal won, use _

Object.defineProperties(Money.prototype, {
  won: {
    get: function() {
      console.log('get won')
      return this._won;
    },
    set: function(arg) {
      console.log('set won')
      this._won = arg;
    }
  },
  dollar: {
    get: function() {
      console.log('get won')
      return this._won / 1086;
    },
    set: function(arg) {
      console.log('set won')
      this._won = arg * 1086;
    }
  }
});

const w = new Money(1086);

w.won += 1086;
console.log(w.dollar); // 2

w.dollar += 1;
console.log(w.won); // 3258
```


### 얕은 복사(Shallow Copy) & 깊은 복사(Deep Copy)  - important

often used
const obj = {
  a: 1,
  b: 2
};

// 빈 객체를 대상으로 `Object.assign`을 사용하면, 객체를 간단히 복제할 수 있습니다.
const obj2 = Object.assign({}, obj);
console.log(obj2); // { a: 1, b: 2 }


## 연산자 더 알아보기

### circuit evaluation
&& 연산자와 || 연산자의 실제 동작 방식은 다음과 같습니다.

&& - 왼쪽 피연산자를 평가해서 falsy이면 이 값을 바로 반환합니다. 아니라면 오른쪽 피연산자를 평가한 결과값을 반환합니다.
|| - 왼쪽 피연산자를 평가해서 truthy이면 이 값을 바로 반환합니다. 아니라면 오른쪽 피연산자를 평가한 결과값을 반환합니다.
왼쪽부터 본다

### Ternary operator
a ? b : c
if a is truthy(falsy), return b(c)

```js
let i = 3;
while (i--) {
  console.log('감소 연산자를 뒤에 쓰면 어떻게 될까요?');
}
```
> ends at 0 because 0 is falsy



let x = 1, y = 1, z= 1;
z += y += x += 1 
할당연산자는 오른쪽부터 계산


const result = {
  a ? b : 
  c ? d : 
  e ? f : g
}
if a true, return b
else c is true return d
else e is true return f

## 함수형 프로그래밍

### closure
 바깥 스코프에 있는 변수를 가져다 사용하는 함수와, 변수가 저장되는 저장소를 클로저(closure)라고 부릅니다.
바깥쪽에 있는 것을 갖고 와서 함수로 되어 있어서 바꿀 수가 없다(접근할 수가 없다) 객체로 되어 있으면 갖고 오겠지... 그래서 바꾸지 못하니까 closure : closing해서 closure

function makeAdder(x) {
  return function (y) {
    return x + y
  }
}
호출하려면 인자를 2번 넣어줘야 한다

function makeAdder(x) {
  return y => x + y
  } //same as above

const add2 = makeAdder(2)

add2(3)
//makeAdder(2)(3) 이 된다0

###화살표 함수와 고차함수
const makeAdder = x => y => x + y;
(makeAdder는 x라는 인자를 받아서 함수(=y라는 인자를 받아서 x+y를 실행시키는 함수)를 실행시키는 함수)

### 재귀함수 Recursive Function
// 재귀 함수로 구현된 팩토리얼
function factorialRec(n) {
  return n <= 1 ? 1 : n * factorialRec(n - 1);
}
4 * f(3) * 3 * f(2) * 2* f(1) 이렇게 연쇄적으로 계산되며 f(1)값이 나오면
다시 f(1)부터 값이 들어가면서 24가 반환




객체 더 알아보기
const obj = {a}
const obj = {a:a}
same

const a=1
const b=2
const obj = {a,b}
same

const {a, b} = {a:1, b:2}
const {a:a, b:b} = {a:1, b:2}
same

const person = {name: 1, phone:2}
const {name: phone} = person
이런식으로 많이 쓴다



const {a: prop1} = {a: 1};
const {a, b: {c}} = {a:1, b: {c:2}}
b는 없다

분해대입은 위치가 중요. 같은 위치에 있는 값을 불러온다



### set
Array.from(new Set('asdfasdf')).join('')





###
Jekyll
Hexo
above two are static web


https://github.com/fds7/fds-handouts/blob/master/dom.md