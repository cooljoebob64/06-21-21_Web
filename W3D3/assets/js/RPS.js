let hands = ["rock", "paper", "scissors"];

function getComputerHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}

// console.log(getComputerHand());

function compare(choice1, choice2) {
  console.log("Hand 1 is: " + choice1);
  console.log("Hand 2 is: " + choice2);

  let winner;
  if (choice1 === "rock") {
    if (choice2 === "rock") {
      winner = "tie";
    } else if (choice2 === "scissors") {
      winner = "choice 1";
    } else if (choice2 === "paper") {
      winner = "choice 2";
    } else {
      console.log("Error, choice 2 was weird");
    }
  } else if (choice1 === "scissors") {
    if (choice2 === "rock") {
      winner = "choice 2";
    } else if (choice2 === "scissors") {
      winner = "tie";
    } else if (choice2 === "paper") {
      winner = "choice 1";
    } else {
      console.log("Error, choice 2 was weird");
    }
  } else if (choice1 === "paper") {
    if (choice2 === "rock") {
      winner = "choice 1";
    } else if (choice2 === "scissors") {
      winner = "choice 2";
    } else if (choice2 === "paper") {
      winner = "tie";
    } else {
      console.log("Error, choice 2 was weird");
    }
  } else console.log("Choice 1 was weird");

    
    switch (choice1) {
        case "rock": {

        }
        case "paper" :{
            
            }
    }
    
    
    
  return "The winner is: " + winner;
}

let playerHand = "rock";
let computerHand = getComputerHand();
console.log(compare(playerHand, computerHand));
