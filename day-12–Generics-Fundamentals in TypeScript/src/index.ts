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

/* ---------------------------
   1. Generic Function
--------------------------- */
/**
 * <T> is a type parameter (placeholder for a real type).
 * Whatever type is passed in becomes T.
 */
function identity<T>(value: T): T {
  return value;
}

// Type is inferred automatically
const text = identity("TypeScript");
const num = identity(100);

/* ---------------------------
   2. Generic Interface
--------------------------- */
/**
 * ApiResponse can hold any type of data
 */
interface ApiResponse<T> {
  status: number;
  data: T;
}

/**
 * Use the interface with a specific type
 */
const userResponse: ApiResponse<{ name: string }> = {
  status: 200,
  data: { name: "Altaseb" },
};

/* ---------------------------
   3. Generic Type Alias
--------------------------- */
/**
 * A reusable container type
 */
type Container<T> = {
  value: T;
};

const numberContainer: Container<number> = { value: 42 };

/* ---------------------------
   4. Generic Constraint
--------------------------- */
/**
 * T must have a 'length' property
 */
function printLength<T extends { length: number }>(item: T): T {
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
function combine<T, U>(a: T, b: U) {
  return { a, b };
}

const mixed = combine(1, "one");

/* ---------------------------
   6. Default Generic Type
--------------------------- */
/**
 * If no type is provided, T defaults to string
 */
type Result<T = string> = {
  value: T;
  success: boolean;
};

const r1: Result = { value: "OK", success: true };
const r2: Result<number> = { value: 200, success: true };
