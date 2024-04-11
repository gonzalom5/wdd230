const coordinatesWeather = "https://api.openweathermap.org/data/2.5/weather?lat=-33.4569&lon=-70.64827&appid=bcc966acb1fdd4d27d55a51f8f5f65d6&units=imperial";

fetch(coordinatesWeather)
  .then((response) => response.json())
  .then((allData) => {
    showWeather(allData)
});

function showWeather(allData) {
    const tempToday = document.querySelector('#temp');
    tempToday.textContent = Math.floor(allData.main.temp)+'°';
    const conditionsToday = document.querySelector('#desc');
    conditionsToday.textContent = allData.weather[0].description;
    const cityName = document.querySelector('#city');
    cityName.textContent = allData.name;
    console.log(allData);
}