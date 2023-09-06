// charAt(index)
// devuelve el caracter en la posicion especificada
// console.log( texto.charAt(0) )


// concat(...args)
// concatena (une) dos o mas cadenas de texto
// const hola = 'hola';
// const mundo = 'mundo';
// console.log( hola.concat(' ', mundo ) )

// texto en minusculas
// const minusculas = texto.toLowerCase();
// texto en mayusculas
// const mayusculas = texto.toUpperCase();
// console.log(minusculas)
// console.log(mayusculas)


// slice(start, end?)
// extrae una porcion de una cadena desde el indice START (inclusive)
// hasta el indice END (excluyente) y retorna una nueva cadena
// console.log( texto.slice( 0, 4 ) )



// indexOf(substring) y lastIndexOf(substring)
// primera aparicion del substring, ultima aparicion
// console.log( oracion.indexOf('Java') )
// console.log( oracion.lastIndexOf('s') )


// replace(valor a reemplazar, valor ) o replaceAll
// console.log( oracion.replace('Javascript', 'El Ajedrez') )


// trim()
// elimina los espacios en blanco al principio y al final de la cadena de texto
// console.log( texto.length )
// console.log( texto.trim() )

// split( separador, limite? )
// divide la cadena en un array de subcadenas
// console.log( oracion.split( '. ' ) )


// function filter(string) {
//   return string.split( '. ' )[0].concat( '. ', string.split( '. ' )[1].toUpperCase() )
// }

// console.log( filter(oracion) )

const texto = 'JavaScript';
const oracion = 'Javascript es dificil si no practicamos. javascript es facil si practicamos';

// startsWith(substring) endsWith(substring)
// verificar si empieza con ese substring o termina con ese substring
// retorna un booleano

// includes(substring) si lo encuentra en la cadena, retorna true
// console.log(texto.includes('Javaasd'))


// padStart(longitud, string) y padEnd(longitud, string)
// agrega caracteres en una cadena hasta alcanzar la longitud especificada
const numero = '7'
// console.log( numero.padStart( 3, '0' ) )


// 1)
// dd/mm/yyyy
// 7/3/1999

// const fixDate = (date) => {

//   const splitDate = date.split('/');

//   const dia = splitDate[0].padStart( 2, '0' );
//   const mes = splitDate[1].padStart( 2, '0' );
//   const año = splitDate[2].padStart( 2, '0' );

//   return `${dia}/${mes}/${año}` ;
// }

// const date = '7/3/1999';

// const fechaModificada = fixDate(date);

// console.log(fechaModificada);

// 2)
// validarCorreo
// email: cadena@algo.algo
// @ (debe tener solamente UN '@')
// despues del '@' exista un '.'

// function validarCorreo(correo){

//   const contieneArroba = correo.includes('@');
//   const contienePuntoDespuesDelArroba = correo.split('@')[1]?.includes('.');

//   if( contieneArroba && contienePuntoDespuesDelArroba ){
//     return true
//   } else {
//     return false;
//   }
// }

// function validarCorreo(correo){
//   return correo.includes('@') && correo.split('@')[1]?.includes('.');
// }

// const validarCorreo = (correo) => correo.includes('@') && correo.split('@')[1]?.includes('.');

// const correoValido = "usuario@example.com"
// const correoNoValido = "correo sin arroba.com"
// const correoSinPunto = "correo sin punto@example"

// console.log( validarCorreo(correoValido) )

