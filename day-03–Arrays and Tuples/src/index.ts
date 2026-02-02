/**
 * Day 03 – Arrays and Tuples
 *
 * This file demonstrates how TypeScript works with:
 * - Typed arrays
 * - Read-only arrays
 * - Tuples
 */

/* ---------------------------------------------------
   1. Typed Arrays (Using Square Bracket Syntax)
--------------------------------------------------- */

/**
 * Declaring an array that can contain ONLY numbers.
 * The `number[]` syntax means:
 * - This variable is an array
 * - Every element inside must be a number
 */

let grades: number[] = [88, 90, 92];
grades.push(95.9); // Add a new grade
grades.pop(); // Remove the last element
grades.shift(); // Remove the first element
grades.unshift(100); // Add 100 at the beginning
grades.splice(1, 0, 89.5); // Insert 89.5 at index 1
grades.sort((a, b) => a - b); // Sort grades in ascending order
grades.reverse(); // Reverse the order of grades
grades.slice(1, 3); // Get a sub-array from index 1 to 2
grades.indexOf(92); // Find the index of the value 92
grades.includes(85); // Check if 85 is in the array
console.log("Grades:", grades);

//output: Grades: [ 100, 92, 90, 89.5 ]

/**
 * Trying to add a non-number value would cause a compile-time error.
 * Uncommenting the line below will produce an error.
 */
// grades.push("100"); // ❌ Error: Type 'string' is not assignable to type 'number'


/* ---------------------------------------------------
   2. Typed Arrays (Using Generic Syntax)
--------------------------------------------------- */

/**
 * Another way to declare a typed array.
 * `Array<string>` means:
 * - This is an array
 * - It can only store string values
 */
let studentNames: Array<string> = ["Alman", "Sara", "John"];

/**
 * Adding a new string value is valid.
 */
studentNames.push("Mariam");

/**
 * Adding a number would result in an error.
 */
// studentNames.push(10); // ❌ Error

console.log("Student Names:", studentNames);


/* ---------------------------------------------------
   3. Accessing Array Elements
--------------------------------------------------- */

/**
 * Accessing array elements using index positions.
 * Indexing starts at 0.
 */
let firstStudent: string = studentNames[0]!;
let secondScore: number = grades[1]!;

console.log("First Student:", firstStudent);
console.log("Second Score:", secondScore);

/**
 * Getting the total number of elements in an array.
 */
let totalStudents: number = studentNames.length;
console.log("Total Students:", totalStudents);


/* ---------------------------------------------------
   4. Read-only Arrays
--------------------------------------------------- */

/**
 * A read-only array prevents modification after creation.
 * The `readonly` keyword ensures the array content is protected.
 */
let fixedValues: readonly number[] = [1, 2, 3];

/**
 * Reading values is allowed.
 */
console.log("Fixed Values:", fixedValues);

/**
 * Modifying the array is NOT allowed.
 * The following operations will produce errors.
 */
// fixedValues.push(4);     // ❌ Error
// fixedValues[0] = 10;     // ❌ Error

/**
 * Read-only arrays are useful when:
 * - Data should never change
 * - You want to avoid accidental mutations
 */


/* ---------------------------------------------------
   5. Tuples
--------------------------------------------------- */

/**
 * A tuple is a fixed-length array where:
 * - Each position has a specific type
 * - The order of types matters
 *
 * This tuple represents:
 * [name, age, isActive]
 */
let userProfile: [string, number, boolean] = ["Altaseb", 20, true];

/**
 * Accessing tuple elements by index.
 * Each index has a known type.
 */
let profileName: string = userProfile[0];
let profileAge: number = userProfile[1];
let profileStatus: boolean = userProfile[2];

console.log("User Profile:", userProfile);
console.log("Name:", profileName);
console.log("Age:", profileAge);
console.log("Active:", profileStatus);

/**
 * Assigning incorrect types or order will cause errors.
 */
// userProfile = [20, "Altaseb", true]; // ❌ Error
// userProfile = ["Altaseb", "20", true]; // ❌ Error


/* ---------------------------------------------------
   6. Why Tuples Matter
--------------------------------------------------- */

/**
 * Tuples are useful when:
 * - Data has a fixed structure
 * - Each position has a specific meaning
 *
 * Example use cases:
 * - Database rows
 * - API responses with fixed order
 * - Configuration values
 */


/* ---------------------------------------------------
   End of Day 03
--------------------------------------------------- */
