// ======================================================
// JAVASCRIPT PROMISES & ASYNC/AWAIT - SINGLE FILE
// ======================================================



// ======================================================
// 1. PROMISE
// ======================================================

console.log("\n=================================");
console.log("1. PROMISE");
console.log("=================================");

/*
A Promise handles asynchronous operations.

Promise States:
1. Pending
2. Resolved
3. Rejected
*/

const promiseExample = new Promise((resolve, reject) => {

  let success = true;

  if (success) {
    resolve("Promise Resolved Successfully");
  } else {
    reject("Promise Rejected");
  }

});

console.log(promiseExample);



// ======================================================
// 2. resolve()
// ======================================================

console.log("\n=================================");
console.log("2. resolve()");
console.log("=================================");

/*
resolve() is used when the operation succeeds.
The resolved value goes into .then()
*/

const resolveExample = new Promise((resolve) => {

  resolve("Data Loaded Successfully");

});

resolveExample.then((result) => {

  console.log("Resolved Data:", result);

});



// ======================================================
// 3. reject()
// ======================================================

console.log("\n=================================");
console.log("3. reject()");
console.log("=================================");

/*
reject() is used when the operation fails.
The rejected value goes into .catch()
*/

const rejectExample = new Promise((resolve, reject) => {

  reject("Server Error");

});

rejectExample.catch((error) => {

  console.log("Rejected Error:", error);

});



// ======================================================
// 4. .then()
// ======================================================

console.log("\n=================================");
console.log("4. .then()");
console.log("=================================");

/*
.then() handles successful promise results
*/

const thenExample = new Promise((resolve) => {

  setTimeout(() => {

    resolve("User Data Received");

  }, 2000);

});

thenExample.then((data) => {

  console.log("then() Output:", data);

});



// ======================================================
// 5. .catch()
// ======================================================

console.log("\n=================================");
console.log("5. .catch()");
console.log("=================================");

/*
.catch() handles promise errors
*/

const catchExample = new Promise((resolve, reject) => {

  let apiWorking = false;

  if (apiWorking) {
    resolve("API Connected");
  } else {
    reject("API Connection Failed");
  }

});

catchExample
  .then((result) => {

    console.log(result);

  })
  .catch((error) => {

    console.log("catch() Output:", error);

  });



// ======================================================
// 6. PROMISE CHAINING
// ======================================================

console.log("\n=================================");
console.log("6. PROMISE CHAINING");
console.log("=================================");

/*
Multiple .then() blocks connected together
*/

Promise.resolve(10)

  .then((num) => {

    console.log("Step 1:", num);

    return num * 2;

  })

  .then((num) => {

    console.log("Step 2:", num);

    return num * 3;

  })

  .then((finalResult) => {

    console.log("Final Result:", finalResult);

  });



// ======================================================
// 7. async
// ======================================================

console.log("\n=================================");
console.log("7. async");
console.log("=================================");

/*
async makes a function asynchronous.
An async function always returns a Promise.
*/

async function asyncFunction() {

  return "Hello from async function";

}

asyncFunction().then((message) => {

  console.log(message);

});



// ======================================================
// 8. await
// ======================================================

console.log("\n=================================");
console.log("8. await");
console.log("=================================");

/*
await waits until a Promise completes
*/

function fetchData() {

  return new Promise((resolve) => {

    setTimeout(() => {

      resolve("Server Data Received");

    }, 2000);

  });

}

async function getData() {

  console.log("Loading...");

  const data = await fetchData();

  console.log(data);

}

getData();



// ======================================================
// 9. try/catch
// ======================================================

console.log("\n=================================");
console.log("9. try/catch");
console.log("=================================");

/*
try → normal code
catch → handles errors
*/

function getUser() {

  return new Promise((resolve, reject) => {

    let userFound = false;

    setTimeout(() => {

      if (userFound) {
        resolve("User Found");
      } else {
        reject("User Not Found");
      }

    }, 2000);

  });

}

async function loadUser() {

  try {

    const user = await getUser();

    console.log(user);

  } catch (error) {

    console.log("Error:", error);

  }

}

loadUser();

