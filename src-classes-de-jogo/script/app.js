const { Guerreiro } = require('./Classes/guerreiro');
const { Ninja } = require('./Classes/ninja');
const { Monge } = require('./Classes/monge');
const { Feiticeiro } = require('./Classes/feiticeiro');
const { Espada } = require('./Armas/Espadas/espadas');

const espada_de_treino = new Espada(
  'espada de treino',
  'madeira',
  'treino',
  'Guerreiro',
  'fisico',
  1,
  0
);

const monge1 = new Monge('Tayla', 20, 'm', 'artes marciais');
const feiticeiro1 = new Feiticeiro('Midnighter', 120, 'x', 'cajado');
const ninja1 = new Ninja('Mata Hari', 31, 'f', 'shuriken');
const guerreiro1 = new Guerreiro('Furiosa', 18, 'f', espada_de_treino);

ninja1.atacar();
feiticeiro1.atacar();
monge1.atacar();
guerreiro1.atacar();
