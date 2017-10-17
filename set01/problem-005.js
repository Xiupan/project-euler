// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

for (var k = 20; k < 1000000000; k++) {
  if (k % 20 === 0) {
    if (k % 19 === 0) {
      if (k % 18 === 0) {
        if (k % 17 === 0) {
          if (k % 16 === 0) {
            if (k % 15 === 0) {
              if (k % 14 === 0) {
                if (k % 13 === 0) {
                  if (k % 12 === 0) {
                    if (k % 11 === 0) {
                      if (k % 10 === 0) {
                        if (k % 9 === 0) {
                          if (k % 8 === 0) {
                            if (k % 7 === 0) {
                              if (k % 6 === 0) {
                                if (k % 5 === 0) {
                                  if (k % 4 === 0) {
                                    if (k % 3 === 0) {
                                      if (k % 2 === 0) {
                                        console.log(`Found it! It's ${k}.`);
                                        break
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
