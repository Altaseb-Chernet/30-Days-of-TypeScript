"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/* ---------------------------
   1. Access Modifiers
--------------------------- */
class Account {
    owner;
    balance;
    pin;
    constructor(owner, balance, pin) {
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
class PaymentService {
    validate(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
    }
}
class CardPayment extends PaymentService {
    pay(amount) {
        this.validate(amount);
        console.log(`Paid ${amount} with card`);
    }
}
class MemoryCache {
    set(key, value) {
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
class Report {
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
    static create(type) {
        return type === "pdf" ? new PdfReport() : new CsvReport();
    }
}
const report = ReportFactory.create("pdf");
report.generate();
//# sourceMappingURL=index.js.map