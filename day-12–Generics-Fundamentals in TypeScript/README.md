
# 📘 Day 12 – Generics Fundamentals in TypeScript

> Generics allow you to write **reusable, type-safe code** that works with **multiple types** without losing TypeScript’s compile-time guarantees.

Instead of locking a function or type to one data type, **generics let the caller decide the type**, while TypeScript enforces consistency.

---

## 1. Why Generics Exist (The Core Problem)

Without generics, you either:

* Use `any` ❌ (loses type safety)
* Duplicate code for each type ❌

Example problem:

```ts
function identity(value: any) {
  return value;
}
```

This compiles, but TypeScript has **no idea** what type comes back.

Generics solve this.

---

## 2. Generic Functions (Type Parameters)

A **generic function** introduces a **type variable** (commonly `T`) that represents *any type*.

```ts
function identity<T>(value: T): T {
  return value;
}
```

### How this works:

* `T` is a placeholder type
* The caller provides the actual type
* Input and output are linked

Usage:

```ts
identity<string>("Hello");
identity<number>(42);
```

TypeScript infers types automatically:

```ts
identity("Auto inferred");
identity(99);
```

📌 **Key Rule:**

> Whatever type goes in as `T`, comes out as the same `T`.

🔗 Docs: [https://www.typescriptlang.org/docs/handbook/2/generics.html](https://www.typescriptlang.org/docs/handbook/2/generics.html)

---

## 3. Generic Arrow Functions

Generics also work with arrow functions:

```ts
const wrap = <T>(value: T): T[] => {
  return [value];
};
```

Usage:

```ts
wrap<number>(5);      // number[]
wrap("text");        // string[]
```

---

## 4. Generic Interfaces

Interfaces can be generic to describe **flexible data structures**.

```ts
interface ApiResponse<T> {
  status: number;
  data: T;
}
```

Usage:

```ts
const userResponse: ApiResponse<{ name: string; age: number }> = {
  status: 200,
  data: { name: "Alex", age: 25 },
};
```

This ensures:

* `data` is strongly typed
* Different APIs can reuse the same structure

🔗 Docs: [https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-types)

---

## 5. Generic Type Aliases

Type aliases can also accept generics:

```ts
type Box<T> = {
  value: T;
};
```

Usage:

```ts
const numberBox: Box<number> = { value: 100 };
const stringBox: Box<string> = { value: "TypeScript" };
```

---

## 6. Generic Constraints (`extends`)

Sometimes you want to **restrict** what types `T` can be.

```ts
function logLength<T extends { length: number }>(value: T): T {
  console.log(value.length);
  return value;
}
```

Valid:

```ts
logLength("hello");
logLength([1, 2, 3]);
```

Invalid ❌:

```ts
logLength(10); // Error: number has no length
```

📌 Constraint ensures **required properties exist**.

🔗 Docs: [https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)

---

## 7. Multiple Generic Parameters

Functions can accept more than one type parameter.

```ts
function pair<T, U>(first: T, second: U) {
  return { first, second };
}
```

Usage:

```ts
pair<number, string>(1, "one");
pair(true, { id: 5 });
```

---

## 8. Default Generic Types

You can assign **default types** to generics.

```ts
type ApiResult<T = string> = {
  data: T;
  success: boolean;
};
```

Usage:

```ts
const result1: ApiResult = { data: "OK", success: true };
const result2: ApiResult<number> = { data: 200, success: true };
```

---

## 9. Real-World Use Case – Generic Utility Function

```ts
function getFirstItem<T>(items: T[]): T | undefined {
  return items[0];
}
```

Usage:

```ts
getFirstItem([1, 2, 3]);
getFirstItem(["a", "b"]);
```

---

## 10. Key Mental Model (Very Important)

> Generics are about **relationships between types**, not specific types.

They ensure:

* Input → Output consistency
* Reusable logic
* Compile-time safety

---

## 🧪 Practice Tasks (Day 12 – Generics)

### 📝 Task 1 – Generic Identity

Create a generic function that returns the same value it receives.

---

### 📝 Task 2 – Generic Interface

Create an interface `Response<T>` with:

* `status: number`
* `payload: T`

---

### 📝 Task 3 – Constraint Practice

Create a function that accepts only values with `id: number`.

---

### 📝 Task 4 – Multiple Generics

Create a function that merges two values into an object.

---

## 🔜 Next: Day 13 – Advanced Generics & Utility Types

