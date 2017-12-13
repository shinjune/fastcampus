console.log("hello");
console.log("world");
//  동기

setTimeout(() => console.log("world"), 1000);
console.log("hello");
// 비동기 1초 뒤에 world가 찍힌다