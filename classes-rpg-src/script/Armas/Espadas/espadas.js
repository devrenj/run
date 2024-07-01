const { Armas } = require('../armas');

class Espada extends Armas {
  constructor(nome, material, tier, classe, dano, ataque, defesa) {
    super(material, tier, classe);
    this.nome = nome;
    this.dano = dano;
    this.ataque = ataque;
    this.defesa = defesa;
  }
}

module.exports = { Espada };
