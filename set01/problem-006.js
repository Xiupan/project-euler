// The sum of the squares of the first ten natural numbers is,
//
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// sums the squares of each number up to and including maxNum
const sumOfSquares = (maxNum) => {
  let sum = 0
  for (var i = 1; i <= maxNum; i++) {
    sum = sum + (Math.pow(i,2))
  }
  return sum
}

// sums all numbers up to maxNum first, then squares the result
const squareOfSum = (maxNum) => {
  let sum = 0
  for (var i = 1; i <= maxNum; i++) {
    sum = sum + i
  }
  let squaredSum = Math.pow(sum,2)
  return squaredSum
}

console.log(squareOfSum(100) - sumOfSquares(100)); // the answer!
