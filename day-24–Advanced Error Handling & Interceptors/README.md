# 📘 Day 24 – Advanced Error Handling & Interceptors (TypeScript)

## 📌 Introduction

In real-world applications, API communication **will fail** at some point.

Servers go down.
Users lose internet connection.
Tokens expire.
Validation fails.

If your application does not handle these situations properly, it will:

* Crash
* Show unclear messages
* Lose user data
* Create security risks

Today, we’ll learn how to build **professional-level error handling** and implement a clean **interceptor system** using TypeScript.

This is how production applications are built.

---

# 🧠 Understanding Errors in Web Applications

Errors in web apps generally fall into four main categories.

---

## 1️⃣ Network Errors

These happen when the request never reaches the server.

Examples:

* No internet connection
* DNS resolution failure
* Server is down
* CORS blocked request

Important:
These errors usually **do not return an HTTP status code** because no response was received.

---

## 2️⃣ HTTP Errors

These are responses from the server with error status codes.

Common examples:

* **400** – Bad Request (invalid input)
* **401** – Unauthorized (not authenticated)
* **403** – Forbidden (no permission)
* **404** – Not Found
* **500** – Internal Server Error

These errors **do return a response**, but `response.ok` will be `false`.

---

## 3️⃣ Application Errors

These are logical errors returned intentionally by your backend.

Examples:

* Validation failed
* Email already exists
* Business rule violation
* Payment declined

The request succeeded technically — but the operation failed logically.

---

## 4️⃣ Unexpected Runtime Errors

These happen inside your frontend code.

Examples:

* Accessing property of `undefined`
* JSON parsing failure
* Type errors
* Null reference errors

These are coding issues and should be minimized with TypeScript.

---

# 🎯 Why Basic try/catch Is Not Enough

A beginner approach might look like this:

```ts
try {
  const users = await fetchUsers();
} catch (error) {
  console.log(error);
}
```

This has problems:

* ❌ No error categorization
* ❌ No retry mechanism
* ❌ No token refresh handling
* ❌ No global logging
* ❌ No consistent user messaging

It handles errors — but not professionally.

We need structure.

---

# 🏗 Creating a Custom API Error Class

Instead of throwing generic errors:

```ts
throw new Error("Request failed");
```

We define a structured error class.

```ts
class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = "ApiError";
  }
}
```

### Why This Is Better

Now we can:

* Identify HTTP status
* Handle 401 differently from 500
* Standardize backend errors
* Build centralized logic

This makes your system scalable.

---

# 🛡 Handling Errors in an API Client

Let’s improve our fetch logic.

```ts
async function request(url: string, options?: RequestInit) {
  const response = await fetch(url, options);

  if (!response.ok) {
    const errorText = await response.text();
    throw new ApiError(
      errorText || "Request failed",
      response.status
    );
  }

  return response.json();
}
```

Now:

* We detect HTTP failures
* We preserve server messages
* We attach status codes
* We throw structured errors

This becomes the foundation of a professional API client.

---

# 🧠 What Are Interceptors?

An interceptor is:

> A function that runs before or after every HTTP request.

Think of it as a pipeline around your API calls.

Interceptors allow you to:

* Automatically add Authorization headers
* Log all outgoing requests
* Catch 401 errors globally
* Refresh expired tokens
* Transform response data
* Standardize error handling

Important:
`fetch` does not support interceptors natively — we build our own wrapper.

---

# 🏗 Designing a Simple Interceptor Architecture

Conceptually:

```
request()
   ↓
requestInterceptor
   ↓
fetch()
   ↓
responseInterceptor
   ↓
return data / throw error
```

We wrap `fetch` inside a reusable function.

---

## Example Structure

```ts
async function apiClient(url: string, options: RequestInit = {}) {

  // Request Interceptor
  const token = localStorage.getItem("token");

  const modifiedOptions = {
    ...options,
    headers: {
      ...options.headers,
      Authorization: token ? `Bearer ${token}` : ""
    }
  };

  try {
    const response = await fetch(url, modifiedOptions);

    // Response Interceptor
    if (!response.ok) {
      const errorText = await response.text();
      throw new ApiError(errorText, response.status);
    }

    return await response.json();

  } catch (error) {
    // Global Error Handling
    console.error("API Error:", error);
    throw error;
  }
}
```

Now every request:

* Automatically includes token
* Has centralized error handling
* Throws structured errors

This is scalable architecture.

---

# 🚀 Production-Level Improvements

Professional applications go further.

---

## ✅ Token Refresh Logic

When a `401 Unauthorized` error occurs:

1. Call refresh endpoint
2. Get new access token
3. Retry original request automatically

Pseudo-logic:

```ts
if (error.status === 401) {
  await refreshToken();
  return retryOriginalRequest();
}
```

This prevents users from being logged out unexpectedly.

---

## ✅ Automatic Retry Mechanism

Retry requests automatically for:

* Network failures
* Temporary 500 errors

Example strategy:

* Retry up to 3 times
* Use exponential backoff

This increases reliability.

---

## ✅ Global Logging & Monitoring

Production apps send errors to monitoring systems such as:

* Sentry
* LogRocket
* Internal logging servers

This allows teams to:

* Track bugs
* Detect crashes
* Monitor performance

---

## ✅ Timeout Control with AbortController

Sometimes servers hang indefinitely.

We can control timeout:

```ts
const controller = new AbortController();

setTimeout(() => controller.abort(), 5000);

fetch(url, { signal: controller.signal });
```

If the request exceeds 5 seconds, it is cancelled.

This improves user experience.

---

# ⚠️ Common Beginner Mistakes

❌ Ignoring HTTP status codes
❌ Showing raw backend errors directly to users
❌ Not handling 401 globally
❌ Not distinguishing network vs HTTP errors
❌ Copy-pasting fetch logic everywhere

Always centralize your API logic.

---

# 🧠 Mental Model

Think of your API layer like this:

> API Client = Gateway
> Interceptors = Security + Logging Layer
> ApiError = Structured Contract
> UI = Consumer of Clean Data

If your API layer is strong, your UI becomes simple.

---

# 🧪 Practice Tasks

### 📝 Task 1 – Create ApiError Class

Build a reusable error class with:

* message
* status
* optional error code

---

### 📝 Task 2 – Build Basic API Client

Create a wrapper around `fetch` that:

* Throws ApiError
* Returns parsed JSON
* Handles non-OK responses

---

### 📝 Task 3 – Add Request Interceptor

Automatically attach:

* Authorization header
* Content-Type header

---

### 📝 Task 4 – Handle 401 Globally

If 401 occurs:

* Log message
* Simulate redirect to login

---

### 📝 Task 5 – Add Timeout Handling

Use `AbortController` to cancel long requests.

---


## 🔜 Next: Day 25 – Advanced Type Patterns

