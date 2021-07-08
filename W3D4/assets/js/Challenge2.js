let players = [
  { firstName: "Cam", lastName: "Newton", position: "QB", touchdowns: 32 },
  { firstName: "Derek", lastName: "Anderson", position: "QB", touchdowns: 0 },
  {
    firstName: "Jonathan",
    lastName: "Stewart",
    position: "RB",
    touchdowns: 12,
  },
  { firstName: "Mike", lastName: "Tolbert", position: "RB", touchdowns: 8 },
  { firstName: "Fozzy", lastName: "Whittaker", position: "RB", touchdowns: 3 },
  { firstName: "Ted", lastName: "Ginn", position: "WR", touchdowns: 9 },
  { firstName: "Devin", lastName: "Funchess", position: "WR", touchdowns: 2 },
];

let playerMike = players.find(function (player) {
  return player.firstName === "Mike";
});

console.log("Should be Mike:");
console.log(playerMike);

let allTheRbs = players.filter(function (player) {
  return player.position === "RB";
});
console.log("Should be all the RBs:");
console.log(allTheRbs);

let lastNames = players.map(function (player) {
  return player.lastName;
});

console.log("SHould be the last names:");
console.log(lastNames);

let awesomeRbs = allTheRbs
  .filter(function (rb) {
    return rb.touchdowns > 5;
  })
  .map(function (player) {
    return player.firstName + " " + player.lastName;
  });

console.log("Awesome RBs:");
console.log(awesomeRbs);

let touchdownsByRbs = allTheRbs.reduce(function (sum, current) {
  return sum + current.touchdowns;
}, 0);
console.log("Touchdowns by RBs:");
console.log(touchdownsByRbs);
