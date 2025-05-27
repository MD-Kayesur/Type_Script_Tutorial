//  Union Type হলো এমন টাইপ যেখানে একাধিক টাইপের যেকোনো একটির ভ্যালু গ্রহণ করা যায়।
// এটা হলো type alias ব্যবহার করে union type declare।
let value: string | number |boolean;
value = 23
value = true
value='kayes'
console.log({value});


// কেন ব্যবহার করা হয় (উদ্দেশ্য):
// Flexible variable — একটা ভ্যারিয়েবল একাধিক টাইপ নিতে পারবে 
// Better type safety — any না দিয়ে সীমাবদ্ধ টাইপ define করতে পারবেন 
// Optional value বা null/undefined handle করতে 
// Function parameter accept করতে পারে বিভিন্ন টাইপের ইনপুট


// 1. Multiple type value: 
let id: string | number; 
id = "AB-123";
id = 101;         
console.log({id});


// 2. Function Parameter: 
function printId(id: string | number) {
  console.log("Your ID is:", id);
} 
printId(123);
printId("abc-456");


// 3. Optional বা null handle করতে: 
let username: string | null = null; 
username = "kayes";
console.log({username});



// 4. Narrowing / Type Checking: 
function showData(data: string | number) {
  if (typeof data === "string") {
    console.log(data.toUpperCase());
  } else {
    console.log(data.toFixed(2));
  }
} 
showData(50)
showData('kayes')