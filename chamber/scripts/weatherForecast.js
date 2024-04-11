const chamberWeather = "https://api.openweathermap.org/data/2.5/forecast?lat=-33.4569&lon=-70.64827&appid=bcc966acb1fdd4d27d55a51f8f5f65d6&units=imperial";

fetch(chamberWeather)
  .then((response) => response.json())
  .then((allData) => {
    const threeDayForecast = getThreeDayForecast(allData.list);
    showForecast(threeDayForecast);
  });

function getThreeDayForecast(weatherResults) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const afterTomorrow = new Date(tomorrow);
  afterTomorrow.setDate(afterTomorrow.getDate() + 1);

  const threeDayForecast = {
    today: null,
    tomorrow: null,
    afterTomorrow: null
  };

  weatherResults.forEach((result) => {
    const forecastDate = new Date(result.dt_txt).getDate();
    if (forecastDate === today.getDate() && !threeDayForecast.today) {
      threeDayForecast.today = result;
    } else if (forecastDate === tomorrow.getDate() && !threeDayForecast.tomorrow) {
      threeDayForecast.tomorrow = result;
    } else if (forecastDate === afterTomorrow.getDate() && !threeDayForecast.afterTomorrow) {
      threeDayForecast.afterTomorrow = result;
    }
  });

  return threeDayForecast;
}

function showForecast(threeDayForecast) {  
  const forecast = document.querySelector('#forecast');
  forecast.innerHTML = '';

  Object.values(threeDayForecast).forEach((day) => {
    if (day) {
      const cityTemp = document.createElement('p');
      cityTemp.className = "temp";
      cityTemp.textContent = Math.floor(day.main.temp) + "°";

      const chamberDesc = document.createElement('p');
      chamberDesc.className = 'desc';
      chamberDesc.textContent = day.weather[0].description;

      const chamberIcon = document.createElement('img');
      chamberIcon.src = `//openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
      chamberIcon.alt = day.weather[0].description;

      const theWeather = document.createElement('div');
      theWeather.appendChild(cityTemp);
      theWeather.appendChild(chamberDesc);
      theWeather.appendChild(chamberIcon);
      forecast.appendChild(theWeather);
    }
  });
}
