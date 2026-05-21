// Sample Array
const users = [
  { id: 1, name: "Akilan", age: 20, active: true },
  { id: 2, name: "John", age: 25, active: false },
  { id: 3, name: "Sara", age: 22, active: true }
];

// forEach()

console.log("=== forEach() ===");

users.forEach(user => {
  console.log(user.name);
});

// -----------------------------------
// map()
// -----------------------------------
console.log("\n=== map() ===");

const names = users.map(user => user.name);

console.log(names);

// -----------------------------------
// filter()
// -----------------------------------
console.log("\n=== filter() ===");

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);

// -----------------------------------
// find()
// -----------------------------------
console.log("\n=== find() ===");

const foundUser = users.find(user => user.id === 2);

console.log(foundUser);

// -----------------------------------
// reduce()
// -----------------------------------
console.log("\n=== reduce() ===");

const totalAge = users.reduce((acc, user) => {
  return acc + user.age;
}, 0);

console.log("Total Age:", totalAge);

// -----------------------------------
// some()
// -----------------------------------
console.log("\n=== some() ===");

const hasTeen = users.some(user => user.age < 21);

console.log(hasTeen);

// -----------------------------------
// every()
// -----------------------------------
console.log("\n=== every() ===");

const allAdults = users.every(user => user.age >= 18);

console.log(allAdults);

// -----------------------------------
// Chaining filter() + map()
// -----------------------------------
console.log("\n=== Chaining filter() + map() ===");

const activeNames = users
  .filter(user => user.active)
  .map(user => user.name);

console.log(activeNames);

// -----------------------------------
// Traditional Iteration
// -----------------------------------
console.log("\n=== Traditional Iteration ===");

for (let i = 0; i < users.length; i++) {
  console.log(users[i].name);
}