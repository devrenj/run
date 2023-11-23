const { Personagem } = require('../personagem')

class Guerreiro extends Personagem {

  constructor(nome, nivel, sexo, arma) {
    super(nome, nivel, sexo)
    this.classe = {m: 'Guerreiro', f: 'Guerreira', x: 'Guerreirx'}
    this.arma = arma
    this.generoClasse() // Determina o genero na criação
    this.stats = {vida : 500, velocidade : 25}
  }
    
}

module.exports = { Guerreiro }