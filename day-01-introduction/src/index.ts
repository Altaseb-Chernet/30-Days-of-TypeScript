// Day 1: First TypeScript Program

// Declaring variables with types
let firstName: string = "Altaseb";
let age: number = 20;
let isLearningTypeScript: boolean = true;

// Function with typed parameters and return type
function introduce(name: string, age: number): string {
  return `My name is ${name} and I am ${age} years old.`;
}

// Output
console.log(introduce(firstName, age));
console.log("Learning TypeScript:", isLearningTypeScript);