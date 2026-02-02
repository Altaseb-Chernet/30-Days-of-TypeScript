"use strict";
/**
 * =====================================================
 * Day 26 – TypeScript Utility Types Deep Dive
 * =====================================================
 */
Object.defineProperty(exports, "__esModule", { value: true });
// string → all keys must be strings
// User → all values are of type User
const users = {
    "1": {
        id: 1,
        name: "Alta",
        email: "alta@example.com",
        isAdmin: false,
    },
    "2": {
        id: 2,
        name: "Beta",
        email: "beta@example.com",
        isAdmin: true,
    },
};
/*
  UpdatedUser is now:
  {
    id: number;
    name: string;
    email: string;
    isAdmin?: boolean; // only boolean became optional
  }
*/
//# sourceMappingURL=index.js.map