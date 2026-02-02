
# 📘 Day 14 – Enums, Const Enums & Literal Types (Real-World Modeling)

> Enums and literal types are used to model **fixed sets of values**.
> They are critical for **application states, roles, permissions, API responses, workflows, and feature flags**.

---

## 1. Why We Need Enums & Literal Types

Without them:

```ts
function setStatus(status: string) {}
```

❌ Any string allowed
❌ Typos cause runtime bugs
❌ No autocomplete

With enums & literals:

* Controlled values
* Autocomplete
* Compile-time safety

---

## 2. Numeric Enums

Numeric enums assign numbers automatically.

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

Values:

```ts
Up = 0, Down = 1, Left = 2, Right = 3
```

### Real-World Example – Keyboard Navigation

```ts
function move(direction: Direction) {
  if (direction === Direction.Up) {
    console.log("Moving up");
  }
}

move(Direction.Up);
```

🔗 Docs: [https://www.typescriptlang.org/docs/handbook/enums.html](https://www.typescriptlang.org/docs/handbook/enums.html)

---

## 3. String Enums (Most Used in Real Apps)

String enums are **explicit and readable**.

```ts
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}
```

### Real-World Example – Role-Based Access Control

```ts
function canDelete(role: UserRole): boolean {
  return role === UserRole.Admin;
}

canDelete(UserRole.Editor); // false
```

📌 Preferred for:

* APIs
* Databases
* Logs
* Debugging

---

## 4. Const Enums (Performance Optimization)

`const enum` is **inlined at compile time**.

```ts
const enum HttpStatus {
  OK = 200,
  NotFound = 404,
}
```

Compiled JS:

```js
200 /* OK */
```

### Real-World Example – HTTP Handling

```ts
function handleResponse(status: HttpStatus) {
  if (status === HttpStatus.OK) {
    console.log("Success");
  }
}
```

📌 Use when:

* Values never change
* Performance matters

⚠️ Avoid with libraries (can cause build issues)

---

## 5. Reverse Mapping (Numeric Enums Only)

```ts
enum Status {
  Pending,
  Completed,
}

console.log(Status[0]); // "Pending"
```

❌ Not available for string enums

---

## 6. Literal Types (Union of Exact Values)

Literal types restrict values **without enums**.

```ts
type Status = "pending" | "success" | "error";
```

### Real-World Example – API Response State

```ts
function render(state: Status) {
  if (state === "loading") {
    console.log("Loading...");
  }
}
```

Autocomplete + strict checking ✅

🔗 Docs: [https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types)

---

## 7. String Literals vs Enums (When to Use What)

| Use Case             | Prefer        |
| -------------------- | ------------- |
| Internal logic       | Literal Union |
| Public API           | String Enum   |
| Performance critical | const enum    |
| Config/state         | Literal Union |

---

## 8. Discriminated Unions (VERY IMPORTANT)

Combine literal types with objects.

```ts
type ApiResult =
  | { status: "success"; data: string }
  | { status: "error"; message: string };
```

### Real-World Example – Safe API Handling

```ts
function handleResult(result: ApiResult) {
  if (result.status === "success") {
    console.log(result.data);
  } else {
    console.error(result.message);
  }
}
```

📌 TypeScript automatically narrows the type.

---

## 9. Enums with Interfaces

```ts
enum OrderStatus {
  Created = "CREATED",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
}

interface Order {
  id: number;
  status: OrderStatus;
}
```

---

## 10. Enum Anti-Patterns (What to Avoid)

❌ Using enums for dynamic values
❌ Overusing numeric enums
❌ Using enums where literal unions are simpler

---

## 🧪 Practice Tasks (Day 14)

### 📝 Task 1 – Role System

Create roles and permission checks.

### 📝 Task 2 – API Status Handling

Model API responses safely.

### 📝 Task 3 – Workflow States

Use enums or literals to represent steps.

---

## 🔜 Next: Day 15 – Type Guards & Advanced Narrowing

