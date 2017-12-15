const weatherByCity = require("./open_weather_by_city");

test("should give the °C of a city", () => {
  expect.assertions(1);
  return weatherByCity("Lille","fr")
    .then((result) => expect(result).toEqual("3.99 °C"));
});
