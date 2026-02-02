/**
 * =====================================================
 * 📘 Day 25 – Advanced Type Patterns
 * Senior-Level TypeScript
 * =====================================================
 */


/* =====================================================
   1️⃣ Conditional Types
===================================================== */

// Checks if T is an array type
type IsArray<T> = T extends any[] ? true : false;

type Test1 = IsArray<string[]>; // true
type Test2 = IsArray<number>;   // false



/* =====================================================
   2️⃣ Using infer to Extract Types
===================================================== */

// Extract the return type of a function
type ExtractReturnType<T> =
  T extends (...args: any[]) => infer R
    ? R
    : never;

function exampleFunction() {
  return { id: 1, name: "Alta" };
}

type ExampleReturn = ExtractReturnType<typeof exampleFunction>;
// { id: number; name: string }



/* =====================================================
   3️⃣ Recursive Types
===================================================== */

// Tree-like structure
type TreeNode = {
  value: string;
  children?: TreeNode[];
};

const tree: TreeNode = {
  value: "root",
  children: [
    { value: "child1" },
    {
      value: "child2",
      children: [
        { value: "grandchild1" }
      ]
    }
  ]
};



/* =====================================================
   4️⃣ Discriminated Union (Result Pattern)
===================================================== */

type Success<T> = {
  status: "success";
  data: T;
};

type Failure = {
  status: "error";
  error: string;
};

type Result<T> = Success<T> | Failure;


/* =====================================================
   5️⃣ Using Result Pattern in API Simulation
===================================================== */

interface User {
  id: number;
  name: string;
  email: string;
}

// Simulated API
async function fetchUser(): Promise<Result<User>> {

  const success = true;

  if (success) {
    return {
      status: "success",
      data: {
        id: 1,
        name: "Alta",
        email: "alta@example.com"
      }
    };
  }

  return {
    status: "error",
    error: "User not found"
  };
}


/* =====================================================
   6️⃣ Handling Result Safely
===================================================== */

async function handleUser() {

  const result = await fetchUser();

  // Type narrowing using discriminant property
  if (result.status === "success") {
    console.log("User:", result.data.name);
  } else {
    console.error("Error:", result.error);
  }
}

handleUser();



/* =====================================================
   7️⃣ Advanced API Type Extraction
===================================================== */

// Extract inner data from Result<T>
type UnwrapResult<T> =
  T extends Success<infer R>
    ? R
    : never;

// Example:
type ExtractedUser = UnwrapResult<Success<User>>;
// User



/* =====================================================
   8️⃣ Advanced Utility Type (Deep Partial Recursive)
===================================================== */

// Makes all properties optional recursively
type DeepPartial<T> = {
  [K in keyof T]?:
    T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

type PartialUser = DeepPartial<User>;
