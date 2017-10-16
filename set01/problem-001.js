// Find the sum of all multiples of 3 and 5 below given number

const mult3and5 = (maxNum) => {
  console.log(`Input number is: ${maxNum}`)
  let sum = 0

  for (let i = 1; i < maxNum; ++i) {
    if (i % 3 === 0 || i % 5 === 0) {
      // console.log(`Multiple of 3 or 5 found: ${i}`);
      sum += i
    }
  }
  console.log(`The sum of all multiples of 3 and 5 below ${maxNum} is ${sum}.`);
}

mult3and5(10) // should equal 23
mult3and5(1000) // the answer to problem 1
