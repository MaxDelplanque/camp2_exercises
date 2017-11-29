// You have to write a function pattern which returns
//the following Pattern(See Pattern & Examples) up to n number of rows.
//
// *Note: Returning the pattern is not the same as Printing the pattern.*
//
// If n < 1 then it should return "" i.e. empty string.
//
// There are no whitespaces in the pattern other than the line breaks.
//
// * Hint: Use `\n` in string to jump to next line
// * Hint: `" abc\n ".trim()` will return `"abc"`
//
// ## Examples
//
// ```
// pattern(5)
// 1
// 22
// 333
// 4444
// 55555
//
// pattern(11)
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 10101010101010101010
// 1111111111111111111111
// ```

function pattern(size){
  let returnedNumber = "";
  for (let i=1; i<=size ;i++){
    for (let j=1; j<=i; j++){
      returnedNumber = returnedNumber+i;
    }
    returnedNumber = returnedNumber+"\n";
  }
  return returnedNumber.trim(); //permet de retirer l'espace blanc à la fin

}

console.log(pattern(5));
//La méthode trim() permet de retirer les blancs en début et
//fin de chaîne. Les blancs considérés sont les caractères d'espacement
// (espace, tabulation, espace insécable, etc.) ainsi que les caractères
//de fin de ligne (LF, CR, etc.).

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = pattern;
