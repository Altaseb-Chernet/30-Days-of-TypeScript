/**
 * 📘 Day 21 – Event Propagation, Delegation & Performance
 *
 * This file demonstrates:
 * - Capturing
 * - Bubbling
 * - stopPropagation
 * - Delegation
 * - Performance concepts
 */

/* ----------------------------------------
   1️⃣ Propagation Example (Bubble Default)
----------------------------------------- */

const parent1 = document.getElementById("parent") as HTMLDivElement;
const child = document.getElementById("child") as HTMLDivElement;
const button = document.getElementById("button") as HTMLButtonElement;

parent1.addEventListener("click", () => {
  console.log("Parent (Bubble)");
});

child.addEventListener("click", () => {
  console.log("Child (Bubble)");
});

button.addEventListener("click", () => {
  console.log("Button (Target)");
});

/*
Clicking button logs:

Button (Target)
Child (Bubble)
Parent (Bubble)
*/


/* ----------------------------------------
   2️⃣ Capturing Phase Example
----------------------------------------- */

parent1.addEventListener(
  "click",
  () => {
    console.log("Parent (Capture)");
  },
  { capture: true }
);

/*
Now clicking button logs:

Parent (Capture)
Button (Target)
Child (Bubble)
Parent (Bubble)
*/


/* ----------------------------------------
   3️⃣ stopPropagation Example
----------------------------------------- */

child.addEventListener("click", (event) => {
  console.log("Child stopping propagation");
  event.stopPropagation();
});

/*
Now parent bubble will NOT run.
*/


/* ----------------------------------------
   4️⃣ event.target vs event.currentTarget
----------------------------------------- */

parent1.addEventListener("click", (event) => {
  console.log("target:", event.target);
  console.log("currentTarget:", event.currentTarget);
});

/*
target = actual clicked element
currentTarget = element listener attached to
*/


/* ----------------------------------------
   5️⃣ Event Delegation
----------------------------------------- */

const list = document.getElementById("list") as HTMLUListElement;

list.addEventListener("click", (event) => {
  const target = event.target;

  if (target instanceof HTMLButtonElement) {
    console.log("Delegated Button Click:", target.dataset.id);
  }
});

/*
Only ONE listener handles unlimited buttons.
*/


/* ----------------------------------------
   6️⃣ Performance Concept Demo
----------------------------------------- */

/*
Bad approach:
Attach listener to every element

Better approach:
Attach ONE listener to parent

Why?
- Fewer memory allocations
- Faster rendering
- Works with dynamically added elements
*/
