// Write a function `joinArray` and implement it using `reduce`:
// * Input: an array AND a string separator
// * Output: a string with each elements separated by the `separator`
//
// eg: join(["zero", "one", "two"], "-") => "zero - one - two"

function joinArray(list,str) {
  return list.reduce(
    function(stringSuite, element) {
      return stringSuite + str + element;
    });
}

joinArray(["zero", "one", "two"], "-");

// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = joinArray;
