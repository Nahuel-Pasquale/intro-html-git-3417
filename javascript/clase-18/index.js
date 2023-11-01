
const div = document.getElementById('div');
// const miPromesa = new Promise((resolve, reject) => {
//   const exito = false;
//   setTimeout(() => {
//     if(exito){
//       resolve('Promesa Cumplida'); 
//     } else {
//       reject('Promesa Rechazada'); 
//     } 
//   }, 2000);
// });

// console.log(miPromesa);

// miPromesa
//   .then((resultado) => {
//     console.log('Exito: ', resultado);
//   })
//   .catch((error) => {
//     console.log('Error: ', error);
//   })

const url = 'https://pokeapi.co/api/v2/pokemon';

// fetch(url).then((respuesta) => {
//   const data = respuesta.json().then((data) => {
//     console.log('data ==> ', data);
//   })
// });

// async ==> funciones
// await ==> dentro de las funciones, para esperar un resultado

const getData = async (url) => {
  const response = await fetch(url);
  return await response.json();
}

const renderPokemons = async () => {
  const pokemones = await getData(url);
  
  const pokemonesInfo = await Promise.all(pokemones.results.map((pokemon) => {
    return getData(pokemon.url);
  }));
  
  console.log(pokemonesInfo);
  const html = pokemonesInfo.map(
    (poke) => `
      <p 
      styles="display: flex; justify-content: center; align-items: center">
        <img width="100px" src=' ${poke.sprites.other.home.front_default} ' />
        ${poke.name}
      </p>
    `).join('')
  div.innerHTML = html
}

const init = () => {
  // renderPokemons();
}

init();


