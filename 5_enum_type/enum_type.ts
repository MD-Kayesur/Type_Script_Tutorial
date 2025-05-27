// enum (short for enumeration) হলো TypeScript-এর একটি feature যা কিছু নাম দেওয়া constant value সংরক্ষণ করতে ব্যবহার হয়।  dublicate value not allowed

// enum types : 3 -----> 1.numberic   2.string  3.hetergenous

// 1: Basic Numeric enum
 
enum Direction {
  Up,
  Down,
  Left,
  Right
}

console.log(Direction.Up);      // Output: 0
console.log(Direction.Right); 


// : Custom Number Values 
enum Status {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}

console.log(Status.Success);



// : String enum 
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

console.log(Role.Admin);



// Using enum in Functions
 
enum TrafficLight {
  Red,
  Yellow,
  Green
}

function getMessage(light: TrafficLight): string {
  if (light === TrafficLight.Red) return "STOP";
  if (light === TrafficLight.Yellow) return "READY";
  return "GO";
}

console.log(getMessage(TrafficLight.Green));