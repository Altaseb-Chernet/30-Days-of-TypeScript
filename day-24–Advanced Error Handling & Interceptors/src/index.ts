/**
 * 📘 Day 24 – Advanced Error Handling & Interceptors
 */


/* ----------------------------------------
   1️⃣ Custom API Error Class
----------------------------------------- */

class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = "ApiError";
  }
}


/* ----------------------------------------
   2️⃣ Request Interceptor
----------------------------------------- */

function requestInterceptor(options: RequestInit): RequestInit {
  const token = localStorage.getItem("auth_token");

  return {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  };
}


/* ----------------------------------------
   3️⃣ Response Interceptor
----------------------------------------- */

async function responseInterceptor(response: Response): Promise<Response> {

  if (response.status === 401) {
    console.warn("Unauthorized – redirecting to login...");
    // Example: redirect to login page
    // window.location.href = "/login";
  }

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new ApiError(
      errorMessage || "Unknown API Error",
      response.status
    );
  }

  return response;
}


/* ----------------------------------------
   4️⃣ Advanced API Client
----------------------------------------- */

async function apiClient<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {

  // Apply request interceptor
  const interceptedOptions = requestInterceptor(options);

  try {
    const response = await fetch(url, interceptedOptions);

    // Apply response interceptor
    const processedResponse = await responseInterceptor(response);

    const data: T = await processedResponse.json();

    return data;

  } catch (error) {

    // Network error
    if (error instanceof TypeError) {
      console.error("Network error occurred.");
      throw new Error("Network connection failed.");
    }

    // API error
    if (error instanceof ApiError) {
      console.error(
        `API Error (${error.status}): ${error.message}`
      );
      throw error;
    }

    // Unknown error
    console.error("Unexpected error:", error);
    throw new Error("Unexpected error occurred.");
  }
}


/* ----------------------------------------
   5️⃣ Example Usage
----------------------------------------- */

interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUsers(): Promise<User[]> {
  return apiClient<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
}

async function main() {
  try {
    const users = await fetchUsers();
    console.log("Users:", users);
  } catch (error) {
    if (error instanceof ApiError) {
      console.error("Handled API Error:", error.status);
    } else if (error instanceof Error) {
      console.error("Handled General Error:", error.message);
    }
  }
}

main();
