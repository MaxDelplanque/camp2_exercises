// This function will clear the terminal when called
const clear = require("cli-clear");

// The memory is a game where you have turned-over cards in front of you
// and you must find pairs. You can return two cards at a time, if
// they are the same, they stay visible, if not,
// they go back to being flipped over.
//
// Instead of cards, we will be using emojis and you can start with these:
//
// const cards = ["🐰", "🐰", "🎃", "🎃", "🌲","🌲"];
// For this progran, you will need to install packages in the exercise
// directory. You do that with the command npm install.
// It will allow you to use the clear() function that will clear
// your terminal (you need to show only the cards you found).

// Creation d'un Stream :
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const cards = ["🐰", "🐰", "🎃", "🎃", "🌲","🌲"];
let returnedCards = [];


function findPairs(answer) {
  if (answer === "fine") {
    console.log("Great!");
    reader.close();
  } else {
    reader.question("How are you, really?", findPairs);
  }
}

reader.question("Find the pairs!", findPairs);
