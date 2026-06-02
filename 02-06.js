// Task 1: Convert Promise Chain to Async/Await
// Convert this promise chain to use async/await

const { attemptCount } = require("./attemptCount");

// Original Promise chain (for reference):
function fetchUserDataPromise(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        })
        .then(user => {
            console.log('User:', user.name);
            return user;
        })
        .catch(error => {
            console.error('Error:', error.message);
            return null;
        });
}

// Your task: Rewrite using async/await
async function fetchUserData(userId) {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        if (!response.ok) {
            throw new Error('User not found');
        }

        const user = await response.json();

        console.log('User:', user.name);

        return user;
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}

// Test your function
fetchUserData(1);


console.log('================================');


// Task 2: Parallel Data Fetching
// Fetch multiple resources in parallel

const API_BASE = 'https://jsonplaceholder.typicode.com';

// Sequential version (slow) - for comparison
async function fetchSequential() {
    const start = Date.now();
    
    const users = await fetch(`${API_BASE}/users`).then(r => r.json());
    const posts = await fetch(`${API_BASE}/posts`).then(r => r.json());
    const comments = await fetch(`${API_BASE}/comments`).then(r => r.json());
    
    console.log(`Sequential: ${Date.now() - start}ms`);
    return { users, posts, comments };
}

// Your task: Implement parallel version (fast)
async function fetchParallel() {
    const start = Date.now();
    
  try {
        const [users, posts, comments] = await Promise.all([
            fetch(`${API_BASE}/users`).then(response => response.json()),
            fetch(`${API_BASE}/posts`).then(response => response.json()),
            fetch(`${API_BASE}/comments`).then(response => response.json())
        ]);

        console.log(`Parallel: ${Date.now() - start}ms`);

        return { users, posts, comments };
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}

// Test
fetchParallel().then(data => {
    console.log('Users:', data.users.length);
    console.log('Posts:', data.posts.length);
    console.log('Comments:', data.comments.length);
    // Return { users, posts, comments }
})


// Test both versions
// fetchSequential();
// fetchParallel();

console.log('================================');

// Task 3: Async Array Processing
// Process array items with async/await

const userIds = [1, 2, 3, 4, 5];

async function fetchUser(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.json();
}

// Task 3a: Sequential processing (one by one)
async function processSequential(ids) {
    const users = [];

    for (const id of ids) {
        const user = await fetchUser(id);
        users.push(user);
    }

    return users;
}

// Task 3b: Parallel processing (all at once)
async function processParallel(ids) {
    return Promise.all(
        ids.map(id => fetchUser(id))
    );
}

// Test both
async function test() {
    console.log('Sequential:');
    const seq = await processSequential(userIds);
    console.log(seq.map(u => u.name));

    console.log('Parallel:');
    const par = await processParallel(userIds);
    console.log(par.map(u => u.name));
}

test();

console.log('================================');

// Task 5: Timeout Wrapper
// Create timeout functionality for async operations

// Simulated slow API
async function slowApi(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
    return { data: 'Response', delay: ms };
}

// Your task: Implement withTimeout
// Your task: Implement withTimeout
async function withTimeout(asyncFn, timeoutMs) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Operation timed out'));
        }, timeoutMs);
    });

    return Promise.race([
        asyncFn(),
        timeoutPromise
    ]);
}

// Test cases
async function test() {
    // Should succeed (2 second operation, 5 second timeout)
    try {
        const result = await withTimeout(() => slowApi(2000), 5000);
        console.log('Success:', result);
    } catch (error) {
        console.log('Error:', error.message);
    }
    
    // Should timeout (5 second operation, 2 second timeout)
    try {
        const result = await withTimeout(() => slowApi(5000), 2000);
        console.log('Success:', result);
    } catch (error) {
        console.log('Error:', error.message);
    }
}

test();

console.log('================================');

// Task 6: Async Data Pipeline
// Build a data processing pipeline using async/await

// Step 1: Fetch all users
async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
}

// Step 2: Filter users (simulated - keep users with id <= 5)
async function filterActiveUsers(users) {
    // Simulated async filter (e.g., checking database)
    await new Promise(resolve => setTimeout(resolve, 100));
    return users.filter(user => user.id <= 5);
}

// Step 3: Fetch posts for a user
async function fetchUserPosts(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return response.json();
}

// Your task: Create the pipeline
// Your task: Create the pipeline
async function processUserData() {
    try {
        // 1. Fetch all users
        const users = await fetchUsers();

        // 2. Filter active users
        const activeUsers = await filterActiveUsers(users);

        // 3. Fetch posts for each active user in parallel
        const results = await Promise.all(
            activeUsers.map(async (user) => {
                const posts = await fetchUserPosts(user.id);

                // 4. Return { user, posts }
                return {
                    user,
                    posts
                };
            })
        );

        return results;
    } catch (error) {
        console.error('Error processing user data:', error);
        throw error;
    }

}

// Test
async function test() {
    try {
        const result = await processUserData();
        console.log('Pipeline result:');
        result.forEach(({ user, posts }) => {
            console.log(`${user.name}: ${posts.length} posts`);
        });
    } catch (error) {
        console.error('Pipeline error:', error.message);
    }
}

test();
