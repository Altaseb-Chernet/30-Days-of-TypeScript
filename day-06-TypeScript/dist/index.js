"use strict";
/**
 * Day 06 – Function Signatures & Advanced Function Types
 *
 * Concepts Covered:
 * 1. Function Type Expressions
 * 2. Callbacks with Signatures
 * 3. Arrow Functions
 * 4. Callable Object Types
 * 5. Higher-Order Functions
 * 6. Constructor Signatures (Type-Safe)
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implement the Logger type with an actual function
 */
const consoleLogger = (msg) => console.log(msg);
consoleLogger("Hello from Logger"); // Output: Hello from Logger
/**
 * Function that accepts a string and a callback
 */
function processData(input, cb) {
    cb(`Processed: ${input}`);
}
/**
 * Use the callback function
 */
processData("data", (output) => console.log(output)); // Output: Processed: data
/* ---------------------------
   3. Arrow Functions Usage
--------------------------- */
/**
 * Simple arrow function
 */
const greet = (name) => `Welcome, ${name}!`;
console.log(greet("Altaseb")); // Output: Welcome, Altaseb!
/**
 * Arrow functions with arrays
 */
const nums = [1, 2, 3];
const squares = nums.map((n) => n * n); // Map each number to its square
console.log("Squares:", squares); // Output: Squares: [1, 4, 9]
/**
 * Function that accepts a callable object
 */
function invoke(fn) {
    console.log(fn.description, fn(5));
}
/**
 * Regular function enhanced with a description property
 */
function checkLarge(n) {
    return n > 3;
}
// Add a description property manually
checkLarge.description = "Greater than 3";
// Call the function using invoke
invoke(checkLarge); // Output: Greater than 3 true
/* ---------------------------
   5. Higher-Order Function
--------------------------- */
/**
 * Higher-order function: a function that returns a new function
 * Adds logging before calling the original function
 */
function withLogger(fn) {
    return (arg) => {
        console.log("Calling:", arg);
        fn(arg);
    };
}
/**
 * Example usage
 */
const loggedFn = withLogger((s) => console.log("💡", s));
loggedFn("Update occurred");
// Output:
// Calling: Update occurred
// 💡 Update occurred
/* ---------------------------
   6. Constructor Signature (Type-Safe Fix)
--------------------------- */
/**
 * Define a class that matches the constructor signature
 */
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
/**
 * Function to create an instance from the constructor
 */
function createInstance(ctor, name) {
    return new ctor(name);
}
/**
 * Use a custom class that matches the type
 */
const instance = createInstance(Person, "Altaseb");
console.log(instance.name); // Output: Altaseb
//# sourceMappingURL=index.js.map