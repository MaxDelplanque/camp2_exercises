const fs = require("fs");

fs.open(
  "my_new_file.txt",
   'w',
  function (error, file) {
    if (error) {
    console.warn(error);
  } else {
    console.log('Saved!');
  }
});

//console.warn(error): va afficher une erreur sur le terminal

// >let myVariable = "something";
// undefined
// >if (myVariable){  "defined "} else { "undefined" }



const fs = require('fs');
fs.readFile('/tmp/test', (error, data) => {
  if (error) {
    console.warn(error);
  } else {
    console.log(data); // console.log(`my file contains: ${data}`);
                       // Bonne pratique de faire une interpolation
  }
});

//-----------------------------------------------------------
const fs = require("fs");

const myProduct = {
 sku: 42,
 name: "Easybreath",
 price: 2499
};

fs.writeFile(
  "my_product.json",
  JSON.stringify(myProduct),
  function(error) {
    if (error)
      console.warn(error);
    { else {
      console.log("Success")
    }
  }
)
//-----------------------------------------------------------
const fs = require("fs");

fs.readfile(
  "my_product.json",
  function(error, data) {
    if (error) {
      console.warn(error);
    } else {
      const myObject = JSON.parse(data);
      console.log(myObject);
    }
  }
)
