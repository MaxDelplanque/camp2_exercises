// Code the function weatherByCityName getting a city as input
//and return the temperature from Open Weather such as:
//
// weatherByCity("Bogota")
// > 17°C

const request = require("request");

const API_KEY = process.env.OPENWEATHER_API_KEY;

function weatherByCity(cityName,countryCode) {
  return request(
    {
      url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&APPID=${API_KEY}&units=metric`,
      method: "GET"
    },
    function(error, response, result) {
      const json = JSON.parse(result);
      //console.log(json.main.temp);
      return `${json.main.temp} °C`;
    }
  );
}

weatherByCity("Bogota","co");

module.exports = weatherByCity;
