"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/* ---------------------------------------------------
   1. Inline Object Type Definition
--------------------------------------------------- */
/**
 * Defining an object with explicit property types.
 * Every property must be present and correctly typed.
 */
let user;
/**
 * Assigning values to the object.
 * The structure must match the declared shape exactly.
 */
user = {
    name: "Altaseb",
    age: 22,
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
let profile;
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
let account;
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
/**
 * Using the type alias to declare objects.
 */
let firstUser = {
    name: "Altaseb",
    age: 22,
    isActive: true
};
let secondUser = {
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
/* ---------------------------------------------------
   End of Day 04
--------------------------------------------------- */
//# sourceMappingURL=index.js.map