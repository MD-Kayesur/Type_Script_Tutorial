// 4. inheritance
// কাজ:
// Inheritance এর মাধ্যমে এক ক্লাস আরেকটি ক্লাসের property এবং method গ্রহণ করে।
// এটি reuse, extendability এবং কোড ছোট রাখতে সাহায্য করে।

 
class Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    makeSound(): void {
      console.log("Generic animal sound");
    }
  }
  
  // Dog class inherits from Animal
  class Dog extends Animal {
    breed: string;
  
    constructor(name: string, breed: string) {
      super(name); // call parent class constructor
      this.breed = breed;
    }
  
    makeSound(): void {
      console.log("Woof! Woof!");
    }
  }
  
  const myDog = new Dog("Tommy", "Labrador");
  myDog.makeSound(); // Woof! Woof!


//   Example: Person → Student
  // Parent class
class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    display(): void {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  
  // Child class (inherits from Person)
  class Student extends Person {
    roll: number;
  
    constructor(name: string, age: number, roll: number) {
      super(name, age); // parent constructor call
      this.roll = roll;
    }
  
    showDetails(): void {
      console.log(`Student Name: ${this.name}, Age: ${this.age}, Roll: ${this.roll}`);
    }
  }
  
  // 🔰 Object তৈরি
  const student1 = new Student("Rahim", 20, 101);
  
  // ✅ Access parent and child methods
  student1.display();     // From Person
  student1.showDetails(); // From Student
  



  
//   আরও Example: Employee → Manager

  class Employee {
    name: string;
    salary: number;
  
    constructor(name: string, salary: number) {
      this.name = name;
      this.salary = salary;
    }
  
    work(): void {
      console.log(`${this.name} is working`);
    }
  }
  
  class Manager extends Employee {
    department: string;
  
    constructor(name: string, salary: number, department: string) {
      super(name, salary);
      this.department = department;
    }
  
    manage(): void {
      console.log(`${this.name} manages the ${this.department} department`);
    }
  }
  
  const manager = new Manager("Karim", 50000, "IT");
  manager.work();   // From Employee
  manager.manage(); // From Manager
  