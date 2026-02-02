
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
* Use essential array methods: map, filter, forEach, find, findIndex, includes, splice, push, pop

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
let userInfo: [string, number, boolean] = ["Altaseb", 20, true];
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
## 11. Most Important Array Methods

### 11.1 map
What it does:
Creates a new array by transforming each element. Original array remains unchanged.

When to use:

When you need a modified copy of data.

Example: converting user names to uppercase or adding values to numbers.

Problem it solves:

Avoids mutating original data. Useful for UI rendering or API responses.

Example (practical)

```ts
const systemTags = ["production", "secure", "internal"];
const upperTags = systemTags.map(tag => tag.toUpperCase());
console.log(upperTags); // ["PRODUCTION","SECURE","INTERNAL"]

const activeSession = [201, 202, 203];
const incrementedSessions = activeSession.map(s => s + 100);
console.log(incrementedSessions); // [301, 302, 303]

const user = [
  {id:1,name:"Leta",role:"admin",active:true},
  {id:2,name:"Miki",role:"user",active:false},
  {id:3,name:"Sara",role:"user",active:true},
];
const userNames = user.map(u => u.name);
console.log(userNames); // ["Leta","Miki","Sara"]

const userSession: [string,number][] = [
  ["Leta",201],
  ["Miki",202],
  ["Sara",203],
];
const sessionNames = userSession.map(([name,_]) => name);
console.log(sessionNames); // ["Leta","Miki","Sara"]

```
### 11.2 filter

What it does:
Creates a new array with elements that satisfy a condition.

When to use:

Selecting a subset of data. Example: active users, sessions above a certain ID.

Problem it solves:

Extracts relevant data for processing or reporting.

Example (practical):
```ts
const activeUsers = user.filter(u => u.active);
console.log(activeUsers); // [{id:1,name:"Leta"},{id:3,name:"Sara"}]

const highSessions = activeSession.filter(s => s > 201);
console.log(highSessions); // [202,203]

const filteredSession = userSession.filter(([_, id]) => id > 201);
console.log(filteredSession); // [["Miki",202],["Sara",203]]
```
### 11.3 forEach
What it does:
Iterates each element without returning a new array. Used for side effects.

When to use:

Performing actions on each item, like logging or notifications.

Example (practical):
```ts
systemTags.forEach(tag => console.log("Tag:", tag));
activeSession.forEach(s => console.log("Session:", s));
user.forEach(u => console.log(u.name, "-", u.role));
userSession.forEach(([name, id]) => console.log(`${name} -> ${id}`));

```
### 11.4 find
What it does:
Returns the first element that satisfies a condition.

When to use:

Retrieve a single element. Example: find user by ID.

Example (practical):
```ts
const user2 = user.find(u => u.id === 2);
console.log(user2); // {id:2,name:"Miki"}

const session202 = userSession.find(([_, id]) => id===202);
console.log(session202); // ["Miki",202]

```
### 11.5 findIndex
What it does:
Returns the index of the first element satisfying the condition.

When to use:

Remove or replace items using splice.

Example (practical):
```ts
const indexUser2 = user.findIndex(u => u.id === 2);
console.log(indexUser2); // 1

const indexSession202 = userSession.findIndex(([_, id]) => id===202);
console.log(indexSession202); // 1

```
### 11.6 includes
What it does:
Checks if a primitive value exists in the array.

When to use:

Quick existence check for strings/numbers.

Example (practical):
```ts
console.log(systemTags.includes("secure")); // true
console.log(activeSession.includes(205));   // false
```
### 11.7 splice
What it does:
Remove, insert, or replace items at any position. Mutates the original array.

When to use:

Remove items not at the end, replace, or insert at a specific index.

Example (practical):
```ts
systemTags.splice(1,1); // remove "secure"
console.log(systemTags); // ["production","internal"]

systemTags.splice(1,0,"staging"); // insert "staging" at index 1
console.log(systemTags); // ["production","staging","internal"]

user.splice(1,1,{id:4,name:"Alex",role:"user",active:true}); // replace
console.log(user.map(u => u.name)); // ["Leta","Alex","Sara"]

```
### 11.8 push / pop
push → add at the end
pop → remove last item

When to use:

Append or remove items in stack-like structures, sessions, logs.

Example (practical):
```ts
systemTags.push("beta");      // add at end
console.log(systemTags);

const lastTag = systemTags.pop(); // remove last
console.log("Removed:", lastTag);

```
## 12. Day 03 Code Example

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



