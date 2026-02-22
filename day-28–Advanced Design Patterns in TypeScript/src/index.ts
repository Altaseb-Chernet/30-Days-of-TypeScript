/**
 * =====================================================
 * 📘 Day 28 – Advanced Design Patterns in TypeScript
 * =====================================================
 */


/* =====================================================
   1️⃣ Singleton Pattern
===================================================== */

class Logger {

  private static instance: Logger;

  // Private constructor prevents direct instantiation
  private constructor() {}

  static getInstance(): Logger {

    if (!Logger.instance) {
      Logger.instance = new Logger();
    }

    return Logger.instance;
  }

  log(message: string) {
    console.log(`[LOG]: ${message}`);
  }
}

// Usage
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

console.log(logger1 === logger2); // true



/* =====================================================
   2️⃣ Factory Pattern
===================================================== */

interface PaymentProcessor {
  pay(amount: number): void;
}

class CreditCardPayment implements PaymentProcessor {
  pay(amount: number) {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

class PayPalPayment implements PaymentProcessor {
  pay(amount: number) {
    console.log(`Paid ${amount} using PayPal`);
  }
}

class PaymentFactory {

  static create(type: "credit" | "paypal"): PaymentProcessor {

    switch (type) {
      case "credit":
        return new CreditCardPayment();
      case "paypal":
        return new PayPalPayment();
      default:
        throw new Error("Invalid payment type");
    }
  }
}

// Usage
const payment = PaymentFactory.create("credit");
payment.pay(100);



/* =====================================================
   3️⃣ Adapter Pattern
===================================================== */

// Old API
class OldApi {
  oldRequest() {
    return "Old API response";
  }
}

// New expected interface
interface NewApi {
  request(): string;
}

// Adapter
class ApiAdapter implements NewApi {

  constructor(private oldApi: OldApi) {}

  request(): string {
    return this.oldApi.oldRequest();
  }
}

const adapter = new ApiAdapter(new OldApi());
console.log(adapter.request());



/* =====================================================
   4️⃣ Decorator Pattern
===================================================== */

function LogExecution(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {

    console.log(`Calling ${propertyKey}`);

    const result = originalMethod.apply(this, args);

    console.log(`Finished ${propertyKey}`);

    return result;
  };

  return descriptor;
}

class ExampleService {

  @LogExecution
  runTask() {
    console.log("Task running...");
  }
}

const service = new ExampleService();
service.runTask();



/* =====================================================
   5️⃣ Observer Pattern
===================================================== */

type Listener = (data: string) => void;

class EventEmitter {

  private listeners: Listener[] = [];

  subscribe(listener: Listener) {
    this.listeners.push(listener);
  }

  emit(data: string) {
    this.listeners.forEach(listener => listener(data));
  }
}

const emitter = new EventEmitter();

emitter.subscribe(data => {
  console.log("Listener 1:", data);
});

emitter.subscribe(data => {
  console.log("Listener 2:", data);
});

emitter.emit("Event Fired!");



/* =====================================================
   6️⃣ Strategy Pattern
===================================================== */

interface DiscountStrategy {
  apply(price: number): number;
}

class NoDiscount implements DiscountStrategy {
  apply(price: number) {
    return price;
  }
}

class TenPercentDiscount implements DiscountStrategy {
  apply(price: number) {
    return price * 0.9;
  }
}

class PriceCalculator {

  constructor(private strategy: DiscountStrategy) {}

  calculate(price: number) {
    return this.strategy.apply(price);
  }
}

const calculator = new PriceCalculator(new TenPercentDiscount());

console.log(calculator.calculate(100)); // 90