"use strict";
/**
 * Day 12 – Generics Fundamentals
 *
 * Concepts Covered:
 * 1. Generic Functions
 * 2. Generic Interfaces
 * 3. Generic Constraints
 * 4. Multiple Generics
 * 5. Default Generic Types
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* ---------------------------
   1. Generic Function
--------------------------- */
/**
 * <T> is a type parameter (placeholder for a real type).
 * Whatever type is passed in becomes T.
 */
function identity(value) {
    return value;
}
// Type is inferred automatically
const text = identity("TypeScript");
const num = identity(100);
/**
 * Use the interface with a specific type
 */
const userResponse = {
    status: 200,
    data: { name: "Altaseb" },
};
const numberContainer = { value: 42 };
/* ---------------------------
   4. Generic Constraint
--------------------------- */
/**
 * T must have a 'length' property
 */
function printLength(item) {
    console.log(item.length);
    return item;
}
printLength("Hello");
printLength([1, 2, 3]);
// printLength(10); ❌ Error
/* ---------------------------
   5. Multiple Generics
--------------------------- */
/**
 * Combines two different types into one object
 */
function combine(a, b) {
    return { a, b };
}
const mixed = combine(1, "one");
const r1 = { value: "OK", success: true };
const r2 = { value: 200, success: true };
//# sourceMappingURL=index.js.map