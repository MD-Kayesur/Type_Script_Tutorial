// TypeScript-এ module export ও import ব্যবহারের মাধ্যমে আমরা এক ফাইল থেকে আরেক ফাইলে কোড (function, variable, class, type) share বা reuse করতে পারি।

// Basic Concepts:
// 🔹 export
// একটা ফাইল থেকে কোনো জিনিস বাইরে পাঠানোর জন্য।

// 🔹 import
// অন্য ফাইল থেকে কোনো জিনিস আনার জন্য।


// mathUtils.ts(export ফাইল)
 
export function add(a: number, b: number): number {
  return a + b;
}

export const PI = 3.1416;


// (import ফাইল) 
// import { add, PI } from './mathUtils';

console.log(add(5, 3));   // Output: 8
console.log(PI);          // Output: 3.1416


// Export দুইভাবে হয়:
// 1. 🔹 Named Export (সবচেয়ে সাধারণ)
 
// utils.ts
export const name = "Rahim";
export function greet() {
  console.log("Hello!");
}
 
// main.ts
// import { name, greet } from './utils';




// 2. 🔸 Default Export (একটাই জিনিস export করতে চাইলে)
 
// logger.ts
export default function log(msg: string): void {
  console.log("LOG:", msg);
}
 
// main.ts
// import log from './logger';
// ⚠️ Note: default export করলে import করার সময় {} ব্যবহার করতে হয় না।
log("Server started");




// Class Export Example
// 👉 User.ts
 
export class User1 {
  constructor(public name: string, public age: number) {}

  display(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}
// 👉 app.ts
 
// import { User } from './User';

const user1 = new User1("Karim", 30);
user1.display();



// Type or Interface Export
 
// types.ts
export type User = {
  name: string;
  age: number;
};
 
// main.ts
// import { User } from './types';

const user: User = { name: "Rahim", age: 25 };

console.log(user);




















