/**
 * Day 05 – Complete Function Types
 *
 * explore all function types in TypeScript:
 * 1. Named functions
 * 2. Anonymous functions
 * 3. Arrow functions
 * 4. Optional, default, and rest parameters
 * 5. Void and never functions
 * 6. Function type annotations
 * 7. Callback functions
 * 8. Higher-order functions
 * 9. Function overloads
 */

/* -------------------------
   1. Named Function
------------------------- */
/**
 * Named function: has a name, takes two numbers, returns their sum
 */
function add(a: number, b: number): number {
  return a + b;
}
console.log("Named function add:", add(5, 10));

/* -------------------------
   2. Anonymous Function
------------------------- */
/**
 * Anonymous function: assigned to a variable
 * Subtracts b from a
 */
const subtract = function (a: number, b: number): number {
  return a - b;
};
console.log("Anonymous function subtract:", subtract(10, 4));

/* -------------------------
   3. Arrow Function
------------------------- */
/**
 * Arrow function: concise syntax
 * Multiplies two numbers
 */
const multiply = (a: number, b: number): number => a * b;
console.log("Arrow function multiply:", multiply(3, 4));

/* -------------------------
   4. Optional Parameter
------------------------- */
/**
 * Optional parameter: a parameter that may or may not be passed
 */
function greet(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}`;
  }
  return `Hello, ${name}`;
}
console.log(greet("Altaseb"));          // Without title
console.log(greet("Altaseb", "Mr."));   // With title

/* -------------------------
   5. Default Parameter
------------------------- */
/**
 * Default parameter: used if no value is passed
 */
function calculatePrice(price: number, tax: number = 0.15): number {
  return price + price * tax;
}
console.log("Default tax:", calculatePrice(100));       // Uses default 0.15
console.log("Custom tax:", calculatePrice(100, 0.2));   // Uses 0.2

/* -------------------------
   6. Rest Parameters
------------------------- */
/**
 * Rest parameters: allows passing multiple values as an array
 */
function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, val) => acc + val, 0);
}
console.log("Sum of numbers:", sumAll(1, 2, 3, 4, 5));

/* -------------------------
   7. Void Function
------------------------- */
/**
 * Void function: does not return anything
 */
function logMessage(message: string): void {
  console.log("Log:", message);
}
logMessage("TypeScript functions");

/* -------------------------
   8. Never Function
------------------------- */
/**
 * Never function: never returns, always throws or loops indefinitely
 */
function throwError(message: string): never {
  throw new Error(message);
}
// throwError("This will terminate execution"); // Uncomment to see error

/* -------------------------
   9. Function Type Annotation
------------------------- */
/**
 * Function type: specify the type of a variable that will hold a function
 */
let operation: (x: number, y: number) => number;
operation = (a, b) => a + b;
console.log("Function type operation:", operation(5, 6));

/* -------------------------
   10. Callback Function
------------------------- */
/**
 * Callback function: a function passed as an argument to another function
 */
function processNumbers(
  a: number,
  b: number,
  callback: (x: number, y: number) => number
): number {
  return callback(a, b);
}
console.log("Callback multiply:", processNumbers(5, 10, (x, y) => x * y));

/* -------------------------
   11. Higher-Order Function
------------------------- */
/**
 * Higher-order function: returns another function
 */
function createMultiplier(factor: number): (num: number) => number {
  return (num: number) => num * factor;
}
const double = createMultiplier(2);  // Creates a function to double a number
console.log("Higher-order function double:", double(5));

/* -------------------------
   12. Function Overloads
------------------------- */
/**
 * Function overloads: same function name, different parameter types
 */
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}
console.log("Overload numbers:", combine(1, 2));
console.log("Overload strings:", combine("Hello, ", "World"));

/* -------------------------
   13. Real-World Examples
------------------------- */
/**
 * Example 1: registerUser with default parameter
 */
function registerUser(username: string, isAdmin: boolean = false): string {
  return `User ${username} registered. Admin: ${isAdmin}`;
}

/**
 * Example 2: calculatePoints with default multiplier
 */
function calculatePoints(score: number, multiplier: number = 1): number {
  return score * multiplier;
}

console.log("Register user:", registerUser("Altaseb"));
console.log("Calculate points:", calculatePoints(10, 2));
/* ---------------------------------------------------
   End of Day 05
---------------------------------------------------- */