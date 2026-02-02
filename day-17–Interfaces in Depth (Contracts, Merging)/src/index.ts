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

/* ---------------------------
   1. Basic Interface
--------------------------- */
interface User {
  id: number;
  name: string;
  email: string;
}

// Example usage
const user1: User = { id: 1, name: "Alice", email: "alice@example.com" };


/* ---------------------------
   2. Optional & Readonly
--------------------------- */
interface Profile {
  readonly userId: number; // cannot change after initialization
  bio?: string; // optional
}

const profile: Profile = { userId: 1 };
profile.bio = "I love TypeScript";
// profile.userId = 2; // ❌ Error: readonly


/* ---------------------------
   3. Interface Extension
--------------------------- */
interface Entity {
  id: number;
  createdAt: Date;
}

interface BlogPost extends Entity {
  title: string;
  content: string;
}

const post: BlogPost = {
  id: 1,
  createdAt: new Date(),
  title: "Interfaces in Depth",
  content: "Interfaces are powerful in TypeScript!"
};


/* ---------------------------
   4. Interface Merging & Global Augmentation
--------------------------- */
// Normal interface merging works in the local scope
interface LocalWindow {
  appName: string;
}
interface LocalWindow {
  version: string;
}
const myWindow: LocalWindow = { appName: "MyApp", version: "1.0.0" };

// ✅ For global window object, we need declaration merging with 'declare global'
declare global {
  interface Window {
    appName: string;
    version: string;
  }
}

// Now TypeScript knows window has these properties
window.appName = "SuperApp";
window.version = "2.0.1";
console.log(window.appName, window.version);


/* ---------------------------
   5. Function Interface
--------------------------- */
interface Transformer {
  (input: string): string;
}

const lower: Transformer = (txt) => txt.toLowerCase();
const upper: Transformer = (txt) => txt.toUpperCase();

console.log(lower("HELLO")); // hello
console.log(upper("hello")); // HELLO


/* ---------------------------
   6. Index Signature
--------------------------- */
interface ValidationErrors {
  [field: string]: string; // any string key, value must be string
}

const formErrors: ValidationErrors = {
  username: "Required",
  password: "Too short",
};

// Example dynamic addition
formErrors.email = "Invalid format";


/* ---------------------------
   7. Implements
--------------------------- */
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string) {
    console.log("LOG:", message);
  }
}

const logger = new ConsoleLogger();
logger.log("This is a log message");


/* ---------------------------
   8. Hybrid Interface
--------------------------- */
interface Timer {
  (): number; // callable
  start: number; // has a property
}

// Example: a timer function that also stores its start time
const timer = (() => {
  let start = Date.now();
  const fn = () => Date.now() - start; // returns elapsed time
  fn.start = start; // attach property
  return fn;
})() as Timer;

console.log(timer()); // milliseconds since creation
console.log("Timer started at:", timer.start);
