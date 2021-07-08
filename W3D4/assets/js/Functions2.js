function add(number1, number2) {
  return number1 + number2;
}

function doMath(operation, number1, number2) {
  return operation(number1, number2);
}

let sum = doMath(add, 1, 2);
console.log(sum);

let myArray = [1, 2, 3];

let students = [
  { name: "John", lastName: "Lennon", average: 90 },
  { name: "Ringo", lastName: "Starr", average: 58 },
  {
    name: "Paul",
    lastName: "McCartney",
    average: 82,
    toString: () => {
      return "Paul";
    },
  },
];

let passingStudents = students.filter(function (student) {
  return student.average > 60;
});

function isRingo(student) {
  return student.name === "Ringo Starr";
}

let ringos = students.filter(isRingo);

// if (students[0].name) {
//   console.log("Student 0's name: " + students[0].name);
// }

// let passingStudents = students.filter(function (student) {
//   return true;
// });

console.log(passingStudents);
console.log("Ringos: ");
console.log(ringos);

let firstPassingStudent = students.find(function (student) {
  return student.average > 60;
});

console.log("The first passing student: ");
console.log(firstPassingStudent);

let fullNames = students.map(function (student) {
  return (
    student.name + " " + student.lastName + ", average is: " + student.average
  );
});

console.log("Students is still here:");
console.log(students);

console.log("Students full names:");
console.log(fullNames);

// bad example - does nothing special
let studentsClone = students.map(function (student) {
  return student;
});

console.log("Student clone:");
console.log(studentsClone);

let numbers = [1, 20, 300, 4000];
let randomNumbers = numbers.map(function (number) {
  return (Math.random() * number).toFixed(2);
});

console.log("our random numbers:");
console.log(randomNumbers);

let totalGrades = students.reduce(function (sum, current) {
  return sum + current.average;
}, 0);

console.log("Total grades:");
console.log(totalGrades);

let totalPassingStudents = students.reduce(function (sum, current) {
  return sum + 1 * (current.average > 60);
}, 0);

console.log("Total passing students:");
console.log(totalPassingStudents);

// various ways to copy arrays
// let copyOfStudents = [...students];
// let copyOfStudents = students.slice();
let copyOfStudents = [].concat(students);
console.log("Copy of students:" + copyOfStudents);

let listOfAllStudents = students.reduce(function (list, current) {
  return list + current.name;
}, "");
console.log("List of all student names:" + listOfAllStudents);

function myTimerFunction() {
  console.log("Timer is done!");
}

setTimeout(myTimerFunction, 2000);

// alert("Whoah this is an alert!");

let myButton = document.getElementById("myButton");
myButton.innerText = "This is some new text!";

myButton.addEventListener("click", function () {
  console.log("clicked!");
});

// let teacher = {
//   name: "Shane",
//   speak: function () {
//     let theTeacher = this;
//     setTimeout(function () {
//       console.log("later my name is :" + theTeacher.name);
//     }, 1000);
//     console.log("Now my name is: " + this.name);
//   },
// };

// teacher.speak();

// let teacher = { name: "Shane" };

// let speak = function (item1, item2) {
//   console.log(this.name, item1, item2);
// };

// speak.call(teacher, "coffee", "ramen");
// speak.apply(teacher, ["coffee", "ramen"]);

// let teacher = {
//   name: "Shane",
//   speak: function () {
//     var boundFunction = function () {
//       console.log("later my name is: " + this.name);
//     }.bind(this);
//     setTimeout(boundFunction, 1000);
//   },
// };
// teacher.speak();

let teacher = {
  name: "Shane",
  speak: function () {
    var boundFunction = () => {
      console.log("later my name is: " + this.name);
    };
    setTimeout(boundFunction, 1000);
  },
};
teacher.speak();

// let someFunc = function () {
//   // some code here
// };
// let someFunc = () => {};

// let students = [{ name: "Edwin" }, { name: "Kim" }, { name: "Skip" }];

// let names = students.map((student) => student.name);

// let names = students.map((student) => {
//   return student.name;
// });

// console.log(names);
// // ["Edwin","Kim","Skip"]

function waitForSeconds(time) {
  time *= 1000;

  setTimeout(function () {
    console.log("Time is up!");
  }, time);
}

function waitForNanoSeconds(time) {
  time /= 1000000;

  setTimeout(function () {
    console.log("Nanoseconds is up!");
  }, time);
}

waitForSeconds(3);
waitForNanoSeconds(5000000000);
