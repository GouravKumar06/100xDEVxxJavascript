

function arrayOfKeys(obj) {
  let arr = [];

  for (let key in obj) {
    arr.push(key);
  }

  console.log(arr);
}

const obj = {
  name: "gourav",
  role: "developer",
  field: "node js ",
  language: "javascript",
};

arrayOfKeys(obj);