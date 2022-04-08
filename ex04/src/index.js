// Only change code below this line
var fibonacci = [0, 1, 1, 2, 3, 5, 8, 13];
function sumFibonacci(num) {
    sum = 0;
    for (i = 0; fibonacci[i] <= num; i++) {
        x = fibonacci[i];
        if (x % 2 != 0) {
           sum = sum + x;
        } 
    }
    return sum;
}
// Only change code above this line

console.log(sumFibonacci(1)); // Change this line
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;