"use strict";
/**
 * Day 13 – Advanced Generics & Utility Types
 *
 * Concepts Covered:
 * 1. keyof & typeof
 * 2. Generic Property Access
 * 3. Mapped Types
 * 4. Utility Types (Partial, Pick, Omit, Readonly)
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* ---------------------------
   2. typeof
--------------------------- */
/**
 * typeof extracts the shape of a runtime value
 */
const settings = {
    theme: "dark",
    version: 1,
};
/* ---------------------------
   3. Generic Safe Access
--------------------------- */
/**
 * K must be a valid key of T
 */
function getValue(obj, key) {
    return obj[key];
}
const u = { id: 1, name: "Altaseb" };
getValue(u, "name");
/* ---------------------------
   6. Real-World Utility Function
--------------------------- */
/**
 * Update entity using partial updates
 */
function update(original, changes) {
    return { ...original, ...changes };
}
update(u, { name: "Updated Name" });
//# sourceMappingURL=index.js.map