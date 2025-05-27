"use strict";
// tarnarry oparetar
var _a, _b;
const age = 22;
// if (age >= 18) {
//     console.log('yes');
// }
// else{
//     console.log('no');
// }
const isAdult = age >= 23 ? 'yes' : 'no';
// console.log(isAdult);
// nullish coaiscing iparator
// ?? হলো nullish coalescing operator, যা null বা undefined হলে ডানপাশের ভ্যালু রিটার্ন করে।
// note : ar kaj holo kono value k null or undefined hosaba set kora]
// null and undefined
// 
const isAuthingcatorUser = '';
const userName = isAuthingcatorUser !== null && isAuthingcatorUser !== void 0 ? isAuthingcatorUser : 'gest';
const userName2 = isAuthingcatorUser ? isAuthingcatorUser : 'gest';
console.log({ userName }, { userName2 });
const manus1 = {
    name: 'kayes',
    age: 20,
    address: {
        city: 'no city',
        road: 'no road'
    }
};
const Home = (_b = (_a = manus1 === null || manus1 === void 0 ? void 0 : manus1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : 'no home'; //default no home
// যদি home এর মান null বা undefined হয়, তাহলে ?? এর ডানপাশে থাকা 'no home' রিটার্ন করবে।
console.log({ Home });
