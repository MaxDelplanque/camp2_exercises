class Aquarium {

  constructor(fishes, algaes) {
    this.fishes = fishes;
    this.algaes = algaes;
  }

  addFish(fish) {
    this.fishes.push(fish);
  }

  addAlgae(algae) {
    this.algaes.push(algae);
  }

  endTurn() {
    // console.log(this.algaes.length);
    // this.algaes.forEach(console.log);

    // console.log(this.fishes.length);
    // this.fishes.forEach(console.log);

    this.fishes.forEach(fish => this.eatSomething(fish));

  }

  eatAlgae() {
    if (this.algaes.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  eatFish() {
    if (this.fishes.length > 1) {
      return true;
    } else {
      return false;
    }
  }

  eatSomething(fish) {
    const {isCarnivorous} = fish;
    if(isCarnivorous === 0) {
      if (this.eatFish()) {
        this.fishes.pop();
      }
    } else {
      if (this.eatAlgae()) {
        this.algaes.pop();
      }
    }


  }

}


class Fish {
  constructor(name, sex, isCarnivorous = 0) {
    this.name = name;
    this.sex = sex;
    this.isCarnivorous = isCarnivorous;
  }
}

class Algae {
  constructor() {}
}


module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};
