// TypeScript-এর any টাইপ এমন একটি টাইপ যা আপনি ব্যবহার করলে টাইপচেকিং বন্ধ হয়ে যায় — অর্থাৎ, আপনি যা খুশি সেখানে রাখতে পারেন।
// এখানে data টাইপ হচ্ছে any, তাই যেকোনো টাইপের ভ্যালু তাতে বসানো যায়।

let useName 
useName='kayes'
useName=123
username=true
userName=[2,3,4]


// Better Alternative: unknown
// এটা safer কারণ আপনি আগে চেক না করলে সরাসরি ব্যবহার করতে পারবেন না।
let data: unknown = "Hello";

if (typeof data === "string") {
    console.log(data.toUpperCase()); // ✅ Now safe
  }