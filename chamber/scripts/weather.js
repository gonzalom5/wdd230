const url = "https://api.openweathermap.org/data/2.5/weather?q=Santiago,cl&appid=bcc966acb1fdd4d27d55a51f8f5f65d6&units=imperial";

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
    chamberTemperature.className="temp"
    chamberTemperature.textContent = Math.floor(day.main.temp) + "°"

    const chamberDescription=document.createElement('p')
    chamberDescription.className='desc'
    chamberDescription.textContent = day.weather[0].description
    
    const chamberIcon = document.createElement('img')
    chamberIcon.src = `//openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`
    chamberIcon.alt = day.weather[0].description

    const theWeather = document.createElement('div')
    theWeather.appendChild(chamberTemperature)
    theWeather.appendChild(chamberDescription)
    theWeather.appendChild(chamberIcon)
    forecast.appendChild(theWeather)
  })
}