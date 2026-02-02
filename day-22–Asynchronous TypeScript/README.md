
# 📘 Day 22 – Asynchronous TypeScript

---
## 📌 Introduction

JavaScript and TypeScript are **single-threaded**, meaning they execute one operation at a time.

But modern applications:

* Fetch data from APIs
* Read databases
* Handle user input
* Wait for network responses
* Process files

All of these are **asynchronous operations**.

To manage this without blocking the UI, JavaScript uses:

* Callbacks
* Promises
* async/await
* Event Loop
* Microtasks & Macrotasks

Today we master them all — professionally.

---

# 🧠 1️⃣ Synchronous vs Asynchronous

### Synchronous Code

Runs line by line:

```ts
console.log("Start");
console.log("Middle");
console.log("End");
```

Output:

```
Start
Middle
Middle
End
```

---

### Asynchronous Code

```ts
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 0);

console.log("End");
```

Output:

```
Start
End
Async Task
```

Why?

Because async code goes to the **Web APIs + Event Loop**.

---

# 🔁 2️⃣ The Event Loop (CRITICAL)

JavaScript runtime consists of:

```
Call Stack
Web APIs
Callback Queue
Microtask Queue
Event Loop
```

Priority order:

```
Call Stack
↓
Microtasks (Promises)
↓
Macrotasks (setTimeout, setInterval)
```

---

# 🧩 3️⃣ Callbacks (Old Pattern)

```ts
function fetchData(callback: (data: string) => void) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
```

Problem:
❌ Callback Hell
❌ Hard to maintain
❌ Error handling messy

---

# 🔷 4️⃣ Promises (Modern Solution)

A Promise represents a future value.

States:

* Pending
* Fulfilled
* Rejected

---

### Creating a Promise

```ts
const promise = new Promise<string>((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Success");
  } else {
    reject("Error occurred");
  }
});
```

---

### Consuming a Promise

```ts
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Done");
  });
```

---

# 🧠 Promise Type Safety in TypeScript

```ts
function getUser(): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    resolve({ id: 1, name: "Alta" });
  });
}
```

TypeScript ensures:

* Correct resolve types
* Correct return shape
* Proper error handling

---

# ⚡ 5️⃣ async / await (Cleanest Approach)

async/await is syntax sugar over Promises.

```ts
async function getData(): Promise<string> {
  return "Hello";
}
```

Using await:

```ts
async function fetchUser() {
  try {
    const user = await getUser();
    console.log(user.name);
  } catch (error) {
    console.error(error);
  }
}
```

---

# 🧠 Important Rules

* `await` works only inside `async` functions
* `async` functions always return a Promise
* Use `try/catch` for error handling

---

# 🔄 6️⃣ Promise Utilities (Professional Level)

### Promise.all()

Runs in parallel.

```ts
await Promise.all([fetchUser(), fetchPosts()]);
```

---

### Promise.race()

Returns first resolved/rejected promise.

---

### Promise.allSettled()

Waits for all, even if some fail.

---

# 🌐 7️⃣ Fetch API with TypeScript

```ts
async function fetchUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Network error");
  }

  const data: User[] = await response.json();
  return data;
}
```

Professional pattern:

* Check response.ok
* Type the returned data
* Handle errors



# 🔜 Next Powerful Step

