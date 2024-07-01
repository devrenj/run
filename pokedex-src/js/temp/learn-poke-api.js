const pokeApi = {}

function convertPokeApiDetailsToObj(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.number = pokeDetail.id;
  pokemon.name = pokeDetail.name;

  const types = pokeDetail.types.map((typesSlot) => typesSlot.type.name);
  // Equivalência (Destructuring)
  const [type] = types // Seleciona o primeiro índice da resposta recebida em typesSlot
  // pokemon.type = pokemon.types.get(0); // Destructuring seria o mesmo que esta linha

  pokemon.types = types;
  pokemon.type = type;
  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

  return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then(response => response.json())
        .then(convertPokeApiDetailsToObj)
}

/**
 * 
 * @param {*} offset deslocamento de página dos elementos que aparecem na página, acompanha o valor do limit (default: 0)
 * @param {*} limit limite de elementos que aparecem na página (default: 0)
 * @returns 
 */
pokeApi.getPokemons = (offset = 24, limit = 12) => {

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  // Criando requerimento da API (semehlante ao GET)
    return fetch(url) // Promise que está fazendo a função assíncrona de requerer uma URL
      .then((response) => response.json()) // Semelhante ao Try (try-catch)
      .then((corpoJson) => corpoJson.results) // Converte a response da promise em JSON
      .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // Transforma a requisição em um objeto de Pokemon

    // Antes do convertPokeApiDetailsToObj:
      // .then(pokemons => pokemons.map(pokeApi.getPokemonDetail)) // Faz uma iteração por cada item 'pokemon' e chama a função de volta (callback) passando a propriedade URL do objeto, após o resultado, transforma esta lista em json
            .then((detailRequests) => Promise.all(detailRequests)) // Uma lista com cada requisição de detalhes
            .then((pokemonDetails) => pokemonDetails)

      // // A função .map() substitui a função:
      // Promise.all([
      //   fetch('https://pokeapi.co/api/v2/pokemon/1'),
      //   fetch('https://pokeapi.co/api/v2/pokemon/2'),
      //   fetch('https://pokeapi.co/api/v2/pokemon/3'),
      //   fetch('https://pokeapi.co/api/v2/pokemon/4'),
      // ]).then((results) => {
      //   console.log(results)
      // })

      .catch((error) => console.error(error)) // Tratamento caso haja falha no requerimento da promise
}
