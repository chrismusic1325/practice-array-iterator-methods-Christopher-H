// ==========================
// Task 1: forEach()
// ==========================
const cities = ["New York", "Los Angeles", "Chicago", "Miami", "Dallas"];

cities.forEach(city => {
  console.log(city.toUpperCase());
});

// Expected Output:
// NEW YORK
// LOS ANGELES
// CHICAGO
// MIAMI
// DALLAS



// ==========================
// Task 2: map()
// ==========================
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(num => num * num);

console.log(squares);

// Expected Output:
// [1, 4, 9, 16, 25]



// ==========================
// Task 3: filter()
// ==========================
const scores = [85, 42, 90, 75, 30, 100];

const highScores = scores.filter(score => score >= 80);

console.log(highScores);

// Expected Output:
// [85, 90, 100]



// ==========================
// Task 4: find() and findIndex()
// ==========================
const favoriteFood = ["Pizza", "Tacos", "Burger", "Pasta", "Steak"];

const foundFood = favoriteFood.find(food => food.length > 4);
const foundIndex = favoriteFood.findIndex(food => food.length > 4);

console.log(foundFood);
console.log(foundIndex);

// Expected Output:
// Pizza
// 0



// ==========================
// Task 5: some() and every()
// ==========================
const temperatures = [72, 88, 91, 65, 77];

const hasHotDay = temperatures.some(temp => temp > 90);
const allWarm = temperatures.every(temp => temp > 50);

console.log([hasHotDay, allWarm]);

// Expected Output:
// [true, true]



// ==========================
// Task 6: reduce()
// ==========================
let budget = 200;

const prices = [40, 25, 60, 30];

const remainingBudget = prices.reduce((total, price) => {
  return total - price;
}, budget);

console.log(remainingBudget);

// Expected Output:
// 45
