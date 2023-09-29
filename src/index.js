import getCurrentData from './getCurrentData';
import './css/reset.css';
import './css/style.css';
// weatherapi key
const key = 'c6bac9574134424aa7014242232309';

const b = document.createElement('button');
b.innerText = 'Click Me!';
document.body.appendChild(b);

const content = document.createElement('div');
content.id = 'content';
document.body.appendChild(content);

const cityTitle = document.createElement('h2');
content.appendChild(cityTitle);

const countryName = document.createElement('h3');
content.appendChild(countryName);

const currentTemp = document.createElement('div');
currentTemp.className = 'flex-row mg-x';
content.appendChild(currentTemp);

const condImg = document.createElement('img');
condImg.className = 'condition-icon';
currentTemp.appendChild(condImg);

const tempFeels = document.createElement('div');
tempFeels.classList.add('flex-column');
currentTemp.appendChild(tempFeels);

const infoDiv = document.createElement('div');
infoDiv.className = 'flex-column';

const p = document.createElement('p');

const h3 = document.createElement('h3');
h3.className = 'margin-1rem';
h3.innerText = 'Forecast:';
const p2 = document.createElement('p');

b.addEventListener('click', async () => {
  getData(prompt('City?'));
});

content.appendChild(b);
content.appendChild(infoDiv);

const getData = async (city) => {
  const data = await getCurrentData(city, key); // prompt('City?');
  cityTitle.innerText = `${data.location.name}`;
  countryName.innerText = `${data.location.country}`;
  tempFeels.innerHTML = '';
  tempFeels.innerHTML += `<h1>${data.current.temp_c}°C</h1>`;
  tempFeels.innerHTML += `<p>Feels ${data.current.feelslike_c}°C</p>`;
  p.innerHTML = `<br>Current conditions: ${data.current.condition.text}`;
  let iconUrl = [...data.current.condition.icon];
  let urlEnd = iconUrl.splice(35);
  urlEnd = urlEnd.join('');
  iconUrl = 'https://cdn.weatherapi.com/weather/128x128/' + urlEnd;
  condImg.src = iconUrl;
  p.innerHTML += `<br>Humidity: ${data.current.humidity}%`;
  p.innerHTML += ` | Wind speed: ${data.current.wind_kph} km/h`;

  p2.innerHTML = `${data.forecast.forecastday[1].date}:<br>`;
  p2.innerHTML += `Max temp: ${data.forecast.forecastday[1].day.maxtemp_c}°C`;
  p2.innerHTML += '<br>';
  p2.innerHTML += `Min temp: ${data.forecast.forecastday[1].day.mintemp_c}°C`;
  p2.innerHTML += `<br><br>${data.forecast.forecastday[2].date}:<br>`;
  p2.innerHTML += `Max temp: ${data.forecast.forecastday[2].day.maxtemp_c}°C`;
  p2.innerHTML += '<br>';
  p2.innerHTML += `Min temp: ${data.forecast.forecastday[2].day.mintemp_c}°C`;
  infoDiv.appendChild(p);
  infoDiv.appendChild(h3);
  infoDiv.appendChild(p2);
};

getData('London');
