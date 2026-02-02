
# 📘 Day 25 – Advanced Type Patterns

# 1️⃣ Conditional Types

Conditional types allow types to depend on other types.

Syntax:

```ts
T extends U ? X : Y
```

Meaning:

> If T is assignable to U → return X
> Otherwise → return Y

---

## 🔹 Basic Example

```ts
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false
```

---

## 🔹 Real-World Example

Extract API response type:

```ts
type ApiResponse<T> = T extends { data: infer R }
  ? R
  : never;
```

Used to extract nested data.

---

# 2️⃣ The `infer` Keyword

`infer` allows you to extract a type inside a conditional type.

Example:

```ts
type GetReturnType<T> =
  T extends (...args: any[]) => infer R
    ? R
    : never;
```

Usage:

```ts
function test() {
  return 123;
}

type Result = GetReturnType<typeof test>; // number
```

🔥 This is extremely powerful.

---

# 3️⃣ Recursive Types

Recursive types reference themselves.

Example: Tree structure

```ts
type TreeNode = {
  value: string;
  children?: TreeNode[];
};
```

Real-world:

* Folder structures
* Comments
* Category trees
* JSON schemas

---

# 4️⃣ Discriminated Unions

A discriminated union uses a common property (tag) to differentiate types.

Example:

```ts
type Success = {
  type: "success";
  data: string;
};

type Failure = {
  type: "error";
  message: string;
};

type Result = Success | Failure;
```

Usage:

```ts
function handle(result: Result) {
  if (result.type === "success") {
    console.log(result.data);
  } else {
    console.log(result.message);
  }
}
```

This gives:
✔ Full type narrowing
✔ Exhaustive checking
✔ Safe branching

---

# 5️⃣ The Result Pattern (Production Architecture)

Instead of throwing errors:

```ts
throw new Error("Failed");
```

We return:

```ts
{ type: "success", data }
```

or

```ts
{ type: "error", error }
```

Why?

✔ No unhandled promise crashes
✔ Functional-style safety
✔ Predictable flows
✔ Cleaner UI handling

Used in:

* Backend systems
* Functional programming
* Large-scale apps

---

# 6️⃣ Advanced API Typing Pattern

We can create:

```ts
type ApiResult<T> =
  | { status: "success"; data: T }
  | { status: "error"; error: string };
```

Then:

```ts
async function fetchUser(): Promise<ApiResult<User>> { ... }
```

Now API cannot return unexpected values.

# 🔜 Next Day-26
