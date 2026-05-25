// =========================================
// JavaScript ES6+ Features - Single File
// =========================================

// -----------------------------------------
// 1. Destructuring
// -----------------------------------------

console.log("=== Destructuring ===");

const person = {
  name: "Akilan",
  age: 20,
  city: "Chennai"
};

// Object Destructuring
const { name, age, city } = person;

console.log(name);
console.log(age);
console.log(city);

// Array Destructuring
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a);
console.log(b);
console.log(c);


// -----------------------------------------
// 2. Spread Operator (...)
// -----------------------------------------

console.log("\n=== Spread Operator ===");

// Array Spread
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

console.log(arr2);

// Object Spread
const user = {
  username: "Akilan"
};

const updatedUser = {
  ...user,
  role: "Developer"
};

console.log(updatedUser);


// -----------------------------------------
// 3. Rest Operator (...)
// -----------------------------------------

console.log("\n=== Rest Operator ===");

function sum(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));


// -----------------------------------------
// 4. Template Literals
// -----------------------------------------

console.log("\n=== Template Literals ===");

const language = "JavaScript";

const message = `Hello ${name},
Welcome to ${language} ES6 Features!`;

console.log(message);


// -----------------------------------------
// 5. Optional Chaining (?.)
// -----------------------------------------

console.log("\n=== Optional Chaining ===");

const student = {
  profile: {
    email: "akilan@example.com"
  }
};

console.log(student?.profile?.email);
console.log(student?.address?.city); // undefined


// -----------------------------------------
// 6. Nullish Coalescing (??)
// -----------------------------------------

console.log("\n=== Nullish Coalescing ===");

const username = null;
const defaultName = username ?? "Guest User";

console.log(defaultName);

// Difference between || and ??
console.log(0 || 100); // 100
console.log(0 ?? 100); // 0


// -----------------------------------------
// 7. Combining Features Together
// -----------------------------------------

console.log("\n=== Combined Example ===");

const employee = {
  id: 101,
  details: {
    fullname: "Akilan S",
    department: "IT"
  }
};

// Destructuring + Optional Chaining
const {
  id,
  details: { fullname, department }
} = employee;

console.log(`Employee ID: ${id}`);
console.log(`Employee Name: ${fullname}`);
console.log(`Department: ${department}`);

// Spread Example
const updatedEmployee = {
  ...employee,
  salary: 50000
};

console.log(updatedEmployee);

