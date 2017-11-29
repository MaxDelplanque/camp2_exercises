// ## A Pyramid of base 7
//
// ```
//    *
//   ***
//  *****
// *******
// ```

for (let j = 1; j <= 4; j++) {
  let ligne = "";
  for (let i = 7; i >= 1; i--) {
    ligne = ligne + "*";
  }
  console.log(ligne);
}
