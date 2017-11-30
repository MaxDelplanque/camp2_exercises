// See Sparta courses for the exercise summary
// One of the best and most used exercise used to learn how
// to modelize objects in programming is the Orange Tree.
//
// The goal is to represent with a single JavaScript Object
// the whole life of an Orange Tree, from its birth to its death.
//
// Specs
//
// You should implement an orangeTree Object as follows:
//
// Attributes
//
// height (in cm)
// age (in year)
// oranges
// alive
// Behaviours
//
// pickAnOrange
// ageOneYear
// seed
// Business Rules
//
// the Orange Tree should age each year
// it should grow each year:
// 25 centimeters until it is 10 years old
// 10 centimeters until it is 20 years old
// it should produce each year:
// 10 oranges when it's between 5 and 10 years old
// 20 oranges when it's between 10 and 20 years old
// 5 oranges until it's 40 years old
// it should not die until it is at least 50 years old and
// can't get past 100 years
// When we seed an orangeTree, it resets all its attributes
// Bonus Point: Make it so that the probability for the Orange Tree
// to die gets bigger as the time passes.
//
// Tip: Paying attention to the tests may help you understand the expected implementation details for this exercise.

const orangeTree = {
  height: 0,
  age: 0,
  oranges: 0,
  alive: false,

  seed: function() {
    this.height = 0;
    this.age = 0;
    this.oranges = 0;
    this.alive = true;
    //return this;     pas obligatoire ici
  },
  ageOneYear: function() {
    if (this.age >= 0 && this.age < 99) {
      this.age += 1;
      this.growing();
      this.produceOrange();
    } else {
      this.alive = false;
    }
  },
  growing: function() {
    if (this.age < 10) {
      this.height += 25;
    } else if (this.age >= 10 && this.age < 20) {
      this.height += 10;
    }
  },
  produceOrange: function() {
    if(this.age >= 5 && this.age <10) {
      this.oranges = 10;
    } else if (this.age >=10 && this.age < 20) {
      this.oranges = 20;
    } else if (this.age >= 20 && this.age < 40) {
      this.oranges = 5;
    } else if (this.age >= 40) {
      this.oranges = 0;
    }
  },
  pickAnOrange: function(pickedOranges) {
    if(this.oranges > 0) {
      this.oranges -= 1;
      return true;
    } else {
      return false;
    }
  },
};




module.exports = orangeTree;
