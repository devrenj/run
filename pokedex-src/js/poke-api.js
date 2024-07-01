// Os comentários de desenvolvimento do estudo foram movidos para a versão LEARN deste arquivo

const pokeApi = {}

function convertPokeApiDetailsToObj(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.number = pokeDetail.id;
  pokemon.name = pokeDetail.name;

  const types = pokeDetail.types.map((typesSlot) => typesSlot.type.name);
  const [type] = types 

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

    return fetch(url) 
      .then((response) => response.json()) 
      .then((corpoJson) => corpoJson.results) 
      .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) 
            .then((detailRequests) => Promise.all(detailRequests)) 
            .then((pokemonDetails) => pokemonDetails)

      .catch((error) => console.error(error)) 
}
