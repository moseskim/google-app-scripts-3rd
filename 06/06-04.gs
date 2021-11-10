function myFunction06_04_01() {
  
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    static greet(name) {
      console.log(`Hello! I'm ${name}!`);  
    }
  }

  Person.job = 'Engineer';

  console.log(Person.job); //Engineer
  Person.greet('Bob'); //Hello! Bob.
}

function myFunction06_04_02() {

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet(name) {
      console.log(`Hello! I'm ${this.name}!`);  
    }
  }
  
  Person.prototype.greet = function() {
    console.log(`Good Bye! I'm ${this.name}!`);
  };

  const p = new Person('Bob',25);
  p.greet(); //Good Bye! I'm Bob!
  
  console.log(Person.prototype.greet.toString());
  console.log(p.greet.toString());
}
