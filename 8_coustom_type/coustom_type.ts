// TypeScript-এ আপনি নিজেই একটি custom type বানাতে পারেন — একে বলে Type Alias।
// এটি কোডকে বেশি clean, reusable, এবং type-safe করে তোলে।


// 1: Basic Custom Type
 
type Users = {
  name: string;
  age: number;
}; 
let user1: Users = { name: "Rahim", age: 25 };
// let user2: User = { name: "Karim", age: 30 };
console.log(user1);

// 2: Optional Property 
type Product = {
  title: string;
  price: number;
  discount?: number; // optional
}; 
let item: Product = { title: "Phone", price: 10000 };
console.log(item);



// 3: Nested Custom Type 
type Address = {
  city: string;
  zip: number;
};

type Employee = {
  name: string;
  address: Address;
};

let emp: Employee = {
  name: "Hasan",
  address: {
    city: "Dhaka",
    zip: 1207
  }
};
console.log(emp);



// 4: Function with Custom Type 
type User4 = {
  name: string;
  age: number;
}; 
function greet(user4: User4): void {
  console.log(`Hello, ${user4.name}!`);
} 
greet({ name: "Sumi", age: 22 });


// 5: Type with Union 
type Status = "success" | "error" | "loading"; 
let currentStatus: Status 
currentStatus = "success"; 
console.log(currentStatus);
function requeststatus(statuss:Status){
    console.log(statuss);
}
requeststatus("loading")





// Array of Custom Type
 
type Task = {
  title: string;
  completed: boolean;
};

let tasks: Task[] = [
  { title: "Learn TypeScript", completed: true },
  { title: "Build a project", completed: false }
];
console.log(tasks);



