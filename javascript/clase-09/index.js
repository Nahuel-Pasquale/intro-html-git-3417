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

// pizzas.forEach((pizza) => {
//   const ingredientes = pizza.ingredientes
//   ingredientes.forEach((ingrediente) => {
//     console.log(ingrediente);
//   })
// })

// 1. Imprimir en consola todos los productos que tengan id par. El mensaje tiene que ser user Friendly, es decir, que el usuario entienda que es lo que se está mostrando en consola.

// productos.forEach((producto) => {
//   if( producto.id % 2 === 0 ){
//     console.log(producto)
//   }
// })


// 2. Imprimir en consola todos los productos que tengan envío inmediato. El mensaje tiene que ser user Friendly, es decir, que el usuario entienda que es lo que se está mostrando en consola.

// productos.forEach((producto) => {
//   const { nombre, envioInmediato } = producto;
//   if( envioInmediato ){
//     console.log(`El producto: ${nombre} tiene envío inmediato`)
//   }
// })


// 3. Crear un nuevo array con los mismos productos pero con su precio duplicado. Imprimir en consola el nombre y precio de cada producto.

// const productosConPrecioDuplicado = productos.map( (producto) => {
//   const productoConPrecioDuplicado = producto;
//   productoConPrecioDuplicado.precio *= 2;

//   return productoConPrecioDuplicado;
// } )
// const productosConPrecioDuplicado = productos.map( (producto) => {
//   return {
//     ...producto,
//     precio: producto.precio * 2
//   };
// } )

// 4. imprimir en consola si existe algun producto cuyo precio sea mayor a un precio dado. El mensaje tiene que ser user Friendly, es decir, que el usuario entienda que es lo que se está mostrando en consola.

// const hayProductosConPreciosMayorA = (precio) => {
//   const resultado = productos.some( (producto) => {
//     return producto.precio > precio;
//   } )
//   return resultado 
//     ? console.log(`Hay productos con precio mayor a $${precio}`)
//     : console.log(`No hay productos con precio mayor a $${precio}`);
// }
// hayProductosConPreciosMayorA(15_313);



// 5. Filtrar productos con precio menor a X.

// const filtrarProductosPorPrecioMenorA_ = (precio, arr) => {
//   const productosFiltrados = arr.filter( (producto) => {
//     return producto.precio < precio
//   } )
//   return productosFiltrados;
// }

// const filtrarProductosPorPrecioMayorA_ = (precio, arr) => {
//   const productosFiltrados = arr.filter( (producto) => {
//     return producto.precio > precio
//   } )
//   return productosFiltrados;
// }

// console.log(filtrarProductosPorPrecioMayorA_(6000, productos));

// 6. Cambiar la condición de todos los productos a "usado".

// const productosUsados = productos.map((producto) => {
//   return {
//     ...producto,
//     condicion: 'Usado',
//   }
// })
// console.log(productosUsados)



// 7. Imprimir en consola el nombre y precio de todos los productos que tengan envío inmediato y envío gratuito. El mensaje tiene que ser user Friendly, es decir, que el usuario entienda que es lo que se está mostrando en consola.

// const productosConEnvioInmediatoYGratuito = productos.filter((producto) => {
//   const { envioGratuito, envioInmediato, nombre, precio } = producto;
//   if(envioGratuito && envioInmediato) {
//     console.log(`El producto ${nombre}, que cuesta ${precio}, tiene envio gratuito e inmediato`)
//   }
//   return envioGratuito && envioInmediato;
// })

// productosConEnvioInmediatoYGratuito.forEach((producto) => {
//   const { nombre, precio } = producto
//   console.log(`El producto ${nombre}, que cuesta ${precio}, tiene envio gratuito e inmediato`)
// })


// 8. Filtrar productos por categoria y subcategoria . Traer solo los productos de la categoria Celulares y de la subcategoria Equipos.

// const filtrarPorCategoriaYSubcategoria = productos.filter((producto) => {
//   const { categoria, subcategoria } = producto;
//   return categoria === "Celulares" && subcategoria === "Equipos";
// })

// const filtrarPorCategoriaYSubcategoria = (cat, subcat) => {
//   const productosFiltrados = productos.filter((producto) => {
//     const { categoria, subcategoria } = producto;
//     return categoria.toLowerCase().trim() === cat.toLowerCase().trim()
//       && subcategoria.toLowerCase().trim() === subcat.toLowerCase().trim();
//   })
//   return productosFiltrados;
// }

// console.log(filtrarPorCategoriaYSubcategoria("computacion", "Perifericos"));


// 9. Ordenar productos por precio de mayor a menor.

// const ordenarDeMayorAMenor = () => {
//   const productosOrdenados = productos.sort((a, b) => {
//     return a.precio - b.precio;
//   })
//   return productosOrdenados;
// }

// console.log(ordenarDeMayorAMenor());

// function compareNumbers(a, b) {
//   return a - b;
// }



//10. Ordenar productos por nombre de la A a la Z.


// const ordenarDeMayorAMenorEnBaseAlNombre = () => {
//   const productosOrdenados = productos.sort((a, b) => {
//       if (a.nombre < b.nombre) {
//         return -1;
//       } else if (a.nombre > b.nombre) {
//         return 1;
//       }
//       return 0;
//   })
//   return productosOrdenados;
// }
// const ordenarDeMayorAMenorEnBaseAlNombre = () => {
//   const productosOrdenados = productos.sort((a) => {
//       if (a.boolean) {
//         return -1;
//       } else if (a.boolean) {
//         return 1;
//       }
//       return 0;
//   })
//   return productosOrdenados;
// }

// console.log(ordenarDeMayorAMenorEnBaseAlNombre());



