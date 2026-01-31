/**
 * Day 04 – Objects & Type Aliases
 *
 * This file demonstrates:
 * - Typed objects
 * - Optional properties
 * - Readonly properties
 * - Type aliases
 *
 * The examples focus on clarity and correctness.
 */

/* ---------------------------------------------------
   1. Inline Object Type Definition
--------------------------------------------------- */

/**
 * Defining an object with explicit property types.
 * Every property must be present and correctly typed.
 */
let user: {
  name: string;
  age: number;
  isActive: boolean;
};

/**
 * Assigning values to the object.
 * The structure must match the declared shape exactly.
 */
user = {
  name: "Altaseb",
  age: 20,
  isActive: true
};

console.log(user);


/* ---------------------------------------------------
   2. Optional Properties
--------------------------------------------------- */

/**
 * The `bio` property is optional.
 * Objects of this type may or may not include it.
 */
let profile: {
  username: string;
  bio?: string;
};

/**
 * Valid assignment without the optional property.
 */
profile = {
  username: "altaseb_dev"
};

console.log(profile);

/**
 * Valid assignment including the optional property.
 */
profile = {
  username: "altaseb_dev",
  bio: "Software developer"
};

console.log(profile);


/* ---------------------------------------------------
   3. Readonly Properties
--------------------------------------------------- */

/**
 * The `id` property is readonly.
 * Once set, it cannot be changed.
 */
let account: {
  readonly id: number;
  owner: string;
};

account = {
  id: 101,
  owner: "Altaseb"
};

/**
 * Modifying readonly properties is not allowed.
 */
// account.id = 202; // ❌ Error

account.owner = "Updated Owner"; // ✅ Allowed
console.log(account);


/* ---------------------------------------------------
   4. Type Aliases
--------------------------------------------------- */

/**
 * Creating a reusable object type.
 * This defines a blueprint for user objects.
 */
type User = {
  name: string;
  age: number;
  isActive: boolean;
  email?: string;
};

/**
 * Using the type alias to declare objects.
 */
let firstUser: User = {
  name: "Altaseb",
  age: 20,
  isActive: true
};

let secondUser: User = {
  name: "Sara",
  age: 24,
  isActive: false,
  email: "sara@example.com"
};

console.log(firstUser);
console.log(secondUser);


/* ---------------------------------------------------
   5. Why Type Aliases Matter
--------------------------------------------------- */

/**
 * Type aliases allow:
 * - Consistent object shapes
 * - Easy refactoring
 * - Cleaner code
 *
 * Any change to the `User` type affects all usages.
 */


