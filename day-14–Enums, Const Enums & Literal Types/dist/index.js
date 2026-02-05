"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/* ---------------------------
   1. User Roles (String Enum)
--------------------------- */
/**
 * Represents fixed roles in the system
 */
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
    Role["Guest"] = "GUEST";
})(Role || (Role = {}));
/**
 * Check permissions based on role
 */
function canAccessDashboard(role) {
    return role === Role.Admin || role === Role.User;
}
canAccessDashboard(Role.Guest); // false
/* ---------------------------
   2. Order Workflow (Enum)
--------------------------- */
/**
 * Represents order lifecycle
 */
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Created"] = "CREATED";
    OrderStatus["Paid"] = "PAID";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
})(OrderStatus || (OrderStatus = {}));
/**
 * Update order status safely
 */
function updateOrder(order, status) {
    return { ...order, status };
}
/* ---------------------------
   3. HTTP Handling (Const Enum)
--------------------------- */
/**
 * Compile-time optimized HTTP codes
 */
var HttpCode;
(function (HttpCode) {
    HttpCode[HttpCode["OK"] = 200] = "OK";
    HttpCode[HttpCode["Unauthorized"] = 401] = "Unauthorized";
    HttpCode[HttpCode["NotFound"] = 404] = "NotFound";
})(HttpCode || (HttpCode = {}));
/**
 * Handle response
 */
function handleHttp(code) {
    if (code === HttpCode.OK) {
        console.log("Request successful");
    }
}
/**
 * Render UI based on state
 */
function renderUI(state) {
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
/**
 * Handle API result with full type safety
 */
function handleApi(res) {
    if (res.status === "success") {
        console.log(res.data);
    }
    else {
        console.error(res.message);
    }
}
/* ---------------------------
   6. When Enums Beat Literals
--------------------------- */
/**
 * Public API contract
 */
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["Card"] = "CARD";
    PaymentMethod["PayPal"] = "PAYPAL";
    PaymentMethod["Bank"] = "BANK";
})(PaymentMethod || (PaymentMethod = {}));
// Using enum ensures only valid methods are used
function processPayment(method) {
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
//# sourceMappingURL=index.js.map