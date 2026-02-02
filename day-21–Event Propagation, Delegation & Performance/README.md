
# 📘 Day 21 – Event Propagation, Delegation & Performance



## 📌 Introduction

When a user clicks on an element, the event does not just run on that element.

It travels through the DOM tree in a specific order.

This process is called:

> **Event Propagation**

Understanding propagation is critical for:

* Debugging UI bugs
* Building scalable apps
* Writing performant event systems
* Understanding React & Angular internals
* Passing frontend interviews

---

# 🧠 What is Event Propagation?

Event propagation defines how events move through the DOM tree.

There are **three phases**:

```
1️⃣ Capturing Phase   (Top → Target)
2️⃣ Target Phase      (Actual clicked element)
3️⃣ Bubbling Phase    (Target → Top)
```

Example DOM:

```html
<body>
  <div id="parent">
    <button id="child">Click</button>
  </div>
</body>
```

If you click the button:

```
Capturing: body → div → button
Target: button
Bubbling: button → div → body
```

---

# 🔁 The Three Phases Explained

## 1️⃣ Capturing Phase (Trick Question in Interviews)

* Runs BEFORE the target
* Disabled by default
* Enabled using `{ capture: true }`

```ts
element.addEventListener("click", handler, { capture: true });
```

---

## 2️⃣ Target Phase

* The event reaches the clicked element
* Both capture & bubble listeners can run here

---

## 3️⃣ Bubbling Phase (Default Behavior)

* Event travels upward
* Most commonly used
* Event delegation depends on this

---

# 🛑 Stopping Propagation

Sometimes you want to stop the event from moving upward.

### stopPropagation()

```ts
event.stopPropagation();
```

Stops the event from continuing further in bubbling or capturing.

---

### stopImmediatePropagation()

Stops:

* Other listeners on the same element
* AND propagation

---

# 🧩 Event Delegation (Professional Pattern)

Instead of:

❌ Adding 100 listeners to 100 buttons

You:

✅ Add ONE listener to the parent

Why?

* Better performance
* Less memory usage
* Easier dynamic UI handling

---

# ⚡ Performance Perspective

### Bad Practice:

```ts
for (let btn of buttons) {
  btn.addEventListener("click", handler);
}
```

### Professional Approach:

```ts
parent.addEventListener("click", handler);
```

---

# 🔬 Why Frameworks Use Delegation

React:

* Uses a synthetic event system
* Delegates events at the root

Angular:

* Uses zone.js + event patching

Understanding this day means:

> You understand how frameworks optimize event systems.

---

# 🧪 Practice Tasks

---

## 📝 Task 1 – Visualize Propagation

Create:

* Parent div
* Child div
* Button

Add listeners to all 3 and log the order.

---

## 📝 Task 2 – Capture vs Bubble

Attach:

* One listener with `{ capture: true }`
* One normal listener

Observe order.

---

## 📝 Task 3 – stopPropagation

Stop bubbling from child.

Verify parent does not log.

---

## 📝 Task 4 – Event Delegation

Create a list of buttons dynamically.

Use ONE listener on parent.

---

## 📝 Task 5 – Performance Simulation

Create 100 buttons:

* Compare many listeners vs single delegated listener.

---


# 🔜 Next Day-22 