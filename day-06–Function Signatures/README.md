
# 📘 Day 06 – Function Signatures, Callbacks, Arrow Functions & Advanced Function Types

>
## 1. Function Type Expressions (Describing Function Types)

In TypeScript, functions are **first‑class values** and can themselves be described with types. A function type expression describes:

* Parameter types
* Return type

Example function type:

```ts
// A function that takes a string and returns void
type Logger = (message: string) => void;
```

This reads as: a function with one parameter `message: string` and no meaningful return value (`void`). ([TypeScript][1])

👉 Important: Unlike function **implementations**, function types are **not callable** — they just describe the shape of call signatures.

---

## 2. Function Signatures (Named Parameters + Return Type)

TypeScript lets you define callable types directly using signatures in object types. This allows associating **properties** with callable behavior. ([TypeScript][1])

```ts
type DescribableFunction = {
  description: string;
  (input: number): boolean; // call signature
};

function run(fn: DescribableFunction) {
  console.log(fn.description, "->", fn(42));
}

function isLarge(value: number): boolean {
  return value > 10;
}

isLarge.description = "Is greater than 10";

run(isLarge);
```

Here, `DescribableFunction` is not just a function type but an object with a property and a call signature. ([TypeScript][1])

---

## 3. Typing Callbacks

When a function accepts another function as an argument (a callback), the callback should also have a defined type.

```ts
type ProcessCallback = (result: string) => void;

function processData(input: string, cb: ProcessCallback) {
  // simulate a process
  cb(`Processed: ${input}`);
}

processData("data", (output) => {
  console.log(output);
});
```

Using explicit callback types ensures that incorrect callback shapes surface at compile time. ([TypeScript][1])

---

## 4. Writing the Full Function Type

The function type includes both:

* Parameter types
* Return type

Example:

```ts
let combine: (x: number, y: number) => number;
combine = (a, b) => a + b;
```

This tells TypeScript exactly what shape of function to expect. ([TypeScript][2])

---

## 5. Arrow Functions (Concise Syntax + This Binding)

Arrow functions are a concise syntax for function expressions and have **lexical `this` binding**, meaning they capture the surrounding context’s `this` rather than defining a new one. ([GeeksforGeeks][3])

Examples:

```ts
const greet = (name: string): string => `Hello, ${name}!`;

const numbers = [1, 2, 3];
const squares = numbers.map((n) => n * n);
```

Arrow functions are commonly used in:

* Callbacks
* Array methods (`map`, `filter`, `reduce`)
* Inline functions in event handlers ([GeeksforGeeks][3])

---

## 6. Regular Function vs Arrow Function in `this` Context

Regular functions have their own `this`, while arrow functions use the **enclosing scope’s this**. This becomes important when functions are used as event handlers or class methods. ([TypeScript][2])

---

## 7. Constructor Signatures

Some function types can represent **constructors** using the `new` keyword in the type:

```ts
type ClassCtor = {
  new (s: string): Date;
};

function create(ctor: ClassCtor) {
  return new ctor("2026-01-30");
}

const d = create(Date);
```

This matches the signature of objects that can be invoked with `new`. ([TypeScript][1])

---

## 8. Real-World Function Patterns

### 8.1 Typed API Callbacks

```ts
type ApiResponseHandler = (response: { status: number; body: string }) => void;

function fetchFromApi(url: string, cb: ApiResponseHandler) {
  // simulate response
  cb({ status: 200, body: "Success" });
}
```

The callback is guaranteed to receive a response with the correct shape. ([TypeScript][1])

---

### 8.2 Higher‑Order Function Example

```ts
function withLogger<T>(fn: (arg: T) => void): (arg: T) => void {
  return (arg) => {
    console.log("Calling function with:", arg);
    fn(arg);
  };
}

const logged = withLogger((s: string) => console.log(s));
logged("Event happened");
```

This pattern is common in real applications for cross‑cutting concerns like logging or error handling.

---

## 9. Function Composition

Function composition means combining multiple functions:

```ts
const addOne = (n: number): number => n + 1;
const double = (n: number): number => n * 2;

const compose =
  (f: (x: number) => number, g: (x: number) => number) =>
  (x: number) =>
    f(g(x));

const doubleThenAddOne = compose(addOne, double);

console.log(doubleThenAddOne(3));
```

---

## 10. Practical Compiler Observations

TypeScript’s **contextual typing** lets it infer types for callback parameters passed to higher‑order functions when the types are known. ([TypeScript][2])

---

## Practice Tasks (Day 06 – Functions & Signatures)

### 📝 Task 1 – Function Type Alias

Create a function type alias `StringTransform`:

```ts
type StringTransform = (input: string) => string;
```

Use it to type functions that:

* trim whitespace
* uppercase strings

---

### 📝 Task 2 – Callback with Multiple Arguments

Create a function `coordinateCallback` that accepts:

* x: number
* y: number
* cb: (x: number, y: number) => void

Test with functions that:

* log the point
* log the point with transformations

---

### 📝 Task 3 – Arrow vs Regular This

Create a class with:

* a regular method
* an arrow method

Log `this` from both in different invocation contexts and observe differences.

---

### 📝 Task 4 – Callable Object

Define a callable type that has both:

* a callable signature
* a property

Assign it to a function and use it.

---

### 📝 Task 5 – Constructor Signature

Define a type for a constructor that takes:

* name: string
* age: number

and returns an object with those properties.

---

## 🔜 Next: Day 07 – Generics & Utility Types (Fully practical with real API usage)

