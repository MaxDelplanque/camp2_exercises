// Méthode pour juste afficher la grille de jeu
// let ligne=["  -----------"];
// let array1=["  "," 1 "," "," 2 "," "," 3 "];
// let array2=["A ","   ","|","   ","|","   "];
// let array3=["B ","   ","|","   ","|","   "];
// let array4=["C ","   ","|","   ","|","   "];
// let affichageGrille = function(){
//   console.log(array1.join(""));
//   console.log(array2.join(""));
//   console.log(ligne.join(""));
//   console.log(array3.join(""));
//   console.log(ligne.join(""));
//   console.log(array4.join(""));
// }

// Creation d'un Stream :
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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



function renderCell(cell) {
//on crée une fonction qui va afficher une cellule avec un contenu défini



  const cells = state[letter]; //va chercher la valeur de la clé letter dans l'objet



//La fonction Math.round() retourne la valeur d'un nombre arrondi à
// l'entier le plus proche.
