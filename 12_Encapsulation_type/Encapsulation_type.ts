// Encapsulation মানে হলো — ডেটা এবং ফাংশনকে একসাথে ক্লাসের ভিতরে আবদ্ধ করা এবং বাইরের থেকে ডেটা এক্সেস কন্ট্রোল করা।

// এটি মূলত করে:

// ডেটা হাইড (hide) বা প্রাইভেট রাখা

// প্রয়োজনমতো getter/setter ব্যবহার করে নিয়ন্ত্রণ দেওয়া



// Access Modifiers
// TypeScript-এ ৩টি Access Modifier আছে:

// Modifier	----->কে এক্সেস করতে পারে?	----->ব্যবহার
// public	----->যেকোনো জায়গা থেকে	----->Default
// private	----->শুধু ক্লাসের ভিতরে	----->Hide data
// protected	----->ক্লাস এবং subclass (child class)	----->Inheritance এর সময়



// Encapsulation with Access Modifiers
 
class BankAccount {
  public name: string;
  private balance: number;

  constructor(name: string, balance: number) {
    // super(name,balance)
    this.name = name;
    this.balance = balance;
  }

  // ✅ Getter method
  public getBalance(): number {
    return this.balance;
  }

  // ✅ Setter method
  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }
}

const account = new BankAccount("Rahim", 1000);

console.log(account.name); // ✅ public property
// console.log(account.balance); ❌ Error: private property

account.deposit(500);
console.log(account.getBalance()); // ✅ 1500




// Example with protected (Inheritance সহ):
 
class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  public speak(): void {
    console.log(`${this.name} says Woof!`);
  }
}

const dog = new Dog("Tommy");
dog.speak(); // Tommy says Woof!
// console.log(dog.name); ❌ Error: 'name' is protected

