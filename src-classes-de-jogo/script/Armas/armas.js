class Armas {
  constructor(material, tier, classe) {
    this.material = material
    this.tier = tier
    this.classe = classe
  }

  verificarClasse () {
  
  }
  equip() {
  
  }
  
  unequip() {
  
  }

  dano() {
    // this.heroi // Identifica o herói
    return this.ataque
  }
  atacar() {
    console.log(`${this.nome} realizou um ataque do tipo fisico causando ${dano()} de dano`)
  }
}

module.exports = { Armas }
