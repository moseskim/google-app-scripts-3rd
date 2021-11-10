function myFunction06_02_01() {
  const person = {
    name: 'Bob',
    age: 25,
    greet() {
      console.log("I'm Bob. I'm 25 years old.");      
    }
  };

  person.greet(); //I'm Bob. I'm 25 years old.
}

function myFunction06_02_02() {

  class Person {
  
  }

  const p = new Person();
  console.log(p); //{}

}

function myFunction06_02_03() {

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  const p1 = new Person('Bob', 25);
  console.log(p1); //{ name: 'Bob', age: 25 }
  
  const p2 = new Person('Tom', 32);
  console.log(p2); //{ name: 'Tom', age: 32 }
  
}

function myFunction06_02_04() {

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  const p = new Person('Bob',25);
  p.age += 5;
  p.job = 'Engineer';
  console.log(p); //{ name: 'Bob', age: 30, job: 'Engineer' }
}
