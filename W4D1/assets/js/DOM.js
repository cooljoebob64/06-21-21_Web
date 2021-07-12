let username = document.getElementById("username");

// get all inputs
let inputs = document.getElementsByTagName("input");
// let inError = document.getElementsByClassName("error");

let firstButton = document.querySelector("button");
let inError = document.querySelectorAll("input.error");

console.log("Number of inputs: " + inputs.length);
console.log("First button:  " + firstButton);
console.log(firstButton);
console.log("Number of errors: " + inError.length);

let listItems = document.querySelector("ul").children;
console.log("Number of list items: " + listItems.length);
console.log(listItems);

let demo = document.getElementById("demo");
if (inError.length > 0) demo.innerHTML = "There are some errors!!";

let selectedItem = document.querySelector("li.selected");
let first = selectedItem.previousElementSibling;
let last = selectedItem.nextElementSibling;
let list = selectedItem.parentElement;
let header = selectedItem.parentElement.parentElement;
let section = selectedItem.parentElement.parentElement.nextElementSibling;

console.log("Selected item:");
console.log(selectedItem);
console.log("First item:");
console.log(first);
console.log("Last item:");
console.log(last);
console.log("List:");
console.log(list);
console.log("Header:");
console.log(header);
console.log("Section:");
console.log(section);

let myDiv = document.querySelector("div");
let myA = document.querySelector("a");

console.log("The innerHTML of the A:");
console.log(myA.innerHTML);
console.log("InnerHTML of the Div:");
console.log(myDiv.innerHTML);

myA.innerText = "Your user name:  ${username.value}";

let googleLink = document.getElementById("googleLink");
console.log("The link:");
console.log(googleLink.href);
googleLink.name = "new link name";
googleLink.target = "_blank";

document.querySelector(".first").remove();

let newLi = document.createElement("li");
newLi.innerHTML = "Item 2";
let todoList = document.getElementById("todoList");
todoList.appendChild(newLi);

let button = document.getElementById("add");
function addItem() {
  let newItem = document.createElement("li");
  newItem.innerHTML = username.value;
  todoList.appendChild(newItem);
  username.value = "";
}
button.addEventListener("click", addItem);

let el = document.getElementById("myEl");
el.addEventListener("click", function (event) {
  alert("Clicked!");
});

el.addEventListener("mouseover", function (event) {
  el.innerHTML = "I got mousovered!";
});
el.addEventListener("mouseout", function (event) {
  el.innerHTML = "Whew, not mouseovered any more!";
});

document.querySelector(".outer").addEventListener("click", function (e) {
  // e represents the event (element that has been clicked)
  console.log("Target(originally occurred): ");
  console.log(e.target);
  console.log("Current Target (element running the event)");
  console.log(e.currentTarget);
});
