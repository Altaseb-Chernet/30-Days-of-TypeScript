
## 📘 Day 26 – TypeScript Utility Types Deep Dive

Welcome to **TypeScript Type Engineering**! Today we focus on **Mapped Types** and **Utility Types**, the tools that let you manipulate types like the TypeScript team itself.


## 1️⃣ Mapped Types

Mapped types allow you to create new types by **transforming existing type properties**.

```ts
type NewType<T> = {
  [K in keyof T]: T[K];
};
````

Think of it like **looping over the keys** of a type.

---

## 2️⃣ `keyof` Operator

`keyof` gives you a union of all property names in a type.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User; // "id" | "name" | "email"
```

---

## 3️⃣ Built-In Utility Types

* **`Partial<T>`** → Makes all properties optional.
* **`Required<T>`** → Makes all properties required.
* **`Readonly<T>`** → Makes properties read-only.
* **`Pick<T, K>`** → Select specific properties.
* **`Omit<T, K>`** → Remove specific properties.
* **`Record<K, T>`** → Create an object type with keys `K` and values `T`.

---

## 4️⃣ Custom Utility Types

* Make all properties nullable:

```ts
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};
```

* Make all properties optional **except some**:

```ts
type OptionalExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;
```

---

## 5️⃣ Key Remapping

Rename keys dynamically:

```ts
type PrefixKeys<T> = {
  [K in keyof T as `api_${string & K}`]: T[K];
};
```

Transforms:

```ts
{ id: number } → { api_id: number }
```

---

## 6️⃣ Conditional + Mapped Types

Filter properties based on type:

```ts
type RemoveFunctions<T> = {
  [K in keyof T as T[K] extends Function ? never : K]: T[K];
};
```

Removes all function properties automatically.

---

## 7️⃣ Deep Utility Types

Recursive transformations like `DeepPartial` let you apply changes **deeply** in nested objects.

# 🔜 Next Day-27