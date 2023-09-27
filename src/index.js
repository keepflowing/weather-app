import getCurrentData from './getCurrentData';
// weatherapi key
const key = 'c6bac9574134424aa7014242232309';

const b = document.createElement('button');
b.innerText = 'Click Me!';
document.body.appendChild(b);
const p = document.createElement('p');

const h3 = document.createElement('h3');
h3.innerText = 'Forecast:';
const p2 = document.createElement('p');

b.addEventListener('click', async () => {
  const data = await getCurrentData(prompt('City?'), key);
  p.innerText = `City: ${data.location.name}, ${data.location.country}`;
  p.innerHTML += `<br>Current temperature: ${data.current.temp_c} °C`;
  p.innerHTML += `, feels like: ${data.current.feelslike_c} °C`;
  p.innerHTML += `<br>Current conditions: ${data.current.condition.text}`;
  let iconUrl = [...data.current.condition.icon];
  iconUrl.splice(0, 2);
  iconUrl = 'https://' + iconUrl.join('');
  p.innerHTML += `<br><img src='${iconUrl}'>`;
  p.innerHTML += `<br>Humidity: ${data.current.humidity}%`;
  p.innerHTML += ` | Wind speed: ${data.current.wind_kph} km/h`;

  p2.innerText = `${data.forecast.forecastday[1].date}`;
  p2.innerHTML += `<br>Max temp: ${data.forecast.forecastday[1].day.maxtemp_c}`;
  p2.innerHTML += `<br>Min temp: ${data.forecast.forecastday[1].day.mintemp_c}`;
  document.body.appendChild(p);
  document.body.appendChild(h3);
  document.body.appendChild(p2);
});
