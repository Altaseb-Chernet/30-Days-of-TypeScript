"use strict";
/**
 * Day 17 – Interfaces in Depth
 *
 * Concepts Covered:
 * 1. Basic interfaces
 * 2. Optional & readonly properties
 * 3. Interface extension
 * 4. Interface merging & global augmentation
 * 5. Function & hybrid interfaces
 * 6. Index signatures
 * 7. Implements
 * 8. Hybrid interface
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Example usage
const user1 = { id: 1, name: "Alice", email: "alice@example.com" };
const profile = { userId: 1 };
profile.bio = "I love TypeScript";
const post = {
    id: 1,
    createdAt: new Date(),
    title: "Interfaces in Depth",
    content: "Interfaces are powerful in TypeScript!"
};
const myWindow = { appName: "MyApp", version: "1.0.0" };
// Now TypeScript knows window has these properties
window.appName = "SuperApp";
window.version = "2.0.1";
console.log(window.appName, window.version);
const lower = (txt) => txt.toLowerCase();
const upper = (txt) => txt.toUpperCase();
console.log(lower("HELLO")); // hello
console.log(upper("hello")); // HELLO
const formErrors = {
    username: "Required",
    password: "Too short",
};
// Example dynamic addition
formErrors.email = "Invalid format";
class ConsoleLogger {
    log(message) {
        console.log("LOG:", message);
    }
}
const logger = new ConsoleLogger();
logger.log("This is a log message");
// Example: a timer function that also stores its start time
const timer = (() => {
    let start = Date.now();
    const fn = () => Date.now() - start; // returns elapsed time
    fn.start = start; // attach property
    return fn;
})();
console.log(timer()); // milliseconds since creation
console.log("Timer started at:", timer.start);
//# sourceMappingURL=index.js.map