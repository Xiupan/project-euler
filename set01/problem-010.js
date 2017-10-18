// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.

let primeSum = 0

// function to find if a number is prime or not. Returns boolean value.
const isPrime = (num) => {
  for (let p = 2; p < num; p++)
    if (num % p === 0) return false;
  return num !== 1;
}

for (var i = 1; i <= 2000000; i++) {
  if (isPrime(i) === true) {
    primeSum += i
  }
}

console.log(primeSum);
