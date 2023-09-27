/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getCurrentData.js":
/*!*******************************!*\
  !*** ./src/getCurrentData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const baseUrl = 'https://api.weatherapi.com/v1/forecast.json?key=';
/**
 * Gets data
 * @param {string} city defines which city to get data for
 * @param {string} key = weatherapi key
 */
async function getCurrentData(city, key) {
  const fullUrl = `${baseUrl}${key}&q=${city}&days=3&aqi=no`;
  const result = await fetch(fullUrl, {mode: 'cors'});
  const data = await result.json();
  return data;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCurrentData);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getCurrentData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrentData */ "./src/getCurrentData.js");

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
  const data = await (0,_getCurrentData__WEBPACK_IMPORTED_MODULE_0__["default"])(prompt('City?'), key);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0EscUJBQXFCLFFBQVEsRUFBRSxJQUFJLEtBQUssS0FBSztBQUM3Qyx1Q0FBdUMsYUFBYTtBQUNwRDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7O1VDYjlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOOEM7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsMkRBQWM7QUFDbkMseUJBQXlCLG1CQUFtQixJQUFJLHNCQUFzQjtBQUN0RSw2Q0FBNkMscUJBQXFCO0FBQ2xFLGtDQUFrQywwQkFBMEI7QUFDNUQsNENBQTRDLDRCQUE0QjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsUUFBUTtBQUMxQyxrQ0FBa0Msc0JBQXNCO0FBQ3hELG1DQUFtQyx1QkFBdUI7O0FBRTFELG9CQUFvQixrQ0FBa0M7QUFDdEQsbUNBQW1DLDJDQUEyQztBQUM5RSxtQ0FBbUMsMkNBQTJDO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXRDdXJyZW50RGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJhc2VVcmwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9Jztcbi8qKlxuICogR2V0cyBkYXRhXG4gKiBAcGFyYW0ge3N0cmluZ30gY2l0eSBkZWZpbmVzIHdoaWNoIGNpdHkgdG8gZ2V0IGRhdGEgZm9yXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5ID0gd2VhdGhlcmFwaSBrZXlcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudERhdGEoY2l0eSwga2V5KSB7XG4gIGNvbnN0IGZ1bGxVcmwgPSBgJHtiYXNlVXJsfSR7a2V5fSZxPSR7Y2l0eX0mZGF5cz0zJmFxaT1ub2A7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGZ1bGxVcmwsIHttb2RlOiAnY29ycyd9KTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRDdXJyZW50RGF0YTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGdldEN1cnJlbnREYXRhIGZyb20gJy4vZ2V0Q3VycmVudERhdGEnO1xuLy8gd2VhdGhlcmFwaSBrZXlcbmNvbnN0IGtleSA9ICdjNmJhYzk1NzQxMzQ0MjRhYTcwMTQyNDIyMzIzMDknO1xuXG5jb25zdCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5iLmlubmVyVGV4dCA9ICdDbGljayBNZSEnO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChiKTtcbmNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbmNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbmgzLmlubmVyVGV4dCA9ICdGb3JlY2FzdDonO1xuY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbmIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRDdXJyZW50RGF0YShwcm9tcHQoJ0NpdHk/JyksIGtleSk7XG4gIHAuaW5uZXJUZXh0ID0gYENpdHk6ICR7ZGF0YS5sb2NhdGlvbi5uYW1lfSwgJHtkYXRhLmxvY2F0aW9uLmNvdW50cnl9YDtcbiAgcC5pbm5lckhUTUwgKz0gYDxicj5DdXJyZW50IHRlbXBlcmF0dXJlOiAke2RhdGEuY3VycmVudC50ZW1wX2N9IMKwQ2A7XG4gIHAuaW5uZXJIVE1MICs9IGAsIGZlZWxzIGxpa2U6ICR7ZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jfSDCsENgO1xuICBwLmlubmVySFRNTCArPSBgPGJyPkN1cnJlbnQgY29uZGl0aW9uczogJHtkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHR9YDtcbiAgbGV0IGljb25VcmwgPSBbLi4uZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uXTtcbiAgaWNvblVybC5zcGxpY2UoMCwgMik7XG4gIGljb25VcmwgPSAnaHR0cHM6Ly8nICsgaWNvblVybC5qb2luKCcnKTtcbiAgcC5pbm5lckhUTUwgKz0gYDxicj48aW1nIHNyYz0nJHtpY29uVXJsfSc+YDtcbiAgcC5pbm5lckhUTUwgKz0gYDxicj5IdW1pZGl0eTogJHtkYXRhLmN1cnJlbnQuaHVtaWRpdHl9JWA7XG4gIHAuaW5uZXJIVE1MICs9IGAgfCBXaW5kIHNwZWVkOiAke2RhdGEuY3VycmVudC53aW5kX2twaH0ga20vaGA7XG5cbiAgcDIuaW5uZXJUZXh0ID0gYCR7ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXRlfWA7XG4gIHAyLmlubmVySFRNTCArPSBgPGJyPk1heCB0ZW1wOiAke2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfY31gO1xuICBwMi5pbm5lckhUTUwgKz0gYDxicj5NaW4gdGVtcDogJHtkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2N9YDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChoMyk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocDIpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=