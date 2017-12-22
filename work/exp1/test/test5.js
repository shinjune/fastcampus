let arr = [1, 2, 3, 4, 5]

let sum = arr.reduce((a, b) => a + b)

console.log(sum)

// reduce 계산법
// a   b 
// 1 + 2 = 3  3이 다시 앞으로
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15