// var/let
// Generally, var is only used in legacy code and should not be included in new code.
// 'let' is the new 'var' and is used to declare most variables in javaScript.
let anyVariableName = 5;

// Const
const my_fave_number = 7; // this variable cannot be changed

console.log(my_fave_number); // prints 7

let x = 10 + my_fave_number; // we can use the const
console.log(my_fave_number); // prints 17

// my_fave_number = 9; // error, this cannot be changed

// Common Datatypes
// Strings
let a = "Hello, World!"; // <-- Had to get that one out of the way!
let b = "This is JavaScript!"; // Can use single or double quotes
let c = "7"; //includes numbers, but not read as numbers
let d = "It's Seven"; //To include quotation marks in a string, you must use a different quotation inside and outside
let e = "It's Seven"; //alternatively, you can use backslashes to ignore special characters in strings

// Numbers
let f = 7;
let g = 7.8;
let h = 0.45;

// Booleans
let i = true;
let j = false;

// Loose Typing
// This means we do not have declare what data type a variable
// will hold when we declare the variable AND that we can change
// the data type being held by a variable at any point.
let z = "abc";
console.log(typeof z); //string
z = 1; //would throw an error in strong typed languages
console.log(typeof z); //number

// Implicit Coercion
let impl = 7 + 7 + 7; // = 21;
// Straight arithmetic resulting in a Number value.

impl = 7 + 7 + "7";
// The first two 7's are calculated (14), the last 7
// is concatenated onto the 14 as a string.
// resulting in a string value
// "14" + "7" = "147"

impl = "7" + 7 + 7;
// The entire expression is implicitly converted
// into a string and concatenated.
// "7" + 7 = "77"; "77" + 7 = "777"

// Explicit Coercion
let amountRaisedSoFar = 1000;

let donation = prompt("How much would you like to donate?");

amountRaisedSoFar = Number(donation) + amountRaisedSoFar;

console.log("We have now raised: " + amountRaisedSoFar + "!");

// Type Casting
let cast = parseInt("10"); // 10
cast = parseFloat("10.55"); // 10.55
cast = toString(10.55); // "10.55";

// String Concatenation
let greeting = "Hello,";
let myName = "World";
console.log(greeting + " " + myName + "!"); //output "Hello, World!""

// Template Literals
let yourName = "Shane";
let age = 25;

console.log(`Happy Birthday ${yourName}! How is ${age + 1} treating you?`);

// Null and undefined
let willBeUndef;
console.log(typeof willBeUndef); // "undefined"
// foo does not exist, it is not defined and has never been initialized:
// console.log(foo); // "ReferenceError: foo is not defined"

// foo is known to exist now but it has no type or value:
let foo = null;
console.log(foo); // "null"

// A variable that is not declared is undefined
// A variable that is declared but not assigned a value is undefined
// A variable assigned the value of null "null" has the type object.
console.log(typeof nothing); //undefined

let something;
console.log(typeof something); //undefined
console.log(something); //undefined

something = null;
console.log(typeof something); //"object"
console.log(something); //"null"
// A declared variable can be set to null to show it has no value.
something = null; //null
something; // null

// Flow Control
// If statement
//Simple if statement
let myBool = true;
if (myBool) {
  console.log(true);
} else if (myBool == true) {
  console.log("this won't run");
} else {
  console.log(false);
}

// Comparison Operators
let temp = 60;

if (temp > 45) {
  console.log("I'm going hiking!");
} else {
  console.log("It's too cold to go hiking");
}

// Flow Control: Comparison Operators
// <	Less than
// >	Greater than
// <=	Less than or equal to
// >=	Great than or equal to
// ==	Loose equality (compares values)
// ===	Strict equality (compares values AND type)
// !=	Values do not equal
// !==	Same type, but different values

// Flow Control: Loose Equality
// The double equals (==) ignores the data type.
// The triple equals (===) takes data type into account.
// These are called loose and strict equality checks.
let equalityVar = 10;
if (equalityVar == "10") {
  //Type coersion is happening here!
  console.log(true); //true
}

if (equalityVar === "10") {
  console.log(true); //false
}

// It is best practice to only use '===' (strict comparison) to avoid unintended outcomes like the example below.
// (0 ==  '0') // true
// (0 === '0') // false

// ('' ==  0 ) // true, the string will implicitly be converted to an integer
// ('' === 0 ) // false, no implicit cast is being made

// Challenge #1 (Slide 28)
let cups = 1;

if (cups < 3) {
  console.log("Yes. I'll take another cup of coffee!");
} else {
  console.log("I think I'm okay for now.");
}

// Truthy/Falsey Values
// Almost all objects and variables are coerced to true.
if ("abc") {
  // this block would run
}

if (10 && "abc" && true) {
  // this block would run
}

