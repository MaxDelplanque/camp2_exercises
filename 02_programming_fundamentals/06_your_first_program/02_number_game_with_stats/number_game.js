//Based on previous exercises, add a number of tries in the program.
// When the user won, display a message with the number of tries
//(Bonus: display a funny message when he success in one try).

// Creation d'un Stream :
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const mysteryNumber = Math.floor(Math.random() * 101);
console.log(mysteryNumber);
let counter = 0;

function guessNumber(answer) {
  const integeranswer = parseInt(answer, 10);
  counter = counter +1;
  if (integeranswer === mysteryNumber) {
    if (counter === 1) {
      console.log("You are the best, you found direcly the good number!");
    } else {
      console.log("You won in " + counter + " steps!");
    }
    reader.close();
  } else if (!Number.isInteger(integeranswer)) {
    reader.question("This was not a number\n", guessNumber);
  } else if (integeranswer < 1 || integeranswer > 100) {
    reader.question("The number is between 1 and 100\n", guessNumber);
  } else if (integeranswer < mysteryNumber ) {
    reader.question("Too low\n", guessNumber);
  } else if (integeranswer > mysteryNumber) {
    reader.question("Too high\n", guessNumber);
  }
}

reader.question("Guess a number between 1 and 100\n", guessNumber);
