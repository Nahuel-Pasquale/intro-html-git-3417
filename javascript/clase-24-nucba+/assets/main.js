const btnContainer = document.querySelector(".pagination");
const prevBTN = document.querySelector(".left");
const nextBTN = document.querySelector(".right");
const cardsContainer = document.querySelector(".cards-container");
const pageNumber = document.querySelector(".page-number");
const filterButtons = document.querySelectorAll(".btn");
const filterContaiener = document.querySelector(".filter-container");

const ImgBaseUrl = "https://image.tmdb.org/t/p/original";

const appState = {
  page: null,
  total: null,
  searchParameter: TRENDING,
}

const setPaginationState = () => {
  pageNumber.innerHTML = appState.page;
}

const formatVoteAverage = (vote) => {
  return Math.floor(vote * 10)
}

const formatDate = (date) => {
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`
}

const createCardTemplate = (movie) => {
  const { poster_path, title, vote_average, release_date } = movie;
  return `
    <div class="card">
      <img loading="lazy" src="${
        poster_path ? ImgBaseUrl + poster_path : './assets/img/placeholder.png'
      }" alt="${title}" class="card-img" />
      <div class="card-popularity">${formatVoteAverage(vote_average)}% de popularidad</div>
      <div class="card-content">
          <h2>${title}</h2>
          <p>Fecha de estreno: ${formatDate(release_date)}</p>
      </div>
    </div>
  `
}

const renderCards = (movies) => {
  cardsContainer.innerHTML = movies
    .map(movie => createCardTemplate(movie))
    .join('');
}

const renderLoader = () => {
  return `   
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  `;
}

const showMovies = async () => {
  cardsContainer.innerHTML = renderLoader();
  const movies = await getMovies(appState.searchParameter);
  appState.total = movies.total_pages;
  appState.page = movies.page;
  setPaginationState();
  loadAndShow(movies);
}

const changePage = async () => {
  cardsContainer.innerHTML = renderLoader();
  const movies = await getMovies(appState.searchParameter, appState.page);
  setPaginationState();
  loadAndShow(movies);
}

const nextPage = () => {
  if (appState.page === appState.total) return;
  appState.page++;
  changePage();
}
const previousPage = () => {
  if (appState.page === 1) return;
  appState.page--;
  changePage();
}

const loadAndShow = (movies) => {
  setTimeout(() => {
    renderCards(movies.results);
    filterContaiener.scrollIntoView({
      behavior: 'smooth',
    })
  }, 1500)
}

const parameterSelector = (selectedParameter) => {
  return selectedParameter === 'TOPRATED'
    ? TOPRATED
    : selectedParameter === 'UPCOMING'
    ? UPCOMING
    : TRENDING
}

const setActiveButton = (selectedParameter) => {
  const buttons = [...filterButtons];

  buttons.forEach((btn) => {
    if (btn.dataset.filter === selectedParameter) {
      btn.classList.add('btn--active')
    } else {
      btn.classList.remove('btn--active')
    }
  })
}

const changeSearchParameter = (e) => {
  if(!e.target.classList.contains('btn') && !e.target.classList.contains('btn--active')) return;
  const selectedParameter = e.target.dataset.filter;
  appState.searchParameter = parameterSelector(selectedParameter);
  setActiveButton(selectedParameter);
  showMovies();
}

const init = async () => {
  window.addEventListener("DOMContentLoaded", showMovies);
  nextBTN.addEventListener('click', nextPage);
  prevBTN.addEventListener('click', previousPage);
  filterContaiener.addEventListener('click', changeSearchParameter);
}

init();
