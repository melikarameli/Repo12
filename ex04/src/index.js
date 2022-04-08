// Only change code below this line
function sumFibonacci(num) {
    var x = [];
    if (x % 2 != 0 || x <= num) {
           var sum = num + x;
           return sum;
        } else {
            return 0;
        }
}
// Only change code above this line

console.log(sumFibonacci(1)); // Change this line
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;