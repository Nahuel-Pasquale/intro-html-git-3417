const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

// Si el número ingresado en el input es valido
// (existe una pizza cuyo id coincida con el número ingresado en el input), 
// se deberá renderizar en el contenedor una card con los datos de la pizza 
// cuyo id coincida con el número ingresado en el input. 
// La card deberá contener mínimamente el nombre, imagen y y precio de la pizza
// (Estilizarlo con CSS 🎨) 

const btn = document.getElementById('button');
const input = document.getElementById('input');
const box = document.getElementById('container');
const small = document.getElementById('small');

const pizza = JSON.parse(localStorage.getItem('pizza')) || null;

const saveLocalStorage = (pizza) => {
  localStorage.setItem('pizza', JSON.stringify(pizza));
}

const renderCard = (pizza) => {
  return `
    <div class="hero-card">
      <img src="${pizza.imagen}" alt="${pizza.nombre}" />
      <div class="hero-card-info">
        <div class="hero-card-top">
          <h3>${pizza.nombre}</h3>
        </div>
        <div class="hero-card-bottom">
          <div class="hero-card-creator">
            <div class="creator-info">
              <p>Ing: ${pizza.ingredientes.join(', ')}</p>
              <p>price: $${pizza.precio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

const handleClick = () => {
  const value = input.value;
  const pizza = pizzas.find(e => Number(e.id) === Number(value));
  console.log(pizza);
  if(!pizza) {
    small.textContent = 'No existe la pizza que buscas'
    box.innerHTML = '';
    localStorage.removeItem('pizza');
  }
  box.innerHTML = renderCard(pizza);
  saveLocalStorage(pizza);
  small.textContent = ''
}

const renderPizza = () => {
  if(!pizza) return;
  box.innerHTML = renderCard(pizza);
}

const init = () => {
  document.addEventListener('DOMContentLoaded', renderPizza)
  btn.addEventListener('click', handleClick);
}

init();
