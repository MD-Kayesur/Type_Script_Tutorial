// Abstraction হলো এমন একটি OOP কনসেপ্ট যেখানে আপনি implementation লুকিয়ে রেখে শুধু structure বা behavior define করেন।
// TypeScript-এ abstraction করার জন্য আমরা ব্যবহার করি:
// ✅ abstract class
// ✅ abstract method



// আমরা একটি Animal নামে abstract class বানালাম।
// ✅ Abstract class
abstract class Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    // ✅ Abstract method - no body
    abstract makeSound(): void;
  
    // ✅ Normal method
    move(): void {
      console.log(`${this.name} is moving`);
    }
  }
  

//   এখন Dog ও Cat class এই Animal কে extend করবে:
  class Dog extends Animal {
    makeSound(): void {
      console.log("Woof! Woof!");
    }
  }
  
  class Cat extends Animal {
    makeSound(): void {
      console.log("Meow~");
    }
  }
  
  // ✅ Object তৈরি
  const dog = new Dog("Tommy");
  dog.makeSound(); // Woof! Woof!
  dog.move();      // Tommy is moving
  
  const cat = new Cat("Kitty");
  cat.makeSound(); // Meow~
  