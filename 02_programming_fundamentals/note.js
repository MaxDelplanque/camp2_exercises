const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question(
  "What is your name ?",
  function(input) {
    console.log(input);

    reader.close()
  }
);
// quand on fait node note.js
// What is your name? Max
// Max (réponse quand on fait entrée)

//---------------------------------------------------------------------------------------
reader.question(
  "What is your name?\n",  // le \n permet d'aller à la ligne
  function(name) {
    console.log(`Your name is: ${name}`);

    reader.close();
  }
);

//---------------------------------------------------------------------------------------
reader.question(
  "What is your name ?",
  function(name) {
    console.log(`Hello ${name}`);


    reader.question(
      "What's your age",
      function(age) {
        console.log("Oh! You look younger!");

        reader.close(); //on met le reader.close() à la fin du reader.question() avec l'age. Si on le met après, on zap la question
      }
    )
  }
);
//---------------------------------------------------------------------------------------
reader.question(
  "What is your name ?",
  function(name) {
    console.log(`Hello ${name}`);


    reader.question(
      "What's your age",
      function(age) {
        console.log(`Bonjour ${name}, tu as ${age} ans.`); //on peut utiliser le name, car on est dans la fonction où name est présent

        reader.close();
      }
    )
  }
);
