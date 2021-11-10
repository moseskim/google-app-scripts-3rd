function myFunction03_05_02() {
  const person = {name: 'Bob', gender: 'male', age: 25};
  console.log(person.name); //Bob
  console.log(person['age']); //25
}

function myFunction03_05_03() { 
  const numbers = {'1': '일', '10': '십', '100': '백'};
  console.log(numbers['100']); //백
}

function myFunction03_05_04() { 
  const person = {name: 'Bob', gender: 'male', age: 25};
  person.name = 'Tom';
  person['job'] = 'Engineer';
  console.log(person); //{name: 'Tom', gender: 'male', age: 25, job: 'Engineer'}
}

function myFunction03_05_05() { 
  const x = 'Bob';
  
  let y = x;
  y = 'Tom';
  console.log(y); //Tom
  
  console.log(x); //Bob
}

function myFunction03_05_06() { 
  const x = {name: 'Bob'};

  const y = x;
  y.name = 'Tom';  
  console.log(y); //{name: 'Tom'}

  console.log(x); //{name: 'Tom'}
}

function myFunction03_05_07() {
  const numbers = {a: 10, b: 30, c: 20, d: 40};
  let a, b, c, d;
  ({a, b, c, d} = numbers);
  console.log(a, b, c, d); //10 30 20 40
  
  const {name, age, favorite} = {name: 'Bob', age: 25, favorite: 'apple'};
  console.log(name, age, favorite); //Bob 25 apple
}

function myFunction03_05_08() {
  const obj = {age: 25, gender: 'male'};
  const person = {name: 'Bob', ...obj, favorite: 'apple'};
  console.log(person); //{ name: 'Bob', age: 25, gender: 'male', favorite: 'apple' }
  // console.log(...obj);
}
