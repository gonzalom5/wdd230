const chamberWeather = "https://api.openweathermap.org/data/2.5/weather?lat=-33.4569&lon=-70.64827&appid=bcc966acb1fdd4d27d55a51f8f5f65d6&units=imperial";

fetch(chamberWeather)
  .then((response) => response.json())
  .then((allData) => {
    forcastWeather2(allData.list)
})

function forcastWeather(weatherResults) {
  const noonWeather = weatherResults.filter(result => result.dt_txt.substring(11, 13) == '00');
  showForecast(noonWeather)
}

function forcastWeather2(weatherResults) {
  let noonWeather2=[]
  weatherResults.forEach((listItem) => {
    if (listItem.dt_txt.substring(11, 13) == '00') {
      noonWeather2.push(listItem)
    }
})
  showForecast(noonWeather2)
}

function showForecast(chamberForecast) {  
  const forecast = document.querySelector('#forecast')
  chamberForecast.forEach((day) => {
    const chamberTemperature=document.createElement('p')
    cityTemp.className="temp"
    cityTemp.textContent = Math.floor(day.main.temp) + "°"

    const chamberDesc=document.createElement('p')
    chamberDesc.className='desc'
    chamberDesc.textContent = day.weather[0].description
    
    const chamberIcon = document.createElement('img')
    chamberIcon.src = `//openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
    chamberIcon.alt = day.weather[0].description

    const theWeather = document.createElement('div')
    theWeather.appendChild(cityTemp)
    theWeather.appendChild(chamberDesc)
    theWeather.appendChild(chamberIcon)
    forecast.appendChild(theWeather)
  });
}