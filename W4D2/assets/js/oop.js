class Fruit {
  fruitName = "fruit";
  howNutritious = "unknown";
  constructor(name) {
    this.fruitName = name;
  }

  changeName = function (newName) {
    this.fruitName = newName;
  };

  speak = function () {
    console.log("Hey my name is " + this.fruitName);
  };

  calculateNutrition = function () {
    if (this.fruitName === "Apple") {
      this.howNutritious = "very";
    } else if (this.fruitName === "Banana") {
      this.howNutritious = "pretty";
    } else {
      this.howNutritious = "not very";
    }
  };

  sayNutrition = function () {
    this.calculateNutrition();
    console.log(
      "This " + this.fruitName + " is " + this.howNutritious + " nutritious."
    );
  };
}

let apple = new Fruit("Apple");
let banan = new Fruit("Banana");
let candy = new Fruit("Candy");

console.log("Our first fruit is named: " + apple.fruitName);

console.log("Our second fruit is named: " + banan.fruitName);

apple.speak();
banan.speak();

apple.sayNutrition();
banan.sayNutrition();
candy.sayNutrition();

class Animal {
  petName = "";
  legs = 0;
  brain = "regular";
  speak = function () {
    console.log("I'm an animal!");
  };
  setName = function (newName) {
    this.petName = newName;
  };
  toString = function () {
    return this.petName;
  };
}

let dog = new Animal();
dog.setName("Dog");

console.log(dog);
console.log("" + dog);

class Vehicle {
  milesDrivenSinceLast;
  GallonsFilledSinceLast;
  mpg;
  fillTank(milesDriven, gallonsFilled) {
    this.calculateMPG(milesDriven, gallonsFilled);
  }
  calculateMPG = function (milesDriven, gallonsFilled) {
    this.mpg = milesDriven / gallonsFilled;
  };
  getMPG = function () {
    return this.mpg;
  };
}

let myCar = new Vehicle();
myCar.fillTank(100, 10);
console.log("My current MPG: " + myCar.getMPG());

class Prius extends Vehicle {
  calculateMPG = function (milesDriven, gallonsFilled) {
    this.mpg = (milesDriven * 2) / gallonsFilled;
  };
}

let myPrius = new Prius();
myPrius.fillTank(100, 10);
console.log("My prius's MPG: " + myPrius.getMPG());
