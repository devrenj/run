const { Guerreiro } = require('./Classes/guerreiro');
const { Ninja } = require('./Classes/ninja');
const { Monge } = require('./Classes/monge');
const { Feiticeiro } = require('./Classes/feiticeiro');
const { Espada } = require('./Armas/Espadas/espadas');

function criarItem(item) {
  const espada_de_treino = new item(
    'espada de treino',
  'madeira',
  'treino',
  'Guerreiro',
  'fisico',
  1,
  0
  );
}
// criarItem(Espada)

function criarHerois(variavel, classe, nome, level, genero, arma) {
  const variavel = new classe(nome, level, genero, arma);
  // const monge1 = new Monge('Tayla', 20, 'm', 'artes marciais');
  // const monge2 = new classe(nome, level, genero, arma)
  // const feiticeiro1 = new Feiticeiro('Midnighter', 120, 'x', 'cajado');
  // const ninja1 = new Ninja('Mata Hari', 31, 'f', 'shuriken');
  // const guerreiro1 = new Guerreiro('Furiosa', 18, 'f', espada_de_treino);
}
criarHerois(monge1, Monge, 'Tayla', 20, 'm', 'artes marciais');

function ataques() {
  ninja1.atacar();
  feiticeiro1.atacar();
  monge1.atacar();
  guerreiro1.atacar();
}

function init() {
  console.log('olá!');
}

init();