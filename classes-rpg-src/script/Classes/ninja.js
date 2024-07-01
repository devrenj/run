const { Personagem } = require('../personagem')

class Ninja extends Personagem {

  constructor(nome, nivel, sexo, arma) {
    super(nome, nivel, sexo)
    this.classe = 'Ninja'
    this.arma = arma
    this.generoClasse() // Determina o genero na criação
    this.stats = {vida : 500, velocidade : 25}
  }
    
}

module.exports = { Ninja }