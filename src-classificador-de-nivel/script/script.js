/**
* Desenvolvido por: Roberto Nóbrega Jr.
* Github @devrenj
*
* ESTE PROJETO NÃO É USADO PARA FINS COMERCIAIS
* APENAS PARA DESENVOLVIMENTO ACADÊMICO
* LICENSA MIT (c) 2023
* SUA REPRODUÇÃO É PERMITIDA DESDE QUE OBSERVADAS AS MESMAS DIRETRIZES
*
* Agradecimentos: Steph Hoel @stephoel
* Referências: MDN.com | W3Schools.com
**/


let mostrarNome = document.getElementById('nomeHeroi')
let mostrarNivel = document.getElementById('nivelHeroi')
let mostrarMensagemServidor = document.getElementById('mensagemServidor')
let xpJogador = document.getElementById('experiencia')
let nomeJogador = document.getElementById('nome')
let timeout


function limparTudo() {
  // xpJogador.value = ``;
  // nomeJogador.value = ``;
  mostrarNivel.innerHTML = ``;
  mostrarNome.innerHTML = ``;
  mostrarMensagemServidor.innerHTML = ``;
}

function limparDados(){
  mostrarNome.innerHTML = ``;
  mostrarNivel.innerHTML = ``;
  mostrarMensagemServidor.innerHTML = `` 
}


function calcularXp() {
  debugger
  const verificadorDeNumeros = /[^a-zA-ZÀ-ÿ\-\'\s]+/g; // RegExp
  let nome = nomeJogador.value
  let saldoXp = parseInt(xpJogador.value)
  stringNome = `${nomeJogador.value}`
  let nivel;

  function mostrarMensagem(){
      mostrarNome.innerHTML = `O Herói ${nome}`
      mostrarNivel.innerHTML = `Está atualmente no rank ${nivel}`
  }

  try {
  // Tratamentos de Exceção
  // Contribuição: @stephhoel
  if(verificadorDeNumeros.test(stringNome))
    throw `Nome deve ter apenas letras`
  if(stringNome.length >= 20)
    throw `Nome muito grande (max.20)`
  if(xpJogador == '' ^ nomeJogador == '')
    throw `Preencha todos os campos`
  if(saldoXp < 0)
    throw `Apenas números positivos são permitidos`
  if (isNaN(saldoXp))
    throw `Apenas números são permitidos`
    // Validações do Algoritmo (desafio)
  if (saldoXp > 1000)
    throw `Somente números entre 0-1000 são permitidos`
    if (saldoXp == 0){
      mostrarMensagemServidor.innerHTML = `Seja bem-vindo(a)!<br>Comece sua aventura hoje mesmo!`
    } else if (saldoXp >= 0 && saldoXp <= 10) {
      nivel = 'Ferro'
      mostrarMensagem()
    } else if (saldoXp >= 11 && saldoXp <= 20) {
    nivel = 'Bronze'
    mostrarMensagem()
    } else if (saldoXp >= 21 && saldoXp <= 50) {
      nivel = 'Prata'
      mostrarMensagem()
    } else if (saldoXp >= 51 && saldoXp <= 80) {
      nivel = 'Ouro'
      mostrarMensagem()
    } else if (saldoXp >= 81 && saldoXp <= 90) {
      nivel = 'Diamante'
      mostrarMensagem()
    } else if (saldoXp >= 91 && saldoXp <= 100){
      nivel = 'Lendário'
      mostrarMensagem()
    } else if (saldoXp >= 101 && saldoXp <= 999 ) {
      nivel = 'Imortal'
      mostrarMensagem()
      mostrarMensagemServidor.innerHTML = `[SERVIDOR] Parabéns! Você está concorrendo ao ranking mundial!`
    } else {
      nivel = 'BAN'
      mostrarMensagem()
      mostrarMensagemServidor.innerHTML = `[SERVIDOR] VOCÊ FOI BANIDO PERMANENTEMENTE POR HACK!`
    }
    timeout = setTimeout(limparDados, 10 * 1000)
  } catch (err) {
      mostrarMensagemServidor.innerHTML = `${err}`
     timeout = setTimeout(limparDados, 3 * 1000)
  }
}