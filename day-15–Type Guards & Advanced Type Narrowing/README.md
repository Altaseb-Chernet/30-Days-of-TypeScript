
# 📘 Day 15 – Type Guards & Advanced Type Narrowing

> Type guards allow TypeScript to **narrow a variable’s type** based on runtime checks.
> They bridge the gap between **unknown runtime data** and **compile-time type safety**.

---

## 1. The Core Problem Type Guards Solve

```ts
function print(value: string | number) {
  console.log(value.toUpperCase()); // ❌ Error
}
```

TypeScript doesn’t know whether `value` is a string or number.

Type guards tell TypeScript **which type is safe**.

---

## 2. `typeof` Type Guard (Primitive Types)

`typeof` works with:

* `"string"`
* `"number"`
* `"boolean"`
* `"bigint"`
* `"symbol"`
* `"undefined"`
* `"function"`

```ts
function format(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}
```

📌 This is the most common guard for primitive unions.

🔗 Docs: [https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards)

---

## 3. `instanceof` Type Guard (Classes)

Used when working with **class instances**.

```ts
class Admin {
  manage() {}
}

class User {
  view() {}
}

function handle(person: Admin | User) {
  if (person instanceof Admin) {
    person.manage();
  } else {
    person.view();
  }
}
```

📌 Works only with classes, not interfaces.

🔗 Docs: [https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing)

---

## 4. `in` Operator Type Guard (Object Shape)

Used to check **property existence**.

```ts
type Car = { drive(): void };
type Boat = { sail(): void };

function operate(vehicle: Car | Boat) {
  if ("drive" in vehicle) {
    vehicle.drive();
  } else {
    vehicle.sail();
  }
}
```


📌 Perfect for API responses and union objects.

---

## 5. Discriminated Unions (Best Practice)

A discriminated union uses a **shared literal property**.

```ts
type Result =
  | { type: "success"; data: string }
  | { type: "error"; message: string };
```

### Real-World API Example

```ts
function handleResult(result: Result) {
  switch (result.type) {
    case "success":
      console.log(result.data);
      break;
    case "error":
      console.error(result.message);
      break;
  }
}
```

📌 Clean, readable, and fully type-safe.

🔗 Docs: [https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions)

---

## 6. Custom Type Guards (User-Defined Guards)

Custom guards return a **type predicate**.

```ts
type User = { id: number; name: string };

function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "name" in value
  );
}
```

### Real-World Example – API Validation

```ts
function process(data: unknown) {
  if (isUser(data)) {
    console.log(data.name);
  } else {
    throw new Error("Invalid user data");
  }
}
```

📌 Essential when handling `unknown` data.

🔗 Docs: [https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)

---

## 7. Narrowing with Truthiness

```ts
function printLength(value?: string) {
  if (value) {
    console.log(value.length);
  }
}
```

⚠️ Be careful:

* `""`, `0`, `false` are falsy

---

## 8. Exhaustiveness Checking with `never`

Ensures **all cases are handled**.

```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;
    default:
      const _exhaustive: never = shape;
      return _exhaustive;
  }
}
```

📌 If a new shape is added, TypeScript errors.

---

## 9. Real-World Scenarios Where Guards Are Critical

✅ API responses
✅ Form input validation
✅ DOM event targets
✅ Feature flags
✅ State machines

---

## 🧪 Practice Tasks (Day 15)

### 📝 Task 1 – `typeof`

Handle string | number | boolean safely.

### 📝 Task 2 – `in`

Differentiate between Admin and User objects.

### 📝 Task 3 – Custom Guard

Validate API response data.

### 📝 Task 4 – Discriminated Union

Model success/error/loading states.

---

## 🔜 Next: Day 16 – Advanced Classes & OOP Patterns

