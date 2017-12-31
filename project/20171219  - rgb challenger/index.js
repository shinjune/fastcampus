let stage;
let problem;
let correctAnswer;
let score;
// 코드 잘 때 어떤 상태들을 미리 변수 또는 객체로 설정해 놓고 그림을 그려본다

function random255() {
  return Math.floor(Math.random() * 256)
}

function randomColor() {
  return `rgb(${random255()}, ${random255()}, ${random255()})`
}

function nextStage() {
  stage++
  problem = [randomColor(), randomColor(), randomColor()]
  correctAnswer = Math.floor(Math.random() * 3)
}

function draw() {
  document.querySelectorAll('.box').forEach((el, index) => {
    el.style.backgroundColor = problem[index]
  })
  document.querySelector('.rgb-text').textContent = problem[correctAnswer]
  document.querySelector('.score').textContent = stage
  document.querySelector('.wrong-score').textContent = stage
}

function init() {
  stage = 0;
  problem = [randomColor(), randomColor(), randomColor()]
  correctAnswer = Math.floor(Math.random() * 3)
}

document.querySelectorAll('.box').forEach((el, index) => {
  el.addEventListener('click', e => {

    el.classList.add('show');
    if (index === correctAnswer) {
      // 다음 단계에 대한 상태로 넘어감
      // nextStage();
      // draw();
      document.querySelector('.correct').classList.add('show')
    } else {
      // init()
      // draw();
      document.querySelector('.wrong').classList.add('show')
    }
  });
})

document.querySelector('.correct .modal-button').addEventListener('click', e => {
  nextStage();
  draw();
  document.querySelector('.correct').classList.remove('show')
  document.querySelectorAll('.box').forEach(el => {
    el.classList.remove('show')
  })
})

document.querySelector('.wrong .modal-button').addEventListener('click', e => {
  init();
  draw();
  document.querySelector('.wrong').classList.remove('show')
  document.querySelectorAll('.box').forEach(el => {
    el.classList.remove('show')
  })
})


init()
draw()

//클릭이 일어났을 벌어지는 일. click은 박스 안에서 일어난다.