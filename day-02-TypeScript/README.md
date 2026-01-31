# 📘 Day 02 – Type System Fundamentals
>
## 1. What Is a Type?

A **type** defines the kind of value a variable is allowed to hold.

Examples of types:

* Text → `string`
* Numbers → `number`
* Logical values → `boolean`

Once a type is assigned, TypeScript enforces it throughout the program.

---

## 2. Type Annotation

Type annotation explicitly tells TypeScript what type a variable should have.

### Syntax

```ts
let variableName: type = value;
```

### Example

```ts
let userName: string = "Altaseb";
let userAge: number = 20;
let isActive: boolean = true;
```

If a value of a different type is assigned, TypeScript reports an error during compilation.

---

## 3. Primitive Types

### 3.1 `string`

Used to represent textual data.

```ts
let courseTitle: string = "TypeScript Fundamentals";
```

Strings can use:

* Single quotes `' '`
* Double quotes `" "`
* Template literals `` ` ` ``

---

### 3.2 `number`

Used for integers and floating-point numbers.

```ts
let totalStudents: number = 30;
let averageScore: number = 85.5;
```

TypeScript does not separate integers and floats.

---

### 3.3 `boolean`

Used for logical values.

```ts
let isCompleted: boolean = false;
```

Valid values are `true` and `false`.

---

## 4. Type Inference

TypeScript can automatically determine a variable’s type based on its initial value. This is called **type inference**.

### Example

```ts
let city = "Addis Ababa";
```

TypeScript infers:

```ts
let city: string;
```

After inference, assigning a different type will result in an error.

```ts
city = 10; // Error
```

---

## 5. Explicit Types vs Inferred Types

| Approach        | Description                   |
| --------------- | ----------------------------- |
| Explicit typing | Type is written manually      |
| Inference       | Type is deduced automatically |

Both are valid. Explicit typing is often preferred for clarity in shared codebases.

---

## 6. The `any` Type

The `any` type disables type checking.

### Example

```ts
let data: any = "Hello";
data = 100;
data = true;
```

TypeScript allows all assignments without errors.

---

### Why `any` Exists

* Gradual migration from JavaScript
* Interacting with dynamic data
* Temporary development scenarios

---

### Why `any` Should Be Avoided

* Removes TypeScript’s safety benefits
* Reintroduces runtime errors
* Reduces code readability

Using `any` should be a deliberate decision, not a default.

---

## 7. Type Errors and Compiler Feedback

TypeScript detects errors **before execution**.

### Example Error

```ts
let count: number = 10;
count = "ten";
```

Error:

```
Type 'string' is not assignable to type 'number'
```

These errors prevent invalid code from compiling.

---

## 8. Day 02 Code Example

File: `src/index.ts`

```ts
let projectName: string = "30 Days of TypeScript";
let duration: number = 30;
let isPublished: boolean = true;

let inferredLanguage = "TypeScript";

let flexibleValue: any = "Initial value";

console.log(projectName);
console.log(duration);
console.log(isPublished);
console.log(inferredLanguage);
console.log(flexibleValue);
```

---

## 9. Compilation and Execution

Compile the code:

```bash
tsc
```

Run the output:

```bash
node dist/index.js
```

---

## 🔜 Next: Day 03

**Day 03 – Working with Arrays and Tuples**

