/**
 * Day 13 – Advanced Generics & Utility Types
 *
 * Concepts Covered:
 * 1. keyof & typeof
 * 2. Generic Property Access
 * 3. Mapped Types
 * 4. Utility Types (Partial, Pick, Omit, Readonly)
 */

/* ---------------------------
   1. keyof
--------------------------- */
/**
 * UserKeys becomes a union of all property names of User
 */
type User = {
  id: number;
  name: string;
  email: string;
};

type UserKeys = keyof User;

/* ---------------------------
   2. typeof
--------------------------- */
/**
 * typeof extracts the shape of a runtime value
 */
const settings = {
  theme: "dark",
  version: 1,
};

type SettingsType = typeof settings;

/* ---------------------------
   3. Generic Safe Access
--------------------------- */
/**
 * K must be a valid key of T
 */
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const u = { id: 1, name: "Altaseb" };
getValue(u, "name");

/* ---------------------------
   4. Mapped Type
--------------------------- */
/**
 * Creates a readonly version of any type
 */
type ReadonlyType<T> = {
  readonly [K in keyof T]: T[K];
};

type LockedUser = ReadonlyType<User>;

/* ---------------------------
   5. Utility Types
--------------------------- */
/**
 * Partial makes all properties optional
 */
type UserPatch = Partial<User>;

/**
 * Pick selects specific keys
 */
type UserBasic = Pick<User, "id" | "name">;

/**
 * Omit removes specific keys
 */
type UserSafe = Omit<User, "email">;

/**
 * Readonly prevents mutation
 */
type ImmutableUser = Readonly<User>;

/* ---------------------------
   6. Real-World Utility Function
--------------------------- */
/**
 * Update entity using partial updates
 */
function update<T>(original: T, changes: Partial<T>): T {
  return { ...original, ...changes };
}

update(u, { name: "Updated Name" });
