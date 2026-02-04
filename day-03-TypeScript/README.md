
# 📘 Day 03 – Arrays and Tuples

> **Day 03** focuses on working with collections of values in TypeScript.
> You will learn how TypeScript enforces type safety when handling arrays and how tuples allow fixed, ordered data structures.

---

## 📌 Learning Objectives

By the end of Day 03, you will be able to:

* Declare typed arrays
* Understand multiple ways to type arrays
* Use arrays with primitive types
* Work with read-only arrays
* Understand tuples and their use cases
* Identify common mistakes when working with arrays and tuples

---

## 1. Arrays in TypeScript

An **array** is a collection of values stored in a single variable.

In TypeScript, arrays are **type-safe**, meaning all elements must match the declared type.

---

## 2. Declaring Typed Arrays

### 2.1 Using Square Brackets

```ts
let scores: number[] = [85, 90, 78];
```

All elements must be numbers.

---

### 2.2 Using Generic Syntax

```ts
let studentNames: Array<string> = ["Ali", "Sara", "John"];
```

This syntax is functionally identical to `string[]`.

---

## 3. Arrays with Mixed Types (Not Allowed)

```ts
let values: number[] = [1, 2, "three"];
```

TypeScript error:

```
Type 'string' is not assignable to type 'number'
```

Type safety prevents inconsistent data.

---

## 4. Common Array Operations

### Adding Elements

```ts
let cities: string[] = ["Addis Ababa", "Nairobi"];
cities.push("Cairo");
```

---

### Accessing Elements

```ts
let firstCity: string = cities[0];
```

---

### Array Length

```ts
let totalCities: number = cities.length;
```

---

## 5. Read-only Arrays

A **read-only array** prevents modification after creation.

### Example

```ts
let fixedNumbers: readonly number[] = [1, 2, 3];
```

The following operations are not allowed:

```ts
fixedNumbers.push(4);
fixedNumbers[0] = 10;
```

Read-only arrays are useful for protecting data integrity.

---

## 6. Tuples in TypeScript

A **tuple** is a fixed-length array where each position has a specific type.

---

## 7. Declaring a Tuple

```ts
let userInfo: [string, number, boolean] = ["Altaseb", 22, true];
```

Each position has:

1. `string`
2. `number`
3. `boolean`

Order matters in tuples.

---

## 8. Accessing Tuple Elements

```ts
let userName: string = userInfo[0];
let userAge: number = userInfo[1];
```

---

## 9. Tuple Type Safety

```ts
userInfo = ["Altaseb", "22", true];
```

Error:

```
Type 'string' is not assignable to type 'number'
```

Tuples enforce both **type** and **position**.

---

## 10. When to Use Arrays vs Tuples

| Use Case                             | Recommended |
| ------------------------------------ | ----------- |
| List of same-type values             | Array       |
| Fixed structure with known positions | Tuple       |

---

## 11. Day 03 Code Example

File: `src/index.ts`

```ts
let numbers: number[] = [10, 20, 30];
let languages: Array<string> = ["TypeScript", "JavaScript", "Python"];

let readOnlyValues: readonly number[] = [1, 2, 3];

let userData: [string, number, boolean] = ["Altaseb", 22, true];

console.log(numbers);
console.log(languages);
console.log(readOnlyValues);
console.log(userData);
```

---

## 12. Compilation and Execution

Compile:

```bash
tsc
```

Run:

```bash
node dist/index.js
```


## 🔜 Next: Day 04

**Day 04 – Objects and Type Aliases**



