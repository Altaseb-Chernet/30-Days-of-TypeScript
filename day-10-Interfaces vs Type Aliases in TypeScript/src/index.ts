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

/* ---------------------------
   1. Interfaces (Object Shapes)
--------------------------- */
/**
 * Define an interface to describe a user object
 */
interface User {
  name: string;
  age: number;
}

/**
 * Create an object that follows the User interface
 */
const user: User = {
  name: "Alice",
  age: 30,
};

console.log(user.name); // Output: Alice

/* ---------------------------
   2. Type Aliases
--------------------------- */
/**
 * Define a type alias for a point
 */
type Point = {
  x: number;
  y: number;
};

const point: Point = { x: 10, y: 20 };
console.log(point.x); // Output: 10

/* ---------------------------
   3. Extending Interfaces
--------------------------- */
/**
 * Base interface
 */
interface Person {
  name: string;
}

/**
 * Extended interface
 */
interface Employee extends Person {
  employeeId: number;
}

const emp: Employee = {
  name: "Bob",
  employeeId: 101,
};

console.log(emp.employeeId); // Output: 101

/* ---------------------------
   4. Intersection Types
--------------------------- */
/**
 * Type aliases combined using intersection
 */
type Position = { x: number; y: number };
type Velocity = { dx: number; dy: number };

type MovingObject = Position & Velocity;

const obj: MovingObject = {
  x: 0,
  y: 0,
  dx: 1,
  dy: 2,
};

console.log(obj.dx); // Output: 1

/* ---------------------------
   5. Function Types
--------------------------- */
/**
 * Function type using interface
 */
interface MathOperation {
  (a: number, b: number): number;
}

const add: MathOperation = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

/**
 * Function type using type alias
 */
type MathOp = (a: number, b: number) => number;

const multiply: MathOp = (a, b) => a * b;
console.log(multiply(3, 4)); // Output: 12

/* ---------------------------
   6. Readonly & Optional Properties
--------------------------- */
/**
 * Interface with readonly and optional fields
 */
interface Config {
  readonly version: string;
  debug?: boolean;
}

const config: Config = { version: "1.0" };
console.log(config.version);

/* ---------------------------
   7. Generic Interface
--------------------------- */
/**
 * Generic API response interface
 */
interface ApiResponse<T> {
  status: number;
  data: T;
  error?: string;
}

/**
 * Use the generic interface with a User-like object
 */
const apiResponse: ApiResponse<{ id: number; name: string }> = {
  status: 200,
  data: { id: 1, name: "Altaseb" },
};

console.log(apiResponse.data.name); // Output: Altaseb

//---------------------------
// Additional Concepts: Classes & Access Modifiers
//---------------------------

console.log("\n--- Additional Concepts: Classes & Access Modifiers ---\n");
console.log("Refer to day-11 for detailed examples on classes and access modifiers.");

//---------------------------
// Note: The above code demonstrates the core concepts of interfaces and type aliases in TypeScript. 
// For a deeper dive into classes and access modifiers, please refer to the next day's content.
