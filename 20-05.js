
// HOISTING
console.log(myVar); // undefined (var is hoisted)

// console.log(myLet); // Error
// console.log(myConst); // Error

var myVar = "I am VAR";
let myLet = "I am LET";
const myConst = "I am CONST";


// FUNCTION DECLARATION (Hoisted)

greetUser("Akilan");

function greetUser(name = "Guest") {   // default parameter
    console.log(`Hello ${name}`);
}


// FUNCTION EXPRESSION

const multiply = function(a, b) {
    return a * b; // return value
};

console.log("Multiply:", multiply(5, 4));


// ARROW FUNCTION

const add = (a, b) => {
    return a + b;
};

console.log("Add:", add(10, 20));


// ARROW FUNCTION SHORTCUT

const square = num => num * num;

console.log("Square:", square(6));


// REST PARAMETERS

function totalSum(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }

    return total;
}

console.log("Total Sum:", totalSum(10, 20, 30, 40));


// CALLBACK FUNCTION

function processUser(name, callback) {
    console.log(`Processing user: ${name}`);

    callback();
}

function finished() {
    console.log("User processing completed");
}

processUser("Akilan", finished);


// CALLBACK WITH ARROW FUNCTION

setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);


// FUNCTION SCOPE

function testFunctionScope() {
    var functionScoped = "I exist only inside function";

    console.log(functionScoped);
}

testFunctionScope();

// console.log(functionScoped); // Error

// BLOCK SCOPE

{
    let blockLet = "LET inside block";
    const blockConst = "CONST inside block";
    var blockVar = "VAR ignores block";

    console.log(blockLet);
    console.log(blockConst);
}

console.log(blockVar);

// console.log(blockLet); // Error
// console.log(blockConst); // Error


// CLOSURE

function counter() {

    let count = 0;

    return function () {
        count++;

        console.log("Current Count:", count);
    };
}

const increment = counter();

increment(); // 1
increment(); // 2
increment(); // 3

// LEXICAL SCOPE

function outerFunction() {

    let outerVariable = "I am from outer function";

    function innerFunction() {
        console.log(outerVariable);
    }

    innerFunction();
}

outerFunction();


// COMBINED EXAMPLE
// EVERYTHING TOGETHER

function employeeManager(
    company = "OpenAI",          // default parameter
    ...employees                 // rest parameter
) {

    let employeeCount = employees.length;

    console.log(`Company: ${company}`);
    console.log(`Employee Count: ${employeeCount}`);

    // closure
    return function(callback) {

        console.log("Employee Names:");

        employees.forEach((emp, index) => {
            console.log(`${index + 1}. ${emp}`);
        });

        callback(employeeCount);

    };
}


// callback function
const manager = employeeManager(
    "Tech Company",
    "Akilan",
    "John",
    "David"
);


manager((count) => {
    console.log(`Callback Received Total Employees: ${count}`);
});


// CONST OBJECT

const student = {
    name: "Akilan",
    skill: "JavaScript"
};

student.skill = "React"; // allowed

console.log(student);