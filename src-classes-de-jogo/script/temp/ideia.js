class Guerreiro {
  tipo = {m: 'Guerreiro', f: 'Guerreira', x: 'Guerreirx'}
  arma = new Espada_de_treino
  ataque = 'fisico'
  fisico = 25
  magico = 0
  defesa = {fisica : 5, magica : 0}
  vida = 500
  velocidade = 25
  peso = 200
}

class Feiticeiro {
  tipo = { m: 'Feiticeiro', f: 'Feiticeira', x: 'feiticeirx' }
  arma = 'magia'
  ataque = 'magico'
  fisico = 0
  magico = 25
  defesa = {fisica : 0, magica : 5}
  vida = 200
  velocidade = 50
  peso = 50
}

class Ninja {
  tipo = 'Ninja'
  arma = 'shuriken'
  ataque = 'hibrido'
  fisico = 15
  magico = 10
  defesa = {fisica : 1, magica : 1}
  vida = 200
  velocidade = 100
  peso = 100
}

class monge {
  tipo = 'Monge'
  arma = 'artes marciais'
  ataque = 'hibrido'
  fisico = 20
  magico = 5
  defesa = {fisica : 2.5, magica : 2.5}
  vida = 300
  velocidade = 50
  peso = 100
}