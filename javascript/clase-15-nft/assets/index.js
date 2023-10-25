const productsContainer = document.querySelector('.products-container');
const showMoreBtn = document.querySelector('.btn-load');
const categoriesContainer = document.querySelector('.categories');
const categoriesList = document.querySelectorAll('.category');
const menuBtn = document.querySelector('.menu-label');
const cartBtn = document.querySelector('.cart-label');
const barsMenu = document.querySelector('.navbar-list');
const cartMenu = document.querySelector('.cart');
const overlay = document.querySelector('.overlay');
const productsCart = document.querySelector('.cart-container');
const cartBubble = document.querySelector('.cart-bubble');
const cartTotal = document.querySelector('.total');
const buyBtn = document.querySelector('.btn-buy');
const deleteBtn = document.querySelector('.btn-delete');
const successModal = document.querySelector('.add-modal');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

console.log('CARRITO ==> ', cart);

const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// LOGICA DE PRODUCTOS

const createProductTemplate = (product) => {
  const { id, name, bid, user, userImg, cardImg } = product
  return `
      <div class="product">
      <img src=${cardImg} alt=${name} />
      <div class="product-info">
          <div class="product-top">
              <h3>${name}</h3>
              <p>Current Bid</p>
          </div>

          <div class="product-mid">
              <div class="product-user">
                  <img src=${userImg} alt="user" />
                  <p>@${user}</p>
              </div>
              <span>${bid} eTH</span>
          </div>
          <div class="product-bot">
              <div class="product-offer">
                  <div class="offer-time">
                      <img src="./assets/img/fire.png" alt="" />
                      <p>05:12:07</p>
                  </div>
                  <button 
                    class="btn-add"
                    data-id='${id}'
                    data-name='${name}'
                    data-bid='${bid}'
                    data-img='${cardImg}'
                  >
                      Add
                  </button>
              </div>
          </div>
      </div>
    </div>
  `
}

const renderProducts = (productsList) => {
  productsContainer.innerHTML += productsList
    .map(createProductTemplate)
    .join('')
}

const showMoreProducts = () => {
  appState.currentProductsIndex += 1;
  const { products, currentProductsIndex, productsLimit } = appState;
  renderProducts(products[currentProductsIndex]);
  if(currentProductsIndex === productsLimit - 1) {
    showMoreBtn.classList.add('hidden');
  }
}

// LOGICA DE FILTROS

const isIniactiveFilterBtn = (element) => {
  return (
    element.classList.contains("category") && 
    !element.classList.contains('active')
  );
};

const changeBtnActiveState = (filter) => {
  const categories = [...categoriesList];
  categories.forEach((btn) => {
    if(btn.dataset.category !== filter) {
      btn.classList.remove('active');
      return;
    }
    btn.classList.add('active');
  })
}

const setShowMoreVisibility = () => {
  if(!appState.activeFilter) {
    showMoreBtn.classList.remove('hidden');
    return;
  }
  showMoreBtn.classList.add('hidden');
}

const changeFilterState = (element) => {
  appState.activeFilter = element.dataset.category;
  changeBtnActiveState(appState.activeFilter);
  setShowMoreVisibility();
}

const renderFilteredProducts = () => {
  const { activeFilter, currentProductsIndex, products } = appState
  productsContainer.innerHTML = '';
  if(!activeFilter) {
    appState.currentProductsIndex = 0;
    renderProducts(products[currentProductsIndex]);
    return;
  }
  const filteredProducts = productsData.filter(
    (product) => product.category === activeFilter
  );
  renderProducts(filteredProducts);
}

const apllyFilter = ({ target }) => {
  if(!isIniactiveFilterBtn(target)) return;
  changeFilterState(target);
  renderFilteredProducts();
}

// LOGICA DE MENU

const toggleMenu = () => {
  barsMenu.classList.toggle('open-menu');
  if(cartMenu.classList.contains('open-cart')){
    cartMenu.classList.remove('open-cart');
    return;
  }
  overlay.classList.toggle('show-overlay');
}

const toggleCart = () => {
  cartMenu.classList.toggle('open-cart');
  if(barsMenu.classList.contains('open-menu')){
    barsMenu.classList.remove('open-menu');
    return;
  }
  overlay.classList.toggle('show-overlay');
}

const closeOnOverlayClick = () => {
  barsMenu.classList.remove('open-menu');
  cartMenu.classList.remove('open-cart');
  overlay.classList.remove('show-overlay');
}

const closeOnClick = (e) => {
  if(!e.target.classList.contains('navbar-link')) return;
  barsMenu.classList.remove('open-menu');
  overlay.classList.remove('show-overlay');
}

const closeOnScroll = () => {
  barsMenu.classList.remove('open-menu');
  cartMenu.classList.remove('open-cart');
  overlay.classList.remove('show-overlay');
}

// LOGICA DEL CARRITO

