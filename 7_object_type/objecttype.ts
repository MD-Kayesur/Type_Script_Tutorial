// TypeScript-এ object হলো এমন একটি টাইপ, যেটা key-value pair ধারণ করে — অর্থাৎ properties সহ ডেটা। আপনি এতে টাইপ define করে দিতে পারেন, যাতে নির্দিষ্ট key গুলো কী ধরনের ভ্যালু রাখবে তা TypeScript জানে।

let objName: { uerName: string; userid: number };
 
let objName1 = {
    uerName: 'kayes',
    userid: 123,
};
 
console.log(objName1);

// object type
let user1 : object 
user1 ={ name: 'kayes' , id:12}
 


// objects of array
let user2 : object[]
user2=[]
// let user3 ={ name: 'kayes' , id:12}, { name: 'moklas' , id:62}
let user3: { uerName: string; userid: number };
user3={ uerName: 'kayes' , userid:12}
user2.push(user3)  //push use kors
console.log(user2);



// Optional Property
 //   discount optional (না দিলেও চলবে)।
let product: { title: string; price: number; discount?: number } = {
  title: "Laptop",
  price: 70000
};



// Function Inside Object
 
let person: {
  name: string;
  greet: () => void;
} 
person = {
  name: "Karim",
  greet: () => {
    console.log("Hello!");
  }
};
console.log(person);




// : Nested Object 
let employee: {
  name: string;
  address: {
    city: string;
    zip: number;
  }
} = {
  name: "Hasan",
  address: {
    city: "Dhaka",
    zip: 1205
  }
};


// : Object as Function Parameter
 
function printUser(user: { name: string; age: number }) {
  console.log(`${user.name} is ${user.age} years old`);
}

printUser({ name: "Amina", age: 22 });



// Type Alias দিয়ে Object টাইপ বারবার ব্যবহার
 
type User1 = {
  name: string;
  age: number;
};

let u1: User1 = { name: "Tuhin", age: 30 };
let u2: User1 = { name: "Sumi", age: 25 };