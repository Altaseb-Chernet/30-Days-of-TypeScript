/**
 * Day 02 – Type System Fundamentals
 *
 * This file demonstrates how TypeScript handles:
 * - Primitive types
 * - Explicit type annotations
 * - Type inference
 * - The `any` type
 */

/* ---------------------------------------------------
   1. Explicit Type Annotations
--------------------------------------------------- */

/**
 * Declaring a variable with an explicit type annotation.
 * `string` means this variable can ONLY store text values.
 */
let courseName: string = "30 Days of TypeScript";

/**
 * Declaring a number type.
 * TypeScript does not distinguish between integers and floats.
 */
let totalDays: number = 30;

/**
 * Declaring a boolean type.
 * Only `true` or `false` are allowed values.
 */

let isCoursePublished: boolean = true;

/**
 * Attempting to assign an incorrect type will cause
 * a compile-time error.
 */
// courseName = 30; // ❌ Error: Type 'number' is not assignable to type 'string'
// totalDays = "thirty"; // ❌ Error
// isCoursePublished = "yes"; // ❌ Error

console.log(courseName);
console.log(totalDays);
console.log(isCoursePublished);


/* ---------------------------------------------------
   2. Type Inference
--------------------------------------------------- */

/**
 * Here, no type is explicitly written.
 * TypeScript automatically infers the type from the value.
 */
let instructorName = "Altaseb";

/**
 * TypeScript now treats `instructorName` as a string.
 * The inferred type is fixed after initialization.
 */
console.log(instructorName);

/**
 * Reassigning a different type is not allowed.
 */
// instructorName = 100; // ❌ Error: Type 'number' is not assignable to type 'string'


/* ---------------------------------------------------
   3. Difference Between Explicit Typing and Inference
--------------------------------------------------- */

/**
 * Explicit typing:
 * The developer manually specifies the type.
 */
let languageName: string;
languageName = "TypeScript";

/**
 * Inference:
 * The type is deduced from the assigned value.
 */
let inferredLanguage = "JavaScript";

/**
 * Both variables behave the same at runtime,
 * but explicit typing is often clearer in shared codebases.
 */
console.log(languageName);
console.log(inferredLanguage);


/* ---------------------------------------------------
   4. Reassignment Rules
--------------------------------------------------- */

/**
 * Once a variable has a type, reassignment must follow that type.
 */
let version: number = 1;

version = 2;      // ✅ Valid
version = 3.5;    // ✅ Valid

/**
 * Reassigning a value of a different type is not allowed.
 */
// version = "v4"; // ❌ Error


/* ---------------------------------------------------
   5. The `any` Type
--------------------------------------------------- */

/**
 * The `any` type disables TypeScript's type checking.
 * This variable can hold any kind of value.
 */
let flexibleData: any = "Initial value";

/**
 * Reassigning different types is allowed when using `any`.
 */
flexibleData = 100;
flexibleData = true;
flexibleData = null;

console.log(flexibleData);

/**
 * Using `any` removes all safety guarantees.
 * TypeScript will not report errors for this variable.
 */


/* ---------------------------------------------------
   6. Why `any` Is Dangerous
--------------------------------------------------- */

/**
 * This code compiles without errors,
 * but may cause unexpected behavior at runtime.
 */
let unknownValue: any = "TypeScript";

/**
 * TypeScript does not warn about invalid operations on `any`.
 */
unknownValue.toUpperCase(); // Works if value is string
unknownValue();             // ❌ Runtime error (but no compile-time warning)

/**
 * This demonstrates why `any` should be avoided
 * unless absolutely necessary.
 */


/* ---------------------------------------------------
   7. Compiler Errors Are a Feature
--------------------------------------------------- */

/**
 * TypeScript errors are intentional.
 * They protect the program from invalid logic.
 */
let studentCount: number = 25;

/**
 * Uncommenting the line below will prevent compilation.
 */
// studentCount = "twenty five"; // ❌ Error

/**
 * The compiler stops incorrect code from becoming JavaScript.
 * This is one of TypeScript's core advantages.
 */


/* ---------------------------------------------------
   8. Summary of Type Behavior
--------------------------------------------------- */

/**
 * - Types restrict what values can be assigned
 * - Inference reduces repetitive type declarations
 * - Explicit types improve clarity
 * - `any` removes safety checks
 * - Errors appear before execution
 */


/* ---------------------------------------------------
   End of Day 02
--------------------------------------------------- */
