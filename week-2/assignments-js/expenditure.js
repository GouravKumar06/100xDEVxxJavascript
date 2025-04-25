/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


const transactions = [
  {
    id: 1,
    price: 10,
    category: "Food",
    itemName: "Pizza",
    timestamp: 1656076800000,
  },
  {
    id: 2,
    price: 20,
    category: "Clothing",
    itemName: "Shirt",
    timestamp: 1656076801000,
  },
  {
    id: 3,
    price: 15,
    category: "Food",
    itemName: "Burger",
    timestamp: 1656076802000,
  },
];

const calculateTotalSpentByCategory = (transactions) => {
  let obj = {};

  for(let tran of transactions){
    const {category, price} = tran;

    if(obj[category]){
      obj[category] += price;
    }else{
      obj[category] = price;
    }
  }

  let result = [];

  for(let key in obj){
    result.push({category: key, totalSpent: obj[key]})
  }
  return result;
}

console.log(calculateTotalSpentByCategory(transactions));