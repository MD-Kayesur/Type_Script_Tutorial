//  Buildin_Type  : number , string , boolean,void,undefined,null

// number
// 👉 সব ধরণের সংখ্যার জন্য ব্যবহার হয় (integer, float ইত্যাদি)।
let age: number 
  age = 26;
let pi: number = 3.14;
// console.log({age}, {pi});


// string
// টেক্সট বা স্ট্রিং মান রাখার জন্য ব্যবহৃত হয়।
let myname: string
myname = "kayesur ";
let mylastName :string
mylastName = "rahman"
let fullName : string
fullName = myname.concat(mylastName) // concat uise
console.log(fullName);

console.log(fullName.toUpperCase()); //toUpperCase use

 let splitName = fullName.split(' ')  //split use 
console.log(splitName);
let greeting: string = `Hello, ${myname}`;
// console.log({myname},{greeting});

// Boolean
// 👉 সত্য (true) অথবা মিথ্যা (false) মান রাখে।
let isLoggedIn: boolean 
isLoggedIn= true;
let isAdmin: boolean = false;
// console.log({isLoggedIn},{isAdmin});

// void
// 👉 এমন ফাংশনের রিটার্ন টাইপ যা কিছুই ফেরত দেয় না।
function sayHello(): void {
    console.log("Hello!");
    // return "Hello!"; // ❌
  }
//   sayHello()



//   undefined
// 👉 যখন কোনো ভ্যারিয়েবল declare করা হয়েছে কিন্তু মান assign করা হয়নি। 
let x: undefined;
// console.log(x);
function doNothing(): undefined {
    return undefined;
  }

// doNothing()




// null
// 👉 কোনো ভ্যারিয়েবলের মান ইচ্ছা করে "শূন্য" (null) করে দেওয়া। 
let data: null = null; 
// console.log({data});
function getValue(): string | null {
  return null;
}
// getValue()




 