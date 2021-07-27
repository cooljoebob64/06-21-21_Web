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
  // # means this field is private!
  // private fields can only be accessed by THIS class!
  #milesDrivenSinceLast = 1;
  #gallonsFilledSinceLast = 1;
  mpg = 0;
  fillTank(milesDriven, gallonsFilled) {
    this.#milesDrivenSinceLast = milesDriven;
    this.#gallonsFilledSinceLast = gallonsFilled;
  }
  calculateMPG = function (milesDriven, gallonsFilled) {
    this.mpg = milesDriven / gallonsFilled;
  };
  getMPG = function () {
    this.calculateMPG(this.#milesDrivenSinceLast, this.#gallonsFilledSinceLast);
    return this.mpg;
  };
}

let myCar = new Vehicle();
myCar.fillTank(100, 10);
console.log("My current MPG: " + myCar.getMPG());

class Prius extends Vehicle {
  //   calculateMPG = function (milesDriven, gallonsFilled) {
  //     this.#mpg = (milesDriven * 2) / gallonsFilled;
  //   };
}

let myPrius = new Prius();
myPrius.fillTank(100, 10);
// myPrius.milesDrivenSinceLast = 10000;

// myPrius.#mpg = 10000000;

console.log("My prius's MPG: " + myPrius.getMPG());
// console.log(mpg);

const GRAVITY_CONSTANT = 1.3;

// GRAVITY_CONSTANT = 1.1;
class Book {
  constructor(bookTitle) {
    this.title = bookTitle;
    this.pages = 0;
  }

  toString() {
    return this.title + ", pages: " + this.pages;
  }

  getTitle() {
    return this.title;
  }
  getFullDescription() {
    return this.title + ", has " + this.pages + " pages.";
  }
}

let myBook = new Book("The Story of Book");
let myArray = new Array(1, 2, 3, 4);
console.log(myBook);
console.log("My book is called: " + myBook);
console.log("My array: " + myArray);

console.log("My book's title: " + myBook.getTitle());
console.log("My book's full description: " + myBook.getFullDescription());

// works because myFunc is hoisted - since it is declared
myFunc();
// does not work - newFunc is assigned instead of decalred,
// so it is not hoisted!
// newFunc();

// function declaration
function myFunc() {}
// function assignment
let newFunc = function () {};
