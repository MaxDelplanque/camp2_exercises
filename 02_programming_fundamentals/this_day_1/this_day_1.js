const person = {
  first_name: "Abdel",
  last_name: "Sadki",
  full_name: function() {
    return `${this.first_name} ${person.last_name}`;
  }
}
// An object can contain functions
//
// this is a keyword that gives access to the context
// = entre les accolades de l'objet.

//-----------------------------------------
const person = {
  first_name: "Abdel",
  last_name: "Sadki",
  age: 17,
  full_name: function() {
    return `${this.first_name} ${this.last_name}`;
  },
  growOlder: function() {
    return this.age = this.age + 1; // va venir modifier l'age, en faisant +1
                                    // quand on appelle la fonction
  }
}

//-----------------------------------------
const person = {
  first_name: "Abdel",
  last_name: "Sadki",
  age: 17,
  full_name: function() {
    return `${this.first_name} ${this.last_name}`; //return obligatoire (on veut qu'une chaine de caractère soit renvoyé)
  },
  growOlder: function() {
    return this.age = this.age + 1; //return optionnel, on modifie
  },
  description: function() {
    return `${this.full_name()} has ${this.age} years old.`; //return obligatoire
    // si on teste: > person.description();
    //               'Abdel Sadki has 17 years old.'
  }
}
//-----------------------------------------
// Si on sort la fonction de l'objet:

function another_description_function(person) {
  return `${person.full_name()} has ${person.age} years old.`;
}

const person = {
  first_name: "Abdel",
  last_name: "Sadki",
  age: 17,
  full_name: function() {
    return `${this.first_name} ${person.last_name}`;
  growOlder: function() {
    return this.age = this.age + 1;
  }
}
//-----------------------------------------
