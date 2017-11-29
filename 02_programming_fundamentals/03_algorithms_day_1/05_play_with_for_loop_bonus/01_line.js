// ## A simple line of 10 stars
//
// ```
// **********
// ```

let ligne = "";
for (let i = 1; i <= 10; i++) {
  ligne = ligne + "*";
}

console.log(ligne);

// Autre méthode:
// const maLigne = [];
//
// for (let i = 1; i <= 10; i++) {
//   maLigne.push("*");
// }
//
// let ligne = maLigne.join("");
// console.log(ligne);


//Méthode de Medhi:
// function line (caractere, long) {
//   return Array(long).fill(caractere).join("");
// }
