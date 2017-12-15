const fetch = require("node-fetch");

const API_KEY = process.env.OPENWEATHER_API_KEY;

function weatherByCity(cityName,countryCode) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&APPID=${API_KEY}&units=metric`,
    {method: "GET"})
    .then((response) => response.json())
    .then((result) => `${result.main.temp} °C`)
    .catch((error) => {
      console.warn(error);
    });
}

weatherByCity("Lille","fr")
  .then((resp) => console.log(resp));

module.exports = weatherByCity ;
