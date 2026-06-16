/**********************************************************************
 * Helper Functions
 **********************************************************************/

function title(text) {
    console.log(`\n========== ${text} ==========\n`);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**********************************************************************
 * 1. Promise Basics
 **********************************************************************/

async function promiseBasics() {
    title("1. Promise Basics");

    const promise = new Promise((resolve, reject) => {
        const success = true;

        if (success) {
            resolve("Promise fulfilled");
        } else {
            reject("Promise rejected");
        }
    });

    promise
        .then(result => console.log(result))
        .catch(error => console.log(error));

    await delay(500);
}

/**********************************************************************
 * 2. Promise Chaining
 **********************************************************************/

async function promiseChaining() {
    title("2. Promise Chaining");

    function step1() {
        return Promise.resolve("Step 1");
    }

    function step2(data) {
        return Promise.resolve(`${data} → Step 2`);
    }

    function step3(data) {
        return Promise.resolve(`${data} → Step 3`);
    }

    const result = await step1()
        .then(step2)
        .then(step3);

    console.log(result);
}

/**********************************************************************
 * 3. Error Handling
 **********************************************************************/

async function promiseErrors() {
    title("3. Promise Error Handling");

    await Promise.resolve()
        .then(() => {
            throw new Error("Something went wrong");
        })
        .catch(error => {
            console.log(error.message);
        });
}

/**********************************************************************
 * 4. Delay Utility
 **********************************************************************/

async function delayExample() {
    title("4. Delay Utility");

    console.log("Waiting 1 second...");

    await delay(1000);

    console.log("Done!");
}

/**********************************************************************
 * 5. Fetch GET Request
 **********************************************************************/

async function fetchGet() {
    title("5. Fetch GET");

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    console.log("Status:", response.status);
    console.log("OK:", response.ok);

    const users = await response.json();

    console.log("Total Users:", users.length);

    console.log("First User:");

    console.log(users[0]);
}

/**********************************************************************
 * 6. JSON Handling
 **********************************************************************/

async function jsonHandling() {
    title("6. JSON Handling");

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    const user = await response.json();

    console.log("Name:", user.name);
    console.log("Email:", user.email);
    console.log("City:", user.address.city);
}

/**********************************************************************
 * 7. Proper HTTP Error Handling
 **********************************************************************/

async function httpErrorHandling() {
    title("7. HTTP Error Handling");

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/invalid-route"
        );

        if (!response.ok) {
            throw new Error(
                `HTTP Error: ${response.status}`
            );
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.log(error.message);
    }
}

/**********************************************************************
 * 8. POST Request
 **********************************************************************/

async function postRequest() {
    title("8. POST Request");

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "JavaScript",
                body: "Learning Fetch API",
                userId: 1
            })
        }
    );

    const result = await response.json();

    console.log(result);
}

/**********************************************************************
 * 9. PUT Request
 **********************************************************************/

async function putRequest() {
    title("9. PUT Request");

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: 1,
                title: "Updated Title",
                body: "Updated Body",
                userId: 1
            })
        }
    );

    const result = await response.json();

    console.log(result);
}

/**********************************************************************
 * 10. PATCH Request
 **********************************************************************/

async function patchRequest() {
    title("10. PATCH Request");

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "Patched Title"
            })
        }
    );

    const result = await response.json();

    console.log(result);
}

/**********************************************************************
 * 11. DELETE Request
 **********************************************************************/

async function deleteRequest() {
    title("11. DELETE Request");

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            method: "DELETE"
        }
    );

    console.log(
        "Delete Status:",
        response.status
    );
}

/**********************************************************************
 * 12. Promise.all()
 **********************************************************************/

async function promiseAllExample() {
    title("12. Promise.all");

    const [usersRes, postsRes] =
        await Promise.all([
            fetch(
                "https://jsonplaceholder.typicode.com/users"
            ),
            fetch(
                "https://jsonplaceholder.typicode.com/posts"
            )
        ]);

    const users = await usersRes.json();
    const posts = await postsRes.json();

    console.log("Users:", users.length);
    console.log("Posts:", posts.length);
}

/**********************************************************************
 * 13. Promise.allSettled()
 **********************************************************************/

async function promiseAllSettledExample() {
    title("13. Promise.allSettled");

    const results =
        await Promise.allSettled([
            Promise.resolve("Success"),
            Promise.reject("Failure")
        ]);

    console.log(results);
}

/**********************************************************************
 * 14. Promise.race()
 **********************************************************************/

async function promiseRaceExample() {
    title("14. Promise.race");

    const winner = await Promise.race([
        delay(1000).then(() => "1 Second"),
        delay(2000).then(() => "2 Seconds")
    ]);

    console.log("Winner:", winner);
}

/**********************************************************************
 * 15. Promise.any()
 **********************************************************************/

async function promiseAnyExample() {
    title("15. Promise.any");

    const result = await Promise.any([
        Promise.reject("Rejected"),
        Promise.resolve("Winner"),
        Promise.resolve("Another Winner")
    ]);

    console.log(result);
}

/**********************************************************************
 * 16. async/await
 **********************************************************************/

async function asyncAwaitExample() {
    title("16. async/await");

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    );

    const todo = await response.json();

    console.log(todo);
}

/**********************************************************************
 * 17. try/catch
 **********************************************************************/

async function tryCatchExample() {
    title("17. try/catch");

    try {
        throw new Error("Manual Error");
    } catch (error) {
        console.log(error.message);
    }
}

/**********************************************************************
 * 18. Sequential Requests
 **********************************************************************/

async function sequentialRequests() {
    title("18. Sequential Requests");

    console.time("Sequential");

    const userResponse =
        await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

    const postResponse =
        await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

    const users = await userResponse.json();
    const posts = await postResponse.json();

    console.timeEnd("Sequential");

    console.log(users.length);
    console.log(posts.length);
}

/**********************************************************************
 * 19. Parallel Requests
 **********************************************************************/

async function parallelRequests() {
    title("19. Parallel Requests");

    console.time("Parallel");

    const [userResponse, postResponse] =
        await Promise.all([
            fetch(
                "https://jsonplaceholder.typicode.com/users"
            ),
            fetch(
                "https://jsonplaceholder.typicode.com/posts"
            )
        ]);

    const users = await userResponse.json();
    const posts = await postResponse.json();

    console.timeEnd("Parallel");

    console.log(users.length);
    console.log(posts.length);
}

/**********************************************************************
 * 20. Real World Example
 **********************************************************************/

async function loadUser(userId) {
    title("20. Real World User Loader");

    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        if (!response.ok) {
            throw new Error("User not found");
        }

        const user = await response.json();

        console.log("ID:", user.id);
        console.log("Name:", user.name);
        console.log("Username:", user.username);
        console.log("Email:", user.email);
        console.log("Phone:", user.phone);
        console.log("Website:", user.website);
        console.log("Company:", user.company.name);

    } catch (error) {
        console.log(error.message);
    }
}

/**********************************************************************
 * Main Execution
 **********************************************************************/

async function main() {
    await promiseBasics();

    await promiseChaining();

    await promiseErrors();

    await delayExample();

    await fetchGet();

    await jsonHandling();

    await httpErrorHandling();

    await postRequest();

    await putRequest();

    await patchRequest();

    await deleteRequest();

    await promiseAllExample();

    await promiseAllSettledExample();

    await promiseRaceExample();

    await promiseAnyExample();

    await asyncAwaitExample();

    await tryCatchExample();

    await sequentialRequests();

    await parallelRequests();

    await loadUser(1);

    title("ALL EXAMPLES COMPLETED");
}

main().catch(console.error);