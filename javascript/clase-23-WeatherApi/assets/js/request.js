const APIKEY = '8e99183ac22ab0aeb4e9bb4e89a4da31';


const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
// const queryParams = '?q=${city}&units=metric&lang=es&appid=${APIKEY}';
const getWeather = async (city) => {
  const response = await fetch(`${baseUrl}?q=${city}&units=metric&lang=es&appid=${APIKEY}`);
  const data = await response.json();
  console.log('data ==> ', data);
  return data;
}
