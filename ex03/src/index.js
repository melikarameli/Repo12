// Only change code below this line
var numRange = [];
function rangeOfNumbers(startN, endN) {
 if (startN > endN) {
  return "The starting number will always be less than or equal to the ending number";
 } else {
  const numbers = rangeOfNumbers(startN + 1, endN);
  numRange.unshift(startN);
  return numRange;
 }
};
// Only change code above this line

console.log(rangeOfNumbers(1, 7)); // Change this line
console.log(rangeOfNumbers(3, 10)); 
console.log(rangeOfNumbers(5, 5)); 
console.log(rangeOfNumbers(7, 5)); 
module.exports = rangeOfNumbers;