// const tituloPrincipal = document.getElementById('titulo-principal');
// const tituloPrincipal = document.getElementsByClassName('title');
// const tituloPrincipal = document.getElementsByTagName('h1');
// const tituloPrincipal = document.querySelector('#titulo-principal');
// const tituloPrincipal = document.querySelectorAll('#titulo-principal');

const lista = document.getElementById('lista');

const productos = [
	{
		categoria: "Computacion",
		condicion: "Nuevo",
		cuotas: false,
		envioInmediato: true,
		envioGratuito: true,
		id: 1,
		marca: "Redragon",
		nombre: "Teclado gamer Shiva K512",
		precio: 6500,
		subcategoria: "Perifericos",
		ubicacion: "GBA",
    ingredientes: [1,2,3,4]
	},
	{
		categoria: "Computacion",
		condicion: "Usado",
		cuotas: false,
		envioInmediato: false,
		envioGratuito: false,
		id: 2,
		marca: "Asus",
		nombre: "Mother M2n68-am",
		precio: 7000,
		subcategoria: "Componentes",
		ubicacion: "Capital Federal",
	},
	{
		categoria: "Computacion",
		condicion: "Nuevo",
		cuotas: true,
		envioInmediato: true,
		envioGratuito: true,
		id: 3,
		marca: "Kingston",
		nombre: "Memoria RAM Fury Beast 8GB",
		precio: 8500,
		subcategoria: "Componentes",
		ubicacion: "Cordoba",
	},
	{
		categoria: "Computacion",
		condicion: "Nuevo",
		cuotas: false,
		envioInmediato: true,
		envioGratuito: true,
		id: 4,
		marca: "Logitech",
		nombre: "Auriculares gamer inalámbricos G733",
		precio: 29000,
		subcategoria: "Perifericos",
		ubicacion: "GBA",
	},
	{
		categoria: "Computacion",
		condicion: "Nuevo",
		cuotas: true,
		envioInmediato: false,
		envioGratuito: true,
		id: 5,
		marca: "Redragon",
		nombre: "Auriculares gamer Zeus X",
		precio: 13000,
		subcategoria: "Perifericos",
		ubicacion: "Ushuaia",
	},
	{
		categoria: "Computacion",
		condicion: "Nuevo",
		cuotas: true,
		envioInmediato: false,
		envioGratuito: true,
		id: 5,
		marca: "Redragon",
		nombre: "Auriculares gamer Zeus X",
		precio: 13000,
		subcategoria: "Perifericos",
		ubicacion: "Ushuaia",
	},
	{
		categoria: "Celulares",
		condicion: "Nuevo",
		cuotas: true,
		envioInmediato: true,
		envioGratuito: true,
		id: 6,
		marca: "Motorola",
		nombre: "Motorola Edge 30 128 GB",
		precio: 90000,
		subcategoria: "Equipos",
		ubicacion: "Capital Federal",
	},
	{
		categoria: "Celulares",
		condicion: "Usado",
		cuotas: false,
		envioInmediato: false,
		envioGratuito: false,
		id: 7,
		marca: "Nokia",
		nombre: "Nokia 1100",
		precio: 1500,
		subcategoria: "Equipos",
		ubicacion: "GBA",
	},
	{
		categoria: "Celulares",
		condicion: "Nuevo",
		cuotas: false,
		envioInmediato: true,
		envioGratuito: true,
		id: 8,
		marca: "Samsung",
		nombre: "Samsung Galaxy A51 128GB",
		precio: 70000,
		subcategoria: "Equipos",
		ubicacion: "GBA",
	},
	{
		categoria: "Celulares",
		condicion: "Nuevo",
		cuotas: false,
		envioInmediato: true,
		envioGratuito: true,
		id: 9,
		marca: "Samsung",
		nombre: "Samsung Galaxy A12 64GB",
		precio: 4000,
		subcategoria: "Equipos",
		ubicacion: "Capital Federal",
	},
	{
		categoria: "Celulares",
		condicion: "Usado",
		cuotas: false,
		envioInmediato: false,
		envioGratuito: false,
		id: 10,
		marca: "Motorola",
		nombre: "Cargador Motorola",
		precio: 6000,
		subcategoria: "Cargadores",
		ubicacion: "Bariloche",
	},
];

// {
//   categoria: "Computacion",
//   condicion: "Nuevo",
//   cuotas: false,
//   envioInmediato: true,
//   envioGratuito: true,
//   id: 1,
//   marca: "Redragon",
//   nombre: "Teclado gamer Shiva K512",
//   precio: 6500,
//   subcategoria: "Perifericos",
//   ubicacion: "GBA",
//   ingredientes: [1,2,3,4]
// },

const crearLista = (arr) => {
  arr.forEach((e) => {
    const listItem = document.createElement('li');
    listItem.textContent = e.nombre;
    listItem.id = `${e.marca}${e.id}`
    // listItem.style.color = 'red';
    // listItem.style.fontSize = '20px';
    // listItem.classList.add('hidden');
    // listItem.classList.add('list-item');
    // listItem.classList.remove('list-item');
    lista.appendChild(listItem)
  });
}

crearLista(productos);

const productsSpan = document.getElementById('vista-productos');
const icon = document.getElementById('icon');
const inputName = document.getElementById('input-pw');

const handleClick = () => {
	if(lista.classList.contains('hidden')){
		lista.classList.remove('hidden');
		productsSpan.transition = 'color 0.3s ease-in-out'
		productsSpan.style.color = 'red'
		productsSpan.textContent = 'ocultar productos'
		icon.classList.remove('rotate90')
		icon.classList.add('rotate-90')
		console.log(icon.classList);
		return;
	}
	lista.classList.add('hidden');
	productsSpan.style.color = 'green'
	icon.classList.remove('rotate-90')
	icon.classList.add('rotate90')
	productsSpan.textContent = 'mostrar productos'
	console.log(icon.classList);
}

// const handleClick = () => lista.classList.toggle('hidden');
console.log(inputName);
const handleChange = (e) => {
	const valor = e.target.value;
	console.log('el valor cambio a: ', e.target.value);
	const tieneEspacios = valor.split(" ");
	console.log(tieneEspacios);
	if(tieneEspacios.length > 1 ) {
		inputName.style.outline = '1px solid red'
		return
	}
	if(valor.length === 0){
		inputName.style.outline = 'none'
		return
	}
	if(valor.length > 7){
		inputName.style.outline = '1px solid green';
		return
	}
	inputName.style.outline = '1px solid red'
}

productsSpan.addEventListener('click', handleClick);
// inputName.addEventListener('focus', (e) => {
// 	console.log('focus');
// });
// inputName.addEventListener('blur', (e) => {
// 	console.log('blur');
// });
// inputName.addEventListener('change', handleChange);
inputName.addEventListener('input', handleChange);
// productsSpan.addEventListener('click', (e) => handleClick(e));






