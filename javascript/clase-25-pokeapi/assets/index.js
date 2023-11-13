const pokemonsContainer = document.getElementById('caja');
const loader = document.querySelector('.pokeballs-container');

const appState = {
  currentUrl: 'https://pokeapi.co/api/v2/pokemon/?limit=9&offset=0',
  isFetching: false,
};

const getPokemonsData = async () => {
  const { next, results } = await fetchPokemons(appState.currentUrl);
  appState.currentUrl = next;
  return await Promise.all(results.map((poke) => fetchPokemons(poke.url)));
};

const renderPokemons = async (renderingFunction) => {
  const pokemonsData = await getPokemonsData();
  renderingFunction(pokemonsData);
};

const renderPokemonsList = (pokemonList) => {
  pokemonsContainer.innerHTML += pokemonList
    .map(createPokemonCard)
    .join('');
};

const createPokemonCard = (pokemon) => {
  const { id, name, img, weight, height, experience, types } = getInfo(pokemon)
  return `
    <div class="poke">
      <img src="${img}"/>
      <h2>${name}</h2>
      <span class="exp">EXP: ${experience}</span>
      <div class="tipo-poke">
        ${createTypeCards(types)}
      </div>
      <p class="id-poke">#${id}</p>
      <p class="height">Height: ${height}m</p>
      <p class="weight">Weight: ${weight}Kg</p>
    </div>
  `
}

const createTypeCards = (types) => {
  return types
    .map((type) => {
      return `<span class="${type} poke__type">${type}</span>`
    }).join('');
}

const getInfo = (pokemon) => {
  return {
    id: pokemon.id,
    name: pokemon.name.toUpperCase(),
    img: pokemon.sprites.other.home.front_default,
    weight: pokemon.height / 10,
    height: pokemon.weight / 10,
    experience: pokemon.base_experience,
    types: pokemon.types.map(type => type.type.name)
  }
}

const loadNextPokemons = async () => {
  if(isEndOfPage() && !appState.isFetching){
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    appState.isFetching = true;
    renderPokemons(renderOnScroll);
  }
}

const isEndOfPage = () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  return scrollTop + clientHeight >= scrollHeight - 1;
}

const renderOnScroll = (pokemonList) => {
  loader.classList.toggle('show');
  setTimeout(() => {
    loader.classList.toggle('show');
    renderPokemonsList(pokemonList);
    appState.isFetching = false
  }, 1500)
}

const init = () => {
  renderPokemons(renderPokemonsList);
  window.addEventListener('scroll', loadNextPokemons)
};

init();