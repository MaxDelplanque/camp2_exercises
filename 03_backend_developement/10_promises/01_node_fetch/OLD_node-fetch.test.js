const fetch = require("./node-fetch");

test("should give the title brand of the product with a given id", () => {
  expect.assertions(1);

  return fetch("efe288cb-fb63-4b23-b8df-529f04b8b02b")
    .then((result) => expect(result).toEqual("QUECHUA"));
});
