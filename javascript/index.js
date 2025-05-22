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

const getTheftAlert = function (numberOfTransactionsHour) {
  if (numberOfTransactionsHour > 5) {
    return `You have made ${numberOfTransactionsHour} transactions 
                in the past hour. We think your card might have been 
                compromised`;
  }
};

console.log(getTheftAlert(6));
