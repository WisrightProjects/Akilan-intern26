// ==========================================
// JavaScript Async Programming Full Example
// ==========================================

console.log("==================================");
console.log("1. SYNCHRONOUS VS ASYNCHRONOUS");
console.log("==================================");

// Synchronous
console.log("Start");
console.log("Middle");
console.log("End");

// Asynchronous
console.log("\nAsync Example Start");

setTimeout(() => {
  console.log("Inside setTimeout (2 seconds)");
}, 2000);

console.log("Async Example End");



// ==========================================
// 2. CALLBACK FUNCTIONS
// ==========================================

console.log("\n==================================");
console.log("2. CALLBACK FUNCTIONS");
console.log("==================================");

function greet(name, callback) {
  console.log(`Hello ${name}`);

  callback();
}

function finished() {
  console.log("Greeting Completed");
}

greet("Akilan", finished);



// ==========================================
// 3. setTimeout()
// ==========================================

console.log("\n==================================");
console.log("3. setTimeout()");
console.log("==================================");

console.log("Timer Started");

setTimeout(() => {
  console.log("Executed after 3 seconds");
}, 3000);

console.log("Timer Running...");



// ==========================================
// 4. setInterval()
// ==========================================

console.log("\n==================================");
console.log("4. setInterval()");
console.log("==================================");

let count = 0;

const intervalId = setInterval(() => {
  count++;

  console.log(`Interval Count: ${count}`);

  if (count === 5) {
    clearInterval(intervalId);

    console.log("Interval Stopped");
  }
}, 1000);



// ==========================================
// 5. JAVASCRIPT EVENT LOOP
// ==========================================

console.log("\n==================================");
console.log("5. JAVASCRIPT EVENT LOOP");
console.log("==================================");

console.log("Event Loop Start");

setTimeout(() => {
  console.log("setTimeout Callback");
}, 0);

console.log("Event Loop End");

/*
Expected Output:
Event Loop Start
Event Loop End
setTimeout Callback

Why?
Because setTimeout callback enters callback queue
and waits until call stack becomes empty.
*/



// ==========================================
// 6. CALLBACK HELL
// ==========================================

console.log("\n==================================");
console.log("6. CALLBACK HELL");
console.log("==================================");

setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");

      setTimeout(() => {
        console.log("Step 4");
      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);

/*
This nested structure is called:
- Callback Hell
- Pyramid of Doom
*/



// ==========================================
// 7. ERROR-FIRST CALLBACK PATTERN
// ==========================================

console.log("\n==================================");
console.log("7. ERROR-FIRST CALLBACK PATTERN");
console.log("==================================");

function fetchData(callback) {

  const success = true;

  setTimeout(() => {

    if (success) {
      callback(null, "Data fetched successfully");
    } else {
      callback("Something went wrong", null);
    }

  }, 2000);
}

fetchData((error, data) => {

  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Success:", data);
  }

});



// ==========================================
// 8. ASYNC ORDER EXAMPLE
// ==========================================

console.log("\n==================================");
console.log("8. ASYNC EXECUTION ORDER");
console.log("==================================");

console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000);

console.log("3");

setTimeout(() => {
  console.log("4");
}, 0);

console.log("5");

/*
Expected Output:
1
3
5
4
2
*/



// ==========================================
// 9. REAL LIFE CALLBACK EXAMPLE
// ==========================================

console.log("\n==================================");
console.log("9. REAL LIFE CALLBACK EXAMPLE");
console.log("==================================");

function orderFood(food, callback) {

  console.log(`Ordering ${food}...`);

  setTimeout(() => {

    callback(`${food} is ready`);

  }, 2000);
}

orderFood("Pizza", (message) => {
  console.log(message);
});



// ==========================================
// 10. EVENT LOOP EXPLANATION
// ==========================================

console.log("\n==================================");
console.log("10. EVENT LOOP FLOW");
console.log("==================================");

/*

CALL STACK
    ↓
WEB APIs
    ↓
CALLBACK QUEUE
    ↓
EVENT LOOP

Flow:
1. JS executes sync code
2. Async tasks go to Web APIs
3. Completed callbacks enter queue
4. Event Loop checks stack
5. If stack empty → callback executes

*/

