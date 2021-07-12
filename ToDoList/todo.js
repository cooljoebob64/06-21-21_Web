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
  event.target.remove();
}

addItem(this, "Demo Item 1");
addItem(this, "Demo Item 2");
addItem(this, "Demo Item 3");
