"use strict";
/**
 * Day 10 – Interfaces vs Type Aliases
 *
 * Concepts Covered:
 * 1. Interfaces (Object Shapes)
 * 2. Type Aliases
 * 3. Extending Interfaces
 * 4. Intersection Types
 * 5. Function Types
 * 6. Readonly & Optional Properties
 * 7. Generic Interfaces
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Create an object that follows the User interface
 */
const user = {
    name: "Alice",
    age: 30,
};
console.log(user.name); // Output: Alice
const point = { x: 10, y: 20 };
console.log(point.x); // Output: 10
const emp = {
    name: "Bob",
    employeeId: 101,
};
console.log(emp.employeeId); // Output: 101
const obj = {
    x: 0,
    y: 0,
    dx: 1,
    dy: 2,
};
console.log(obj.dx); // Output: 1
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // Output: 12
const config = { version: "1.0" };
console.log(config.version);
/**
 * Use the generic interface with a User-like object
 */
const apiResponse = {
    status: 200,
    data: { id: 1, name: "Altaseb" },
};
console.log(apiResponse.data.name); // Output: Altaseb
//# sourceMappingURL=index.js.map