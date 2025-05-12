

function sumEvenNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum = sum + arr[i];
    }
  }

  console.log(sum);
}

sumEvenNumbers([2, 6, 8, 3, 7, 8, 9, 5, 4, 2]);