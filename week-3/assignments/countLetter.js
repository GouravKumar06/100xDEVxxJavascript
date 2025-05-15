
// function countLetters(str) {
//   let obj = {};
//   str = str.toLowerCase();

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char === " ") {
//       continue;
//     }

//     if (obj[char]) {
//       obj[char]++;
//     } else {
//       obj[char] = 1;
//     }
//   }

//   console.log(obj); // // { h: 1, e: 1, l: 2, o: 2, g: 1, u: 1, r: 1, a: 1, v: 1 }

//   let maxChar = null;
//   let minChar = null;
//   let maxCount = -Infinity;
//   let minCount = Infinity;

//   for (let key in obj) {
//     if(obj[key] > maxCount){
//       maxCount = obj[key];
//       maxChar = key;
//     }

//     if(obj[key] < minCount){
//       minCount = obj[key];
//       minChar = key;
//     }
//   }
//   console.log("maxChar: ", maxChar); // l
//   console.log("minChar: ", minChar); // h
// }

// countLetters("Hello Gourav");





// let arr = [1, 2, 3, 4, 5];

// for (var i = 0; i < arr.length; i++) {
//   let element = arr[i];
//   console.log("element: ", element);
// }





const original = {
  name: "Gaurav",
  address: {
    city: "Ellenabad",
  },
};

const shallowCopy = { ...original };
console.log("original 1: ", original);
console.log("shallowCopy 1: ", shallowCopy);

shallowCopy.name = "Guru"; // Only top-level field
shallowCopy.address.city = "Delhi"; // Nested object

console.log("original: ", original);
console.log("shallowCopy: ", shallowCopy);
console.log(original.address.city);


// function add(a){
//   return function(b){
//     if(b) return add(a+b);
//     return a;
//   }
// }

// console.log(add(1)(2)(3)()); // 6
// console.log(add(1)(2)(3)(4)()); // 10 


function printTable(num, i = 1) {
  if (i > 10) return;
  console.log(`${num} x ${i} = ${num * i}`);
  printTable(num, i + 1);
}

// Call the function
printTable(5);