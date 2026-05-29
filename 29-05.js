// Mock API Fetcher with Retry Logic using Callbacks

function mockApiFetch(url, callback) {

    console.log("Fetching:", url);

    setTimeout(() => {

        // Random success or failure
        const success = Math.random() > 0.5;

        if (success) {
            callback(null, "Data fetched successfully");
        } else {
            callback("Network Error", null);
        }

    }, 1000);
}


// Retry Function
function fetchWithRetry(url, retries, callback) {

    mockApiFetch(url, function(error, data) {

        if (error) {

            console.log("Fetch failed:", error);

            // Retry if attempts remaining
            if (retries > 0) {
                console.log("Retrying... Attempts left:", retries);

                fetchWithRetry(url, retries - 1, callback);

            } else {
                callback("Failed after all retries", null);
            }

        } else {

            callback(null, data);

        }

    });
}


// Test
fetchWithRetry("https://api.example.com", 3, function(error, result) {

    if (error) {
        console.log(error);
    } else {
        console.log(result);
    }

});


console.log("===========-==============-===============-===========-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// Refactored Callback Hell using Named Functions

// Step 1
function step1(callback) {
    setTimeout(() => {
        callback('A');
    }, 100);
}

// Step 2
function step2(previousResult, callback) {
    setTimeout(() => {
        callback(previousResult + 'B');
    }, 100);
}

// Step 3
function step3(previousResult, callback) {
    setTimeout(() => {
        callback(previousResult + 'C');
    }, 100);
}


// Final Handler
function handleFinalResult(finalResult) {
    console.log("Final:", finalResult);
}


// Handle Step 2 Result
function handleStep2Result(step2Result) {
    step3(step2Result, handleFinalResult);
}


// Handle Step 1 Result
function handleStep1Result(step1Result) {
    step2(step1Result, handleStep2Result);
}


// Start Execution
step1(handleStep1Result);


console.log("===========-==============-===============-===========-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// Step 1
function step1(callback) {
    setTimeout(() => callback('A'), 100);
}

// Step 2
function step2(prev, callback) {
    setTimeout(() => callback(prev + 'B'), 100);
}

// Step 3
function step3(prev, callback) {
    setTimeout(() => callback(prev + 'C'), 100);
}


// Final Result Handler
function handleStep3(result3) {
    console.log('Final:', result3);
}

// Handle Step 2
function handleStep2(result2) {
    step3(result2, handleStep3);
}

// Handle Step 1
function handleStep1(result1) {
    step2(result1, handleStep2);
}


// Start Process
step1(handleStep1);


console.log("===========-==============-===============-===========-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// Refactoring Callback Hell using Named Functions

// Simulated APIs
function getUser(userId, callback) {
    setTimeout(() => {
        callback({
            id: userId,
            name: "Akilan"
        });
    }, 1000);
}

function getOrders(userId, callback) {
    setTimeout(() => {
        callback([
            { orderId: 101 },
            { orderId: 102 }
        ]);
    }, 1000);
}

function getOrderDetails(orderId, callback) {
    setTimeout(() => {
        callback({
            orderId: orderId,
            product: "Laptop",
            price: 50000
        });
    }, 1000);
}


// Named Functions

function handleUser(user) {
    console.log("User:", user);

    getOrders(user.id, handleOrders);
}

function handleOrders(orders) {
    console.log("Orders:", orders);

    // Get details for first order
    getOrderDetails(orders[0].orderId, handleOrderDetails);
}

function handleOrderDetails(details) {
    console.log("Order Details:", details);
}


// Start Program
getUser(1, handleUser);


/*
Expected Output:

User: { id: 1, name: 'Akilan' }

Orders: [
  { orderId: 101 },
  { orderId: 102 }
]

Order Details: {
  orderId: 101,
  product: 'Laptop',
  price: 50000
}
*/


console.log("===========-==============-===============-===========-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// Divide Numbers using Error-First Callback

function divideNumbers(a, b, callback) {

    // Check division by zero
    if (b === 0) {
        callback("Error: Cannot divide by zero", null);
        return;
    }

    // Calculate result
    const result = a / b;

    // No error, send result
    callback(null, result);
}

// Example 1
divideNumbers(10, 2, function(error, result) {

    if (error) {
        console.log(error);
    } else {
        console.log("Result:", result);
    }

});

// Expected Output:
// Result: 5

console.log("===========-==============-===============-===========-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// Countdown Timer

function countdown(start) {

    let current = start;

    const timer = setInterval(() => {

        console.log(current);

        current--;

        // Stop when it reaches 0
        if (current < 0) {
            clearInterval(timer);
            console.log("Time's up!");
        }

    }, 1000);
}

// Example
countdown(5);

/*
Expected Output:

5
4
3
2
1
0
Time's up!

(each number prints every 1 second)
*/

console.log("===========-==============-===============-===========-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

// Task: Delayed Greeting with Cancel Feature

function delayedGreeting(name, delay) {

    // setTimeout stores the timer ID
    const timerId = setTimeout(() => {
        console.log(`Hello, ${name}!`);
    }, delay);

    // Return cancel function
    return function cancelGreeting() {
        clearTimeout(timerId);
        console.log("Greeting cancelled!");
    };
}

// Example 1
const cancel = delayedGreeting("Alice", 2000);

console.log("===========-==============-===============-===========-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");

