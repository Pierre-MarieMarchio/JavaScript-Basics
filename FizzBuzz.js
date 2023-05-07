const prompt = require("prompt-sync")();

var output = [];
var number = prompt("enter a number");

// for verssion

function fizzBuzzFor(number) {
  var n = 1;
    for (var i = n; i <= number; i++) {
      switch (true) {
        case i % 15 === 0:
          output.push("FIZZBUZZ");
          break;
        case i % 3 === 0:
          output.push("fizz");
          break;
        case i % 5 === 0:
          output.push("buzz");
          break;
        default:
          output.push(i);
          break;
      }
    }

  console.log(output);
}

// while verssion

function fizzBuzzWhile(number) {
  var n = 1;
  while (n <= number) {
    switch (true) {
      case n % 15 === 0:
        output.push("FIZZBUZZ");
        break;
      case n % 3 === 0:
        output.push("fizz");
        break;
      case n % 5 === 0:
        output.push("buzz");
        break;
      default:
        output.push(n);
        break;
    }
    n++;
  }
  console.log(output);
}


fizzBuzzFor(number);
