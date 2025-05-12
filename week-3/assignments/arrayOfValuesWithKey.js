
function arrayOfValuesWithKey(arr) {
  let obj = {};

  for (let eachObject of arr) {
    for (let key in eachObject) {
      if (!obj[key]) {
        obj[key] = [];
      }
      obj[key].push(eachObject[key]);
    }
  }

  console.log(obj);
}

const arr = [
  {
    name: "gourav",
    role: "developer",
    field: "node js ",
    language: "javascript",
  },
  {
    name: "ram",
    role: "data scientist",
    field: "ml engineer ",
    language: "python",
  },
  {
    name: "ramesh",
    role: "database administrator ",
    field: "engineer",
    language: "sql",
  },
];

arrayOfValuesWithKey(arr);