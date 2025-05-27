"use strict";
// Null
// 'null' একটি string, আর null হচ্ছে object টাইপের একটি value। 
// টাইপ mismatch-এর কারণে value === null কাজ করবে না যদি value শুধু string হয়। 
// টাইপ সঠিকভাবে নির্ধারণ করুন: string | null হলে null চেক করা যায়।
const serchName = (value) => {
    if (value === null) {
        console.log('nothing to search');
    }
    else {
        console.log('scearing');
    }
};
serchName(null);
serchName('me');
// Unknown Type 
