/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }

  console.log("rev: ", rev.toLowerCase());

  return rev.toLowerCase() === str.toLowerCase();
}

const result = isPalindrome("Nan");
console.log("result: ", result);
