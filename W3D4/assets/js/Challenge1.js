let superHeroes = [
  ["Batman", "Bruce Wayne"],
  ["Spiderman", "Peter Parker"],
  ["The Flash", "Barry Allen"],
];
let secretIdentity = superHeroes.map(
    function (theArrayToBeRevealed) {
        return theArrayToBeRevealed.join(" is ");
    }
);

console.log(secretIdentity);
console.log(secretIdentity.join("\n"));
