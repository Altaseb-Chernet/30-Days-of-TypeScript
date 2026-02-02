/**
 * Day 15 – Type Guards & Advanced Narrowing
 *
 * Concepts Covered:
 * 1. typeof guards
 * 2. instanceof guards
 * 3. in operator
 * 4. Custom type guards
 * 5. Discriminated unions
 * 6. Exhaustiveness checking
 */

/* ---------------------------
   1. typeof Guard
--------------------------- */
/**
 * Accepts string or number and safely handles both
 */
function formatValue(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase(); // value is string here
  }
  return value.toFixed(2); // value is number here
}

/* ---------------------------
   2. instanceof Guard
--------------------------- */
class Admin {
  manageUsers() {
    console.log("Managing users");
  }
}

class RegularUser {
  browse() {
    console.log("Browsing content");
  }
}

function handleUser(user: Admin | RegularUser) {
  if (user instanceof Admin) {
    user.manageUsers();
  } else {
    user.browse();
  }
}

/* ---------------------------
   3. in Operator Guard
--------------------------- */
type CreditCard = { pay(): void };
type Cash = { receive(): void };

function processPayment(method: CreditCard | Cash) {
  if ("pay" in method) {
    method.pay();
  } else {
    method.receive();
  }
}

/* ---------------------------
   4. Custom Type Guard
--------------------------- */
type ApiUser = { id: number; email: string };

function isApiUser(data: unknown): data is ApiUser {
  return (
    typeof data === "object" &&
    data !== null &&
    "id" in data &&
    "email" in data
  );
}

function handleApiData(data: unknown) {
  if (isApiUser(data)) {
    console.log("User email:", data.email);
  } else {
    console.error("Invalid API data");
  }
}

/* ---------------------------
   5. Discriminated Union
--------------------------- */
type LoadState =
  | { status: "loading" }
  | { status: "success"; data: string }
  | { status: "error"; error: string };

function render(state: LoadState) {
  switch (state.status) {
    case "loading":
      console.log("Loading...");
      break;
    case "success":
      console.log(state.data);
      break;
    case "error":
      console.error(state.error);
      break;
  }
}

/* ---------------------------
   6. Exhaustive Check
--------------------------- */
type Action =
  | { type: "add"; value: number }
  | { type: "remove"; value: number };

function reducer(action: Action) {
  switch (action.type) {
    case "add":
      return action.value + 1;
    case "remove":
      return action.value - 1;
    default:
      const neverReached: never = action;
      return neverReached;
  }
}
