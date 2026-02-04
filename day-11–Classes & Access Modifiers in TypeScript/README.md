
# 📘 Day 11 – Classes & Access Modifiers in TypeScript

>
Classes are a core feature of TypeScript and JavaScript.
TypeScript extends classes with **static typing**, **access modifiers**, **abstract classes**, **parameter properties**, and **readonly enforcement**, making object-oriented programming safer and more expressive.

This lesson fully covers **everything related to classes from the TypeScript Handbook**.

---

## 1. Basic Class Declaration

A class defines a **blueprint** for creating objects with properties and methods.

```ts
class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const user = new User("Alice", 30);
console.log(user.name);
```

* `constructor` runs when an instance is created
* `this` refers to the instance

---

## 2. Access Modifiers

TypeScript provides three access modifiers:

| Modifier    | Accessibility                          |
| ----------- | -------------------------------------- |
| `public`    | Accessible everywhere (default)        |
| `private`   | Accessible only inside the class       |
| `protected` | Accessible inside class and subclasses |

---

## 3. Public Members (Default)

```ts
class Product {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}
```

If no modifier is specified, members are `public`.

---

## 4. Private Members

`private` members cannot be accessed outside the class.

```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
  }
}
```

Trying to access `balance` from outside causes a **compile-time error**.

---

## 5. Protected Members

`protected` members are accessible in subclasses.

```ts
class Vehicle {
  protected speed: number = 0;
}

class Car extends Vehicle {
  accelerate() {
    this.speed += 10;
  }
}
```

---

## 6. Readonly Properties

Readonly properties can only be assigned **once**, usually in the constructor.

```ts
class Config {
  readonly version: string;

  constructor(version: string) {
    this.version = version;
  }
}
```

---

## 7. Parameter Properties (Shorthand Syntax)

TypeScript allows defining and initializing properties directly in the constructor.

```ts
class Person {
  constructor(public name: string, private age: number) {}
}
```

This replaces manual property declarations.

---

## 8. Inheritance (`extends`)

Classes can inherit from other classes.

```ts
class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}
```

---

## 9. Method Overriding & `super`

Subclasses can override methods and call parent methods using `super`.

```ts
class Shape {
  area(): number {
    return 0;
  }
}

class Square extends Shape {
  constructor(private size: number) {
    super();
  }

  area(): number {
    return this.size * this.size;
  }
}
```

---

## 10. Abstract Classes

Abstract classes **cannot be instantiated** and may contain abstract methods.

```ts
abstract class Payment {
  abstract pay(amount: number): void;
}
```

Subclasses must implement abstract methods.

---

## 11. Static Members

Static members belong to the **class itself**, not instances.

```ts
class MathUtil {
  static PI = 3.14;

  static square(n: number) {
    return n * n;
  }
}
```

---

## 12. Getters & Setters

Getters and setters allow controlled property access.

```ts
class Temperature {
  private _celsius = 0;

  get celsius() {
    return this._celsius;
  }

  set celsius(value: number) {
    this._celsius = value;
  }
}
```

---

## 13. Implements (Interfaces with Classes)

Classes can implement interfaces.

```ts
interface Printable {
  print(): void;
}

class Report implements Printable {
  print() {
    console.log("Printing report...");
  }
}
```

---

## 14. Class Compatibility (Structural Typing)

TypeScript uses **structural typing**, not nominal typing.

```ts
class A {
  x = 0;
}

class B {
  x = 0;
}

let a: A = new B(); // Valid
```

---

## 🧪 Practice Tasks (Day 11)

### 📝 Task 1

Create a base class `User` and extend it to `Admin`.

### 📝 Task 2

Use `private` and `protected` correctly.

### 📝 Task 3

Create an abstract class and implement it.

### 📝 Task 4

Use static utility methods.

### 📝 Task 5

Add getters and setters with validation.

---

## 🔜 Next: Day 12 – Generics with Classes & Constraints
