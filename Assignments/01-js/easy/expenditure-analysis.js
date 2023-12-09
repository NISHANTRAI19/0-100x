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

function calculateTotalSpentByCategory(transactions) {
  let tempOutput = {}; //tempOutput{food:25,cloth:10,}

  for (let i = 0; i < transactions.length; i++) {
    if (!tempOutput[transactions[i].category]) {
      tempOutput[transactions[i].category] = 0;
    }
    tempOutput[transactions[i].category] += transactions[i].price;
  }

  let output = []; // [{ category: 'Food', totalSpent: 10 },{ category: 'xyz', totalSpent: 10 }] 
  const keys = Object.keys(tempOutput);
  for (let i = 0; i < keys.length; i++) {
      
    output.push({category:keys[i],totalSpent:tempOutput[keys[i]]})
      
      
 

  }

  return output;
}

module.exports = calculateTotalSpentByCategory;
