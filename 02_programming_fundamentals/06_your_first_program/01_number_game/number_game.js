// Using stream. Write a program that generates a random number
//between 1 and 100 (the mystery number) and asks the user to write
//a number (he should try to guess the number).
//
// Here are the available answers of the program:
//
// It's not a number: "This was not a number"
// Out of range: "The number is between 1 and 100
// Too low: "Too low"
// Too high: "Too high"
// The program must loop until the user guesses the right number.

// Creation d'un Stream :
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const mysteryNumber = Math.floor(Math.random() * 101);
//console.log(mysteryNumber);

function guessNumber(answer) {
  const integeranswer = parseInt(answer, 10);
  if (integeranswer === mysteryNumber ) {
    console.log("You won!");
    reader.close();
  } else if (!Number.isInteger(integeranswer)) {
    reader.question("This was not a number\n", guessNumber);
  } else if (integeranswer <= 0 || integeranswer > 100) {
    reader.question("The number is between 1 and 100\n", guessNumber);
  } else if (integeranswer < mysteryNumber ) {
    reader.question("Too low\n", guessNumber);
  } else if (integeranswer > mysteryNumber) {
    reader.question("Too high\n", guessNumber);
  }
}

reader.question("Guess a number between 1 and 100\n", guessNumber);
