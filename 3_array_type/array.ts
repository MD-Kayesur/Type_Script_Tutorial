// TypeScript-এ array টাইপ declare করার ২টি সাধারণ পদ্ধতি আছে:
// দুটোই একই অর্থ বহন করে।

// 1. Type[] syntax 
let numbers: number[]
numbers = [1, 2, 3, 4 ,4]; //number
let double = numbers.map(m=> m *2) //map
// console.log(double);
let sort =  double.sort((a,b)=> b-a ); //sort use
// console.log(sort);

let filter = numbers.filter(a=>  a)
// console.log(filter);
let find = numbers.find(a=>  a)
// console.log(find);

let  names: string[] = ["Rahim", "Karim" ,"ebrajom"]; //string
console.log(names.sort());
let boolean :boolean = true //boolean
// console.log({numbers});
// console.log({names});
// console.log({boolean});



 
// 2. Generic Array<Type> syntax 
let mynumbers: Array<number> = [1, 2, 3];
let mynames: Array<string> = ["A", "B"];


// Object Array 
type User = { id: number; name: string };
let users: User[] = [
  { id: 1, name: "Hasan" },
  { id: 2, name: "Rifat" }
]; 
// console.log(users);


// multiple type
let multipleType : (string|number)[] 
multipleType= [1,'kayes']
// console.log(multipleType);

// Mixed Type Array (using union) 
let mixed: (string | number)[] = [1, "two", 3, "four"];
// console.log(mixed);


// Readonly Array 
const nums: ReadonlyArray<number> = [1, 2, 3];
// console.log(nums);

// nums.push(4); ❌ error: readonly


// 2D Array 
let  matrix: number[][] = [
  [1, 2],
  [3, 4]
];
// console.log(matrix);

