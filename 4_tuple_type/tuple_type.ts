// Tuple হলো TypeScript-এর একটি বিশেষ array টাইপ, যেখানে: 
// প্রতিটি পজিশনে থাকা ভ্যালুর টাইপ নির্দিষ্ট থাকে
// অর্ডার এবং টাইপ — দুটোই গুরুত্বপূর্ণ

// mix data----> key value 


let person: [string, number] 
person = ["kayes", 25];
person.push('ebrahim',40)  //push use
console.log(person[0].toUpperCase()); // KAYES
console.log(person); // KAYES
console.log(person[1] + 5);


// 2: Boolean + String 
let statuss: [boolean, string] 
statuss = [true, "Active"];
console.log(statuss);

// Tuple in Functions (Return Type)
 
function getUser(): [string, number] {
  return ["Karim", 35];
}
getUser()