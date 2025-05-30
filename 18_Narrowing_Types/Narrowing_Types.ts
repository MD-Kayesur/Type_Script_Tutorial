// টাইপ ন্যারোইং হচ্ছে এমন একটি প্রক্রিয়া যেখানে একটি ভ্যারিয়েবল যদি একাধিক টাইপের হতে পারে (যেমন string | number), তখন কিছু শর্ত ব্যবহার করে আমরা নির্ধারণ করতে পারি সেটা কোন নির্দিষ্ট টাইপের।

// এটা সাধারণত TypeScript-এর মতো স্ট্যাটিক টাইপড ভাষায় বেশি ব্যবহৃত হয়, যাতে কোড লেখা আরও নিরাপদ এবং পরিষ্কার হয়।

// ✅ কেন টাইপ ন্যারোইং দরকার?
// ধরুন একটি ফাংশনে একটি ভ্যারিয়েবল দেওয়া হয়েছে যেটা হয়তো string অথবা number হতে পারে। এখন আপনি যদি শুধু string-এর জন্য প্রযোজ্য .toUpperCase() মেথড ব্যবহার করতে চান, তাহলে আগে নিশ্চিত হতে হবে যে সেটি string টাইপের। এটাই টাইপ ন্যারোইং।

 




// . typeof দিয়ে চেক করা
 
function process(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // এখন value হলো string
  } else {
    console.log(value.toFixed(2)); // এখন value হলো number
  }
}

process('2323')

// ২. Truthy চেক (সত্য-মিথ্যা যাচাই)
 
function printLength(value?: string | null) {
  if (value) {
    console.log(value.length); // value এখন অবশ্যই string
  }
}


//  ৩. instanceof দিয়ে চেক করা
 
function handleError(err: Error | string) {
  if (err instanceof Error) {
    console.log(err.message);
  } else {
    console.log(err); // এটা একটি সাধারণ string
  }
}


//  in অপারেটর ব্যবহার করে
 
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function makeNoise(pet: Dog | Cat) {
  if ("bark" in pet) {
    pet.bark(); // এটা Dog
  } else {
    pet.meow(); // এটা Cat
  }
}


// Discriminated Union
 
type Circle = { kind: "circle"; radius: number };
type Square = { kind: "square"; side: number };

function area(shape: Circle | Square) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.side ** 2;
  }
}

