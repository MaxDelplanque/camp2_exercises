// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer

function squareDigits(number){
  let intToStr = number.toString(); //permet de transforme le nombre en chaîne de caractères
  return parseInt(intToStr.split("").map(num => num*num).join(""), 10);
}

// La fonction parseInt() analyse une chaîne de caractère fournie en argument
// et renvoie un entier exprimé dans une base donnée.

// string.split : La méthode split() permet de diviser une chaîne de caractères
// à partir d'un séparateur pour fournir un tableau de sous-chaînes.

//La méthode map() crée un nouveau tableau composé des images des éléments du tableau courant
//par une fonction donnée en argument.

//La méthode join() réunit tous les éléments d'un tableau dans une chaine de caractères
// et renvoie cette nouvelle chaîne de caractères.

squareDigits(9129);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;
