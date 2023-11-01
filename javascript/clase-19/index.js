//
const div = document.getElementById('div');


const url = 'https://fakestoreapi.com/products'

const getData = async (url, id) => {
  const response = await fetch(`${url}/${id || ''}`);
  const data = await response.json();
  // console.log('data ==> ', data);
  return data;
}

const renderProducts = (products) => {
  return products.map((e) => renderProduct(e)).join('');
}

const renderProduct = (product) => {
  const { image, title, price, id } = product
  return `
    <div class="card">
      <img class="card-img" src="${image}" alt="${title}">
      <h3 class="card-title"> ${title} </h3>
      <p class="card-p"> ${price} </p>
      <button class="card-button" data-id="${id}"> Ver Producto </button>
    </div>`
}

const getProduct = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`);
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

const getProductData = async (e) => {
  if (!e.target.classList.contains('card-button')) return;
  const id = e.target.dataset.id;

  const product = await getProduct(id);

  console.log(product);
}

// const init = async () => {
//   const products = await getData(url);
//   div.innerHTML = renderProducts(products);

//   const categories = await getData('https://fakestoreapi.com/products/categories');


//   div.addEventListener('click', getProductData);
// }

const init = async () => {
  const user = await getData('https://randomuser.me/api/?results=20');
  console.log(user)
}

init()