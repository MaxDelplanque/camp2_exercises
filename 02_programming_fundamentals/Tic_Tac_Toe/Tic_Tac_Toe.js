// Creation d'un Stream :
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Toutes les combi gagnantes :
const WINNING_COORDINATES = [
  [{letter: "a", digit: "0"}, {letter: "a", digit: "1"}, {letter: "a", digit: "2"}],
  [{letter: "b", digit: "0"}, {letter: "b", digit: "1"}, {letter: "b", digit: "2"}],
  [{letter: "c", digit: "0"}, {letter: "c", digit: "1"}, {letter: "c", digit: "2"}],
  [{letter: "a", digit: "0"}, {letter: "b", digit: "1"}, {letter: "c", digit: "2"}],
  [{letter: "a", digit: "2"}, {letter: "b", digit: "1"}, {letter: "c", digit: "0"}],
  [{letter: "a", digit: "0"}, {letter: "b", digit: "0"}, {letter: "c", digit: "0"}],
  [{letter: "a", digit: "1"}, {letter: "b", digit: "1"}, {letter: "c", digit: "1"}],
  [{letter: "a", digit: "2"}, {letter: "b", digit: "2"}, {letter: "c", digit: "2"}]
];

// Code pour le "Display a Grid and initialize state"
const state = {
  a: Array(3).fill(null),
  b: Array(3).fill(null),
  c: Array(3).fill(null)
};

// methode .fill() : remplit tous les éléments d'un tableau entre
//                   deux index avec une valeur statique.

// null: La valeur null est un littéral JavaScript représentant la nullité
// au sens où aucune valeur pour l'objet n'est présente.
// C'est une des valeurs primitives de JavaScript.

let currentPlayer;

// function hasWinner()
// function gameIsFinished()

function handleInput(input) {
  const coordinate = getCoordinate(input);
  if (coordinate) {
    updateState(coordinate);
    if (hasWinner()) {
      console.log(renderBoard());
      console.log(`Congratulations ${currentPlayer}, you won! ＼(＾O＾)／`);
      reader.close();
    } else if (gameIsFinished()) {
      console.log(renderBoard());
      console.log("Looks like it's a tie. Thanks for playing! ¯\\_(ツ)_/¯");
      reader.close();
    } else {
      nextPlayer();
      playTurn();
    }
  } else {
    console.log("This is not a valid move");
    playTurn();
  }
}

function getCoordinate(input) {
  const letter = input[0];
  const digit = input[1] - 1;

  if (state[letter] && state[letter][digit] === null) {
    return { letter: letter, digit: digit };
  } else {
    return null;
  }
}

function updateState(coordinate) {
  const line = state[coordinate.letter];

  line[coordinate.digit] = currentPlayer;
}

function nextPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function playTurn() {
  console.log(renderBoard());
  reader.question(`${currentPlayer}: What is your move? e.g: a1\n`, handleInput);
}

function start() {
  currentPlayer = ["X", "O"][Math.round(Math.random())];
////La fonction Math.round() retourne la valeur d'un nombre arrondi à
// l'entier le plus proche.
  playTurn();
}

//on crée une fonction qui va afficher une cellule avec un contenu défini:
function renderCell(cell) {
  if (cell === null) {
    return "_";
  } else {
    return cell;
  }
}

function renderRow(letter) {
  const cells = state[letter];
   //va chercher la valeur de la clé letter dans l'objet

  const row = cells.map(renderCell).join(" | ");

  return `${letter} ${row}`;
}

function renderBoard() {
  const letters = Object.keys(state);

  const rows = letters.map(renderRow).join("\n");

  const header = "  1   2   3";

  return `${header}\n${rows}`;
}

function flattenArray(arrayOfArray) {
  return arrayOfArray.reduce((newArray, array) => newArray.concat(array), [])
}
// .reduce : applique une fonction qui est un « accumulateur » et qui
//  traite chaque valeur d'une liste (de la gauche vers la droite)
//  afin de la réduire à une seule valeur.
// .concat : est utilisée afin de fusionner un ou plusieurs tableaux en
// les concaténant. Cette méthode ne modifie pas les tableaux existants,
// elle renvoie un nouveau tableau qui est le résultat de l'opération.

function gameIsFinished() {
  const allValues = flattenArray(Object.values(state));

  return allValues.every(isNotNull)
}

function hasWinner() {
  const isWinningLine = (line) => {
    const pattern =
      line
      .map((coordinate) => state[coordinate.letter][coordinate.digit])
      .join("");

    return pattern === "XXX" || pattern === "OOO";
  }

  return WINNING_COORDINATES.some(isWinningLine);
  // .some: La méthode some() teste si au moins un élément du tableau
  // passe le test implémenté par la fonction fournie.
}

function isNotNull(value) {
  return value !== null;
}

start();
