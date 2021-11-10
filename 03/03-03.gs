function myFunction03_03_01() {
  console.log(typeof 123); //number
  console.log(typeof "hoge"); //string
  console.log(typeof false); //boolean
  console.log(typeof {}); //object
}

function myFunction03_03_02() { 
  console.log(100);
  console.log(1.08);
  console.log(0xFFFF); //65535
  
  console.log(1000000000000000000000); //1e+21
  console.log(0.0000001); //1e-7    
}

function myFunction03_03_03() {
  console.log('Hello "GAS!"'); //Hello "GAS!"
  console.log("I'm fine."); //I'm fine.
}

function myFunction03_03_04() {
  
  const name = 'Bob';
  const age = 25;
  
  console.log(`I'm ${name}. I'm ${age} years old.`);
  console.log(`I'm ${name}. 
  I'm ${age} years old.`);
  
}

function myFunction03_03_05() {
  console.log('Hello\n\'GAS\'!');
}

function myFunction03_03_06() { 
  let x;
  console.log(x); //undefined
}
