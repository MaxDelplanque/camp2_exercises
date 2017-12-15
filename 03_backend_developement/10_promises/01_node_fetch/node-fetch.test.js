require("sepia");

const getTitleOfBrandForAProductWithItsId = require("./node-fetch");

test("test with VCR", () => {
  expect.assertions(1);

  return getTitleOfBrandForAProductWithItsId("efe288cb-fb63-4b23-b8df-529f04b8b02b")
    .then((result) => expect(result).toEqual("QUECHUA"));
});
