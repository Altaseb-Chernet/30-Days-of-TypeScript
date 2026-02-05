
# 📘 Day 13 – Advanced Generics & Utility Types in TypeScript

> Advanced generics and utility types allow you to **transform, derive, and reuse types** instead of rewriting them.
> This is the backbone of **scalable, maintainable TypeScript codebases**.

---

## 1. `keyof` – Extracting Property Names as Types

`keyof` creates a **union of property names** from a type.

```ts
type User = {
  id: number;
  name: string;
  email: string;
};

type UserKeys = keyof User;
```

`UserKeys` becomes:

```ts
"id" | "name" | "email"
```

📌 Used heavily for:

* Safe property access
* Generic helpers
* API utilities

🔗 Docs: [https://www.typescriptlang.org/docs/handbook/2/keyof-types.html](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)

---

## 2. `typeof` – Reusing Value Shapes as Types

`typeof` extracts the **type of a variable or object**.

```ts
const config = {
  apiUrl: "/api",
  timeout: 5000,
};

type ConfigType = typeof config;
```

📌 Prevents duplication between runtime values and types.

🔗 Docs: [https://www.typescriptlang.org/docs/handbook/2/typeof-types.html](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html)

---

## 3. Generic Property Access Using `keyof`

Combine generics with `keyof` for **safe dynamic access**.

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

Usage:

```ts
const user = { id: 1, name: "Alex" };

getProperty(user, "name"); // string
getProperty(user, "id");   // number
```

❌ Invalid keys are blocked at compile time.

---

## 4. Mapped Types (Transforming Existing Types)

Mapped types iterate over keys of a type.

```ts
type ReadonlyUser<T> = {
  readonly [K in keyof T]: T[K];
};
```

Usage:

```ts
type LockedUser = ReadonlyUser<User>;
```

🔗 Docs: [https://www.typescriptlang.org/docs/handbook/2/mapped-types.html](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)

---

## 5. Built-in Utility Types (Core Section)

TypeScript provides **powerful built-in helpers**.

---

### 5.1 `Partial<T>` – Make All Properties Optional

```ts
type UserUpdate = Partial<User>;
```

Use case:

* Update APIs
* Patch requests
* Forms

---

### 5.2 `Required<T>` – Make All Properties Required

```ts
type RequiredUser = Required<User>;
```

Forces missing fields to be provided.

---

### 5.3 `Readonly<T>` – Prevent Mutation

```ts
type ImmutableUser = Readonly<User>;
```

Useful for:

* State management
* Configuration objects

---

### 5.4 `Pick<T, K>` – Select Specific Properties

```ts
type UserPreview = Pick<User, "id" | "name">;
```

---

### 5.5 `Omit<T, K>` – Remove Properties

```ts
type UserWithoutEmail = Omit<User, "email">;
```

🔗 Docs: [https://www.typescriptlang.org/docs/handbook/utility-types.html](https://www.typescriptlang.org/docs/handbook/utility-types.html)

---

## 6. Combining Utility Types (Real-World Patterns)

```ts
type UpdatePayload = Partial<Pick<User, "name" | "email">>;
```

📌 Common in REST APIs and form handling.

---

## 7. Generic Utility Function Example

```ts
function updateEntity<T>(entity: T, updates: Partial<T>): T {
  return { ...entity, ...updates };
}
```

Usage:

```ts
updateEntity(user, { name: "Updated" });
```

---

## 8. Why This Matters in Real Projects

Without utility types:

* Repeated interfaces ❌
* High maintenance cost ❌

With utility types:

* DRY code ✅
* Safer refactors ✅
* Strong contracts ✅

---

## 🧪 Practice Tasks (Day 13 – Utility Types)

### 📝 Task 1 – Pick & Omit

Create a public user type without sensitive data.

---

### 📝 Task 2 – Partial Update

Write a function that updates only provided fields.

---

### 📝 Task 3 – Readonly Config

Create a readonly configuration object.

---

### 📝 Task 4 – keyof Practice

Create a function that logs any property of an object safely.

---

## 🔜 Next: Day 14 – Enums, Const Enums & Literal Types

