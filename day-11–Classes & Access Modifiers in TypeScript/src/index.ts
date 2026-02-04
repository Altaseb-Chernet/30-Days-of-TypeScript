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

/* ---------------------------
   1. Basic Class Declaration
--------------------------- */
/**
 * A simple class representing a user
 */
class User {
  name: string;
  age: number;

  /**
   * Constructor runs when a new instance is created
   */
  constructor(name: string, age: number) {
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
  public owner: string;
  private balance: number;
  protected accountType: string;

  constructor(owner: string, balance: number) {
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
  constructor(owner: string, balance: number) {
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
  readonly version: string;

  constructor(version: string) {
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
  constructor(public name: string, private age: number) {}

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
abstract class Payment {
  abstract pay(amount: number): void;

  receipt() {
    console.log("Payment received");
  }
}

class CreditCardPayment extends Payment {
  pay(amount: number): void {
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

  static square(n: number) {
    return n * n;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.square(4));

/* ---------------------------
   9. Getters & Setters
--------------------------- */
class Temperature {
  private _celsius = 0;

  get celsius() {
    return this._celsius;
  }

  set celsius(value: number) {
    if (value < -273.15) {
      throw new Error("Invalid temperature");
    }
    this._celsius = value;
  }
}

const temp = new Temperature();
temp.celsius = 25;
console.log(temp.celsius);

/* ---------------------------
   10. Interfaces with Classes
--------------------------- */
interface Printable {
  print(): void;
}

class Invoice implements Printable {
  print() {
    console.log("Printing invoice...");
  }
}

const invoice = new Invoice();
invoice.print();

class Report implements Printable {
  print() {
    console.log("Printing report...");
  }
}

const report = new Report();
report.print();


// This concludes the demonstration of classes and access modifiers in TypeScript. Each concept is crucial for building robust and maintainable applications.
// Understanding how to use classes effectively will help you structure your code better and leverage the full power of TypeScript's type system.
class Logger {
  static log(message: string) {
    console.log(`[LOG]: ${message}`);
  }   
}

Logger.log("This is a static log message.");
// Output: [LOG]: This is a static log message.
