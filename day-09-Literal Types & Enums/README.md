
# 📘 Day 09 – Literal Types & Enums

> Day 09 is all about **restricting values to exact known options** and **using enums for structured constants**.
> These patterns are essential for **state management, flags, and safe data modeling**.

📚 **TypeScript Docs**

* *Literal Types*
* *Enums*

---

## 1. Literal Types (Exact Values)

A literal type restricts a variable to a **specific value**:

```ts
let direction: "up" | "down" | "left" | "right";

direction = "up";    // ✅ OK
direction = "left";  // ✅ OK
// direction = "center"; // ❌ Error
```

Literal types are often used for:

* Function parameters
* State management
* Event types

---

## 2. Functions with Literal Types

```ts
function move(dir: "up" | "down" | "left" | "right") {
  console.log("Moving", dir);
}

move("up");    // ✅
move("down");  // ✅
// move("forward"); // ❌ Error
```

✅ Strong type safety prevents invalid values at compile-time.

---

## 3. Union of Literal Types

Literal types can be combined in **unions**:

```ts
type Direction = "up" | "down" | "left" | "right";
type Speed = "slow" | "medium" | "fast";

function moveAdvanced(dir: Direction, speed: Speed) {
  console.log(`Moving ${dir} at ${speed} speed`);
}

moveAdvanced("up", "fast");  // ✅ OK
// moveAdvanced("down", "hyper"); // ❌ Error
```

---

## 4. String Enums

Enums are **named constants** that group related values.

```ts
enum DirectionEnum {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

let dir: DirectionEnum = DirectionEnum.Up;
console.log(dir); // Output: UP
```

✅ Pros:

* Easier to read than string literals everywhere
* Useful when the same value is used multiple times

---

## 5. Numeric Enums

Numeric enums assign **incremental numbers** automatically:

```ts
enum Status {
  Idle,     // 0
  Loading,  // 1
  Success,  // 2
  Error,    // 3
}

console.log(Status.Idle);    // 0
console.log(Status.Success); // 2
```

You can also assign custom numbers:

```ts
enum HTTPStatus {
  OK = 200,
  NotFound = 404,
  InternalError = 500,
}

console.log(HTTPStatus.OK); // 200
```

---

## 6. Enum Reverse Mapping (Numeric Enums Only)

Numeric enums allow reverse lookup:

```ts
enum Status {
  Idle,     // 0
  Loading,  // 1
}

console.log(Status[0]); // "Idle"
console.log(Status.Idle); // 0
```

> String enums do **not** support reverse mapping.

---

## 7. Discriminated Unions with Literal Types

Literal types + enums are often used for **state machines**:

```ts
type LoadingState = { status: "loading" };
type SuccessState = { status: "success"; data: string };
type ErrorState = { status: "error"; message: string };

type AppState = LoadingState | SuccessState | ErrorState;

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
```

✅ Literal types + discriminated unions = **safe exhaustive checking**.

---

## 8. Practical Example – Form Input Type

```ts
type InputType = "text" | "number" | "email" | "password";

function renderInput(type: InputType) {
  console.log(`Rendering ${type} input`);
}

renderInput("text");     // ✅ OK
renderInput("password"); // ✅ OK
// renderInput("checkbox"); // ❌ Error
```

---

## 9. Using Enums in Functions

```ts
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

function paint(color: Color) {
  console.log(`Painting in ${color}`);
}

paint(Color.Red); // ✅ Output: Painting in RED
```

---

## 🧪 Practice Tasks (Day 09 – Literal Types & Enums)

### 📝 Task 1 – Literal Type Function

Create a function `setDirection` that accepts literal type `"up" | "down" | "left" | "right"` and logs the direction.

---

### 📝 Task 2 – Union Literal Parameters

Create a function `setSpeed` with parameters:

* `speed: "slow" | "medium" | "fast"`
* `gear: 1 | 2 | 3 | 4 | 5`
  Log `"Moving at X speed on gear Y"`.

---

### 📝 Task 3 – Enum States

Define a string enum `AuthStatus` with `"LOGGED_IN"`, `"LOGGED_OUT"`, `"PENDING"`.
Write a function that logs messages depending on enum value.

---

### 📝 Task 4 – Numeric Enum Mapping

Create a numeric enum `Priority` with `Low=1`, `Medium=2`, `High=3`.
Write a function `displayPriority` that prints both **value and name**.

---

### 📝 Task 5 – Discriminated Union

Create a union type `Notification`:

* `{ type: "success"; msg: string }`
* `{ type: "error"; code: number; msg: string }`
  Write a function to **handle each type safely**.

  ## 🔜 Next: Day 10 – Interfaces vs Type Aliases

