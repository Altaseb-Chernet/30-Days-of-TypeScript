
# 📘 Day 23 – Fetch API & API Typing 

## 📌 1️⃣ What is Fetch API?

The Fetch API is a modern JavaScript interface for making HTTP requests.

It is:

* Promise-based
* Asynchronous
* Built-in in browsers
* Used in React, Angular, Vue, etc.

Example:

```ts
fetch("https://api.example.com/users");
```

But this alone is NOT professional.

We need:

* Proper typing
* Error handling
* Response validation
* Reusable structure

---

# 🧠 2️⃣ Basic Fetch Structure

```ts
const response = await fetch(url);

if (!response.ok) {
  throw new Error("Network error");
}

const data = await response.json();
```

Important:

* `response.ok` ensures HTTP status is 200–299
* `response.json()` returns `any` (dangerous in TypeScript)

---

# ⚠️ 3️⃣ The Problem with JSON in TypeScript

`response.json()` returns:

```ts
Promise<any>
```

That removes type safety.

We must type it manually:

```ts
const data: User[] = await response.json();
```

But this still assumes the backend returns correct shape.

---

# 🧩 4️⃣ Defining API Types Properly

Example API response:

```json
{
  "id": 1,
  "name": "Alta",
  "email": "alta@example.com"
}
```

We define:

```ts
interface User {
  id: number;
  name: string;
  email: string;
}
```

Now TypeScript protects us.

---

# 🌐 5️⃣ Real GET Request (Typed)

```ts
async function fetchUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data: User[] = await response.json();
  return data;
}
```

Now:

* Return type is strict
* Caller knows what it receives

---

# 🛡 6️⃣ Proper Error Architecture

Professional pattern:

```ts
try {
  const users = await fetchUsers();
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}
```

Never assume error is string.

---

# 🔁 7️⃣ POST Request with Typed Body

```ts
interface CreateUserRequest {
  name: string;
  email: string;
}

async function createUser(user: CreateUserRequest): Promise<User> {
  const response = await fetch("https://api.example.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  return response.json();
}
```

---

# 🏗 8️⃣ Building a Reusable Typed API Client (Professional Pattern)

Instead of repeating fetch everywhere:

```ts
async function apiClient<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  const data: T = await response.json();
  return data;
}
```

Usage:

```ts
const users = await apiClient<User[]>("https://...");
```

This is how real systems are structured.

---

# ⚠️ 9️⃣ Handling Unknown API Safely

Safer approach:

```ts
const data: unknown = await response.json();
```

Then validate before casting.

Professional apps use:

* Zod
* Yup
* Custom validators

---

# 🧠 10️⃣ Common Interview Questions

* Why does response.json() return any?
* What is the difference between Fetch and Axios?
* How do you type a POST request?
* How do you handle API errors globally?
* How do you type generic API clients?

# 🔜 Next Day-24