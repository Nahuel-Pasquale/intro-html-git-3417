//


// import 1

// import * as funciones from './funciones.js';

// console.log(funciones);

// funciones.despedir('Javascript')
// funciones.saludar('Agustin')
// funciones.saludar(funciones.nombre);

// import 2

import { despedir, nombre, saludar } from './funciones.js';
// import { 
//   despedir as chau, 
//   nombre as name, 
//   saludar as hola 
// } from './funciones.js';

despedir('Javascript');
saludar('Agustin');
saludar(nombre);

