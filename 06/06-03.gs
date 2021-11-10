function myFunction06_03_01() {

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log(`Hello! I'm ${this.name}!`);  
    }
    
    isAdult() {
      return this.age >= 18;
    }
  }

  const p = new Person('Bob', 25);
  p.greet(); //Hello! I'm Bob!
  console.log(p.isAdult()); //true
}

function myFunction06_03_02() {

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log(`Hello! I'm ${this.name}!`);  
    }
  }
  
  const p = new Person('Bob', 25);
  p.greet(); //여기에 브레이크 포인트를 둔다
} 

function myFunction06_03_03() {

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log(`Hello! I'm ${this.name}!`);  
    }
    
    isAdult() {
      return this.age >= 18;
    }
  }
  
  const p = new Person('Bob', 25);
  
  p.greet = function() {
    console.log(`Good Bye! I'm ${this.name}!`);
  };
  p.greet();

  console.log(Person.prototype.greet.toString());
  console.log(p.greet.toString());  
}
