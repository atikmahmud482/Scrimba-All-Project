// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
// function generateSentence(desc, arr) {
//   let baseString = `The ${arr.length} ${desc} are `;
//   const lastIndex = arr.length - 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (i === lastIndex) {
//       baseString += arr[i];
//     } else {
//       baseString += arr[i] + ", ";
//     }
//   }
//   return baseString;
// }

// const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"]);
// console.log(sentence);

/* Object Distructuring */
// const dreamHoliday = {
//   destination: "Austin, Texas",
//   activity: "visit the Tesla HQ",
//   accommodation: "luxury ranch",
//   companion: "Elon Musk",
// };

// const { destination, activity, accommodation, companion } = dreamHoliday;

// console.log(`I would love to go to ${destination} to ${activity}.
//      I'd sleep in a ${accommodation} and hang out with ${companion} all day.`);

/* The Map Method() */
// const distenceWalkedMilesArr = [22, 34, 43, 45, 12, 76, 56];
// const convertToKilometers = 1.60934;
// function convertMilesToKilometers() {
//   return distenceWalkedMilesArr.map(function (distanceMiles, index) {
//     return `Month ${index}: ${distanceMiles * convertToKilometers}KM`;
//   });
// }
// console.log(convertMilesToKilometers());

/* The JoinMethod() */
// const guestsArr = ["Amy", "Clare", "Keith", "Dan"];

// console.log(guestsArr.join("🐶"));

/* Beyond Function Declarations 1: Function Expressions */

// function getSpendAlert(amount) {
//     return `Warning! You just spent £${amount}!`
// }

// const getSpendAlert = function (amount) {
//   return `Warning! You just spent £${amount}!`;
// };
// console.log(getSpendAlert(150));

/* Beyond Function Declarations 2: Function Expression Challenge */
/*
Challenge:
    1. Convert this function declaration to a function expression.
*/

// const getTheftAlert = function (numberOfTransactionsHour) {
//   if (numberOfTransactionsHour > 5) {
//     return `You have made ${numberOfTransactionsHour} transactions
//                 in the past hour. We think your card might have been
//                 compromised`;
//   }
// };

// console.log(getTheftAlert(6));

/* Beyond Function Declarations 3: Arrow Functions */

// const getSpendAlert = (amount) => {
//     return `Warning! You just spent £${amount}!`
// }

// console.log(getSpendAlert(150))

/* Aside: Arrow functions challenge */

// const speedWarning = (speedLimit, speed) => {
//   if (speed > speedLimit) {
//     return `You are going at ${speed} mph!`;
//   }
// };

// console.log(speedWarning(30, 40));

// Challenge
// 1. Refactor this function so it only warns drivers
//    who are going over the speed limit.
// 2. The function now needs to take in two parameters.
//    The first is the speed limit, the second is the
//    driver's actual speed.

/* array.reduce() */
// const rainJanuaryByWeek = [10, 20, 0, 122];

// const totalRainfallJanuary = rainJanuaryByWeek.reduce(function (
//   total,
//   currentElement
// ) {
//   console.log("total: " + total, "currentElement: " + currentElement);
//   return total + currentElement;
// });

// console.log(totalRainfallJanuary);

/* Aside .reduce() challenge */
// const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73];

// const totalGrades = grades.reduce(function (total, currentGrade) {
//   return total + currentGrade;
// });

// console.log(`The class average is ${totalGrades / grades.length}`);
/*
Challenge
1. Use the .reduce() method to find the total of all of the students grades.
2. Do some simple maths to log out the class average. 
*/

// import { itemsBoughtArr } from "./itemsBoughtArr.js";

// function calculateTotalCost(itemsBoughtArr, discount = 0) {
//   const total = itemsBoughtArr.reduce((total, currentItem) => {
//     return total + currentItem.priceUSD;
//   }, 0);
//   return total - discount;
// }

// console.log(calculateTotalCost(itemsBoughtArr, 10));

/* The Ternary Operator */
// const exerciseTimeMins = 30;

// const message =
//   exerciseTimeMins < 30 ? "You need to try harder!" : "Doing good!";

// console.log(message);

/* The Ternary Operator for Complex Conditionals */
// const exerciseTimeMins = 40;

// const message =
//   exerciseTimeMins < 30
//     ? "You need to try harder!"
//     : exerciseTimeMins < 60
//     ? "Doing good!"
//     : "Excellent!";

// console.log(message);

/* Ternary Operator Challenge */
// const playerGuess = 3;
// const correctAnswer = 6;

// let message = playerGuess === correctAnswer ? "Correct!" : "Wrong!";

// console.log(message);

// const playerGuess = 6;
// const correctAnswer = 6;

// const message =
//   playerGuess < correctAnswer
//     ? "Too low!"
//     : playerGuess > correctAnswer
//     ? "Too high"
//     : "Exactly right!";

// console.log(message);

/*
Challenge
1. Now improve the functionality of this code by 
   letting the player know if their guess was too high, 
   too low, or exactly right.
*/

/* The Rest Parameter */
// function setPermissionLevel(permissionLevel, ...names) {
//   names.forEach((name) => {
//     console.log(`${name} now has ${permissionLevel} level access.`);
//   });
// }

// setPermissionLevel("admin", "Dave", "Sally");

/* Spread Syntax (...) */

// const lunchMenu = [
//   "Greek Salad",
//   "Open Sandwich",
//   "Parsnip Soup",
//   "Flatbread and Dip",
// ];
// const dinnerMenu = ["Lasagne", "Strogonoff", "Tagine", "Katsu Curry"];
// const sweetMenu = [
//   "Mixed Berry Ice Cream",
//   "Chocolate Brownie",
//   "Orange Cheesecake",
// ];

// // console.log(...lunchMenu)
// // Greek Salad,"Open Sandwich","Parsnip Soup","Flatbread and Dip"

// const eventMenu = [...lunchMenu, ...dinnerMenu, ...sweetMenu];

// console.log(eventMenu);

/* Short-circuiting with OR (||) */
// const jobHunter = {
//   name: "Tom Chant",
//   jobSearchArea: "Europe",
// };

// const workLocation = jobHunter.jobSearchArea || "Worldwide";
// console.log(`${jobHunter.name}'s work location is ${workLocation}`);

/* Short-circuiting with AND (&&) */
const user = {
  userName: "Tom",
  role: "admin",
};

user.role === "admin" && greetAdmin();

function greetAdmin() {
  console.log("Hi Admin!");
}

// console.log(user.role === 'admin')
