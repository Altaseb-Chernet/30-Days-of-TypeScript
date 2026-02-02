"use strict";
/**
 * 📘 Day 22 – Asynchronous TypeScript
 *
 * Covers:
 * - setTimeout
 * - Promises
 * - async/await
 * - Promise utilities
 * - Typed API simulation
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* ----------------------------------------
   1️⃣ Basic Async Example
----------------------------------------- */
console.log("Start");
setTimeout(() => {
    console.log("Macrotask (setTimeout)");
}, 0);
Promise.resolve().then(() => {
    console.log("Microtask (Promise)");
});
console.log("End");
/*
Expected Order:
Start
End
Microtask
Macrotask
*/
/* ----------------------------------------
   2️⃣ Creating Typed Promise
----------------------------------------- */
function simulateApiCall() {
    return new Promise((resolve, reject) => {
        const success = true;
        setTimeout(() => {
            if (success) {
                resolve("API Success");
            }
            else {
                reject("API Failed");
            }
        }, 1000);
    });
}
/* ----------------------------------------
   3️⃣ Using async/await
----------------------------------------- */
async function handleApiCall() {
    try {
        const result = await simulateApiCall();
        console.log("Result:", result);
    }
    catch (error) {
        console.error("Error:", error);
    }
}
handleApiCall();
/* ----------------------------------------
   4️⃣ Parallel Execution
----------------------------------------- */
async function parallelCalls() {
    const [a, b] = await Promise.all([
        simulateApiCall(),
        simulateApiCall(),
    ]);
    console.log("Parallel Results:", a, b);
}
parallelCalls();
async function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: "Alta",
                email: "alta@example.com",
            });
        }, 500);
    });
}
async function showUser() {
    const user = await getUser();
    console.log("User:", user.name);
}
showUser();
//# sourceMappingURL=index.js.map