// const x = 0;
// var y;


// console.log('LET ANTES =>', x)
// console.log('VAR ANTES =>', y)

// if  (ACA VA LA EXPRESIÓN) { ACA HACE LA MAGIA }

// if(true){
//   const x = 10
//   console.log('CONST DENTRO =>', x)
// }

// if(true){
//   var y = 10
//   console.log('VAR DENTRO =>', y)
// }

// console.log('CONST DESPUES =>', x)
// console.log('VAR DESPUES =>', y)

// let numero = 10;

// numero = numero + 2
// numero += 2;
// numero = numero - 2
// numero -= 2
// numero = numero * 2
// numero *= 2
// numero = numero / 2
// numero /= 2
// numero++
// numero--

// console.log(numero)

// == , compara VALORES
// console.log( a == b ) 
// console.log( a == c )
// == , compara VALORES y TIPOS
// console.log( a === b ) 
// console.log( a === c )
// == , compara VALORES
// console.log( a != b ) 
// console.log( a != c )
// == , compara VALORES y TIPOS
// console.log( a !== b )
// console.log( e !== e )

//conjuncion
// console.log( a > 0 && a < 1) 
/*
EXP 1 | EXP2 | resultado
true  | true | true
true  | false| false
false | true | false
false | false| false
*/

//disyunción
// console.log( a > 0 || a < 1) 
/*
EXP 1 | EXP2 | resultado
true  | true | true
true  | false| true
false | true | true
false | false| false
*/

let a = 1; // number
let b = 2; // number
let c = '1' // string
let d = true;
let e = false;
let f = null;
let g = undefined;

// negación
// console.log( !(g) )

// if( !!g ) {
//   console.log('NO ENCONTRAMOS A AGUSTIN')
// }

// if( e ) {
//   console.log('SOY TRUE');
// } else {
//   console.log('SOY FALSE');
// }

// CONDICION ? CONDICION CUMPLIDA (EJECUCION) : CONDICION FALLIDA

a > 0 ? console.log('SOY TRUE') : console.log('SOY False');

// let mes = prompt('Ingresá un mes del año');

switch( false ){ // primer paso, recibe un argumento (dato)
  case 'Enero':
    alert('Estamos en Enero'); //ejecuto todo lo que quiero
    break; // si la opción es correcta, cortamos aca
  case 'Febrero':
    alert('Estamos en Febrero')
    break;
  case 'Marzo':
    alert('Estamos en Marzo')
    break;
  case 'Abril':
    alert('Estamos en Abril')
    break;
  case 'Mayo':
    alert('Estamos en Mayo')
    break;
  case 'Junio':
    alert('Estamos en Junio')
    break;
  case 'Julio':
    alert('Estamos en Julio')
    break;
  case 'Agosto':
    alert('Estamos en Agosto')
    break;
  case 'Septiembre':
    alert('Estamos en Septiembre')
    break;
  case 'Octubre':
    alert('Estamos en Octubre')
    break;
  case 'Noviembre':
    alert('Estamos en Noviembre')
    break;
  case 'Diciembre':
    alert('Estamos en Diciembre')
    break;
  default:
    break;
}



// if(mes === 'Enero') {
//   alert('Estamos en Enero')
// } 
// else if ( mes === 'Febrero' ) {
//   alert('Estamos en Febrero')
// } 
// else if ( mes === 'Marzo' ) {
//   alert('Estamos en Febrero')
// } 
// else if ( mes === 'Abril' ) {
//   alert('Estamos en Febrero')
// } 
// else if ( mes === 'Mayo' ) {
//   alert('Estamos en Febrero')
// } 
// else if ( mes === 'Junio' ) {
//   alert('Estamos en Febrero')
// } 
// else if ( mes === 'Julio' ) {
//   alert('Estamos en Febrero')
// } 
// else if ( mes === 'Agosto' ) {
//   alert('Estamos en Febrero')
// } 
// else if ( mes === 'Septiembre' ) {
//   alert('Estamos en Febrero')
// } 
// else if ( mes === 'Octubre' ) {
//   alert('Estamos en Febrero')
// } 
// else if ( mes === 'Noviembre' ) {
//   alert('Estamos en Febrero')
// } 
// else if ( mes === 'Diciembre' ) {
//   alert('Estamos en Febrero')
// } else {
//   alert('Ingresa un mes valido')
// }
