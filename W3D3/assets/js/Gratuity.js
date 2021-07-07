function gratuity(amount) {
  return (amount * 0.2).toFixed(2);
}

function totalWithGrat(bill) {
  return parseFloat(bill + gratuity(bill)).toFixed(2);
}

let billAmount = Math.random() * 100;
console.log("Bill amount: " + billAmount);
console.log("Gratuity amount: " + gratuity(billAmount));
console.log("Your total with grat is: " + totalWithGrat(billAmount));
