
// tarnarry oparetar

const age : number = 22
// if (age >= 18) {
//     console.log('yes');
// }
// else{
//     console.log('no');
// }

const isAdult = age>=23 ? 'yes': 'no'
// console.log(isAdult);


// nullish coaiscing iparator
// ?? হলো nullish coalescing operator, যা null বা undefined হলে ডানপাশের ভ্যালু রিটার্ন করে।
// note : ar kaj holo kono value k null or undefined hosaba set kora]
// null and undefined
// 
const isAuthingcatorUser = ''
const userName = isAuthingcatorUser ?? 'gest'
const userName2 = isAuthingcatorUser ? isAuthingcatorUser : 'gest'
console.log({userName}, {userName2});



type manus ={
    name : string,
    age: number,
    address:{
        city: string,
        road: string,
        home?: ''
    }
}
const manus1: manus ={
name: 'kayes',
age:20,
address: {
    city:'no city',
    road:'no road'
}
}
const Home= manus1?.address?.home ?? 'no home'  //default no home
// যদি home এর মান null বা undefined হয়, তাহলে ?? এর ডানপাশে থাকা 'no home' রিটার্ন করবে।

console.log({Home});
