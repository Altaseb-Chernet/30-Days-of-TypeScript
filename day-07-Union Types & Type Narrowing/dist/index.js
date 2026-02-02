"use strict";
/**
 * Day 07 – Union Types & Type Narrowing
 *
 * Concepts Covered:
 * 1. Union Types
 * 2. typeof Narrowing
 * 3. Object Union Types
 * 4. Discriminated Unions
 * 5. Exhaustiveness Checking (never)
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* ---------------------------
   1. Basic Union Types
--------------------------- */
let value;
value = "TypeScript";
value = 100;
console.log(value);
/* ---------------------------
   2. Narrowing with typeof
--------------------------- */
function printFormatted(val) {
    if (typeof val === "string") {
        console.log("String length:", val.length);
    }
    else {
        console.log("Fixed number:", val.toFixed(2));
    }
}
printFormatted("Hello");
printFormatted(42);
function handleResponse(res) {
    if ("data" in res) {
        console.log("Success:", res.data);
    }
    else {
        console.error("Error:", res.error);
    }
}
handleResponse({ data: "Loaded successfully" });
handleResponse({ error: "Network error" });
function render(state) {
    switch (state.status) {
        case "loading":
            console.log("Loading...");
            break;
        case "success":
            console.log("Data:", state.data);
            break;
        case "error":
            console.error("Error:", state.message);
            break;
    }
}
render({ status: "loading" });
render({ status: "success", data: "Done" });
render({ status: "error", message: "Failed" });
/* ---------------------------
   5. Exhaustiveness Checking
--------------------------- */
function assertNever(x) {
    throw new Error("Unexpected state: " + x);
}
function renderSafe(state) {
    switch (state.status) {
        case "loading":
            return;
        case "success":
            return;
        case "error":
            return;
        default:
            assertNever(state);
    }
}
//# sourceMappingURL=index.js.map