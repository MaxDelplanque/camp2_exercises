const toWords = require("./to_words_bonus");

test("should transform sentence in words like we want", () => {
  const result = toWords("I love chocolate");
  expect(result).toEqual(["I","love","chocolate"]);
});

test("should work even if `?` is present ", () => {
  const result = toWords("I love chocolate?");
  expect(result).toEqual(["I","love","chocolate"]);
  //expect(result).not.toEqual(["I","love","chocolate","?"]); //autre façon de tester
});

//pour le bonus:
test("should work even if `;` is present", () => {
  const result = toWords("I love chocolate; oh yeah");
  expect(result).toEqual(["I","love","chocolate","oh","yeah"]);
});
