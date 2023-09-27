const baseUrl = 'https://api.weatherapi.com/v1/current.json?key=';
/**
 * Gets data
 * @param {string} city defines which city to get data for
 * @param {string} key = weatherapi key
 */
async function getCurrentData(city, key) {
  const fullUrl = `${baseUrl}${key}&q=${city}&aqi=no`;
  const result = await fetch(fullUrl, {mode: 'cors'});
  const data = await result.json();
  return data;
}

export default getCurrentData;
