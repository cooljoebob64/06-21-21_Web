let num1 = add(1, 2); // 3
let num2 = multiply(23, 4); // 92
add(2, 4); // 6
calculator(add, 1, 3); // 4
calculator(multiply, 4, 5); // 20

console.log("Num 1: " + num1);
console.log("Num 2: " + num2);












function calculator(operation, x, y) {
  return operation(x, y);
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// Old Version - Without Callbacks
// Requires two functions to be invoked

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(input1, input2) {
//   let sum = input1 + input2;
//   return sum;
// }

// let result = myCalculator(5, 5);
// myDisplayer(result);

// New Version - With Callbacks!
// BUT - Cannot separate display from calculation
// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(input1, input2) {
//   let sum = input1 + input2;
//   myDisplayer(sum);
// }

// myCalculator(5, 5);

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(input1, input2, myCallback) {
  let sum = input1 + input2;
  myCallback(sum);
}

myCalculator(4, 5, myDisplayer);
myCalculator(7, 5, console.log);

let numbers = [6, 7, 1, 2, 3, 4, 5];
numbers.sort((a, b) => a - b);
console.log(numbers);

console.log("Starting timer!");

setTimeout(function afterTwoSeconds() {
  console.log("Two seconds have passed!");
}, 2000);

console.log("This happens after the timeout function!");

setInterval(timestamp, 1000);
let time = document.getElementById("time");

function timestamp() {
  let d = new Date();
  time.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

function carDisplayer(some) {
  document.getElementById("carZone").innerHTML = some;
}

function getFile(myCallback) {
  let req = new XMLHttpRequest();
  req.open("GET", "mycar.html");
  setTimeout(() => {
    req.onload = function () {
      if (req.status == 200) {
        myCallback(this.responseText);
      } else {
        myCallback("Error:" + req.status);
      }
    };
    req.send();
  }, 1);
}

getFile(carDisplayer);

function ajaxCall() {
  let ajaxRequest = new XMLHttpRequest();

  ajaxRequest.onreadystatechange = function () {
    if (ajaxRequest.readyState == XMLHttpRequest.DONE) {
      if (ajaxRequest.status == 200) {
        let myDiv = document.getElementById("requestDiv");
        let newDiv = document.createElement("div");
        newDiv.innerHTML = ajaxRequest.responseText;
        myDiv.appendChild(newDiv);
      } else if (ajaxRequest.status == 400) {
        console.log("There was an error 400");
      } else {
        console.log("There was an error, code: " + ajaxRequest.status);
      }
    }
  };
  ajaxRequest.open("GET", "http://jsonplaceholder.typicode.com/todos", true);
  ajaxRequest.send();
}

function clearMain() {
  document.getElementById("requestDiv").innerHTML = "";
}

// Callback Hell!!!
// let form = document.querySelector('form')
// form.onsubmit = function (submitEvent) {
//   let name = document.querySelector('input').value
//   request({
//     uri: "http://example.com/upload",
//     body: name,
//     method: "POST"
//   }, function (err, response, body) {
//     let statusMessage = document.querySelector('.status')
//     if (err) return statusMessage.value = err
//     statusMessage.value = body
//   })
// }

// Functions named - a little better:
// var form = document.querySelector('form')
// form.onsubmit = function formSubmit (submitEvent) {
//   var name = document.querySelector('input').value
//   request({
//     uri: "http://example.com/upload",
//     body: name,
//     method: "POST"
//   }, function postResponse (err, response, body) {
//     var statusMessage = document.querySelector('.status')
//     if (err) return statusMessage.value = err
//     statusMessage.value = body
//   })
// }

// document.querySelector('form').onsubmit = formSubmit

// function formSubmit (submitEvent) {
//   var name = document.querySelector('input').value
//   request({
//     uri: "http://example.com/upload",
//     body: name,
//     method: "POST"
//   }, postResponse)
// }

// function postResponse (err, response, body) {
//   var statusMessage = document.querySelector('.status')
//   if (err) return statusMessage.value = err
//   statusMessage.value = body
// }

// var formUploader = require("formuploader");
// document.querySelector("form").onsubmit = formUploader.submit;

// let userInput = prompt("Enter a number:");

// y = 1 / userInput;
// console.log(y);
