/**
 * Day 08 – unknown Type, Type Assertions & Non-Null Assertion
 *
 * Explore all these TypeScript concepts:
 * 1. unknown type
 * 2. Type narrowing with typeof
 * 3. Type assertions
 * 4. Non-null assertion operator (!)
 * 5. External data parsing with unknown
 * 6. Assertion functions
 * 7. DOM element type safety
 */

/* -------------------------
   1. unknown Type
------------------------- */
/**
 * unknown type: can hold any value, but TypeScript forces type checks before use
 */
let data: unknown;

data = "Hello TypeScript"; // string
data = 100;                // number

// Cannot directly call string methods on unknown
// Must narrow the type first
if (typeof data === "string") {
  console.log("Uppercased string:", data.toUpperCase());
} else {
  console.log("Not a string:", data);
}

/* -------------------------
   2. Type Assertions
------------------------- */
/**
 * Type assertions: tell TypeScript "trust me, I know the type"
 * Useful when you know more about the variable than TS does
 */
let value: unknown = "TypeScript";

// Assert as string to access string properties safely
console.log("String length:", (value as string).length);

/* -------------------------
   3. Non-Null Assertion Operator
------------------------- */
/**
 * Non-null assertion (!): tells TS that a value is NOT null or undefined
 * Often used with DOM queries where element is guaranteed to exist
 */
const inputEl = document.querySelector<HTMLInputElement>("#username");

// inputEl might be null normally
// Using ! asserts it exists, so TS allows access to .value
console.log("Input value:", inputEl!.value);

/* -------------------------
   4. External Data Parsing
------------------------- */
/**
 * Parsing external data with unknown type
 * Use type checks to safely extract data
 */
type User = {
  name: string;
  age: number;
};

function parseUser(input: unknown): User {
  // Check if input is an object, not null, and has required keys
  if (
    typeof input === "object" &&
    input !== null &&
    "name" in input &&
    "age" in input
  ) {
    return input as User; // Assert as User after checks
  }
  throw new Error("Invalid user data");
}

// Example usage
console.log(parseUser({ name: "Alice", age: 30 }));

/* -------------------------
   5. Assertion Functions
------------------------- */
/**
 * Assertion function: narrows type, throws error if check fails
 * Useful when unknown type needs to be verified
 */
function assertIsString(val: unknown): asserts val is string {
  if (typeof val !== "string") throw new Error("Not a string!");
}

let maybeString: unknown = "Hello";

// Use assertion function to safely access string methods
assertIsString(maybeString);
console.log("Uppercased string via assertion:", maybeString.toUpperCase());

/* -------------------------
   6. Non-Null Assertion with DOM
------------------------- */
/**
 * DOM element query with non-null assertion
 * Safely converts input value to number
 */
const ageInput = document.querySelector<HTMLInputElement>("#age");

// Non-null assertion (!) ensures TS treats element as existing
const ageValue = Number(ageInput!.value);

console.log("Age value from DOM:", ageValue);

/* -------------------------
   7. Real-World Example: Form Handling
------------------------- */
/**
 * Function to process form input safely using unknown and assertions
 */
function processForm(input: unknown) {
  // Assert input is string
  assertIsString(input);
  console.log("Processed input:", input.toUpperCase());
}

// Example usage
processForm("typescript");

/* ---------------------------------------------------
   End of Day 08 – unknown Type & Type Assertions
---------------------------------------------------- */
