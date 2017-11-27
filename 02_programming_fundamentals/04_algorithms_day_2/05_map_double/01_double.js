// Create a function `double` which take an array of integer as parameter and return a new array with all values doubled.
// WARNING: You're not allowed to use `Array.map`!

function double (list) {
  const newArray = [];
  for ( let i = 0; i < list.length; i++) {
    newArray.push(2 * list[i]);
  }
  return newArray;
}

double([1, 2, 3, 4]);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = double;
