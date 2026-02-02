"use strict";
/**
 * 📘 Day 19 – DOM Manipulation with TypeScript
 *
 * This file demonstrates how TypeScript
 * safely interacts with the DOM.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* -----------------------------------
   1. Selecting DOM Elements Safely
----------------------------------- */
/**
 * document.getElementById can return:
 * - HTMLElement
 * - OR null (if element not found)
 *
 * TypeScript forces us to handle this safely.
 */
const titleElement = document.getElementById("title");
/**
 * Always check for null before using the element
 */
if (titleElement) {
    titleElement.textContent = "TypeScript DOM Manipulation";
}
/* -----------------------------------
   2. Type Assertion for Specific Elements
----------------------------------- */
/**
 * If we KNOW the element type,
 * we can assert it explicitly.
 */
const inputElement = document.getElementById("username");
/**
 * Now TypeScript knows:
 * - inputElement.value exists
 */
inputElement.value = "Altaseb";
/* -----------------------------------
   3. Button Element & Event Handling
----------------------------------- */
const buttonElement = document.getElementById("submitBtn");
/**
 * Add event listener with full type safety
 */
buttonElement.addEventListener("click", () => {
    console.log("Button clicked!");
    console.log("Input value:", inputElement.value);
});
/* -----------------------------------
   4. Typed Event Object
----------------------------------- */
/**
 * Event object is automatically typed
 * as MouseEvent for click events
 */
buttonElement.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Event type:", event.type);
});
/* -----------------------------------
   5. Reusable Typed DOM Selector
----------------------------------- */
/**
 * Generic helper function for DOM selection
 */
function selectElement(id) {
    const element = document.getElementById(id);
    if (!element) {
        throw new Error(`Element with id "${id}" not found`);
    }
    return element;
}
/**
 * Using the utility function
 */
const messageDiv = selectElement("message");
messageDiv.innerText = "Hello from TypeScript!";
/* -----------------------------------
   6. Real-World Form Example
----------------------------------- */
/**
 * Simulate a login form interaction
 */
const emailInput = selectElement("email");
const passwordInput = selectElement("password");
const loginButton = selectElement("loginBtn");
loginButton.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    if (!email || !password) {
        messageDiv.innerText = "Please fill all fields";
        return;
    }
    messageDiv.innerText = `Logged in as ${email}`;
});
/* -----------------------------------
   7. Key Takeaways
----------------------------------- */
/**
 * - TypeScript prevents null errors
 * - DOM APIs are fully typed
 * - Type assertions should be used carefully
 * - Typed helpers make code reusable
 * - This is the foundation of Angular & React
 */
//# sourceMappingURL=index.js.map