// TypeScript-এ class ব্যবহার করে আপনি Object-Oriented Programming (OOP) ধারণায় কাজ করতে পারেন, যেমন: constructor, property, method, inheritance ইত্যাদি।


// 1. constructor
// কাজ:
// constructor হলো ক্লাস থেকে object তৈরি করার সময় initial value সেট করার method।
// এটা class instantiate হওয়ার সাথে সাথেই চলে। 
 
class Person {
  name: string;
  age: number;

  // Constructor runs automatically when object is created
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  display():void{
    console.log( ` userName : ${this.name}, age : ${this.age}`);
}
}
const person1 = new Person("Toyota", 2000000);
person1.display();



// 2. property
// কাজ:
// property হলো ক্লাসের মধ্যে থাকা ডেটা/variable। এগুলোর মান constructor-এর মাধ্যমে সেট করা হয়।
 
class Car {
  brand: string;  // this is a property
  price: number;

  constructor(brand: string, price: number) {
    this.brand = brand;
    this.price = price;
  }
  displayCar():void{
    console.log(`brand $(this.brand) , price: $(price)`);
  }
}
 
const mycar = new Car("Toyota", 2000000);
mycar.displayCar();



// 3. method
// কাজ:
// method মানে হলো class-এর function। এর মাধ্যমে আপনি object-কে কোনো কাজ করতে বলেন।
 
class Car1 {
  brand: string;
  price: number;

  constructor(brand: string, price: number) {
    this.brand = brand;
    this.price = price;
  }

  showDetails(): void {
    console.log(`${this.brand} costs ${this.price} taka`);
  }
}

const myCar = new Car1("Toyota", 2000000);
myCar.showDetails();



