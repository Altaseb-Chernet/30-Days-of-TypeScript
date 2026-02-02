/**
 * Day 09 – Literal Types & Enums
 *
 * Concepts Covered:
 * 1. Literal Types
 * 2. Union Literal Types
 * 3. String Enums
 * 4. Numeric Enums
 * 5. Discriminated Unions with Literal Types
 * 6. Practical usage in functions and form handling
 */

/* ---------------------------
   1. Literal Types
--------------------------- */
/**
 * Literal types restrict a variable to exact values.
 * Unlike 'string' or 'number', only specific values are allowed.
 */
let direction: "up" | "down" | "left" | "right";

direction = "up";
// direction = "center"; // ❌ Error: "center" is not allowed

/**
 * Function that accepts only literal type values
 */
function move(dir: "up" | "down" | "left" | "right") {
  console.log("Moving", dir);
}

move("left");
// move("center"); // ❌ Error: not allowed

/* ---------------------------
   2. Union of Literal Types
--------------------------- */
/**
 * Combine multiple literal types into a union type
 * Allows variables or parameters to accept multiple predefined values
 */
type Direction = "up" | "down" | "left" | "right";
type Speed = "slow" | "medium" | "fast";

/**
 * Function with multiple literal type parameters
 */
function moveAdvanced(dir: Direction, speed: Speed) {
  console.log(`Moving ${dir} at ${speed} speed`);
}

moveAdvanced("up", "fast");
// moveAdvanced("up", "superfast"); // ❌ Error: "superfast" not allowed

/* ---------------------------
   3. String Enums
--------------------------- */
/**
 * Enums: named constants
 * String enums assign specific string values to enum members
 */
enum DirectionEnum {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

let dirEnum: DirectionEnum = DirectionEnum.Right;
console.log("String Enum value:", dirEnum); // Output: RIGHT

/* ---------------------------
   4. Numeric Enums
--------------------------- */
/**
 * Numeric enums: members are assigned numeric values (default starts at 0)
 */
enum Status {
  Idle,      // 0
  Loading,   // 1
  Success,   // 2
  Error,     // 3
}

console.log("Status.Idle:", Status.Idle); // 0
console.log("Status[1]:", Status[1]);     // "Loading"

/**
 * Numeric enums with custom values
 */
enum HTTPStatus {
  OK = 200,
  NotFound = 404,
  InternalError = 500,
}

console.log("HTTPStatus.OK:", HTTPStatus.OK); // 200
console.log("HTTPStatus.NotFound:", HTTPStatus.NotFound); // 404

/* ---------------------------
   5. Discriminated Unions with Literal Types
--------------------------- */
/**
 * Discriminated unions: combine literal types with objects
 * Useful for state management
 */
type LoadingState = { status: "loading" };
type SuccessState = { status: "success"; data: string };
type ErrorState = { status: "error"; message: string };

type AppState = LoadingState | SuccessState | ErrorState;

/**
 * Render function that handles different states
 * TS ensures we only access properties relevant to each state
 */
function render(state: AppState) {
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
   6. Practical Example – Form Input Types
--------------------------- */
/**
 * Literal types for form input types
 * Helps prevent invalid input types
 */
type InputType = "text" | "number" | "email" | "password";

/**
 * Function that renders input elements based on type
 */
function renderInput(type: InputType) {
  console.log(`Rendering ${type} input`);
}

renderInput("text");
renderInput("email");
// renderInput("checkbox"); // ❌ Error: not part of InputType

/* ---------------------------
   7. Enums in Functions
--------------------------- */
/**
 * Enums make it easy to use predefined constants in functions
 */
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

/**
 * Function that accepts only predefined enum colors
 */
function paint(color: Color) {
  console.log(`Painting in ${color}`);
}

paint(Color.Red);
paint(Color.Green);
// paint("YELLOW"); // ❌ Error: not part of Color enum

/* ---------------------------
   8. Combined Example: Movement App
--------------------------- */
/**
 * Using literal types and enums together in a practical scenario
 */
function startMoving(dir: Direction, speed: Speed, indicator: DirectionEnum) {
  console.log(
    `Moving ${dir} at ${speed} speed with indicator ${indicator}`
  );
}

startMoving("left", "medium", DirectionEnum.Left);
startMoving("up", "fast", DirectionEnum.Up);

/* ---------------------------------------------------
   End of Day 09 – Literal Types & Enums
---------------------------------------------------- */
