//

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`)
  }
}
class Rectangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura
  }

  calcularArea() {
    return this.base * this.altura;
  }
}

// const rectangulo1 = new Rectangulo(10, 10);

// console.log(rectangulo1.calcularArea());

// const persona1 = new Persona('Nahuel', 30);

// persona1.saludar();

class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad
  }

  hablar() {
    console.log('hace algun sonido.');
  }
}

class Perro extends Animal{
  constructor(nombre, edad, raza) {
    super(nombre, edad);
    this.raza = raza;
  }

  hablar(frase) {
    console.log(`El perro ${this.nombre} ladra. esta diciendo ${frase}`)
  }
}

Perro.prototype.ladrar = () => {
  console.log('Woof!!');
}

const perro1 = new Perro('Mocca', 1.5);
// console.log(perro1.hablar());

//funcion bind

// const moccaLadra = perro1.hablar.bind(perro1);

// moccaLadra();

// call

// perro1.hablar.call(perro1);
// perro1.hablar();

// apply

// perro1.hablar.apply(perro1, ['Hola']);
// perro1.hablar('Hola');



