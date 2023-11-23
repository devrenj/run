const { Personagem } = require('../personagem')

class Monge extends Personagem {

  constructor(nome, nivel, sexo, arma) {
    super(nome, nivel, sexo)
    this.classe = 'Monge'
    this.arma = arma
    this.generoClasse() // Determina o genero na criação
    this.stats = {vida : 300, velocidade : 50}
  }
    
}

module.exports = { Monge }