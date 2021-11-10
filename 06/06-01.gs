function myFunction06_01_01() {
  const greeting = {
    sayHello: function() {
      return 'Hello!';
    }
  };
  
  console.log(greeting.sayHello()); //Hello!
}

function myFunction06_01_02() {
  const greeting = {
    sayHello: function() {
      return 'Hello!';
    }
  };
  
  greeting.sayGoodBye = function() {
    return 'Good bye.';
  };
  
  console.log(greeting.sayHello()); //Hello!
  console.log(greeting.sayGoodBye()); //Good bye.
}

function myFunction06_01_03() {
  const greeting = {
    sayHello() {
      return 'Hello!';
    }
  };
  
  console.log(greeting.sayHello()); //Hello!
}
