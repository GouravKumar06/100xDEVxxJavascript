/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
*/

function timeTaken(n) {
  const time1 = Date.now();
  console.log("time1: ", time1);
  let total = 0;
  for (let i = 1; i < n; i++) {
    total += i;
  }

  const time2 = Date.now();
  console.log("time2: ", time2);

  const difference = time2 - time1;

  console.log("difference: ", difference);
}

timeTaken(100); // 1-100
timeTaken(100000); // 1-100000
timeTaken(1000000000); // 1-1000000000
