let addButton = document.getElementById("addButton");
let todoList = document.getElementById("todoList");
let inputField = document.getElementById("inputField");

addButton.addEventListener("click", addItem);

function addItem(e, text) {
  let newItem = document.createElement("li");
  newItem.innerText = text;
  if (!text) {
    newItem.innerText = inputField.value;
    inputField.value = "";
  }
  newItem.addEventListener("click", removeItem);
  todoList.appendChild(newItem);
}

function removeItem(event) {
  console.log("Removing item:");
  console.log("Target is:");
  console.log(event.target);
  console.log("Current Target is:");
  console.log(event.currentTarget);
  event.target.remove();
}

addItem(this, "Walk the dog");
addItem(this, "Buy groceries");
addItem(this, "Read a book");
