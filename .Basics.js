const prompt = require("prompt-sync")();

/* message lenght*/

// var lengh;
// var totalMessage = 180;
// var myPrompt = prompt("enter your message");
// var myPromptSize = myPrompt.length;
// var myLenghtLeft = 180 - myPrompt.length;
// console.log("il me reste " + myLenghtLeft + " caractere");

/* dog ages*/

// var dogAge = prompt("what's your dog age?");
// var calcDogAge = (dogAge - 2) * 4 + 21;
// console.log("your dog age is " + calcDogAge);

/* get milk */

function getMilk(money) {
  console.log("leaveHouse");
  console.log("enterHouse");
  console.log(" le robot a acheter " + Math.floor(money / 1.5) + " bouteilles");
}

//   getMilk(5);

/* BMI Calculator*/

function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);
  return Math.round(bmi);
}

// var bmi = bmiCalculator(65, 1.80);
// console.log("your BMI is " + bmi);

// version cherie plus propre

var bmi = (weight, height) => {
  console.log("Your bmi is " + Math.round(weight / Math.pow(height, 2)));
};
//
// bmi(65, 1.80);

/* Love calculator */

function loveCalculator(name1, name2) {
  var love = Math.round(Math.random() * 100);
  return love;
}

var love = loveCalculator("pierre-marie", "aurore");

/* switch */

// switch (true) {
//   case love > 80:
//     console.log("Your love is " + love + "%, vous êtes cul et chemises");
//     break;
//   case love > 60:
//     console.log("Your love is " + love + "%, vous vous aimez");
//     break;
//   case love > 40:
//     console.log("Your love is " + love + "%, un début d'amour");
//     break;
//   case love > 20:
//     console.log("Your love is " + love + "%, peu mieux faire");
//     break;
//   default:
//     console.log("Your love is " + love + "%, c'est la merde entre vous");
//     break;
// }

/* if else */

// if (love > 80) {
//   console.log("your love is " + love + " % vous etes cul et chemises");
// } else if (love > 60) {
//   console.log("your love is " + love + " % vous vous aimez");
// } else if (love > 40) {
//   console.log("your love is " + love + " % un debut d'amour");
// } else if (love > 20) {
//   console.log("your love is " + love + " % peu mieux faire");
// } else {
//   console.log("your love is " + love + " % c'est la merde entre vous");
// }

/* invite welcomes */

// var guestName = prompt("what's your guest name?");

// var guestlist = ["pierre-marie", "aurore","felise", "oscare", "julien","julie", "marie", "maxime"];

// if (guestlist.includes(guestName)) {
//     console.log("Welcome " + guestName);
// } else {
//     console.log("Sorry, " + guestName + " is not in our list");
// }

/* addNumbers */

// function addNumbers(number) {
//   var output = [];
//   var n = 1;
//   if (n <= number) {
//     for (var i = n; i <= number; i++) {
//       output.push(i);
//     }
//   }
//   return output;
// }

// var number = prompt("enter a number");
// var output = addNumbers(number);
// console.log(output);

