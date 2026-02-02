
# 📘 Day 27 – Performance & Best Practices



# 1️⃣ Performance Has Two Sides

There are **two types of performance**:

---

## 🔹 1. Compile-Time Performance (TypeScript)

This affects:

* Type-check speed
* IDE responsiveness
* Large project scalability

Problems come from:

* Deep recursive types
* Overly complex conditional types
* Huge union types
* Massive generic chains

---

## 🔹 2. Runtime Performance (JavaScript)

This affects:

* App responsiveness
* UI smoothness
* API efficiency
* Memory usage

We must optimize both.

---

# 2️⃣ TypeScript Best Practices (Compile-Time Optimization)

---

## ✅ Avoid Overly Deep Recursive Types

Bad:

```ts
type Infinite<T> = {
  [K in keyof T]: Infinite<T[K]>;
};
```

Can freeze the compiler in large apps.

---

## ✅ Avoid Giant Union Types

Bad:

```ts
type AllEvents =
  | "click"
  | "hover"
  | "scroll"
  | "keydown"
  | ... // hundreds more
```

Prefer structured objects.

---

## ✅ Prefer Simpler Generics

Instead of:

```ts
type Complex<T, U, V, W> = ...
```

Break into smaller utilities.

---

## ✅ Use `unknown` Instead of `any`

```ts
let data: unknown;
```

Then narrow properly.

---

# 3️⃣ Runtime Performance Principles

---

## 🔥 1. Avoid Recreating Objects Unnecessarily

Bad:

```ts
function createUser() {
  return {
    id: 1,
    name: "Alta"
  };
}
```

If called frequently, object allocations increase.

---

## 🔥 2. Avoid Heavy Computation in Loops

Bad:

```ts
for (let i = 0; i < 100000; i++) {
  JSON.stringify(largeObject);
}
```

Move heavy work outside loop.

---

## 🔥 3. Prefer Map over Array Lookup for Large Data

Bad:

```ts
users.find(user => user.id === id);
```

Better for large datasets:

```ts
const userMap = new Map<number, User>();
```

Lookup becomes O(1).

---

## 🔥 4. Debounce Expensive Operations

Used in:

* Search input
* Resize events
* Scroll events

---

# 4️⃣ Async Performance Best Practices

---

## ❌ Avoid Sequential Await

Bad:

```ts
const a = await fetchA();
const b = await fetchB();
```

Better:

```ts
const [a, b] = await Promise.all([fetchA(), fetchB()]);
```

Parallel execution improves speed.

---

## ❌ Avoid Unnecessary try/catch in Every Function

Centralize error handling.

---

## ✅ Use Caching

Example:

```ts
const cache = new Map<string, unknown>();
```

Avoid repeated API calls.

---

# 5️⃣ Memory Best Practices

---

## 🔹 Avoid Memory Leaks

Common causes:

* Unremoved event listeners
* Infinite intervals
* Growing arrays

Example fix:

```ts
clearInterval(intervalId);
```

---

## 🔹 Avoid Global State Mutation

Encapsulate state inside modules.

---

# 6️⃣ Code Architecture Best Practices

---

## 🔥 1. Separation of Concerns

```
api/
components/
types/
utils/
services/
```

Never mix business logic with UI logic.

---

## 🔥 2. Single Responsibility Principle

Each function should do ONE thing.

Bad:

```ts
function handleUser() {
  fetchUser();
  validateUser();
  updateDOM();
}
```

Better:

* fetchUser()
* validateUser()
* renderUser()

---

## 🔥 3. Avoid Deep Nesting

Bad:

```ts
if (a) {
  if (b) {
    if (c) {
```

Use early returns:

```ts
if (!a) return;
if (!b) return;
```

---

# 7️⃣ TypeScript Performance-Friendly Patterns

---

## ✅ Prefer Interfaces for Large Object Types

Interfaces are more performant in large systems.

---

## ✅ Avoid Repeated Complex Type Computations

Store them:

```ts
type UserResponse = ApiResult<User>;
```
