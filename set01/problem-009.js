// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.
//

// Yes, that is a for loop within a for loop within a for loop... lol
// Pretty straight forward! The constraints are that a^2 + b^2 = c^2 AND a < b < c AND a + b + c = 1000.
// There is only one Pythagorean triplet that falls under those constraints. Logs the triplet and also logs the product of a*b*c, which is the answer :)
for (var a = 1; a <= 1000; a++) {
  for (var b = 1; b <= 1000; b++) {
    for (var c = 1; c <= 1000; c++) {
      let aSquared = Math.pow(a,2)
      let bSquared = Math.pow(b,2)
      let cSquared = Math.pow(c,2)
      if (aSquared + bSquared === cSquared && a < b && b < c && a + b + c === 1000) {
        console.log(`Found it! It's ${a}, ${b}, ${c}.`);
        console.log(`The product of abc is ${a*b*c}.`); // The answer!
      }
    }
  }
}
