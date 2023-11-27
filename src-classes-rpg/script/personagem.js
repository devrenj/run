class Personagem {
  constructor(nome, nivel, sexo) {
    this.nome = nome;
    this.nivel = nivel;
    this.sexo = sexo;
  }

  atacar() {
    const genero = this.sexo === 'm' ? 'O' : this.sexo === 'x' ? 'X' : 'A';
    console.log(
      `${genero} ${this.classe} ${this.nome}[${this.nivel}] atacou usando ${this.arma.nome}`
    );
  }
  
  generoClasse() {
    if (this.sexo.toLowerCase() === 'm' && this.classe.hasOwnProperty('m')) {
      this.classe = this.classe.m;
    } else if (
      this.sexo.toLowerCase() === 'f' &&
      this.classe.hasOwnProperty('f')
    ) {
      this.classe = this.classe.f;
    } else if (
      this.sexo.toLowerCase() === 'x' &&
      this.classe.hasOwnProperty('x')
    ) {
      this.classe = this.classe.x;
    }
  }

}

module.exports = { Personagem };
