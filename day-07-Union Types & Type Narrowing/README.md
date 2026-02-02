
# 📘 Day 07 – Union Types & Type Narrowing

> Day 07 focuses on **handling multiple possible types safely**.
> This is essential before moving into DOM, APIs, and real application state.

📚 **TypeScript Docs**

* *Everyday Types*
* *Narrowing*

---

## 1. Union Types (Multiple Possible Types)

A **union type** allows a value to be **one of several types**.

```ts
let value: string | number;

value = "hello";
value = 42;
```

This means `value` can be **either** a `string` **or** a `number`, but nothing else.

➡️ Union types are common when:

* User input can vary
* API responses change shape
* State can exist in multiple forms

---

## 2. Working with Union Types Safely

When a variable has a union type, **you can only use members common to all types**.

❌ This causes an error:

```ts
function printLength(val: string | number) {
  // console.log(val.length); // ❌ number has no length
}
```

To fix this, TypeScript requires **type narrowing**.

---

## 3. Type Narrowing with `typeof`

The simplest narrowing technique is `typeof`.

```ts
function printLength(val: string | number) {
  if (typeof val === "string") {
    console.log(val.length); // ✅ string
  } else {
    console.log(val.toFixed(2)); // ✅ number
  }
}
```

TypeScript understands the control flow and narrows the type automatically.

---

## 4. Union Types with Objects

Union types are often used with **object shapes**.

```ts
type SuccessResponse = {
  data: string;
};

type ErrorResponse = {
  error: string;
};

type ApiResponse = SuccessResponse | ErrorResponse;
```

Now `ApiResponse` can represent **either** a success or an error.

---

## 5. Narrowing with the `in` Operator

When working with object unions, use the `in` operator.

```ts
function handleResponse(res: ApiResponse) {
  if ("data" in res) {
    console.log("Data:", res.data);
  } else {
    console.error("Error:", res.error);
  }
}
```

➡️ This is a **core pattern** used heavily in real applications.

---

## 6. Literal Types (Exact Values)

Literal types restrict values to **specific exact values**.

```ts
type Direction = "up" | "down" | "left" | "right";

let move: Direction;
move = "up";     // ✅
move = "left";   // ✅
move = "center"; // ❌
```

Literal unions are often better than enums for simple states.

---

## 7. Discriminated Unions (Tagged Unions)

A **discriminated union** uses a common literal property to safely narrow types.

```ts
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
```

---

## 8. Narrowing Discriminated Unions

```ts
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
```

TypeScript **automatically narrows** the type inside each case.

---

## 9. Exhaustiveness Checking with `never`

To ensure all cases are handled:

```ts
function assertNever(x: never): never {
  throw new Error("Unexpected value: " + x);
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
      assertNever(state); // Compile-time safety
  }
}
```

➡️ This protects your code when new states are added later.

---

## 🧪 Practice Tasks (Day 07 – Union & Narrowing)

### 📝 Task 1 – Union with Narrowing

Create a function `formatValue` that accepts:

```ts
string | number | boolean
```

* If string → return uppercase
* If number → return fixed to 2 decimals
* If boolean → return `"YES"` or `"NO"`

---

### 📝 Task 2 – Object Union

Define two object types:

* `Admin` → `{ role: "admin"; permissions: string[] }`
* `User` → `{ role: "user"; email: string }`

Create a function that logs correct data using narrowing.

---

### 📝 Task 3 – Discriminated Union

Create a union for network states:

* `"idle"`
* `"loading"`
* `"success"`
* `"error"`

Handle all states with a `switch`.

---

### 📝 Task 4 – Exhaustive Check

Add a `never` check to ensure no state is missed.

---

## 🔜 Next: Day 08 – Type Assertions & `unknown` (Safe interaction with external data)

---
