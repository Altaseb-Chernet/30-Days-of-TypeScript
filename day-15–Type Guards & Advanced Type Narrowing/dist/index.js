"use strict";
/**
 * Day 15 – Type Guards & Advanced Narrowing
 *
 * Concepts Covered:
 * 1. typeof guards
 * 2. instanceof guards
 * 3. in operator
 * 4. Custom type guards
 * 5. Discriminated unions
 * 6. Exhaustiveness checking
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* ---------------------------
   1. typeof Guard
--------------------------- */
/**
 * Accepts string or number and safely handles both
 */
function formatValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase(); // value is string here
    }
    return value.toFixed(2); // value is number here
}
/* ---------------------------
   2. instanceof Guard
--------------------------- */
class Admin {
    manageUsers() {
        console.log("Managing users");
    }
}
class RegularUser {
    browse() {
        console.log("Browsing content");
    }
}
function handleUser(user) {
    if (user instanceof Admin) {
        user.manageUsers();
    }
    else {
        user.browse();
    }
}
function processPayment(method) {
    if ("pay" in method) {
        method.pay();
    }
    else {
        method.receive();
    }
}
function isApiUser(data) {
    return (typeof data === "object" &&
        data !== null &&
        "id" in data &&
        "email" in data);
}
function handleApiData(data) {
    if (isApiUser(data)) {
        console.log("User email:", data.email);
    }
    else {
        console.error("Invalid API data");
    }
}
function render(state) {
    switch (state.status) {
        case "loading":
            console.log("Loading...");
            break;
        case "success":
            console.log(state.data);
            break;
        case "error":
            console.error(state.error);
            break;
    }
}
function reducer(action) {
    switch (action.type) {
        case "add":
            return action.value + 1;
        case "remove":
            return action.value - 1;
        default:
            const neverReached = action;
            return neverReached;
    }
}
//# sourceMappingURL=index.js.map