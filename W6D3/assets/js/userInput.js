"use strict";
let num = "lol";
let dom = "lmao";

try {
  num = Number.parseFloat(num);
} catch (error) {
  console.log("Numerator is not a real number! Setting to 1.");
  num = 1;
}

try {
  dom = Number.parseFloat(dom);
} catch (error) {
  console.log("Denominator is not a real number! Setting to 1.");
  dom = 1;
}

let result = num / dom;
console.log("Math result: " + result);
