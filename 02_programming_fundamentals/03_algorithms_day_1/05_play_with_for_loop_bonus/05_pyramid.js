// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```

// for (let j = 1; j <= 4; j++) {
//   let ligne = "";
//   for (let i = 7; i >= 1; i--) {
//     ligne = ligne + "*";
//   }
//   console.log(ligne);
// }

// Hamid :
let str = "*******";
let output="";
let myStr ="";

for (let i = str.length; i >= 0; i--) {
  if (i % 2 === 0) {
    myStr = " ".repeat((i - 1)/2 + 1);
    output = [str.slice(i, 0 ), myStr, str.slice(i - str.length)].join("");
    console.log(output);

  }
}

//La méthode repeat() construit et renvoie une nouvelle chaine de caractères
//qui contient le nombre de copie demandée de la chaine de caractères sur
//laquelle la méthode a été appelée, concaténées les unes aux autres.

//La méthode slice() renvoie un objet tableau, contenant une copie
//superficielle (shallow copy) d'une portion du tableau d'origine,
//la portion est définie par un indice de début et un indice de fin (exclus).
//Le tableau original ne sera pas modifié.


// // Dom :
// // const array = [” “,” “,” “,”*“,” “,” “,” “,];
// // const size = 4;
// // const middle = size/2;
//
// for (let j = 0; j < 1; j++) {
//   console.log(array.join(“”)); // 1 seul passage init pyramide
//   for (let i = 0; i < size-1; i++) { // boucle sous la pyramide
//     array[Math.trunc(middle)-i]=“*”;
////La fonction Math.trunc() retourne la partie entière d'un nombre
////en retirant la partie décimale.
//     array[Math.trunc(middle)+(2)+i]=“*”;
//     console.log(array.join(“”));
//   }
// }

// Dom bis
// const array = [” “,” “,” “,”*“,” “,” “,” “,];
// const size = 4;
// const middle = size/2;
//
//
// for (let j = 0; j < 1; j++) {
//   console.log(array.join(“”)); // 1 seul passage init pyramide
//   for (let i = 0; i < size-1; i++) { // boucle sous la pyramide
//     array[Math.trunc(middle)-i]=“*”;
//     array[Math.trunc(middle)+(2)+i]=“*”;
//     console.log(array.join(“”));
//   }
// }


// Loreleine:
// for (let j=1; j<5; j++){
//   const stars = [];
//   for (let k=4; k>j; k--){
//     stars.unshift(" ");
//   }
//   for (let i=0; i<j; i++){
//     if(i===0){
//       stars.push("*");
//     }
//     else{
//       stars.push("**");
//     }
//   }
//   console.log(stars.join(""));
// }