// Only falsey values (false, 0, null, Nan, "", or undefined) evaluate to false.
let whatever; //whatever is undefined
if (whatever) {
  console.log(true);
} else {
  console.log(false); //this would run
}

if (!whatever) {
  console.log(false); //this would run
}

if (false || 0 || null) {
  console.log(true); //since none of these evaluate to true, this will not run
}

// Combining Conditionals
// You can all string together conditionals using || (or) and && (and).
true && true; // true
true && false; // false
false && true; // false
false && false; // false

true || true; // true
true || false; // true
false || true; // true
false || false; // false

// Short-Circuit Evaluation
// The combination symbols (|| and &&) are also used to create short-circuit evaluations (which can be a shorthand for an if statement).
somevar && myFunction(); //equivalant to if(somevar)
somevar || myFunction(); //equivalant to if(!somevar)

// Challenge #2 (Slide 34)
let outdoorTemp = 85;
let precipitation = false;
let indoors = true;

console.log("The temperature is " + outdoorTemp + " degrees");

if (outdoorTemp > 80 && precipitation === false) {
  console.log("time to swim!");
} else if (indoors) {
  console.log("time to swim!");
}

// Iteration: "for" loop
// A for loop allows you to complete the same task a pre-defined number of times.
for (let i = 0; i <= 9; i++) {
  console.log(i);
}
// We are setting a variable's initial value (in this case, i = 0)
// We are comparing the variable's value to the desired break-point (i <= 9)
// we are incrementing the value of the variable on each iteration (i++)
// The loop will stop when the breakpoint is met.

// Challenge #3 (slide 38)
for (let bottle = 99; bottle >= 0; bottle--) {
  if (bottle === 0) {
    console.log("Hey! Go buy more root beer!");
  } else {
    console.log(bottle + " bottles of root beer on the wall");
  }
}

// Iteration: "while" loop
// Whereas in the for loop, we chose the starting point, breakpoint conditional, and how to iterate, the while loop simply looks for a breakpoint conditional to be true.
let loopy = 0;
while (loopy < 10) {
  loopy = loopy + 1;
  // or loopy +=1
  // or loopy++
}

// Iteration: "do-while" loop
// A do-while loop is very similar to a while loop except that the code always executes at least once before the condition is checked.
let doLoop = 0;
do {
  doLoop = doLoop + 1;
  // or doLoop +=1
  // or doLoop++
} while (doLoop < 10);
// A possible use for this would be taking user input and validating the input. We would ask for input, then evaluate whether it is valid. If not, ask for input again, etc.

// Avoid infinite loops!
// for(let i=0, i<20, i--){
//     //this loop will run forever
//   }

//   let x = 20;
//   while(x < 20){
//     if(x > 20){ //this condition cannot be met
//       x--; //this will never happen
//     }
//     //this will run forever
//   }

// Iteration: break and continue
// A break statement jumps out of the loop.
for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log("before break"); // will only print once
  break; // exits the next loop
  console.log("after break"); //never happens
}

// A continue statement jumps to the next iteration.
for (let i = 0; i < 10; i++) {
  console.log(i);
  console.log("before continue"); // will print 10 times
  continue; // continues to the next iteration
  console.log("after continue"); //never happens
}

// Switch Statements
// Switch statements are similar in many ways to an if statement,
// but can be a little easier / cleaner to write.If you find
// yourself writing an if statement with a lot of else branches,
// consider using a switch instead.
let myValue = 1;
switch (myValue) {
  case 3:
    console.log("three");
    break;
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  default:
    console.log("default");
}

// Scope
// Broadly, 'scope' in programming refers to the area(s) of a program where the name of a resource (variable, function, etc...) is valid. Generally, we limit the scope of elements in order to improve the usability of our code and reduce errors.
// The move from var to let in Javascript is an example of the concept of scope.
// The var keyword defines a variable with global scope, regardless of what block it is declared in.
console.log(test); //console: undefined
if (!test) {
  //true
  var test = true; //create and assign test
  console.log(test); //console: true
}
console.log(test); //this is dangerous!
// global scope: Accessible to all other areas of the application.
// code block: generally code within a loop, conditional, or function (in {}).

// Let
// "let" declares a variable only within the scope of its block. In most cases, this is more useful.
let newTest = true;
if (newTest) {
  let newTest = false; //this is a completely new variable that only exists in this scope
  console.log(newTest); //console: false
}
console.log(newTest); //console: true

// Var vs. Let
// Just to make sure you understand, here is another example of var vs. let, this time using a for loop.
for (let i = 0; i < 10; i++) {
  console.log(i); // possible because i is within the scope
}
console.log(i); // undefined because i only existed in the loop

for (var i = 0; i < 10; i++) {
  console.log(i); //
}
console.log(i); // will log 9, the final value of i in the for loop,
//because var declared it globally
