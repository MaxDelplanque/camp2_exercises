const greet = require("./greeting");

describe("test greet function", () => {
  test("say hello to MAX", () => {
    const result = greet("max");
    expect(result).toBe("Hello MAX!");
  });
  test("say hello to World", () => {
    const result = greet(null);
    expect(result).toBe("Hello WORLD!");
  });
});
