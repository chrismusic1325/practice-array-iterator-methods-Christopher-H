let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
fruits.shift();
fruits.unshift("grape");
console.log("Task 1:", fruits);

let colors = ["red", "blue", "green", "blue", "yellow"];
let includesResult = colors.includes("blue");
let firstIndex = colors.indexOf("blue");
let lastIndex = colors.lastIndexOf("blue");
let colorResults = [includesResult, firstIndex, lastIndex];
console.log("Task 2:", colorResults);

let teamA = ["Alice", "Bob"];
let teamB = ["Charlie", "Diana"];
let allTeams = teamA.concat(teamB);
allTeams.push("Eve");
console.log("Task 3:", allTeams);

let numbers = [10, 20, 30, 40, 50];
let middleNumbers = numbers.slice(1, 3);
numbers.splice(3, 2, 60, 70);
console.log("Task 4 middleNumbers:", middleNumbers);
console.log("Task 4 numbers:", numbers);

let scores = [85, 70, 95, 60, 75];
scores.sort((a, b) => a - b);
scores.reverse();
console.log("Task 5:", scores);
