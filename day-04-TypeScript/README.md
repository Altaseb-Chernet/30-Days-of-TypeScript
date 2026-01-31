

# 📘 Day 04 – Objects & Type Aliases in TypeScript


## 1️⃣ Objects in TypeScript

An **object** is a value that contains multiple properties.

Each property has:

* a **name** (key)
* a **value**
* a **type**

In TypeScript, objects are **strictly typed**, which means:

* You must define what properties the object has
* You must define the type of each property
* TypeScript will show errors if the object is incorrect

This helps prevent bugs before the code runs.

---

## 2️⃣ Creating an Object with a Type

You can define an object’s structure directly when declaring a variable.

```ts
let user: {
  name: string;
  age: number;
  isActive: boolean;
};
```

This tells TypeScript:

* `name` must be a string
* `age` must be a number
* `isActive` must be a boolean

At this point, the variable exists, but it has no value yet.

---

## 3️⃣ Assigning a Value to the Object

When you assign a value, it must **match the structure exactly**.

```ts
user = {
  name: "Altaseb",
  age: 20,
  isActive: true
};
```

### TypeScript will show an error if:

* A required property is missing
* A property has the wrong type
* An extra property is added

This is called **structural typing**.

---

## 4️⃣ Optional Properties

Sometimes an object may not always have all properties.

You can mark a property as **optional** using `?`.

```ts
let profile: {
  username: string;
  bio?: string;
};
```

Explanation:

* `username` is required
* `bio` is optional

Both of the following are valid:

```ts
{ username: "alex" }
{ username: "alex", bio: "Developer" }
```

---

## 5️⃣ Readonly Properties

A **readonly** property cannot be changed after the object is created.

```ts
let config: {
  readonly apiUrl: string;
};
```

Once `apiUrl` is set:

```ts
config.apiUrl = "new-url"; // ❌ Error
```

Readonly is useful for:

* Configuration values
* IDs
* Constants that should not change

---

## 6️⃣ Problem with Inline Object Types

Inline object types are useful, but they have problems when:

* The same object structure is used many times
* You need to update the structure later
* Code becomes hard to read

Example problem:

```ts
let user1: { name: string; age: number };
let user2: { name: string; age: number };
```

This repeats the same type.

---

## 7️⃣ Type Aliases

A **type alias** gives a name to a type so it can be reused.

```ts
type User = {
  name: string;
  age: number;
  isActive: boolean;
};
```

Now the structure is defined **once** and reused everywhere.

---

## 8️⃣ Using Type Aliases

```ts
let user1: User = {
  name: "Alex",
  age: 20,
  isActive: true
};

let user2: User = {
  name: "Sam",
  age: 25,
  isActive: false
};
```

If you change the `User` type, all related variables update automatically.

---

## 🧪 Practice Tasks – Day 04

Follow the tasks **in order**.
Do not skip tasks.

---

### 📝 Task 1: Basic Object

1. Create a variable called `book`
2. Give it this structure:

   * `title` (string)
   * `pages` (number)
3. Assign values to the object



---

### 📝 Task 2: Optional Property

1. Create a type alias called `Person`
2. Add:

   * `name` (string)
   * `phoneNumber` (optional string)
3. Create:

   * One object with `phoneNumber`
   * One object without `phoneNumber`

Goal: understand optional properties.

---

### 📝 Task 3: Readonly Property

1. Create a type alias called `AppConfig`
2. Add:

   * `appName` (readonly string)
3. Create an object
4. Try changing `appName` and observe the error



---

### 📝 Task 4: Type Alias Reuse

1. Create a type alias called `Student`
2. Add:

   * `name` (string)
   * `grade` (number)
3. Create **two different student objects** using this type

## 🔜 Next: Day 05




