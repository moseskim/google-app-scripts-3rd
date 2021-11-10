function myFunction03_06_01() { 
  const x = 9;
  const y = 4;
  console.log(x + y); //13
  console.log(x - y); //5
  console.log(x * y); //36
  console.log(x / y); //2.25
  console.log(x % y); //1
  console.log(x ** y); //6561  
  console.log(-x); //-9  
}

function myFunction03_06_02() { 
  console.log(12 + 34); //46
  console.log(12 + '34'); //'1234'
  console.log(12 + 34 + '56'); //'4656'
  console.log(12 + '34' + 56); //'123456'
}

function myFunction03_06_03() { 
  let x = 1, y = 10;
  x++;
  console.log(x); //2
  y--;
  y--;
  console.log(y); //8
}

function myFunction03_06_04() { 
  let x = 1, y = 10;
  console.log(++x); //2
  console.log(x); //2
  console.log(y++); //10
  console.log(y); //11
}

function myFunction03_06_05() { 
  let x = 1, y = 10; 
  x += 3;
  console.log(x); //4
  y %= 3;
  console.log(y); //1
}
