console.log("Script is loaded!");
// let a = 1;
// let b = 2;
// console.log(a + b);

// function add(a, b) {
//   console.log("We are adding " + a + " + " + b);
//   return a + b;
// }

// console.log(add(2, 3));
// console.log(add(3, 3));
// console.log(add(5, 35234));
// console.log(add(27, 3234));
// console.log(add(2865, 2353));
// console.log(add(23465, 2353));

function say(something) {
  console.log(something);
}

// say("whoah dude");
// say("ham");
// say("potates");
// say("whoah dude");
// say("whoah dude");
// say("whoah dude");
// say("whoah dude");
// say();

// function add(number1, number2) {
//   return number1 + number2;
// }

// function addTwoNumbers(a, b) {
//   console.log("Adding " + a + " + " + b);
//   return a + b;
// }

// function add() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// let sum = add(2, 3, 4, 6, 7, 8, 9);
// console.log(sum);

// addTwoNumbers(1, 2, 3, 4, 5, 6);

function addTwoNumbers(a, b, ...theOtherNumbers) {
  console.log("Adding " + a + " + " + b);
  if (theOtherNumbers.length > 0) {
    console.log("Not adding the rest: " + theOtherNumbers);
  }
  return a + b;
}

console.log(addTwoNumbers(1, 2));
// console.log(theOtherNumbers);

hoisted();

function hoisted() {
  //   a = "byee!";
  console.log("I'm hoisted!");
}

// notHoisted();

let notHoisted;

if (0 > 1) {
  notHoisted = function () {
    console.log("First condition!");
  };
} else {
  notHoisted = function () {
    console.log("Second condition!");
  };
}
console.log(notHoisted());

let calculator = {
  add: function (a, b) {
    return a + b;
  },
};

// function (a, b) {
//   console.log("I dont exist!");
// }
// declareMe();

console.log(calculator.add(1, 2));

let arrayOfMystery = [
  ["anonymous", "array"],
  { name: "anonymous object" },
  function () {
    return "Anonymous function!!!! OOOOO!";
  },
];

console.log(arrayOfMystery[0]);
console.log(arrayOfMystery[1]);
console.log(arrayOfMystery[2]());

let a = "blank";

if (0 > 1) {
  a = "hello";
  console.log(a);
}

console.log(a);

(function myFunction(word) {
  console.log("Ooh so anonymous! The word is: " + word);
})("bird");

// myFunction("whoah");

let city = "New Orleans";
let greet = function () {
  console.log("Hello " + city);
};

greet();

function outer() {
  let x = "x";
  function inner() {
    let y = "y";
    console.log(x); //x
  }
  console.log(x); //x
  console.log(y); // undefined
}
let result = "the previous value";
let landscape = function () {
  // fgsdklghjfkdslghjkdslhgdjks
  let result = "";

  // this function will put a number of flats into the landscape
  // the parameter determines how many
  let flat = function (size) {
    for (let count = 0; count < size; count++) {
      result += " _ ";
    }
  };

  let mountain = function (size) {
    for (let count = 0; count < size; count++) {
      result += " '";
    }
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log("Our landscape:");
console.log(landscape());
console.log(result);

// let name = "david";
// let sayHelloTo = function (name) {
//   console.log("Hello, " + name);
// };
// sayHelloTo("joe");

let name = "david";
let sayHelloTo = function (personsName) {
  let name = personsName;
  console.log(name);
};
sayHelloTo("joe");

let teacher = {
  name: "Assaf",
  sayName: function () {
    console.log(this.name);
  },
};

teacher.sayName();

function sayName() {
  console.log("My name is: " + this.name);
}

let teacher1 = {
  name: "Assaf",
  speak: function () {
    console.log("My name is: " + this.name);
  },
};
let teacher2 = {
  name: "Shane",
  speak: sayName,
};

teacher1.speak();
teacher2.speak();
