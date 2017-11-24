// Write a function that takes two input parameters, and returns a new array with defaults values between the start
// number and the end number.
//
// This function should work in both ascending or descending order.

// Complete this function.
function range(startNumber, endNumber) {
  const array = [];
  if (startNumber < endNumber) {
    for (let i = startNumber; i <= endNumber; i++) {
      array.push(i);
    }
  } else {
    for (let i = startNumber; i >= endNumber ; i--) {
      array.push(i);
    }
  }
  return array;
}

console.log(range(1, 4));
console.log(range(4, 1));


// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = range;
