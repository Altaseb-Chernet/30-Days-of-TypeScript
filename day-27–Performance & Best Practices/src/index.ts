/**
 * =====================================================
 * 📘 Day 27 – Performance & Best Practices
 * =====================================================
 */


/* =====================================================
   1️⃣ Efficient Data Lookup (Map vs Array)
===================================================== */

interface User {
  id: number;
  name: string;
  email: string;
}

// Large dataset simulation
const usersArray: User[] = [];

for (let i = 0; i < 10000; i++) {
  usersArray.push({
    id: i,
    name: `User ${i}`,
    email: `user${i}@example.com`
  });
}

// ❌ Inefficient for large datasets (O(n))
function findUserById_Array(id: number): User | undefined {
  return usersArray.find(user => user.id === id);
}

// ✅ Efficient lookup (O(1))
const usersMap = new Map<number, User>();

usersArray.forEach(user => {
  usersMap.set(user.id, user);
});

function findUserById_Map(id: number): User | undefined {
  return usersMap.get(id);
}



/* =====================================================
   2️⃣ Parallel Async Execution
===================================================== */

async function fetchA(): Promise<string> {
  return new Promise(resolve =>
    setTimeout(() => resolve("A"), 1000)
  );
}

async function fetchB(): Promise<string> {
  return new Promise(resolve =>
    setTimeout(() => resolve("B"), 1000)
  );
}

// ❌ Sequential (2 seconds total)
async function sequential() {
  const a = await fetchA();
  const b = await fetchB();
  console.log(a, b);
}

// ✅ Parallel (1 second total)
async function parallel() {
  const [a, b] = await Promise.all([
    fetchA(),
    fetchB()
  ]);

  console.log(a, b);
}



/* =====================================================
   3️⃣ Simple Caching Layer
===================================================== */

const cache = new Map<string, unknown>();

async function fetchWithCache<T>(
  key: string,
  fetcher: () => Promise<T>
): Promise<T> {

  // Return cached value if exists
  if (cache.has(key)) {
    return cache.get(key) as T;
  }

  // Otherwise fetch new data
  const data = await fetcher();

  cache.set(key, data);

  return data;
}



/* =====================================================
   4️⃣ Debounce Utility (Performance for Events)
===================================================== */

function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {

  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}



/* =====================================================
   5️⃣ Early Return Pattern (Cleaner & Faster)
===================================================== */

function processUser(user?: User) {

  if (!user) {
    console.error("No user provided");
    return;
  }

  console.log("Processing:", user.name);
}