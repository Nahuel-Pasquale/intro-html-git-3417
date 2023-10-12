const productsContainer = document.querySelector('.products-container');
const showMoreBtn = document.querySelector('.btn-load');
const categoriesContainer = document.querySelector('.categories');
const categoriesList = document.querySelectorAll('.category');


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


const init = () => {
  renderProducts(appState.products[appState.currentProductsIndex]);
  showMoreBtn.addEventListener('click', showMoreProducts);
  categoriesContainer.addEventListener('click', apllyFilter);
};

init();