/**
 * =====================================================
 * Day 26 – TypeScript Utility Types Deep Dive
 * =====================================================
 */

/* =====================================================
   1️⃣ Base Interface – Our Starting Point
===================================================== */
interface User {
  id: number;       // Unique identifier
  name: string;     // User's name
  email: string;    // User's email address
  isAdmin: boolean; // Whether user is an admin
}

/* =====================================================
   2️⃣ Partial – Make all properties optional
===================================================== */
// Goal: Create a type where all properties of T are optional
type MyPartial<T> = {
  [K in keyof T]?: T[K]; // Loop through all keys (keyof T) and add ? to make them optional
};

// Example usage
type OptionalUser = MyPartial<User>; 
/*
  OptionalUser is now:
  {
    id?: number;
    name?: string;
    email?: string;
    isAdmin?: boolean;
  }
*/

/* =====================================================
   3️⃣ Nullable – Allow null for all properties
===================================================== */
// Goal: Every property can also be null
type Nullable<T> = {
  [K in keyof T]: T[K] | null; // Loop through keys and union each type with null
};

type NullableUser = Nullable<User>;
/*
  NullableUser is now:
  {
    id: number | null;
    name: string | null;
    email: string | null;
    isAdmin: boolean | null;
  }
*/

/* =====================================================
   4️⃣ DeepPartial – Recursive Partial
===================================================== */
// Goal: Make nested objects optional too
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
  // For each key:
  // - if the value is an object → apply DeepPartial recursively
  // - otherwise → keep the type
};

interface Profile {
  user: User;    // Nested object
  createdAt: Date;
}

type PartialProfile = DeepPartial<Profile>;
/*
  PartialProfile is now:
  {
    user?: {
      id?: number;
      name?: string;
      email?: string;
      isAdmin?: boolean;
    };
    createdAt?: Date;
  }
*/

/* =====================================================
   5️⃣ Pick – Select specific keys
===================================================== */
// Goal: Only pick certain keys from a type
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]; // Loop only through keys in K
};

type UserPreview = MyPick<User, "id" | "name">;
/*
  UserPreview is now:
  {
    id: number;
    name: string;
  }
*/

/* =====================================================
   6️⃣ Omit – Remove specific keys
===================================================== */
// Goal: Remove specific keys from a type
type MyOmit<T, K extends keyof T> = MyPick<T, Exclude<keyof T, K>>;
// Exclude<keyof T, K> removes K from the list of all keys

type UserWithoutEmail = MyOmit<User, "email">;
/*
  UserWithoutEmail is now:
  {
    id: number;
    name: string;
    isAdmin: boolean;
  }
*/

/* =====================================================
   7️⃣ Remove Function Properties
===================================================== */
// Goal: Create a type that excludes all function properties
interface Example {
  id: number;
  name: string;
  log(): void; // Function property
}

type RemoveFunctions<T> = {
  [K in keyof T as T[K] extends Function ? never : K]: T[K];
  // For each key:
  // - If the property is a function → remove it (never)
  // - Otherwise → keep it
};

type CleanExample = RemoveFunctions<Example>;
/*
  CleanExample is now:
  {
    id: number;
    name: string;
  }
*/

/* =====================================================
   8️⃣ Key Remapping – Prefix Keys
===================================================== */
// Goal: Change key names dynamically
type PrefixKeys<T> = {
  [K in keyof T as `api_${string & K}`]: T[K];
  // For each key:
  // - Rename it using template literal: "api_" + original key
};

type ApiUser = PrefixKeys<User>;
/*
  ApiUser is now:
  {
    api_id: number;
    api_name: string;
    api_email: string;
    api_isAdmin: boolean;
  }
*/

/* =====================================================
   9️⃣ Record – Object with specific keys
===================================================== */
// Goal: Create an object type with dynamic keys of type K and values of type T
type UserDictionary = Record<string, User>;
// string → all keys must be strings
// User → all values are of type User

const users: UserDictionary = {
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

/* =====================================================
  🔟 Conditional + Mapped – Make only booleans optional
===================================================== */
// Goal: Only certain types (boolean) become optional
type OptionalBooleans<T> = {
  [K in keyof T]: T[K] extends boolean ? T[K] | undefined : T[K];
};

type UpdatedUser = OptionalBooleans<User>;
/*
  UpdatedUser is now:
  {
    id: number;
    name: string;
    email: string;
    isAdmin?: boolean; // only boolean became optional
  }
*/
