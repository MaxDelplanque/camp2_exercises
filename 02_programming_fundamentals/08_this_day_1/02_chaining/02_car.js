// See Sparta courses for the exercise summary
// A useful property derived from this is the ability to
// chain function calls. If you create an object with a function that
// return this, you effectively return the whole object.
// You can then reuse the same function or another.
//
// const greeter = {
//   greet: function(name) {
//     console.log(`hello ${name}!`);
//     return this;
//   }
// }
//
// greeter.greet('Joe').greet('Mike').greet('Robert');
// // Hello Joe!
// // Hello Mike!
// // Hello Robert!
// Specs
//
// Create an object car with four functions:
//
// start() will reset all the car data
// changeSpeed(speed) will change the km/h speed of the car
// drive(minutes) will make your car drive at the previously set
// speed for that amount of time in minutes
// showDistance() will print the distance you drove as the number
//of kilometers
// Take care to stock that data inside the object. For instance the code
//
// car.start().changeSpeed(130).drive(42).showDistance();
// // should display 91 Km.

const car = {
  speed: 0,
  distance: 0,
  start: function() {
    this.speed = 0;
    this.distance = 0;
    return this;
  },
  changeSpeed: function(newSpeed) {
    this.speed = newSpeed;
    return this;
  },
  drive: function(minutes) {
    this.distance = this.distance + this.speed * (minutes/60);
    return this;
  },
  showDistance: function() {
    console.log (`${this.distance} Km`);
  }
}

car.start().changeSpeed(130).drive(42).showDistance();
car.changeSpeed(110).drive(30).showDistance();


module.exports = car;

// const person = {
//   firstname: "Abdel",
//   lastname: "Sadki",
//   age: 42,
//   fullname: function() {
//     return `${this.firstname} ${this.lastname}`;
//   },
//   introduceMyself: function() {
//     return `Hello! I'm ${this.fullname()} and I'm ${this.age}`;
//   }
// }
// console.log(person.introduceMyself());
