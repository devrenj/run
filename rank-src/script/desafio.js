let p1 = {
  nome: 'Matheus',
  nivel: 22,
  genero: 'm',
};

let p2 = {
  nome: 'Beto',
  nivel: 40,
  genero: 'm',
  mensagem: 'Espero que goste desse código rsrs',
};

let p3 = {
  nome: 'Heverton',
  nivel: 22,
  genero: 'm',
};

let p4 = {
  nome: 'Beatriz',
  nivel: 60,
  genero: 'f',
};

let p5 = {
  nome: 'Urban',
  nivel: 1,
  genero: 'm',
  mensagem: `Comecei a jogar hj`,
};

let p6 = {
  nome: 'Paulinha',
  nivel: 37,
  genero: 'f',
  mensagem: `Ei amigos, vamos caçar?`,
};

function mostrarRank(jogador) {
  let rank;
  let nivel = jogador.nivel;

  if (nivel < 10) {
    rank = 'noob';
  } else if (nivel >= 10 && nivel < 15) {
    rank = 'madeira';
  } else if (nivel >= 15 && nivel < 20) {
    rank = 'ferro';
  } else if (nivel >= 20 && nivel < 30) {
    rank = 'prata';
  } else if (nivel >= 30 && nivel < 40) {
    rank = 'ouro';
  } else if (nivel >= 40) {
    rank = 'esmeralda';
  } else {
    rank = 'indefinido';
  }

  console.log(
    `${jogador.genero == 'm' ? 'O jogador' : 'A jogadora'} ${
      jogador.nome
    }[${jogador.nivel}] está no rank ${rank}`
  );
  if (jogador.hasOwnProperty('mensagem')) {
    console.log(`
    [${jogador.nome} diz: ${jogador.mensagem}]
    `);
  }
}

mostrarRank(p1);
mostrarRank(p2);
mostrarRank(p3);
mostrarRank(p4);
mostrarRank(p5);
mostrarRank(p6);