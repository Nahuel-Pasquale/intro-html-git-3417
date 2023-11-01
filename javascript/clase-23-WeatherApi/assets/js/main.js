const form = document.getElementById('form');
const cityInput = document.getElementById('input');
const cardContainer = document.querySelector('.card-container');

const isEmptyInput = () => {
  return cityInput.value.trim() === '';
}

const renderCityCard = (city) => {
  cardContainer.innerHTML = createCityTemplate(city);
}

const createCityTemplate = (city) => {
  const { 
    name, 
    weather, 
    main: { feels_like, humidity, temp, temp_max, temp_min } 
  } = city;

  return `
    <div class="weather-card animate">
      <div class="weather-info-container">
        <h2 class="weather-title"> ${name} </h2>
        <p class="weather-description"> ${weather[0].description} </p>
        <div class="weather-temp-container">
          <span class="weather-temp"> ${temp}°</span>
          <span class="weather-st"> ${feels_like}° ST</span>
        </div>
      </div>
      <div class="weather-img-container">
        <img src="./assets/img/${weather[0].icon}.png" alt="weather image" />
      </div>
      <div class="weather-extra-container">
        <div class="weather-minmax-container">
          <span class="weather-span"><i class="fa-solid fa-arrow-up-long"></i>Max: ${temp_max}º</span>
          <span class="weather-span"><i class="fa-solid fa-arrow-down-long"></i>Min:${temp_min}º</span>
        </div>
        <span class="weather-humidity"> ${humidity}% Humedad</span>
      </div>
    </div>
  `
}

const searchCity = async (e) => {
  e.preventDefault();
  if(isEmptyInput()){
    alert('por favor, ingresá una ciudad');
    return;
  }
  const city = await getWeather(cityInput.value);

  if (city.cod === 200) {
    console.log(city);

    renderCityCard(city);
    form.reset();
  }

  alert('ciudad no encontrada');
  form.reset();
}

const init = () => {
  form.addEventListener('submit', searchCity)
}

init();