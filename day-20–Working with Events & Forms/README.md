
# 📘 Day 20 – Working with Events & Forms (Advanced DOM with TypeScript)

## 📌 Introduction

Modern web applications are **event-driven**.

Users don’t just see content — they:

* Click buttons
* Type in inputs
* Submit forms
* Trigger keyboard and mouse events

The **DOM Event System** is how browsers notify your code about these interactions.

TypeScript makes event handling:

* Safer (correct event types)
* Predictable (no invalid properties)
* Easier to refactor
* Closer to how frameworks work internally (Angular, React)

This day focuses on **advanced DOM event handling and form management using TypeScript**, without any framework.

---

## 🧠 What Are DOM Events?

An **event** is a signal that something happened in the browser.

Examples:

* `click`
* `input`
* `submit`
* `keydown`
* `focus`
* `blur`

Every event:

* Has a **type**
* Has a **target**
* Has a **lifecycle** (capturing → bubbling)

---

## ❌ Problems with JavaScript Events

In plain JavaScript:

* Event objects are loosely typed
* `event.target` is often misused
* Runtime bugs appear silently
* Form handling becomes messy

---

## ✅ How TypeScript Improves Events & Forms

TypeScript:

* Knows event types (`MouseEvent`, `KeyboardEvent`, `SubmitEvent`)
* Enforces correct element casting
* Prevents invalid property access
* Makes form logic reusable and testable

---

## 🧩 Topics Covered

### 1️⃣ Typed Event Listeners

* `addEventListener`
* Correct event types
* Strongly typed callbacks

### 2️⃣ Event Targets & Type Narrowing

* `event.target`
* `instanceof` checks
* Safe casting

### 3️⃣ Form Submission Handling

* `submit` events
* `preventDefault`
* Extracting form data

### 4️⃣ Input & Change Events

* `input`
* `change`
* Real-time validation

### 5️⃣ Keyboard & Focus Events

* `keydown`
* `focus` / `blur`
* Accessibility basics

### 6️⃣ Event Delegation

* Single handler for multiple elements
* Performance-friendly pattern

### 7️⃣ Real-World Form Validation

* Required fields
* Error messages
* UI feedback

---

## 🏗️ Real-World Relevance

These concepts are used in:

* Angular reactive forms
* React controlled components
* Vue event handlers
* Custom UI libraries
* Enterprise dashboards

Understanding this day means:

> You understand how frameworks work **under the hood**

---

## 🧪 Practice Tasks (Clearly Defined)

### 📝 Task 1 – Button Click Event

Create a button and:

* Attach a click event
* Log the event type
* Access the clicked element safely

---

### 📝 Task 2 – Keyboard Input Handling

Create an input field and:

* Listen for `keydown`
* Log pressed keys
* Prevent specific keys (e.g. numbers)

---

### 📝 Task 3 – Form Submit Handling

Create a form with:

* Email input
* Password input

On submit:

* Prevent page reload
* Read values safely
* Validate empty fields

---

### 📝 Task 4 – Real-Time Validation

Validate email input while typing:

* Show error if empty
* Remove error when valid

---

### 📝 Task 5 – Event Delegation

Create multiple buttons inside a container:

* Attach ONE click listener
* Detect which button was clicked

---

## ⚠️ Common Mistakes

❌ Forgetting `preventDefault()`
❌ Assuming `event.target` is always correct
❌ Not narrowing element types
❌ Adding too many event listeners

---

## 🧠 Mental Model

> Events = user intent
>
> Forms = data input
>
> TypeScript = safety net

---

## 🔗 Official References

* [https://www.typescriptlang.org/docs/handbook/dom-manipulation.html](https://www.typescriptlang.org/docs/handbook/dom-manipulation.html)
* [https://developer.mozilla.org/en-US/docs/Web/API/Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

---

## 🔜 Next Day 21 



