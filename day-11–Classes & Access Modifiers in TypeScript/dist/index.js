"use strict";
/**
 * Day 11 – Classes & Access Modifiers
 *
 * Concepts Covered:
 * 1. Basic Classes & Constructors
 * 2. Access Modifiers (public, private, protected)
 * 3. Readonly Properties
 * 4. Parameter Properties
 * 5. Inheritance & Method Overriding
 * 6. Abstract Classes
 * 7. Static Members
 * 8. Getters & Setters
 * 9. Interfaces with Classes
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* ---------------------------
   1. Basic Class Declaration
--------------------------- */
/**
 * A simple class representing a user
 */
class User {
    name;
    age;
    /**
     * Constructor runs when a new instance is created
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    /**
     * Method available on all User instances
     */
    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
}
const user = new User("Altaseb", 25);
user.greet();
/* ---------------------------
   2. Access Modifiers
--------------------------- */
class Account {
    owner;
    balance;
    accountType;
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
        this.accountType = "standard";
    }
    /**
     * Private property can only be accessed inside the class
     */
    getBalance() {
        return this.balance;
    }
}
const acc = new Account("Altaseb", 1000);
console.log(acc.owner);
// console.log(acc.balance); // ❌ Error
/* ---------------------------
   3. Inheritance
--------------------------- */
class PremiumAccount extends Account {
    constructor(owner, balance) {
        super(owner, balance);
        this.accountType = "premium"; // protected allowed
    }
    showType() {
        console.log(this.accountType);
    }
}
const pAcc = new PremiumAccount("Altaseb", 5000);
pAcc.showType();
/* ---------------------------
   4. Readonly Properties
--------------------------- */
class AppConfig {
    version;
    constructor(version) {
        this.version = version;
    }
}
const config = new AppConfig("1.0.0");
// config.version = "2.0"; // ❌ Error
/* ---------------------------
   5. Parameter Properties
--------------------------- */
/**
 * Shorthand syntax for declaring and assigning properties
 */
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getAge() {
        return this.age;
    }
}
const person = new Person("Ali", 30);
console.log(person.name);
/* ---------------------------
   6. Method Overriding
--------------------------- */
class Animal {
    speak() {
        console.log("Animal sound");
    }
}
class Dog extends Animal {
    speak() {
        super.speak(); // call parent method
        console.log("Woof!");
    }
}
const dog = new Dog();
dog.speak();
/* ---------------------------
   7. Abstract Classes
--------------------------- */
/**
 * Abstract class cannot be instantiated
 */
class Payment {
    receipt() {
        console.log("Payment received");
    }
}
class CreditCardPayment extends Payment {
    pay(amount) {
        console.log(`Paid ${amount} by credit card`);
    }
}
const payment = new CreditCardPayment();
payment.pay(100);
/* ---------------------------
   8. Static Members
--------------------------- */
class MathUtil {
    static PI = 3.14;
    static square(n) {
        return n * n;
    }
}
console.log(MathUtil.PI);
console.log(MathUtil.square(4));
/* ---------------------------
   9. Getters & Setters
--------------------------- */
class Temperature {
    _celsius = 0;
    get celsius() {
        return this._celsius;
    }
    set celsius(value) {
        if (value < -273.15) {
            throw new Error("Invalid temperature");
        }
        this._celsius = value;
    }
}
const temp = new Temperature();
temp.celsius = 25;
console.log(temp.celsius);
class Invoice {
    print() {
        console.log("Printing invoice...");
    }
}
const invoice = new Invoice();
invoice.print();
//# sourceMappingURL=index.js.map