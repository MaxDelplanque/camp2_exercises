const weatherByLatitudeAndLongitude = require("./my-way_open_weather_by_location_lat_long");

const resu = { date: '15/12/2017',
  temperature: 1.89,
  weather: { id: 802, main: 'Clouds', description: 'scattered clouds' } }

test("should give weather for next 5 days based on latitude and longitude", () => {
  expect.assertions(1);
  return weatherByLatitudeAndLongitude(32.661343,51.680374)
    .then((result) => expect(result[0]).toEqual(resu));
});
