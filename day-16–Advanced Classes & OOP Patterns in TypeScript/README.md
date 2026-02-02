
# 📘 Day 16 – Advanced Classes & OOP Patterns in TypeScript

> Classes in TypeScript are used to model **entities, services, domain logic, and business rules**.
> Advanced class features help you **control access, enforce contracts, and design extensible systems**.

---

## 1. Access Modifiers (Revisited, With Purpose)

TypeScript supports three access levels:

| Modifier    | Scope                |
| ----------- | -------------------- |
| `public`    | Everywhere (default) |
| `protected` | Class + subclasses   |
| `private`   | Class only           |

```ts
class User {
  public name: string;
  protected role: string;
  private password: string;

  constructor(name: string, role: string, password: string) {
    this.name = name;
    this.role = role;
    this.password = password;
  }
}
```

📌 **Why this matters**

* `private` protects sensitive data
* `protected` enables inheritance safely

---

## 2. Readonly Properties (Immutability in Classes)

```ts
class Config {
  readonly apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }
}
```

❌ Cannot be reassigned after initialization
✅ Great for configuration & constants

---

## 3. Inheritance & Method Overriding

Inheritance allows one class to **reuse and extend behavior**.

```ts
class BaseUser {
  login() {
    console.log("User logged in");
  }
}

class AdminUser extends BaseUser {
  login() {
    console.log("Admin logged in");
  }
}
```

📌 Use inheritance for **is-a relationships**, not code reuse only.

---

## 4. `protected` in Real Architectures

```ts
class Logger {
  protected log(message: string) {
    console.log("LOG:", message);
  }
}

class AuthService extends Logger {
  authenticate() {
    this.log("Authenticating user");
  }
}
```

🔒 `log()` is reusable but hidden from outside callers.

---

## 5. Abstract Classes (Enforcing Contracts)

Abstract classes **cannot be instantiated** and **force implementation**.

```ts
abstract class Payment {
  abstract pay(amount: number): void;

  receipt(amount: number) {
    console.log(`Paid: ${amount}`);
  }
}
```

---

## 6. Real-World Example – Payment System

```ts
class CreditCardPayment extends Payment {
  pay(amount: number) {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

class PayPalPayment extends Payment {
  pay(amount: number) {
    console.log(`Paid ${amount} using PayPal`);
  }
}
```

📌 Guarantees every payment method follows the same structure.

🔗 Docs: [https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members](https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members)

---

## 7. `implements` – Enforcing Structure Without Inheritance

Interfaces define **what**, classes define **how**.

```ts
interface StorageService {
  save(data: string): void;
}

class LocalStorageService implements StorageService {
  save(data: string) {
    console.log("Saved to local storage:", data);
  }
}
```

📌 Prefer `implements` when you want **flexibility**.

---

## 8. Static Properties & Methods

Static members belong to the **class itself**, not instances.

```ts
class MathUtils {
  static PI = 3.14;

  static square(n: number) {
    return n * n;
  }
}
```

Usage:

```ts
MathUtils.square(4);
```

📌 Common use cases:

* Helpers
* Constants
* Factories

---

## 9. Factory Pattern with Classes

```ts
abstract class Notification {
  abstract send(message: string): void;
}

class EmailNotification extends Notification {
  send(message: string) {
    console.log("Email:", message);
  }
}

class SMSNotification extends Notification {
  send(message: string) {
    console.log("SMS:", message);
  }
}
```

Factory:

```ts
class NotificationFactory {
  static create(type: "email" | "sms"): Notification {
    if (type === "email") return new EmailNotification();
    return new SMSNotification();
  }
}
```

---

## 10. When NOT to Use Classes

❌ Simple data objects
❌ Utility functions
❌ Over-engineering

Use classes when:

* Behavior + state belong together
* Business rules must be enforced

---

## 🧪 Practice Tasks (Day 16)

### 📝 Task 1 – Abstract Class

Create a base `Shape` class with `area()`.

### 📝 Task 2 – Implements

Create multiple services implementing one interface.

### 📝 Task 3 – Access Modifiers

Protect sensitive properties.

### 📝 Task 4 – Factory Pattern

Create objects dynamically.

---

## 🔜 Next: Day 17 – Interfaces in Depth

