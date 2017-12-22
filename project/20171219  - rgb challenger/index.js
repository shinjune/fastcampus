let stage;
let problem;
let correctAnwser;

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

function nextStage() {
  stage++;
  problem = [randomColor(), randomColor(), randomColor()]
  correctAnwser = Math.floor(Math.random() * 3)
}

function draw() {
  document.querySelectorAll('.box').forEach((el, index) => {
    el.style.backgroundColor = problem[index]
  })
  document.querySelector('.rgb-text').textContent = problem[correctAnwser]
  document.querySelector('.score').textContent = stage;
}

function init() {
  stage = 0;
  problem = [randomColor(), randomColor(), randomColor()]
  correctAnwser = Math.floor(Math.random() * 3)
}

document.querySelectorAll('.box').forEach((el, index) => {
  el.addEventListener('click', e => {
    if (index === correctAnwser) {
      // 다음 단계에 대한 상태로 넘어감
      nextStage();
      draw();
    } else {
      init()
      draw();
    }
  });
})

init()
draw()

//클릭이 일어났을 벌어지는 일. click은 박스 안에서 일어난다.