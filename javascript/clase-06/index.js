const mascota = {
  // propiedad
  // atributo: valor
  nombre: 'Canela',
  color: ['arena', 'blanco', 'marron'],
  estaVacunada: true,
  edad: 5,
  tipo: 'gato',
  peso: '3.5 kg',

  // estos son metodos
  // metodos: son funciones dentro de un objeto
  ronronear(){
    // console.log( `${this.nombre} está ronroneando` )
    console.log( this.nombre + ' está ronroneando' )
  },
  cambiarNombre(name){
    this.nombre = name
  }
}


const logger = (parametro) => {
  console.log(parametro)
}

// mascota.cambiarNombre('Mocca');

// mascota.ronronear();

// const entradas = Object.entries(persona.mascotas[0]);

// convierte las propiedades de un objeto en una matriz de pares
// [clave, valor]

// const values = Object.values(persona.mascotas[0]);

// retorna los valores de cada propiedad del objeto

// operador SPREAD (...) expandir elementos de un iterable
// operador REST (...) para capturar un numero indefinido de argumentos


// SPREAD



// REST
function sumar(...arg){
  console.log( arg )
}
// sumar(1, 2, 3,1, 2, 3,1, 2, 3)
// console.log(...numeros);



const numeros = [1,2,3, 4,5,6]

const persona = {
  nombre: 'Nahu',
  edad: 30,
  profesion: ['desarrollador', 'diseñador'],
  mascotas: [
    {
      name: 'canela'
    }, 
    {
      name: 'mocca'
    }
  ]
}

// DESESTRUCTURACION: Forma facil de obtener los valores
// de un objeto o de un iterable

const { nombre, edad, ...rest } = persona;
const [ primerNumero, segundoNumero, ...restoNumeros ] = numeros


console.log( rest )
