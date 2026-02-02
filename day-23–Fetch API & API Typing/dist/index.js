"use strict";
/**
 * 📘 Day 23 – Fetch API & API Typing
 * Real-world structure example
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* ----------------------------------------
   2️⃣ Generic API Client (Reusable)
----------------------------------------- */
/**
 * Generic API client function
 * T = expected return type
 */
async function apiClient(url, options) {
    // Make HTTP request
    const response = await fetch(url, options);
    // Check if HTTP status is success
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }
    // Parse JSON safely with type
    const data = await response.json();
    return data;
}
/* ----------------------------------------
   3️⃣ GET Users
----------------------------------------- */
async function fetchUsers() {
    return apiClient("https://jsonplaceholder.typicode.com/users");
}
/* ----------------------------------------
   4️⃣ POST Create User
----------------------------------------- */
async function createUser(newUser) {
    return apiClient("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
    });
}
/* ----------------------------------------
   5️⃣ Using Everything Together
----------------------------------------- */
async function main() {
    try {
        // Fetch users
        const users = await fetchUsers();
        console.log("Users:", users);
        // Create new user
        const created = await createUser({
            name: "Alta",
            email: "alta@example.com",
        });
        console.log("Created User:", created);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("API Error:", error.message);
        }
    }
}
main();
//# sourceMappingURL=index.js.map