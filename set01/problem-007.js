// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the 10001st prime number?

// function will check if num is prime or not. Returns boolean value.
const isPrime = (num) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num !== 1;
}

const primeArr = []

// goes thru number 2 to 110000. If it is prime, it gets pushed to the primeArr
for (var i = 2; i <= 110000; i++) {
  if (isPrime(i) === true) {
    primeArr.push(i)
  }
}

console.log(primeArr[10000]); // the answer! Index 10000 because indexes start with 0 in Javascript.
