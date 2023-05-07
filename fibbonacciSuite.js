const prompt = require("prompt-sync")();
var fibonacci = [];

function fibonacciCount(number) {
  for (var i = 0; i <= number; i++) {
    if (i === 0) {
      fibonacci.push(0);
    } else if (i === 1) {
      fibonacci.push(1);
    } else {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
  }
  console.log(fibonacci);
}

var number = prompt("enter a number");
fibonacciCount(number);
