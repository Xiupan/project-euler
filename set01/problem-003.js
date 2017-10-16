// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143?

const largestPrimeFactor = (inputNum) => {
  let allNumArr = []
  let factorArr = []
  let primeFactorArr = []

  let sqrtNum = Math.floor(Math.sqrt(inputNum))

  // create an array from 2 to the square root of the input number
  for (var i = 2; i < (sqrtNum); i++) {
    allNumArr.push(i)
  }

  // loop thru and divide the input number by each number in the allNum array, if it divides evenly, push that number and the answer into the factor Array
  for (var j = 0; j < allNumArr.length; j++) {
    if (inputNum % allNumArr[j] === 0) {
      factorArr.push(allNumArr[j])
      factorArr.push(inputNum / allNumArr[j])
    }
  }

  // loop thru the factor Array to check if each one is prime
  const isPrime = (num) => {
    for (let p = 2; p < num; p++)
      if (num % p === 0) return false;
    return num !== 1;
  }

  // if its prime, push it into the primeFactor Array
  for (var k = 0; k < factorArr.length; k++) {
    if (isPrime(factorArr[k]) === true) {
      primeFactorArr.push(factorArr[k])
    }
  }

  // sorts the primeFactor Array from highest to lowest, log the first element
  console.log(primeFactorArr.sort(function(a,b){return b-a}));
  console.log(primeFactorArr[0]);
}

largestPrimeFactor(13195) // should output 29
largestPrimeFactor(600851475143) // the answer to problem 3!
