const fetch = require("node-fetch");

const API_KEY = process.env.OPENWEATHER_API_KEY;

function weatherByLatitudeAndLongitude(latitude,longitude) {
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`,
    {method: "GET"})
    .then ((response) => response.json())
    .then ((result) => result.list.map(function(element) {
      const date = new Date(element.dt*1000);//en milliseconde, donc *1000
      const YYYY = date.getFullYear();
      const mm = date.getMonth() + 1;
      const dd = date.getDate();
      const fullDate = dd + "/" + mm + "/" + YYYY ;
      return {
        date: fullDate,
        temperature: element.main["temp"],
        weather: {
          id:element.weather[0]["id"],
          main:element.weather[0]["main"],
          description:element.weather[0]["description"]
        }
      };
    }))
    .catch((error) => {
      console.warn(error);
    });
}

weatherByLatitudeAndLongitude(32.661343,51.680374)
  .then((resp) => console.log(resp));

module.exports = weatherByLatitudeAndLongitude;
