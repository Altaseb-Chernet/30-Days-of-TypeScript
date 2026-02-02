"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/* ---------------------------
   1. Literal Types
--------------------------- */
/**
 * Literal types restrict a variable to exact values.
 * Unlike 'string' or 'number', only specific values are allowed.
 */
let direction;
direction = "up";
// direction = "center"; // ❌ Error: "center" is not allowed
/**
 * Function that accepts only literal type values
 */
function move(dir) {
    console.log("Moving", dir);
}
move("left");
/**
 * Function with multiple literal type parameters
 */
function moveAdvanced(dir, speed) {
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
var DirectionEnum;
(function (DirectionEnum) {
    DirectionEnum["Up"] = "UP";
    DirectionEnum["Down"] = "DOWN";
    DirectionEnum["Left"] = "LEFT";
    DirectionEnum["Right"] = "RIGHT";
})(DirectionEnum || (DirectionEnum = {}));
let dirEnum = DirectionEnum.Right;
console.log("String Enum value:", dirEnum); // Output: RIGHT
/* ---------------------------
   4. Numeric Enums
--------------------------- */
/**
 * Numeric enums: members are assigned numeric values (default starts at 0)
 */
var Status;
(function (Status) {
    Status[Status["Idle"] = 0] = "Idle";
    Status[Status["Loading"] = 1] = "Loading";
    Status[Status["Success"] = 2] = "Success";
    Status[Status["Error"] = 3] = "Error";
})(Status || (Status = {}));
console.log("Status.Idle:", Status.Idle); // 0
console.log("Status[1]:", Status[1]); // "Loading"
/**
 * Numeric enums with custom values
 */
var HTTPStatus;
(function (HTTPStatus) {
    HTTPStatus[HTTPStatus["OK"] = 200] = "OK";
    HTTPStatus[HTTPStatus["NotFound"] = 404] = "NotFound";
    HTTPStatus[HTTPStatus["InternalError"] = 500] = "InternalError";
})(HTTPStatus || (HTTPStatus = {}));
console.log("HTTPStatus.OK:", HTTPStatus.OK); // 200
console.log("HTTPStatus.NotFound:", HTTPStatus.NotFound); // 404
/**
 * Render function that handles different states
 * TS ensures we only access properties relevant to each state
 */
function render(state) {
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
/**
 * Function that renders input elements based on type
 */
function renderInput(type) {
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
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
/**
 * Function that accepts only predefined enum colors
 */
function paint(color) {
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
function startMoving(dir, speed, indicator) {
    console.log(`Moving ${dir} at ${speed} speed with indicator ${indicator}`);
}
startMoving("left", "medium", DirectionEnum.Left);
startMoving("up", "fast", DirectionEnum.Up);
/* ---------------------------------------------------
   End of Day 09 – Literal Types & Enums
---------------------------------------------------- */
//# sourceMappingURL=index.js.map