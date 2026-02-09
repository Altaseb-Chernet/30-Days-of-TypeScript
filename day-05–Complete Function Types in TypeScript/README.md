
# 📘 Day 05 – Complete Function Types in TypeScript

> **Day 05** focuses on **all kinds of functions in TypeScript**, their types, parameters, return types, and real-world usages.

## 1. Named Functions

**Named functions** have a name and can be reused anywhere.

```ts
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10));
```

* Parameters have types (`number`)
* Return type is explicitly `number`

---

## 2. Anonymous Functions

Anonymous functions are functions without a name, usually assigned to a variable.

```ts
const subtract = function (a: number, b: number): number {
  return a - b;
};

console.log(subtract(10, 4));
```

* Same type rules as named functions
* Useful for callbacks

---

## 3. Arrow Functions

Arrow functions are a concise syntax for anonymous functions.

```ts
const multiply = (a: number, b: number): number => a * b;

console.log(multiply(3, 4));
```

* Single-expression arrow functions can omit `{}` and `return`
* Parentheses are required for multiple parameters

---

## 4. Optional Parameters

Parameters can be optional using `?`.

```ts
function greet(name: string, title?: string): string {
  return title ? `Hello, ${title} ${name}` : `Hello, ${name}`;
}

console.log(greet("Altaseb"));
console.log(greet("Altaseb", "Mr."));
```

* Optional parameters must be **after required parameters**

---

## 5. Default Parameters

Provide a default value if the caller omits the argument.

```ts
function calculatePrice(price: number, tax: number = 0.15): number {
  return price + price * tax;
}

console.log(calculatePrice(100));
console.log(calculatePrice(100, 0.2));
```

* If the second parameter is missing, `0.15` is used

---

## 6. Rest Parameters

Capture multiple arguments as an array.

```ts
function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sumAll(1, 2, 3, 4, 5));
```

* Use `...` to collect remaining parameters
* Type is an array (`number[]`)

---

## 7. Void and Never Return Types

**Void** – function returns nothing

```ts
function logMessage(message: string): void {
  console.log(message);
}
```

**Never** – function never returns (e.g., throws error or infinite loop)

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

---

## 8. Function Types

You can define the **type of a function** for variables.

```ts
let operation: (x: number, y: number) => number;

operation = (a, b) => a + b; // ✅ valid
// operation = (a, b) => `${a + b}`; // ❌ invalid
```

* `(x: number, y: number) => number` describes a function with two numbers and a number return type

---

## 9. Callback Functions

Functions can be passed as arguments to other functions.

```ts
function processNumbers(a: number, b: number, callback: (x: number, y: number) => number) {
  return callback(a, b);
}

const result = processNumbers(5, 10, (x, y) => x * y);
console.log(result); // 50
```

* TypeScript ensures the callback has the correct signature

---

## 10. Higher-Order Functions

A function that **returns another function**.

```ts
function createMultiplier(factor: number): (num: number) => number {
  return (num) => num * factor;
}

const double = createMultiplier(2);
console.log(double(5)); // 10
```

* The return type is `(num: number) => number`

---

## 11. Function Overloads

A function can have **multiple type signatures**.

```ts
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(1, 2)); // 3
console.log(combine("Hello, ", "World")); // Hello, World
```

* TypeScript checks the call against the declared overloads
* The implementation must handle all cases

---

## 12. Real-World Example

**User registration and points calculation:**

```ts
function registerUser(username: string, isAdmin: boolean = false): string {
  return `User ${username} registered. Admin: ${isAdmin}`;
}

function calculatePoints(score: number, multiplier: number = 1): number {
  return score * multiplier;
}

console.log(registerUser("Altaseb"));
console.log(calculatePoints(10, 2));
```

---

## 13. Practice Tasks (Day 05 – All Function Types)

### Task 1 – Named & Anonymous

* Create a named function `square`
* Create an anonymous function `cube` assigned to a variable
* Both should accept a number and return a number

---

### Task 2 – Arrow & Default Parameters

* Create an arrow function `greetUser`
* Parameters: `name` (string), `title` (optional, default `"Guest"`)
* Return a greeting string

---

### Task 3 – Rest Parameters

* Create a function `multiplyAll(...numbers: number[]): number`
* Multiply all arguments and return the result

---

### Task 4 – Callback

* Create a function `processList(list: number[], callback: (num: number) => number)`
* Apply the callback to each number in the list

---

### Task 5 – Higher-Order Function

* Create `createAdder(x: number)` that returns a function `(y: number) => x + y`
* Test with different values

---

### Task 6 – Function Overload

* Create `formatValue` overloads for:

  * `formatValue(value: string): string`
  * `formatValue(value: number): string`
* Implementation should return a formatted string

---




