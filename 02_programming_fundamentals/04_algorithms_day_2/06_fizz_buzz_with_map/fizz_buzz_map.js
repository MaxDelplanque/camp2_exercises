/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:
   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.

   YOU MUST USE array.map
*/

function doAFizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else {
    return number;
  }
}

function fizzBuzz(list) {
  const newArray = list.map(doAFizzBuzz);
  return newArray;
}

fizzBuzz([1, 2, 3, 4, 5, 6]);

module.exports = fizzBuzz;

// Exemple:
//
// function increment(number) {
//   return number + 1;
// }
//
// const nextArray = [1, 2, 3].map(increment);
// nextArray === [2, 3, 4];
//
// function fizzBuzz(list) {
//   const newList = [];
//
//   for (let i = 0; i < list.length; i++) {
//     if (list[i] % 3 === 0 && list[i] % 5 === 0) {
//       newList[i] = "FizzBuzz";
//     } else if (list[i] % 5 === 0) {
//       newList[i] = "Buzz";
//     } else if (list[i] % 3 === 0) {
//       newList[i] = "Fizz";
//     } else {
//       newList[i] = list[i];
//     }
//   }
//   return newList;
// }
