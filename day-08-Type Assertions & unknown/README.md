
# 📘 Day 08 – Type Assertions & `unknown`

> Day 08 focuses on **interacting safely with unknown or external data**.
> This is critical when dealing with APIs, DOM, or any dynamic input.

📚 **TypeScript Docs**

* *Everyday Types → Type Assertions*
* *Type Guards & Unknown*

---

## 1. The `unknown` Type

`unknown` is the **type-safe version of `any`**.

* You **cannot perform operations** on `unknown` without narrowing.
* Forces **type checks** before use.

```ts
let data: unknown;

data = "Hello TS";
data = 42;
data = { name: "Altaseb" };
```

❌ Unsafe operations are blocked:

```ts
// console.log(data.toUpperCase()); // ❌ Error: Object is of type 'unknown'.
```

✅ Safe usage requires **narrowing**:

```ts
if (typeof data === "string") {
  console.log(data.toUpperCase());
} else {
  console.log("Not a string");
}
```

---

## 2. Type Assertions (`as`)

Sometimes you **know the type**, and TypeScript does not. Use `as` to tell TS:

```ts
let value: unknown = "TypeScript";

console.log((value as string).length); // ✅ 10
```

> ⚠️ Be careful: misuse can lead to runtime errors.

```ts
let value2: unknown = 42;
console.log((value2 as string).length); // ✅ Compiles but throws at runtime
```

---

## 3. Non-Null Assertion (`!`)

When you **know a value is not null/undefined**, use `!`:

```ts
const input = document.querySelector<HTMLInputElement>("#username");
console.log(input!.value); // ✅ Asserts input is not null
```

* Removes `null` from type temporarily
* Use **only when you are certain** the value exists

---

## 4. Combining `unknown` + Assertions

When receiving **external data**, you often combine `unknown` + narrowing + assertion:

```ts
type User = {
  name: string;
  age: number;
};

function parseUser(input: unknown): User {
  if (
    typeof input === "object" &&
    input !== null &&
    "name" in input &&
    "age" in input
  ) {
    return input as User;
  }
  throw new Error("Invalid user data");
}

console.log(parseUser({ name: "Alice", age: 30 }));
```

> This is a **common pattern for API responses**.

---

## 5. Assertion Functions (Custom Guards)

You can create **functions that assert types**:

```ts
function assertIsString(val: unknown): asserts val is string {
  if (typeof val !== "string") throw new Error("Not a string!");
}

let maybeString: unknown = "Hello";
assertIsString(maybeString);
console.log(maybeString.toUpperCase()); // ✅ TypeScript knows it's string now
```

* Uses `asserts val is Type` syntax
* Enables **strong compile-time guarantees**

---

## 6. Real-World Example: DOM + External Data

```ts
const inputEl = document.querySelector<HTMLInputElement>("#age");

// inputEl might be null
const ageValue = Number(inputEl!.value); // Non-null assertion

// simulate API response
let apiResponse: unknown = { name: "Bob", age: 25 };

// Narrow + Assert
const user = apiResponse as { name: string; age: number };
console.log(user.name, user.age);
```

---

## 🧪 Practice Tasks (Day 08)

### 📝 Task 1 – Unknown + Narrowing

Create a function `processInput` that accepts `unknown` and:

* If string → uppercase
* If number → fixed 2 decimals
* Else → `"unsupported type"`

---

### 📝 Task 2 – Type Assertion

Given `unknown` API response:

```ts
let apiRes: unknown = { title: "Book", pages: 200 };
```

* Assert as proper type `{ title: string; pages: number }`
* Log the `title` in uppercase

---

### 📝 Task 3 – Non-Null Assertion

Create an HTML input element `<input id="email" />`
Use TypeScript to log `input.value` **safely** with `!`.

---

### 📝 Task 4 – Assertion Function

Write a function `assertIsNumber(val: unknown): asserts val is number`
Use it to safely perform arithmetic operations.

---

### 📝 Task 5 – API Safety

Simulate an API returning `unknown`:

```ts
type Product = { name: string; price: number };
function fetchProduct(): unknown {
  return { name: "Laptop", price: 999 };
}
```

* Narrow and assert to `Product`
* Log `price` with 2 decimals

---

## 🔜 Next: Day 09 – Literal Types & Enums (Exact values & states)

