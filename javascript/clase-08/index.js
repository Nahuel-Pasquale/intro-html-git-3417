// push
// agrega el elemento al final de array
// unshift
// agrega el elemento al comienzo de array
// pop
// elimina el elemento al final de array
// shift
// elimina el elemento al comienzo de array

// frutas.push('naranja');
// frutas.unshift('naranja');
// const pop = frutas.pop();
// const shift = frutas.shift();

// console.log( frutas );
// console.log( pop );
// console.log( shift );


// join
// une los elementos en base al string que pasemos como argumento
// const join = frutas.join('');
// console.log(join)


// reverse
// devuelve el array invertido
// const reverse = frutas.reverse();
// console.log(reverse)



// slice
// igual que los strings
// const slice = frutas.slice(1, 3);
// console.log(slice);

/*
👉 Una callback function es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la misma para completar alguna tarea o algún tipo de rutina o acción.
*/



// forEach( function(elemento, indice) {} )
// itera cada elemento del array y ejecura el callback (una funcion) por cada uno de ellos, NO MODIFICA EL ARRAY ORIGINAL.
// No devuelve un nuevo array
// ESA ES LA PRINCIPAL DIFERENCIA CON OTROS METODOS COMO: map, filter
// NO SE PUEDE DETENER PREMATURAMENTE

// const callback = (e, i) => {
//   console.log( `En el índice ${i}, tengo la fruta ${e}` )
// }

// frutas.forEach( (elemento, indice) => {
//   console.log( `En el índice ${indice}, tengo la fruta ${elemento}` )
// } )
// frutas.forEach(callback);



// map
// creamos un nuevo array a partir de uno existente
// el callback puede modificar el elemento actual y retornarlo
// se utiliza especialmente cuando se desea transformar los valores de un array
// CREA UN NUEVO ARRAY
// NO MODIFICA EL ARRAY ORIGINAL
// DEVUELVE UN NUEVO ARRAY
// SIEMPRE HAY QUE RETORNAR UN VALOR

// const frutasEnMayusculas = frutas.map( (fruta, i) => {
//   console.log(fruta, i);
//   return fruta.toUpperCase();
// } )
// const frutasEnMayusculas = frutas.map((fruta) => fruta.toUpperCase());
// console.log(frutasEnMayusculas);
// console.log(frutas);


// filter
// creamos un nuevo array a partir de uno existente
// conserva los elementos que cumplan con una condicion

// const nuevasFrutas = frutas.filter( (fruta, i) => {
//   console.log( fruta.ingredienteClave )
//   return fruta.ingredienteClave === 'vitamina d';
// } );
// const nuevasFrutas = frutas.filter( (fruta) => fruta.ingredienteClave === 'vitamina d');
// console.log(nuevasFrutas);

// find
// se utiliza para encontrar el primer elemento que coincida con la condicion dada
// Si encuentra un elemento, lo retorna, sino retorna undefined

// const nuevasFrutas = frutas.find( (fruta, i) => {
//   console.log( fruta.ingredienteClave )
//   return fruta.ingredienteClave.includes('vitamina basd');
// } );
// const nuevasFrutas = frutas.find( (fruta) => fruta.ingredienteClave.includes('vitamina b'));
// console.log(nuevasFrutas)

// every
// Retorna un booleano
// se utiliza para verificar si todos los elementos del array cumplen con una condicion dada

// const frutasConB = frutas.every( (fruta) => {
//   return fruta.name.includes('b');
// } )
// console.log(frutasConB);

// some
// Retorna un booleano
// se utiliza para verificar si alguno de los elementos del array cumplen con una condicion dada
// const frutasConB = frutas.some( (fruta) => {
//   return fruta.name.includes('b');
// } )
// console.log(frutasConB);

// const nombresFrutas = frutas.map( (fruta) => {
//   return fruta.name;
// } )
// console.log(nombresFrutas);
// sort
// se utliza para ordernar los elementos de un array alf o numericamente
// MODIFICA EL ARRAY
// numeros.sort((a, b) => {
//   return a - b;
// });
// console.log(numeros);

const frutas = [
  {
    name: 'manzana',
    ingredienteClave: 'vitamina a',
    price: 2
  }, 
  {
    name: 'pera',
    ingredienteClave: 'vitamina b',
    price: 5
  },
  {
    name: 'banana',
    ingredienteClave: 'vitamina c',
    price: 6
  },
  {
    name: 'uva',
    ingredienteClave: 'vitamina ab',
    price: 20
  },
  {
    name: 'naranja',
    ingredienteClave: 'vitamina b12',
    price: 10
  },
  {
    name: 'anana',
    ingredienteClave: 'vitamina d',
    price: 300
  }
];

// reduce
// se utiliza para reducir

// arr.reduce( function( acumulador, elemento, indice ), valorInicialDelAcumulador );

// const sumaDePrecios = frutas.reduce( ( acc, fruta ) => {
//   console.log(acc);
//   return acc + fruta.price;
// }, 0 );

// console.log(sumaDePrecios);











