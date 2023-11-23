// fetch(url).then(function (response) {
//  console.log(response)
//}) // Requisição da URL, o Fetch nos retorna uma Promise (resposta assíncrona), com o metodo 'then' processamos o sucesso de uma promise
// Assíncrono é o termo usado quando não sabemos quanto tempo levará para receber uma resposta (no caso de uma promise)

//  fetch(url).then(function (response) {

//     response.json().then(function (responsebody) {
//         console.log(responsebody) // Garante o acesso ao Body do Response convertido em JSON
//     })

// })

// Função antiga para receber o type do pokemon e transformar em uma lista HTML
  // function convertPokemonTypesToLi (pokemonTypes) {
  //   return pokemonTypes.map((typeSlot) => `<li class="${typeSlot.type.name}">${typeSlot.type.name}</li>`);
  // }

// function getPokemonType (pokemonType) {
//   return pokemonType.types.map((typeSlot) => typeSlot.type.name)
// }

  // Testando o elemento que a classe pokemon está chamando
  const pokemonOl = document.getElementById('pokemonList');

  // Botão para carregar mais pokemons
  const loadMoreBtn = document.getElementById('loadMoreButton');

  const limit = 8;
  let offset = 0;

  // Limitando gerações de pokemóns
  const maxRecords = 151 // 151 é a quantidade da primeira geração de pokemons

// Antes de colocar dentro do evento do botão "Load More"
  // function convertPokemonToLi (pokemon) {
  //   return `
  //   <li class="pokemon ${pokemon.type}">
  //             <span class="number">#${pokemon.number}</span>
  //             <span class="name">${pokemon.name}</span>
  //             <div class="detail">
  //               <ol class="types">
  //               ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
  //               </ol>
  //               <img src="${pokemon.photo}">
  //             </div>
  //           </li>          `
  // }

  // // Tentativa de passar uma das propriedades da leitura da promise em um setAttribute 
  // pokemonOl.setAttribute('class', `${getPokemonType}`)
  // pokemonOl.innerHTML += `<li>Teste</li>`

   // // Substituido por poke-api.js
  //   // Criando requerimento da API (semehlante ao GET)
    // fetch(url)
   //   .then(response => response.json()) // Semelhante ao Try
  //   .then(corpoJson => corpoJson.results) // Converte a response da promise em JSON
 //   .then(pokemons => { // Abstrai os objetos de Results recebidos em JSON
   //     // debugger; // Usado para criar um breakpoint no código automáticamente
  //     // console.log(pokemons); // Lista de pokemons


  // Atribuindo os comandos de requisição a uma função
  function loadPokemonItems(offset, limit) {

    
    // Gerando lista de pokemons
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => { // Faz a requisição da API e por default recebe uma lista vazia caso não receba nenhum item
      
      // Função transformadora
        // Bloco de código antigo
          // const newList = pokemons.map((pokemon) => convertPokemonToLi(pokemon)) // Recebeu a lista em JSON e transformou em uma lista HTML
          // const newHtml = newList.join('') // Concatena cada item do .map() sem vírgulas, se o mesmo fosse feito direto no innerHTML seriam adicionadas vírgulas
          // pokemonOl.innerHTML += newHtml // Injeta cada item da lista HTML adicionando o método de tirar a vírgula diretamente no HTML

        // Bloco de código novo (Unindo cada função)
          // pokemonOl.innerHTML += pokemons.map(convertPokemonToLi).join('') // Gerou um novo elemento HTML completo
          // Resumindo o código:
          const newHtml = pokemons.map((pokemon) => 
          `
            <li class="pokemon ${pokemon.type}">
              <span class="number">#${pokemon.number}</span>
              <span class="name">${pokemon.name}</span>
              <div class="detail">
                <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}">
              </div>
            </li> 
          `).join(''); // Itera cada pokemon da requisição e injeta no HTML
          pokemonOl.innerHTML += newHtml; // Não precisa concatenar, o .map() cuida de iterar os itens

      })
    }
    
    // Carrega os pokemons ao entrar na página
      loadPokemonItems(offset, limit)
    
    // Adicionando comando ao botão "Load More"
    loadMoreBtn.addEventListener('click', () => {
        offset += limit
        const qtdRecordNextPage = offset + limit

        if (qtdRecordNextPage >= maxRecords){
          const newLimit = maxRecords - offset
          loadPokemonItems(offset, newLimit)
          
          loadMoreBtn.parentElement.removeChild(loadMoreBtn)
        }else {
          loadPokemonItems(offset, limit)
        }
      })

    // Função substituida pelo pokemons.map()
      // const listItem = []
      // for (let i = 0; i < pokemons.length; i++) {
      //   const pokemon = pokemons[i];
      //   // Colocando os pokemóns no html
      //   listItem.push(convertPokemonToLi(pokemon))
      // }

      // console.log(listItem)


  // // Substituido pelo método listItem.push() para não forçar o navegador renderizar todos os itens a cada iteração
 // pokemonOl.innerHTML += pokemonToLi(pokemon) // Cada iteração cria um ListItem que recebe um pokemón

  // // Substituido por poke-api.js
 //   .catch(error => console.error(error)); // O contrário do sucesso, quando ocorre um erro

  // .finally(() => {
 //   console.log('Requisição concluída!')
// }) // Independente se a promise retornar sucesso ou erro
