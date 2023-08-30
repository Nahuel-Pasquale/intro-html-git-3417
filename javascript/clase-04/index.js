function sumar(a, b){
  console.log(a + b);
    // return a + b;
}

// console.log(sumar(1, 2));


// 1- flecha, anónimas

// const multiplicar = function(x, y){
//   return x * y;
// }
// const multiplicar = (x, y) => {
//   return x * y;
// };
const multiplicar = (x, y) => (x * y);


// console.log(multiplicar(3, 2));

// 2- recursivas

// es una funcion que se ejecuta a si misma para resolver
// un problema.
// tiene un caso base (para evitar un bucle infinito);
// bloque de instrucciones y luego vuelve a ejecutarse.

// 3! = 1 * 2 * 3 = 6
// 5! = 1 * 2 * 3 * 4 * 5 = 120

// const factorial = (numero) => {
//   let resultado = 1
//   for( i = numero; i > 0 ; i-- ) {
//     resultado *= i;
//   }
//   return resultado;
// }

// const factorial = (n) => {
//   if (n === 0) return 1;
//   console.log('primer log ==> ', n);
//   let resultado = n * factorial(n - 1);
//   console.log('segundo log ==> ', resultado);
//   return resultado;
// }

// console.log(factorial(5))


// 3- callbacks

const alertName = (nombre) => {
  return alert(`Hola ${nombre}`)
}
const consoleName = (nombre) => {
  return console.log(`Hola ${nombre}`)
}

const procesarEntrada = (callback) => {
  const nombre = prompt('Ingresá tu nombre');
  callback(nombre);
}

const operacionAsincronica = (datos, callback) =>  {
  const resultado = `Resultado de la obtencion de los ${datos}`
  // se termina de ejecutar lo antertior, obtenemos el resultado
  // luego llamamos al callback
  callback(resultado);
}

const mostrarResultado = (resultado) => {
  console.log(`El resultado es: ${resultado}`)
}

const mostrarResultadoFiltrado = (resultado, callback) => {
  console.log(`El resultado es: ${resultado}`);
  callback(resultado)
}

const filtrarPorColor = (color) => {
  console.log(color)
}
const filtrarPorTamaño = (tamaño) => {
  console.log(tamaño)
}

// 4- closures

const combo = (() => {

  const tipoDeHamburguesas = [ 'carne', 'pollo', 'veggie' ];
  const tipoDeGaseosa = [ 'coca', 'fanta', 'pomelo' ];
  const acompañamiento = [ 'papas', 'papas cheddar', 'nuggets' ]
  const aderezos = [ 'sin', 'bbq', 'mayo' ]
  const cantidad = [ 'regular', 'grande', 'mega XXL' ]

  function elegirTipoDeHamburguesa(){
    return tipoDeHamburguesas;
  }
  function elegirtipoDeGaseosa(){
    return tipoDeGaseosa;
  }
  function elegiracompañamiento(){
    return acompañamiento;
  }
  function elegiraderezos(){
    return aderezos;
  }
  function elegircantidad(){
    return cantidad;
  }

  return {
    elegirTipoDeHamburguesa,
    elegirtipoDeGaseosa,
    elegiracompañamiento,
    elegiraderezos,
    elegircantidad
  }
})();

const lista = (arr) => {
  for( let i = 0; arr.length > i; i++){
    console.log(arr[i])
  }
}

lista(combo.elegiracompañamiento())
