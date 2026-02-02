/**
 * 📘 Day 18 – Modules & Architecture (CommonJS Safe Version)
 *
 * Concepts Covered:
 * 1. What a Module Is
 * 2. CommonJS Exports
 * 3. Named Exports via module.exports
 * 4. Type Safety in CommonJS
 * 5. Real-World Usage
 */

/* -----------------------------------
   1. Module Scope
----------------------------------- */
/**
 * In CommonJS, each file is a module.
 * Variables are NOT global by default.
 */

const appName = "TypeScript 30 Days";

/* -----------------------------------
   2. Utility Functions
----------------------------------- */
function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

/* -----------------------------------
   3. Class Example
----------------------------------- */
class Logger {
  log(message: string) {
    console.log("[LOG]:", message);
  }
}

/* -----------------------------------
   4. Interface (Type-Only, Safe)
----------------------------------- */
/**
 * Interfaces exist only at compile time
 * They do NOT affect CommonJS runtime.
 */
interface User {
  id: number;
  name: string;
}

/* -----------------------------------
   5. Service Pattern
----------------------------------- */
class UserService {
  getUser(): User {
    return { id: 1, name: "Altaseb" };
  }
}

/* -----------------------------------
   6. DOM Example
----------------------------------- */
function getInputValue(id: string): string {
  const el = document.getElementById(id) as HTMLInputElement | null;
  return el?.value ?? "";
}

/* -----------------------------------
   7. CommonJS Export Object
----------------------------------- */
/**
 * Instead of `export`, we attach
 * values to module.exports
 */
// module.exports = {
//   appName,
//   add,
//   subtract,
//   Logger,
//   UserService,
//   getInputValue,
// };

/* -----------------------------------
   8. Runtime Demo
----------------------------------- */
const logger = new Logger();
const service = new UserService();

const user = service.getUser();
logger.log(`Welcome ${user.name}`);
console.log("2 + 3 =", add(2, 3));
