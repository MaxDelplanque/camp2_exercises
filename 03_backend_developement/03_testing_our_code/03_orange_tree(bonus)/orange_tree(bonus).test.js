const orangeTree = require("./03_orange_tree");

beforeEach(() => {
  orangeTree.seed();
});

describe("orangeTree", () => {
  // the Orange Tree should age each year
  test("should age each year", () => {
    orangeTree.age = 0;
    orangeTree.ageOneYear();
    expect(orangeTree.age).toBe(1);
    expect(orangeTree.height).toBe(25);
    expect(orangeTree.oranges).toBe(0);
    expect(orangeTree.alive).toBe(true);
  });

  // When we seed an orangeTree, it resets all its attributes
  test("should resets all attributes of orangeTree when we seed it",() => {
    orangeTree.ageOneYear();
    orangeTree.seed();
    expect(orangeTree.alive).toBe(true);
    expect(orangeTree.height).toBe(0);
    expect(orangeTree.age).toBe(0);
    expect(orangeTree.oranges).toBe(0);
  });

  test("should pick an orange if it has some",() => {
    orangeTree.oranges = 1;
    expect(orangeTree.pickAnOrange()).toBe(true);
  });

  test("should not be able to pick 2 oranges when there is 1", () => {
    orangeTree.oranges = 1;
    expect(orangeTree.pickAnOrange()).toBe(true);
    expect(orangeTree.pickAnOrange()).toBe(false);
  });

  test("Test 4 years old", () =>{
    for(let i = 0; i < 4; i++){
      orangeTree.ageOneYear();
    }
    expect(orangeTree.height).toBe(25 * 4);
    expect(orangeTree.oranges).toBe(0);
    expect(orangeTree.alive).toBe(true);
  });
  test("Test 5 years old", () =>{
    for(let i = 0; i < 5; i++){
      orangeTree.ageOneYear();
    }
    expect(orangeTree.height).toBe(25 * 5);
    expect(orangeTree.oranges).toBe(10);
    expect(orangeTree.alive).toBe(true);
    expect(orangeTree.age).toBe(5);
  });

  test("Test 8 years old", () =>{
    for(let i = 0; i < 8; i++){
      orangeTree.ageOneYear();
    }
    expect(orangeTree.height).toBe(25 * 8);
    expect(orangeTree.oranges).toBe(10);
    expect(orangeTree.alive).toBe(true);
    expect(orangeTree.age).toBe(8);
  });

  test("Test 10 years old", () =>{
    for(let i = 0; i < 10; i++){
      orangeTree.ageOneYear();
    }
    expect(orangeTree.height).toBe(25 * 9 + 10);
    expect(orangeTree.oranges).toBe(20);
    expect(orangeTree.alive).toBe(true);
    expect(orangeTree.age).toBe(10);
  });

  test("Test 20 years old", () =>{
    for(let i = 0; i < 20; i++){
      orangeTree.ageOneYear();
    }
    expect(orangeTree.height).toBe(25 * 9 + 10 * 10);
    expect(orangeTree.oranges).toBe(5);
    expect(orangeTree.alive).toBe(true);
    expect(orangeTree.age).toBe(20);
  });

  test("Test 40 years old", () =>{
    for(let i = 0; i < 40; i++){
      orangeTree.ageOneYear();
    }
    expect(orangeTree.height).toBe(25 * 9 + 10 * 10);
    expect(orangeTree.oranges).toBe(0);
    expect(orangeTree.alive).toBe(true);
    expect(orangeTree.age).toBe(40);
  });
  // it should not die until it is at least 50 years old and can't get past 100 years
  test("You should not die before 50, but you should before 100", () =>{
    for(let i = 0; i < 50; i++){
      orangeTree.ageOneYear();
    }
    expect(orangeTree.alive).toBe(true);

    for(let i = 50; i <= 100; i++){
      orangeTree.ageOneYear();
    }
    expect(orangeTree.alive).toBe(false);
  });
});

// it should grow each year:
// 25 centimeters until it is 10 years old
// 10 centimeters until it is 20 years old


// it should produce each year:
// 10 oranges when it's between 5 and 10 years old
// 20 oranges when it's between 10 and 20 years old
// 5 oranges until it's 40 years old
