/**
 * Day 07 – Union Types & Type Narrowing
 *
 * Concepts Covered:
 * 1. Union Types
 * 2. typeof Narrowing
 * 3. Object Union Types
 * 4. Discriminated Unions
 * 5. Exhaustiveness Checking (never)
 */

/* ---------------------------
   1. Basic Union Types
--------------------------- */
let value: string | number;

value = "TypeScript";
value = 100;

console.log(value);

/* ---------------------------
   2. Narrowing with typeof
--------------------------- */
function printFormatted(val: string | number) {
  if (typeof val === "string") {
    console.log("String length:", val.length);
  } else {
    console.log("Fixed number:", val.toFixed(2));
  }
}

printFormatted("Hello");
printFormatted(42);

/* ---------------------------
   3. Object Union Types
--------------------------- */
type SuccessResponse = {
  data: string;
};

type ErrorResponse = {
  error: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;

function handleResponse(res: ApiResponse) {
  if ("data" in res) {
    console.log("Success:", res.data);
  } else {
    console.error("Error:", res.error);
  }
}

handleResponse({ data: "Loaded successfully" });
handleResponse({ error: "Network error" });

/* ---------------------------
   4. Discriminated Unions
--------------------------- */
type LoadingState = {
  status: "loading";
};

type SuccessState = {
  status: "success";
  data: string;
};

type ErrorState = {
  status: "error";
  message: string;
};

type State = LoadingState | SuccessState | ErrorState;

function render(state: State) {
  switch (state.status) {
    case "loading":
      console.log("Loading...");
      break;
    case "success":
      console.log("Data:", state.data);
      break;
    case "error":
      console.error("Error:", state.message);
      break;
  }
}

render({ status: "loading" });
render({ status: "success", data: "Done" });
render({ status: "error", message: "Failed" });

/* ---------------------------
   5. Exhaustiveness Checking
--------------------------- */
function assertNever(x: never): never {
  throw new Error("Unexpected state: " + x);
}

function renderSafe(state: State) {
  switch (state.status) {
    case "loading":
      return;
    case "success":
      return;
    case "error":
      return;
    default:
      assertNever(state);
  }
}
