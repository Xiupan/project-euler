// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

const threeDigitArr = []
const threeDigitArr2 = []
const palindromeProducts = []
let num1 = 0
let num2 = 0
let product = 0
let reversedProduct = 0

// generates all three digit numbers
for (var i = 100; i <= 999; i++) {
  threeDigitArr.push(i)
  threeDigitArr2.push(i)
}

// re-orders the arrays from highest to lowest
threeDigitArr.sort(function(a,b){return b-a})
threeDigitArr2.sort(function(a,b){return b-a})

// nested for loop to mulitply an element of one array to the other
// gets product then reverse it, if it matches, push it to the palindrome array and break out of the loop
for (var k = 0; k < threeDigitArr.length; k++) {
  for (var p = 0; p < threeDigitArr2.length; p++) {
    num1 = threeDigitArr[k]
    num2 = threeDigitArr2[p]
    product = (num1 * num2)
    reversedProduct = parseInt(product.toString().split("").reverse().toString().replace(/,/g,""))
    if (product === reversedProduct) {
      console.log(`Palindrome found! ${product} matches ${reversedProduct}.`);
      palindromeProducts.push(product)
      break
    }
  }
}

// sorts palindrome array from highest to lowest and log out the first one, which is the answer :)
palindromeProducts.sort(function(a,b){return b-a})
console.log(palindromeProducts[0]);
