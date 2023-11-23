const state = {
  view : {
    squares : document.querySelectorAll('.square'),
    enemy : document.querySelector('.enemy'),
    timeLeft : document.querySelector('#time-left'),
    score : document.querySelector('#score'),
    hit : document.querySelector('.hit'),
    lives : document.querySelector('#lives'),
  },
  values : {
    gameVelocity : 1000,
    hitPosition: 0,
    result: 0,
    currentTime : 60,
    playerLives : 3,
  },
  actions : {
    hitInterval :   setInterval(removeHit, 1000),
    timerId : null,
    countDownTimerId : setInterval(countDown, 1000),
  },
};

let scores = []

function gameOver() {
  let playerName = prompt('Fim de jogo! Digite seu nome')
  scores.push({playerName : state.values.result})
  console.log(scores)
}
function countDown() {
  state.values.currentTime--;
  state.view.timeLeft.textContent = state.values.currentTime;

  if (state.values.currentTime <= 0) {
    clearInterval(state.actions.countDownTimerId)
    clearInterval(state.actions.timerId)
    gameOver()
  }
}

function playSound(audioName) {
  let audio = new Audio(`../audio/${audioName}.ogg`)
  audio.volume = 0.2;
  audio.play();
}

function randomSquare(){
  state.view.squares.forEach((square) => {
    square.classList.remove('enemy');
  })
  
  let randomNumber = Math.floor(Math.random() * 9);
  let randomSquare = state.view.squares[randomNumber];
  randomSquare.classList.add('enemy');
  randomSquare.classList.remove('hit');
  state.values.hitPosition = randomSquare.id;
}

function removeHit () {
  state.view.squares.forEach((square) => {
    square.classList.remove('hit')
  })
}

function moveEnemy() {
  state.actions.timerId = setInterval(randomSquare, (state.values.gameVelocity - ((state.values.result + 1) * 10)))
}

function addListenerHitBox() {
  state.view.squares.forEach((square) => {
    square.addEventListener('mousedown', () =>{
      if (square.id === state.values.hitPosition){
        state.values.result++
        state.view.score.textContent = state.values.result
        state.values.hitPosition = null
        square.classList.remove('enemy')
        square.classList.add('hit')
        playSound('hit')
      } else {
        state.values.playerLives--
        playSound('hurt')
      }
    })  
  })
}

function init () {
  moveEnemy();
  addListenerHitBox()


}

init();