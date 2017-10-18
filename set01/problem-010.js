// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.

const primeArr = []

// func that takes in a number and checks if its prime or not. Returns boolean.
const isPrime = (num) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num !== 1;
}

// If it is prime, push it to the primeArr
for (var p = 2; p < 2000000; p++) {
  if (isPrime(p) === true) {
    primeArr.push(p)
  }
}

// reduce primeArr to a sum
let primeSum = primeArr.reduce(function(total, num){return total + num})
console.log(primeSum); // the answer!
