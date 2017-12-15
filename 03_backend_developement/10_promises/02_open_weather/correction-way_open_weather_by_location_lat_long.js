const fetch = require("node-fetch");

const API_KEY = process.env.OPENWEATHER_API_KEY;

function weatherByLatitudeAndLongitude(latitude, longitude) {
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`,
    {method: "GET"})
    .then ((response) => response.json())
    .then ((forecasts) => forecasts.list.map(reformatForecast))
    .catch((error) => {
      console.warn(error);
    });
}

function reformatForecast(forecast) {
  return {
    date: timestampToDate(forecast.dt),
    temperature: forecast.main.temp,
    weather: {
      id: forecast.weather[0].id,
      main: forecast.weather[0].main,
      description: forecast.weather[0].description
    }
  };
}

function timestampToDate(timestamp) {
  const date = new Date(timestamp * 1000);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

weatherByLatitudeAndLongitude(35, 139)
  .then((result) => console.log(result));
