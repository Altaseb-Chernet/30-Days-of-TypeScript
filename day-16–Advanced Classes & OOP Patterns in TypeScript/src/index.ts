/**
 * Day 16 – Advanced Classes & OOP Patterns
 *
 * Concepts Covered:
 * 1. Access modifiers
 * 2. Inheritance
 * 3. Abstract classes
 * 4. Implements
 * 5. Static members
 * 6. Factory pattern
 */

/* ---------------------------
   1. Access Modifiers
--------------------------- */
class Account {
  public owner: string;
  protected balance: number;
  private pin: number;

  constructor(owner: string, balance: number, pin: number) {
    this.owner = owner;
    this.balance = balance;
    this.pin = pin;
  }
}

/* ---------------------------
   2. Inheritance
--------------------------- */
class SavingsAccount extends Account {
  addInterest() {
    this.balance += this.balance * 0.05; // allowed (protected)
  }
}

/* ---------------------------
   3. Abstract Class
--------------------------- */
abstract class PaymentService {
  abstract pay(amount: number): void;

  protected validate(amount: number) {
    if (amount <= 0) throw new Error("Invalid amount");
  }
}

class CardPayment extends PaymentService {
  pay(amount: number) {
    this.validate(amount);
    console.log(`Paid ${amount} with card`);
  }
}

/* ---------------------------
   4. Interface + Implements
--------------------------- */
interface Cache {
  set(key: string, value: string): void;
}

class MemoryCache implements Cache {
  set(key: string, value: string) {
    console.log(`Cache set ${key}: ${value}`);
  }
}

/* ---------------------------
   5. Static Members
--------------------------- */
class AppConfig {
  static VERSION = "1.0.0";
}

console.log(AppConfig.VERSION);

/* ---------------------------
   6. Factory Pattern
--------------------------- */
abstract class Report {
  abstract generate(): void;
}

class PdfReport extends Report {
  generate() {
    console.log("Generating PDF report");
  }
}

class CsvReport extends Report {
  generate() {
    console.log("Generating CSV report");
  }
}

class ReportFactory {
  static create(type: "pdf" | "csv"): Report {
    return type === "pdf" ? new PdfReport() : new CsvReport();
  }
}

const report = ReportFactory.create("pdf");
report.generate();
