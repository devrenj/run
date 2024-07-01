// Os comentários de desenvolvimento do estudo foram movidos para a versão LEARN deste arquivo

const pokemonOl = document.getElementById('pokemonList');
const loadMoreBtn = document.getElementById('loadMoreButton');
const limit = 8;
let offset = 0;
const maxRecords = 151
function loadPokemonItems(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
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
        `).join('');
        pokemonOl.innerHTML += newHtml;
    })
  }
    loadPokemonItems(offset, limit)
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