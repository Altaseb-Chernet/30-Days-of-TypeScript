
# 📘 Day 17 – Interfaces in Depth (Contracts, Merging & Real-World Usage)

> Interfaces define **contracts** that objects, classes, and functions must follow.
> They describe **what a structure looks like**, not how it works.

---

## 1. Interface vs Type Alias (Quick Reality Check)

| Feature             | Interface   | Type  |
| ------------------- | ----------- | ----- |
| Object shapes       | ✅ Best      | ✅     |
| Declaration merging | ✅           | ❌     |
| Extending           | ✅ `extends` | ✅ `&` |
| Primitives          | ❌           | ✅     |
| Union types         | ❌           | ✅     |

📌 **Rule of thumb:**
👉 Use **interfaces for public contracts**
👉 Use **types for complex unions & utilities**

---

## 2. Basic Interface (Object Contract)

```ts
interface User {
  id: number;
  name: string;
  email: string;
}
```

Any object claiming to be `User` **must** match this shape.

---

## 3. Optional Properties

```ts
interface UserProfile {
  bio?: string;
  avatarUrl?: string;
}
```

📌 Optional ≠ nullable
Optional means the property may not exist at all.

---

## 4. Readonly Properties in Interfaces

```ts
interface Product {
  readonly id: number;
  name: string;
}
```

❌ Cannot reassign `id` after creation
✅ Great for immutable identifiers

---

## 5. Interface Extension (Inheritance)

Interfaces can extend other interfaces.

```ts
interface BaseEntity {
  id: number;
  createdAt: Date;
}

interface Order extends BaseEntity {
  total: number;
}
```

📌 Clean and composable design.

---

## 6. Interface Merging (Very Important)

TypeScript **merges interfaces with the same name**.

```ts
interface Window {
  appVersion: string;
}

interface Window {
  isDebug: boolean;
}
```

Result:

```ts
window.appVersion;
window.isDebug;
```

📌 Used heavily for:

* DOM augmentation
* Third-party libraries
* Global configs

🔗 Docs: [https://www.typescriptlang.org/docs/handbook/declaration-merging.html](https://www.typescriptlang.org/docs/handbook/declaration-merging.html)

---

## 7. Function Interfaces (Callable Contracts)

Interfaces can describe functions.

```ts
interface Formatter {
  (value: string): string;
}
```

Usage:

```ts
const upper: Formatter = (text) => text.toUpperCase();
```

---

## 8. Index Signatures (Dynamic Keys)

Used when keys are unknown.

```ts
interface ErrorBag {
  [field: string]: string;
}
```

Usage:

```ts
const errors: ErrorBag = {
  email: "Invalid email",
  password: "Too short",
};
```

📌 Common in:

* Form validation
* Dictionaries
* Caches

---

## 9. Interfaces with Classes (`implements`)

```ts
interface AuthService {
  login(email: string, password: string): boolean;
}

class SimpleAuth implements AuthService {
  login(email: string, password: string) {
    return email === "admin" && password === "1234";
  }
}
```

📌 Guarantees class compliance.

---

## 10. Hybrid Interfaces (Callable + Properties)

```ts
interface Counter {
  (start: number): number;
  reset(): void;
  value: number;
}
```

Usage:

```ts
const counter: Counter = ((start: number) => {
  counter.value = start;
  return start;
}) as Counter;

counter.reset = () => (counter.value = 0);
counter.value = 0;
```

---

## 11. Interfaces for API Contracts (Real-World)

```ts
interface ApiResponse<T> {
  status: number;
  data: T;
  error?: string;
}
```

Used across frontend + backend consistently.

---

## 12. Interface Anti-Patterns

❌ Using interfaces for unions
❌ Overusing `any` inside interfaces
❌ Mixing business logic into interfaces

---

## 🧪 Practice Tasks (Day 17)

### 📝 Task 1 – Interface Extension

Create base + extended interfaces.

### 📝 Task 2 – Interface Merging

Augment a global object.

### 📝 Task 3 – Index Signature

Create a dynamic error map.

### 📝 Task 4 – Implements

Force a class to match an interface.

---

## 🔜 Next: Day 18 – Modules & Project Structure