const renderCart = () => {
  if(!cart.length){
    productsCart.innerHTML = `<p class='empty-msg'> No hay productos en el carrito. </p>`
    return;
  }
  productsCart.innerHTML = cart.map(createCartProductTemplate).join('');
}

const createCartProductTemplate = (e, i) => {
  const { id, name, bid, img, quantity } = e
  return `<div class="cart-item">
            <img src=${img} alt="Nft del carrito" />
            <div class="item-info">
              <h3 class="item-title">${name}</h3>
              <p class="item-bid">Current bid</p>
              <span class="item-price">${bid} ETH</span>
            </div>
            <div class="item-handler">
              <span class="quantity-handler down" data-id=${id}>-</span>
              <span class="item-quantity">${quantity}</span>
              <span class="quantity-handler up" data-id=${id}>+</span>
            </div>
          </div>`;
}

const createProductData = (product) => {
  const { bid, id, name, img } = product
  return { bid, id, name, img }
}

const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct
  })
}

const isExistingCartProduct = (product) => {
  return cart.some((item) => item.id === product.id);
}

const createCartProduct = (product) => {
  cart = [...cart, { ...product, quantity: 1 }]
}

const addProduct = (e) => {
  if(!e.target.classList.contains('btn-add')) return;
  console.log(e.target.dataset);
  const product = createProductData(e.target.dataset);

  if(isExistingCartProduct(product)){
    addUnitToProduct(product);
    showSuccessModal('Se agregó una unidad del producto al carrito');
  } else {
    createCartProduct(product);
    showSuccessModal('El producto se ha agregado al carrito');
  }
  updateCartState();
}

const renderCartBubble = () => {
  cartBubble.textContent = cart.reduce((acc, cur) => acc + cur.quantity, 0);
}

const showCartBubble = () => {
  cartBubble.textContent = cart.reduce((acc, cur) => acc + cur.quantity, 0);
}

const showCartTotal = () => {
  const total = cart.reduce((acc, cur) => 
    acc + Number(cur.bid) * cur.quantity, 0)

  cartTotal.textContent = `${total.toFixed(2)} eTH`;
}

const updateCartState = () => {
  saveCart();
  renderCart();
  showCartTotal();
  renderCartBubble();
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
}

const handleQuantity = (e) => {
  if(e.target.classList.contains('down')) {
    handleMinusBtnEvent(e.target.dataset.id)
  } else if (e.target.classList.contains('up')) {
    handlePlusBtnEvent(e.target.dataset.id)
  }
  updateCartState();
}

const handleMinusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);
  console.log(existingCartProduct)
  if(existingCartProduct.quantity === 1){
    removeProductFromCart(existingCartProduct);
    return;
  }
  substractProductUnit(existingCartProduct);
}

const removeProductFromCart = (product) => {
  cart = cart.filter((prod) => prod.id !== product.id);
}

const substractProductUnit = (product) => {
  cart = cart.map((prod) => {
    return prod.id === product.id
      ? { ...prod, quantity: Number(product.quantity) - 1 }
      : prod;
  })
}

const handlePlusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);
  addUnitToProduct(existingCartProduct);
}

const deleteCart = () => {
  if(window.confirm('Estás seguro que queres vaciar el carrito?')) {
    resetCartItems();
    alert('tu carrito está vacío')
  }
}

const resetCartItems = () => {
  cart = [];
  updateCartState();
}

const completeBuy = () => {
  if(window.confirm('Desea completar su comlpra?')) {
    resetCartItems();
    alert('Gracias por su compra!')
  }
}

const disableBtn = (btn) => {
  if(cart.length) {
    btn.classList.remove('disabled');
  } else {
    btn.classList.add('disabled');
  }
}

const showSuccessModal = (msg) => {
  successModal.classList.add('active-modal');
  successModal.textContent = msg;
  setTimeout(() => {
    successModal.classList.remove('active-modal');
  }, 3000);
}


const init = () => {
  renderProducts(appState.products[appState.currentProductsIndex]);
  showMoreBtn.addEventListener('click', showMoreProducts);
  categoriesContainer.addEventListener('click', apllyFilter);
  menuBtn.addEventListener('click', toggleMenu);
  cartBtn.addEventListener('click', toggleCart);
  barsMenu.addEventListener('click', closeOnClick)
  overlay.addEventListener('click', closeOnOverlayClick);
  window.addEventListener('scroll', closeOnScroll);
  window.addEventListener('DOMContentLoaded', renderCart);
  window.addEventListener('DOMContentLoaded', showCartBubble);
  window.addEventListener('DOMContentLoaded', showCartTotal);
  productsContainer.addEventListener('click', addProduct);
  productsCart.addEventListener('click', handleQuantity);
  buyBtn.addEventListener('click', completeBuy);
  deleteBtn.addEventListener('click', deleteCart);
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
};

init();