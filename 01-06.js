// Task 1: Create a Basic Promise
// Create delay(ms, message) that resolves after ms milliseconds

function delay(ms, message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, ms);
    });
}

// Test your function
delay(2000, 'Hello after 2 seconds!')
    .then(msg => console.log(msg));

console.log('This logs first');

console.log('=============-============-------============-=====================');

// Task 2: Handle Promise Rejection
// Modify delay to reject if ms is negative

function delayWithRejection(ms, message) {
    return new Promise((resolve, reject) => {
        if (ms < 0) {
            reject(new Error('Delay cannot be negative'));
        } else {
            setTimeout(() => {
                resolve(message);
            }, ms);
        }
    });
}

// Test your function with rejection
delayWithRejection(-1000, 'This will fail')
    .then(msg => console.log(msg))
    .catch(err => console.error('Error:', err.message));

delayWithRejection(1000, 'This will succeed')
    .then(msg => console.log(msg))
    .catch(err => console.error('Error:', err.message));

console.log('==============-============-------============-=====================');


// Task 2: Promise with Error Handling

// Create validateUser(username) that validates and returns user data

function validateUser(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Validate username
            if (!username) {
                reject(new Error("Username is required"));
            } else {
                resolve({
                    username,
                    id: Date.now()
                });
            }
        }, 500);
    });
}

// Test with valid username
validateUser('john_doe')
    .then(user => console.log('User:', user))
    .catch(err => console.error('Error:', err.message));

// Test with empty username
validateUser('')
    .then(user => console.log('User:', user))
    .catch(err => console.error('Error:', err.message));

console.log('==============-============-------============-=====================');

// Task 3: Promise Chaining
// Chain promises to get user -> posts -> comments

// Mock async functions (provided)
function getUser(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id, name: 'John Doe' }), 200);
    });
}

function getPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve([
            { id: 1, userId, title: 'First Post' },
            { id: 2, userId, title: 'Second Post' }
        ]), 200);
    });
}

function getComments(postId) {
    return new Promise(resolve => {
        setTimeout(() => resolve([
            { id: 1, postId, text: 'Great post!' },
            { id: 2, postId, text: 'Thanks for sharing' }
        ]), 200);
    });
}

// Your task: Chain these promises
// 1. Get user with id 1
// 2. Get posts for that user
// 3. Get comments for the first post
// 4. Log all data at the end

// Your code here// Task 3: Promise Chaining
// 1. Get user with id 1
// 2. Get posts for that user
// 3. Get comments for the first post
// 4. Log all data at the end

let userData;
let postsData;

getUser(1)
    .then(user => {
        userData = user;
        return getPosts(user.id);
    })
    .then(posts => {
        postsData = posts;
        return getComments(posts[0].id);
    })
    .then(comments => {
        console.log("User:", userData);
        console.log("Posts:", postsData);
        console.log("Comments:", comments);
    })
    .catch(error => {
        console.error("Error:", error);
    });
    
    console.log('==============--============-------============-=====================');

    // Task 4: Promise.all for Parallel Execution

function fetchUsers() {
    return new Promise(resolve => {
        setTimeout(() => resolve(['Alice', 'Bob', 'Charlie']), 300);
    });
}

function fetchProducts() {
    return new Promise(resolve => {
        setTimeout(() => resolve(['Laptop', 'Phone', 'Tablet']), 400);
    });
}

function fetchOrders() {
    return new Promise(resolve => {
        setTimeout(() => resolve(['Order1', 'Order2']), 200);
    });
}

const startTime = Date.now();

// Fetch all data in parallel
Promise.all([
    fetchUsers(),
    fetchProducts(),
    fetchOrders()
])
    .then(([users, products, orders]) => {
        console.log("Users:", users);
        console.log("Products:", products);
        console.log("Orders:", orders);

        const totalTime = Date.now() - startTime;
        console.log(`Total Time: ${totalTime}ms`);
    })
    .catch(error => {
        console.error("Error:", error);
        
    });

    console.log('==============--============-------============-=====================');

    // Task 5: Promise.race for Timeout

function slowApiCall() {
    return new Promise(resolve => {
        setTimeout(() => resolve({ data: 'API Response' }), 3000);
    });
}

function fastApiCall() {
    return new Promise(resolve => {
        setTimeout(() => resolve({ data: 'Fast Response' }), 500);
    });
}

// Create a timeout function
function createTimeout(ms) {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error(`Request timed out after ${ms}ms`));
        }, ms);
    });
}

// Create fetchWithTimeout function
function fetchWithTimeout(promiseFn, timeout) {
    return Promise.race([
        promiseFn(),
        createTimeout(timeout)
    ]);
}

// Test with slow API (should timeout)
fetchWithTimeout(slowApiCall, 1000)
    .then(data => console.log('Success:', data))
    .catch(err => console.log('Error:', err.message));

// Test with fast API (should succeed)
fetchWithTimeout(fastApiCall, 1000)
    .then(data => console.log('Success:', data))
    .catch(err => console.log('Error:', err.message));
    console.log('==============--============-------============-=====================');
    // Task 6: Promise.allSettled for Batch Processing
function processItem(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Randomly succeed or fail
            if (item.id % 2 === 0) {
                resolve({ id: item.id, status: 'processed' });
            } else {
                reject(new Error(`Failed to process item ${item.id}`));
            }
        }, 100);
    });
}
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' }
];
// Process all items
Promise.allSettled(items.map(item => processItem(item)))
    .then(results => {
        let successCount = 0;
        let failureCount = 0;
        results.forEach((result, index) => {
            const item = items[index];
            if (result.status === 'fulfilled') {
                successCount++;
                console.log(
                    `✅ ${item.name}:`,
                    result.value
                );
            } else {
                failureCount++;
                console.log(
                    `❌ ${item.name}:`,
                    result.reason.message
                );
            }
        });
        console.log("\n=== Summary ===");
        console.log(`Total Items: ${items.length}`);
        console.log(`Successful: ${successCount}`);
        console.log(`Failed: ${failureCount}`);
    })
    .catch(error => {
        console.error("Unexpected Error:", error);
    });
console.log('==============--============-------============-=====================');
