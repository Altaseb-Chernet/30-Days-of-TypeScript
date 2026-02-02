/**
 * 📘 Day 20 – Working with Events & Forms (DOM Advanced)
 *
 * This file demonstrates professional,
 * type-safe event and form handling.
 */

/* -----------------------------------
   1. Button Click Event (Typed)
----------------------------------- */
const clickButton = document.getElementById("clickBtn") as HTMLButtonElement;

/**
 * MouseEvent is inferred automatically
 */
clickButton.addEventListener("click", (event: MouseEvent) => {
  console.log("Clicked!");
  console.log("Event type:", event.type);
});

/* -----------------------------------
   2. Keyboard Events
----------------------------------- */
const nameInput = document.getElementById("name") as HTMLInputElement;

/**
 * KeyboardEvent gives access to key info
 */
nameInput.addEventListener("keydown", (event: KeyboardEvent) => {
  console.log("Key pressed:", event.key);

  // Prevent numbers from being typed
  if (!isNaN(Number(event.key))) {
    event.preventDefault();
  }
});

/* -----------------------------------
   3. Form Submission Handling
----------------------------------- */
const loginForm = document.getElementById("loginForm") as HTMLFormElement;

loginForm.addEventListener("submit", (event: SubmitEvent) => {
  /**
   * Prevent page reload
   */
  event.preventDefault();

  const emailInput = document.getElementById("email") as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;

  const email = emailInput.value;
  const password = passwordInput.value;

  if (!email || !password) {
    console.log("All fields are required");
    return;
  }

  console.log("Form submitted:", { email, password });
});

/* -----------------------------------
   4. Input Event (Real-Time Validation)
----------------------------------- */
const emailField = document.getElementById("email") as HTMLInputElement;
const errorMessage = document.getElementById("error") as HTMLDivElement;

emailField.addEventListener("input", () => {
  if (!emailField.value.includes("@")) {
    errorMessage.innerText = "Invalid email address";
  } else {
    errorMessage.innerText = "";
  }
});

/* -----------------------------------
   5. Event Target & Type Narrowing
----------------------------------- */
document.addEventListener("click", (event) => {
  const target = event.target;

  /**
   * Narrowing the target safely
   */
  if (target instanceof HTMLButtonElement) {
    console.log("Button clicked:", target.innerText);
  }
});

/* -----------------------------------
   6. Event Delegation (Advanced)
----------------------------------- */
const buttonGroup = document.getElementById("buttonGroup") as HTMLDivElement;

/**
 * ONE listener for many buttons
 */
buttonGroup.addEventListener("click", (event) => {
  const target = event.target;

  if (target instanceof HTMLButtonElement) {
    console.log("Delegated button:", target.dataset.id);
  }
});

/* -----------------------------------
   7. Key Takeaways
----------------------------------- */
/**
 * - Events are strongly typed
 * - Forms require preventDefault
 * - event.target must be narrowed
 * - Event delegation improves performance
 * - This is framework-level knowledge
 */
