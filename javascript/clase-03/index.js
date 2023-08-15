/* 
  Array: 
    * estructura de datos
    * almacenar múltiples valores en una variable
    * sintaxis: []
    * dividido en elementos, cada elemento tiene una posición numérica llamada índice
*/

const frutas = [ 'manzana', 'naranja', 'banana', 'pera' ];
const obj = {}

// console.log(Array.isArray(frutas))
// console.log(typeof frutas === typeof null)
// console.log(typeof frutas === typeof obj)

// console.log('total del array => ', frutas)
// console.log('primer elemento => ', frutas[0])
// console.log('segundo elemento => ', frutas[1])
// console.log('tercer elemento => ', frutas[2])

// console.log('cantidad de elementos => ', frutas.length);


// for ( inicialización ; condición ; expresión final) { bloque de código }


// for ( let i = 0; i <= 10; i++) {
//   if(i % 2 === 1){
//     console.log('número => ', i);
//   }
// }
// for ( let i = 0; i < frutas.length; i++) {
//   console.log(`fruta ${i}:`, frutas[i]);
// }
// for(let fruta of frutas){
//   if(fruta === 'naranja'){
//     break
//   }
//   console.log('fruta: ', fruta);
// }



// while(condición) { bloque de codigo }


let contadorWhile = 0;
let contadorDo = 0;
// while(contador <= 5){
//   console.log('número => ', contador);
//   contador++;
// }
// while(contadorWhile < frutas.length){
//   console.log(`fruta While ${contadorWhile}:`, frutas[contadorWhile]);
//   contadorWhile++;
// }

// do while

// do {
//   console.log(`fruta Do ${contadorDo}:`, frutas[contadorDo]);
//   contadorDo++;
// } while (contadorDo < frutas.length)


// funciones intro
// bloque de codigo que realiza una tarea especifica
// codigo mas organizado y reutilizable

function nombreFunction(parametro1, parametro2){
  // Cuerpo de la funcion
  // Código que realiza una tarea
  return 'valor';
}

// function saludar(nombre) {
//   return 'Hola ' + nombre
// }

// const saludo = saludar('David');
// console.log(saludo)

// function suma(numero1, numero2){
//   if(!isNaN(numero1) && !isNaN(numero2)){
//     return Number(numero1) + Number(numero2);
//   }
//   return 'los valores ingresados no son numeros';
// }
// function suma(numero1, numero2){
//   return numero1 + numero2;
// }

const numeros = [ 1 , 5, 6, 8 ];
const numerosConValidaciones = [ 1, '5', 6, '8' ];
const numerosConErroresNull = [ 1, '5', null, '8' ];
const numerosConErroresString = [ 1, 'vdsvsdasd', null, '8' ];

function sumaArray(array){
  // guardan el resultado en una variable resultado

  // recorremos el array y por cada elemendo lo suman a la variable

  // retornan la variable

  return 'suma del array';
}



console.log( sumaArray(numeros) );
