// bucles: for, while, do while

// 1) Sumar numeros pares en base a un numero dado
// for ( inicialización ; condición ; expresión final) { bloque de código }
// const numero = 10;

// let resultado = 0;

// for( let i = numero; i <= 10;  i-- ){
//   if(i < 0) break;
//   if(i % 2 === 0){
//     console.log(i)
//     resultado += i;
//   }
// }
// for( let i = 2; i <= 10;  i += 2 ){
//     resultado += i;
// }


// let resultado = 0;

// const palabras = ['Hola', 'JavaScript', 'es', 'dificil'];

// for( let i = 0; i < palabras.length ; i++ ){
//   console.log('la palabra actual es: ', palabras[i])
//   resultado++;
// }

// console.log('RESULTADO ==> ', resultado);


const nombres = [
  'Nahu', 
  'Leonel', 
  'Santino', 
  'Carlos', 
  'Marcelo', 
  'Agustin', 
  'Cris', 
  'Mara', 
  'Ulises',
];

// for( let i = 0 ; i < nombres.length ; i++ ){
//   if( nombres[i].length <= 6 ){
//     console.log(nombres[i])
//   }
// }
// for( let i = 0 ; condicion ; i++ ){
// instrucciones
// }




// funciones: callback, recursion

// const counter = 40;
// const counter2 = 80;

// function contadorRegresivoFor( n ) {
//   for(let i = n; i >= 0 ; i--){
//     console.log('tiempo actual: ', i)
//   }
//   return console.log('Tiempo terminado!!!!')
// }

// contadorRegresivoFor( 10 );

// function contadorRegresivoRecursivo(n) {
//   if(n <= 0) return console.log('Tiempo terminado!!!!');
//   console.log('tiempo actual: ', n);
//   contadorRegresivoRecursivo( n - 1 )
//   console.log('tiempo actual: ', n);
// }

// contadorRegresivoRecursivo( 40 )

const numero1 = 4;
const numero2 = 8;


function suma(a, b){
  return a + b;
}
function resta(a, b){
  return a - b;
}
function miltiplicacion(a, b){
  return a * b;
}
function division(a, b){
  return a / b;
}

function realizarOperacion( a, b, operacionCallback, operacion ){
  return operacionCallback(a, b);
}

console.log('SUMA: ', realizarOperacion(numero1, numero2, suma) )
console.log('RESTA: ', realizarOperacion(numero1, numero2, resta) )
console.log('MULTIPLICACION: ', realizarOperacion(numero1, numero2, miltiplicacion) )
console.log('DIVISION: ', realizarOperacion(numero2, numero1, division) )