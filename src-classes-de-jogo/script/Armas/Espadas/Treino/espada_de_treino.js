const { Espadas } = require('../espadas')

class Espada_de_treino extends Espadas {
  constructor(nome, material, ) {
    super(nome, material, tier, classe, dano, ataque, defesa)
    this.nome = 'Espada de treino'
    this.material = 'madeira'
    this.tier = 'treino'
    this.classe = Guerreiro
    this.dano = 'fisico' //físico, mágico, 
    this.ataque = 1
    this.defesa = 1
  }

}

const espada1 = new Espada_de_treino()
espada1.atacar()

module.exports = { Espada_de_treino }