// 코드 잘 때 어떤 상태들을 미리 변수 또는 객체로 설정해 놓고 그림을 그려본다
// points
// questions
// right answer
let myPoints;

function random255() {
  return Math.floor(Math.random() * 256)
}

function randomColor() {
  return `rgb(${random255()}, ${random255()}, ${random255()})`
}
document.querySelectorAll('.box').forEach(el => {
  el.style.backgroundColor = randomColor();
})

let stage = 0;
let problem = [randomColor(), randomColor(), randomColor()]
let correctAnwser = 0