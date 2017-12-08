//weatherByLatitudeAndLongitude accept an input like 32.661343, 51.680374

const request = require("request");

const API_KEY = process.env.OPENWEATHER_API_KEY;

function weatherByZipcode(zipcode,countryCode) {
  return request(
    {
      url: `http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${countryCode}&APPID=${API_KEY}&units=metric`,
      method: "GET"
    },
    function(error, response, result) {
      const json = JSON.parse(result);
      console.log(json);
      console.log(json.list.map(function(element) {
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
      }));
    }
  );
}

weatherByZipcode(59650,"fr");

// [
//   {
//     date: "6/12/2017"
//     temperature: -1
//     weather: {
//       "id":500,
//       "main":"Rain",
//       "description":"light rain"
//     }
//   },

module.exports = weatherByZipcode;
