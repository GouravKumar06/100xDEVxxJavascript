



function findSecondHighest(arr) {
  // Step 1: Find max
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // Step 2: Find second max    
  let secondMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== max && arr[i] > secondMax) {
      secondMax = arr[i];   // 5   8    8  8   8  
    }
  }

  return secondMax;

}
  
// ✅ Test
let arr = [5, 8, 1, 4, 9, 2];
console.log("Second highest:", findSecondHighest(arr)); // Output: 8
  