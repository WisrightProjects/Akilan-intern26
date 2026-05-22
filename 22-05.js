// ==========================================
// JAVASCRIPT OBJECTS COMPLETE EXAMPLE
// ==========================================

// ------------------------------------------
// 1. OBJECTS & PROPERTIES
// ------------------------------------------

const person = {
name: "Akilan",
age: 21,
city: "Chennai"
};

console.log("=== OBJECT PROPERTIES ===");
console.log(person.name);       // Dot notation
console.log(person["city"]);    // Bracket notation

// Access property using variable

const key = "age";
console.log(person[key]);


// ------------------------------------------
// 2. METHODS
// ------------------------------------------

const student = {
 name: "Akilan",

greet() {
    console.log("Hello!");
}
};

console.log("\n=== METHODS ===");
student.greet();


// ------------------------------------------
// 3. THIS KEYWORD
// ------------------------------------------

const user = {
name: "Akilan",
course: "JavaScript",

intro() {
    console.log(
"My name is " + this.name +
" and I study " + this.course
    );
}
};

console.log("\n=== THIS KEYWORD ===");
user.intro();


// ------------------------------------------
// 4. Object.keys()
// ------------------------------------------

console.log("\n=== Object.keys() ===");

const keys = Object.keys(person);

console.log(keys);


// ------------------------------------------
// 5. Object.values()
// ------------------------------------------

console.log("\n=== Object.values() ===");

const values = Object.values(person);

console.log(values);


// ------------------------------------------
// 6. Object.entries()
// ------------------------------------------

console.log("\n=== Object.entries() ===");

const entries = Object.entries(person);

console.log(entries);


// ------------------------------------------
// 7. LOOPING THROUGH OBJECT
// ------------------------------------------

console.log("\n=== for...in LOOP ===");

for (let key in person) {
console.log(key, person[key]);
}


// ------------------------------------------
// 8. LOOPING WITH Object.entries()
// ------------------------------------------

console.log("\n=== LOOP USING Object.entries() ===");

for (let [key, value] of Object.entries(person)) {
console.log(key, value);
}


// ------------------------------------------
// 9. OPTIONAL CHAINING
// ------------------------------------------

console.log("\n=== OPTIONAL CHAINING ===");

const employee = {
  name: "Akilan",
  skills: {
    frontend: "React"
  }
};

console.log(employee.skills?.frontend);
console.log(employee.skills?.backend);
console.log(employee.address?.city);


// ------------------------------------------
// 10. Object.assign()
// ------------------------------------------

console.log("\n=== Object.assign() ===");

const obj1 = {
  name: "Akilan"
};

const obj2 = {
  age: 21
};

const mergedObject = Object.assign({}, obj1, obj2);

console.log(mergedObject);


// ------------------------------------------
// 11. COPYING OBJECT WITH Object.assign()
// ------------------------------------------

console.log("\n=== COPY OBJECT ===");

const original = {
  language: "JavaScript"
};

const copied = Object.assign({}, original);

console.log(copied);


// ------------------------------------------
// 12. Object.freeze()
// ------------------------------------------

console.log("\n=== Object.freeze() ===");

const frozenUser = {
  name: "Akilan"
};

Object.freeze(frozenUser);

frozenUser.name = "John";
frozenUser.age = 25;

console.log(frozenUser);

console.log(Object.isFrozen(frozenUser));


// ------------------------------------------
// 13. Object.seal()
// ------------------------------------------

console.log("\n=== Object.seal() ===");

const sealedUser = {
  name: "Akilan"
};

Object.seal(sealedUser);

sealedUser.name = "John"; // allowed
sealedUser.age = 21;      // not allowed

console.log(sealedUser);

console.log(Object.isSealed(sealedUser));


// ------------------------------------------
// 14. SPREAD OPERATOR WITH OBJECTS
// ------------------------------------------

console.log("\n=== SPREAD OPERATOR ===");

const mobile = {
  brand: "Motorola",
  model: "Edge 50"
};

const updatedMobile = {
  ...mobile,
  color: "Black"
};

console.log(updatedMobile);


// ------------------------------------------
// 15. MERGING OBJECTS WITH SPREAD
// ------------------------------------------

console.log("\n=== MERGE OBJECTS ===");

const address = {
  city: "Chennai"
};

const details = {
  country: "India"
};

const merged = {
  ...address,
  ...details
};

console.log(merged);


// ------------------------------------------
// 16. OVERWRITING VALUES
// ------------------------------------------

console.log("\n=== OVERWRITING VALUES ===");

const profile = {
  name: "Jane",
  age: 25
};

const updatedProfile = {
  ...profile,
  name: "John"
};

console.log(updatedProfile);


// ------------------------------------------
// 17. PROPERTY SHORTHAND
// ------------------------------------------

console.log("\n=== PROPERTY SHORTHAND ===");

const course = "React";
const duration = "3 Months";

const courseDetails = {
  course,
  duration
};

console.log(courseDetails);


// ------------------------------------------
// 18. hasOwnProperty()
// ------------------------------------------

console.log("\n=== hasOwnProperty() ===");

console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("salary"));


// ------------------------------------------
// 19. METHOD SHORTHAND
// ------------------------------------------

console.log("\n=== METHOD SHORTHAND ===");

const calculator = {
  add(a, b) {
    return a + b;
  }
};

console.log(calculator.add(10, 20));


// ------------------------------------------
// 20. COMPLETE REAL EXAMPLE
// ------------------------------------------

console.log("\n=== COMPLETE REAL EXAMPLE ===");

const laptop = {
brand: "Lenovo",
model: "IdeaPad",
price: 55000,

specifications: {
    ram: "16GB",
    storage: "512GB SSD"
},

showDetails() {
    console.log(
this.brand +
" " +
this.model +
" - ₹" +
this.price
    );
}
};

laptop.showDetails();

console.log(Object.keys(laptop));
console.log(Object.values(laptop));
console.log(Object.entries(laptop));

console.log(laptop.specifications?.ram);
console.log(laptop.specifications?.processor);


// ==========================================
// END
// ==========================================