// ## Right triangle of size 5
//
//
// ```
// *
// **
// ***
// ****
// *****
// ```

for (let j = 1; j <= 5; j++) {
  let ligne = "";
  for (let i = 1; i <= j; i++) {
    ligne = ligne + "*";
  }
  console.log(ligne);
}
