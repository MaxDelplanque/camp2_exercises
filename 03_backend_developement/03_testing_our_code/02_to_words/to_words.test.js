//We want you to add tests for this code and find if it's possible
//to write at least one test which prove this code is not working as
//it should be.

const toWords = require("./to_words");

test("should transform sentence in words like we want", () => {
  const result = toWords("I love chocolate");
  expect(result).toEqual(["I","love","chocolate"]);
});

test("should work even if `?` is present ", () => {
  const result = toWords("I love chocolate?");
  expect(result).toEqual(["I","love","chocolate"]);
  //expect(result).not.toEqual(["I","love","chocolate","?"]); //autre façon de tester
});
