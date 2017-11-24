/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:

   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.
*/

function fizzBuzz(list) {
  const newList = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 3 === 0 && list[i] % 5 === 0) {
      newList[i] = "FizzBuzz";
    } else if (list[i] % 5 === 0) {
      newList[i] = "Buzz";
    } else if (list[i] % 3 === 0) {
      newList[i] = "Fizz";
    } else {
      newList[i] = list[i];
    }
  }
  return newList;
}

// function range(startNumber, endNumber) {
//   const array = [];
//   if (startNumber < endNumber) {
//     for (let i = startNumber; i <= endNumber; i++) {
//       array.push(i);
//     }
//   } else {
//     for (let i = startNumber; i >= endNumber ; i--) {
//       array.push(i);
//     }
//   }
//   return array;
// }
//
// const array_test = range (1,20);
// console.log(fizzBuzz(array_test));

module.exports = fizzBuzz;
