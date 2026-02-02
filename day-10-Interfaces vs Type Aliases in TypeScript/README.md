
# 📘 Day 10 – Interfaces vs Type Aliases

> Day 10 focuses on **how to model objects, functions, and complex structures** in TypeScript using `interface` and `type`.
> This lesson explains **key differences, extension patterns, declaration merging, and real-world use cases**.

📚 **References**

* TypeScript Handbook – Interfaces
* TypeScript Handbook – Type Aliases
* Extending & Intersection Types

---

## 1. Basic Interface

Interfaces are used to define the **shape of objects**.

```ts
interface User {
  name: string;
  age: number;
}

const user1: User = { name: "Alice", age: 30 };
console.log(user1.name); // Alice
```

### Why use interfaces?

* Can be **extended**
* Support **declaration merging**
* Ideal for **object models & APIs**

---

## 2. Basic Type Alias

Type aliases can represent **any type**, including objects.

```ts
type Point = {
  x: number;
  y: number;
};

const pt: Point = { x: 10, y: 20 };
console.log(pt.x); // 10
```

### Why use type aliases?

* Support **primitives, unions, tuples**
* Enable **intersection types**
* More flexible for complex typing

---

## 3. Extending Interfaces

Interfaces use `extends` for inheritance.

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}

const emp: Employee = { name: "Bob", employeeId: 123 };
console.log(emp.employeeId); // 123
```

* Multiple inheritance is supported

---

## 4. Extending Type Aliases (Intersection)

Type aliases use **intersection types (`&`)**.

```ts
type Animal = { species: string };
type Pet = { name: string };

type Dog = Animal & Pet;

const myDog: Dog = { species: "Canine", name: "Rex" };
console.log(myDog.name); // Rex
```

⚠️ Type aliases **cannot merge declarations**.

---

## 5. Function Types with Interfaces

Interfaces can define **call signatures**.

```ts
interface MathOperation {
  (x: number, y: number): number;
}

const add: MathOperation = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

---

## 6. Function Types with Type Aliases

Type aliases are commonly used for function types.

```ts
type MathOp = (x: number, y: number) => number;

const multiply: MathOp = (a, b) => a * b;
console.log(multiply(3, 4)); // 12
```

---

## 7. Readonly & Optional Properties

```ts
interface Config {
  readonly version: string;
  debug?: boolean;
}

const cfg: Config = { version: "1.0" };
// cfg.version = "2.0"; // ❌ Error
```

Type aliases support the same features:

```ts
type Settings = {
  readonly theme: string;
  notifications?: boolean;
};
```

---

## 8. Generic Interfaces (API Example)

```ts
interface ApiResponse<T> {
  status: number;
  data: T;
  error?: string;
}

const response: ApiResponse<{ id: number; name: string }> = {
  status: 200,
  data: { id: 1, name: "Item 1" },
};

console.log(response.data.name);
```

---

## 9. Interfaces vs Type Aliases – Comparison

| Feature             | Interface            | Type Alias           |
| ------------------- | -------------------- | -------------------- |
| Extend types        | `extends`            | `&`                  |
| Declaration merging | ✅ Yes                | ❌ No                 |
| Unions / primitives | ❌ No                 | ✅ Yes                |
| Best use case       | Object models & APIs | Complex compositions |

---

## 🧪 Practice Tasks (Day 10)

### 📝 Task 1 – Interface Extension

Create `Vehicle` and extend it to `Car`.

### 📝 Task 2 – Intersection Type

Combine `Position` and `Velocity`.

### 📝 Task 3 – Function Shape

Create `StringFormatter` interface.

### 📝 Task 4 – Generic API

Create `ApiResult<T>` and simulate user data.

### 📝 Task 5 – Readonly

Create a readonly settings object and try modifying it.

---

## 🔜 Next: Day 11 – Classes & Access Modifiers

