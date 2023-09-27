import getCurrentData from './getCurrentData';
// weatherapi key
const key = 'c6bac9574134424aa7014242232309';

const b = document.createElement('button');
b.innerText = 'Click Me!';
document.body.appendChild(b);
const p = document.createElement('p');
document.body.appendChild(p);

b.addEventListener('click', async () => {
  const data = await getCurrentData(prompt('City?'), key);
  p.innerText = `City: ${data.location.name}, ${data.location.country}`;
  p.innerHTML += `<br>Current temperature: ${data.current.temp_c} °C`;
});
