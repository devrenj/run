const heroes = [
  mostrarImagem('vi'),
  mostrarImagem('vi'),
  mostrarImagem('masteryi'),
  mostrarImagem('masteryi'),
  mostrarImagem('shyvana'),
  mostrarImagem('shyvana'),
  mostrarImagem('nasus'),
  mostrarImagem('nasus'),
  mostrarImagem('renekton'),
  mostrarImagem('renekton'),
  mostrarImagem('jinx'),
  mostrarImagem('jinx'),
  mostrarImagem('catarina'),
  mostrarImagem('catarina'),
  mostrarImagem('ashe'),
  mostrarImagem('ashe'),
];
let openCards = [];
let shuffleHeroes = heroes.sort(() => (Math.random() > 0.5 ? 2 : -1))

function mostrarImagem(heroi) {
  return `<img src="./jogo-da-memoria-src/images/${heroi}.png"/>`;
}



function handleClick() {
  if (openCards.length < 2) {
    this.classList.add('boxOpen');
    openCards.push(this);
  }

  if(openCards.length == 2) {
    setTimeout(checkMath, 500)
  }
}

function checkMath() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add('boxMatch');
    openCards[1].classList.add('boxMatch');
  } else {
    openCards[0].classList.remove('boxOpen');
    openCards[1].classList.remove('boxOpen');
  }
  openCards = [];

  if(document.querySelectorAll('.boxMatch').length === heroes.length) {
    alert('Você venceu!');
  }
}

(function init(){
  clearInterval(checkMath);
  for (let i = 0; i < heroes.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffleHeroes[i];
    box.onclick = handleClick;
    document.querySelector('.game').appendChild(box);
  }
})();