let list = document.getElementById("list");

// let coffeeItem = list.firstElementChild.nextElementSibling;
let coffeeItem = list.children[1];
coffeeItem.innerHTML = "Fair Trade Coffee";

// remove twinkies
list.children[3].remove();

// add cheeze wiz
let cheezeWiz = document.createElement("li");
cheezeWiz.innerHTML = "Cheeze Wiz";
list.appendChild(cheezeWiz);

let newList = ["protein power", "muscle milk", "power bars"];

list.innerHTML = "";
newList.map(function (listItem) {
  let newItem = document.createElement("li");
  newItem.innerHTML = listItem;
  list.appendChild(newItem);
});

let muscleMilk = list.firstElementChild.nextElementSibling;
muscleMilk.classList += "important";
// muscleMilk.className = "important";
