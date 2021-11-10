function myFunction03_04_02() { 
  const numbers = [10, 30, 20, 40];
  console.log(numbers[2]); //20
}

function myFunction03_04_03() { 
  const numbers = [10, 30, 20, 40];
  numbers[1] = 50; 
  console.log(numbers); //[10, 50, 20, 40, 60]
}

function myFunction03_04_05() { 
  const numbers = [[10, 30, 20, 40], [11, 31, 21], [12]];
  console.log(numbers[0]); //[10, 30, 20, 40]
  numbers[2] = [22, 32];
  numbers[3] = [13];
  console.log(numbers); //[[10, 30, 20, 40], [11, 31, 21], [22, 32], [13]]
}

function myFunction03_04_06() { 
  const numbers = [[10, 30, 20, 40], [11, 31, 21], [12]];
  console.log(numbers[2][0]); //12
  numbers[0][1] = 50;
  numbers[2][1] = 62;
  console.log(numbers); //[[10, 50, 20, 40], [11, 31, 21], [12, 62]]
}

function myFunction03_04_07() {
  const numbers = [10, 30, 20, 40];
  let a, b, c, d;
  [a, b, c, d] = numbers;
  console.log(a, b, c, d); //10 30 20 40

  const [name, age, favorite] = ['Bob', 25, 'apple'];
  console.log(name, age, favorite); //Bob 25 apple
}

function myFunction03_04_08() {
  const numbers = [10, 30, 20, 40];
  console.log([0, ...numbers, 50]); //[ 0, 10, 30, 20, 40, 50 ]
  console.log(...numbers); //10 30 20 40
}