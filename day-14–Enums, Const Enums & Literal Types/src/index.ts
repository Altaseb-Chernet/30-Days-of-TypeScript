/**
 * Day 14 – Enums & Literal Types (Real-World Examples)
 *
 * Concepts Covered:
 * 1. Numeric Enums
 * 2. String Enums
 * 3. Const Enums
 * 4. Literal Types
 * 5. Discriminated Unions
 */

/* ---------------------------
   1. User Roles (String Enum)
--------------------------- */
/**
 * Represents fixed roles in the system
 */
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

/**
 * Check permissions based on role
 */
function canAccessDashboard(role: Role): boolean {
  return role === Role.Admin || role === Role.User;
}

canAccessDashboard(Role.Guest); // false

/* ---------------------------
   2. Order Workflow (Enum)
--------------------------- */
/**
 * Represents order lifecycle
 */
enum OrderStatus {
  Created = "CREATED",
  Paid = "PAID",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
}

/**
 * Order model
 */
interface Order {
  id: number;
  status: OrderStatus;
}

/**
 * Update order status safely
 */
function updateOrder(order: Order, status: OrderStatus): Order {
  return { ...order, status };
}

/* ---------------------------
   3. HTTP Handling (Const Enum)
--------------------------- */
/**
 * Compile-time optimized HTTP codes
 */
const enum HttpCode {
  OK = 200,
  Unauthorized = 401,
  NotFound = 404,
}

/**
 * Handle response
 */
function handleHttp(code: HttpCode) {
  if (code === HttpCode.OK) {
    console.log("Request successful");
  }
}

/* ---------------------------
   4. UI State (Literal Union)
--------------------------- */
/**
 * UI rendering states
 */
type UIState = "idle" | "loading" | "success" | "error";

/**
 * Render UI based on state
 */
function renderUI(state: UIState) {
  switch (state) {
    case "loading":
      console.log("⏳ Loading...");
      break;
    case "success":
      console.log("✅ Success!");
      break;
    case "error":
      console.log("❌ Error");
      break;
  }
}

/* ---------------------------
   5. Discriminated Union (API Result)
--------------------------- */
/**
 * Safe API response model
 */
type ApiResponse =
  | { status: "success"; data: string }
  | { status: "error"; message: string };

/**
 * Handle API result with full type safety
 */
function handleApi(res: ApiResponse) {
  if (res.status === "success") {
    console.log(res.data);
  } else {
    console.error(res.message);
  }
}

/* ---------------------------
   6. When Enums Beat Literals
--------------------------- */
/**
 * Public API contract
 */
enum PaymentMethod {
  Card = "CARD",
  PayPal = "PAYPAL",
  Bank = "BANK",
}

// Using enum ensures only valid methods are used
function processPayment(method: PaymentMethod) {
  switch (method) {
    case PaymentMethod.Card:
        console.log("Processing card payment"); 
        break;
    case PaymentMethod.PayPal:
        console.log("Processing PayPal payment"); 
        break;
    case PaymentMethod.Bank:
        console.log("Processing bank transfer"); 
        break;
  }
}
// Valid usage
processPayment(PaymentMethod.PayPal);
// Invalid usage would be caught at compile-time
// processPayment("CASH"); // ❌ Error