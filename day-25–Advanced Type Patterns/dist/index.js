"use strict";
/**
 * =====================================================
 * 📘 Day 25 – Advanced Type Patterns
 * Senior-Level TypeScript
 * =====================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
function exampleFunction() {
    return { id: 1, name: "Alta" };
}
const tree = {
    value: "root",
    children: [
        { value: "child1" },
        {
            value: "child2",
            children: [
                { value: "grandchild1" }
            ]
        }
    ]
};
// Simulated API
async function fetchUser() {
    const success = true;
    if (success) {
        return {
            status: "success",
            data: {
                id: 1,
                name: "Alta",
                email: "alta@example.com"
            }
        };
    }
    return {
        status: "error",
        error: "User not found"
    };
}
/* =====================================================
   6️⃣ Handling Result Safely
===================================================== */
async function handleUser() {
    const result = await fetchUser();
    // Type narrowing using discriminant property
    if (result.status === "success") {
        console.log("User:", result.data.name);
    }
    else {
        console.error("Error:", result.error);
    }
}
handleUser();
//# sourceMappingURL=index.js.map