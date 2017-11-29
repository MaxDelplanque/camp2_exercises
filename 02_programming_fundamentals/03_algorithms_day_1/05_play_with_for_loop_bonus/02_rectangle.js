// ## A Rectangle of 10 by 10
//
// ```
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// ```

for (let j = 1; j <= 10; j++) {
  let ligne = "";
  for (let i = 1; i <= 10; i++) {
    ligne = ligne + "*";
  }
  console.log(ligne);
}

// autre méthode :
// const maLigne = [];
//
// for (let i = 1; i <= 10; i++) {
//   maLigne.push("*");
// }
// let ligne = maLigne.join("");
// console.log(ligne);

// // Autre méthode:
// for (let j = 0; j < 10; j++) {
//   let stars = "*";
//   let rectangle = [];
//   for(let i=0; i<10; i++){
//     rectangle.push(stars);
//   }
//   console.log(rectangle.join(""));
// }

// Méthode Hamid:
// const maLigne = [];
//
// for (let i = 0; i < 10; i++) {
//   maLigne.push("*");
// }
// //console.log(maLigne);
// let ligne = maLigne.join("");
//
// for (let i = 0; i < 10; i++) {
//   console.log(ligne);
// }

// Méthode de Medhi :
// function line (caractere, long) {
//   return Array(long).fill(caractere).join("");
// }
//
// line("*", 10);
//
// function rectangle (caractere, largeur, hauteur) {
//   return Array(hauteur).fill("").map( (inutile) => line (caractere, largeur));
// }
// rectangle("*",10,10);
