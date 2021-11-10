function myFunction07_05_01() {
  const sayHello = new Function('name', 'console.log(`Hello ${name}!`)');  
  sayHello('Bob'); //Hello Bob !
}

function myFunction07_05_02() {
  const greet = (name, age) => {
    console.log("I'm ${name}. I'm ${age} years old.");  
  };
  
  console.log(greet.name);   
  console.log(greet.length);
  console.log(greet.toString());
}

