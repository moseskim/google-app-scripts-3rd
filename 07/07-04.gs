function myFunction07_04_01() {
  const array = ['Bob', 'Tom', 'Jay', 'Tom'];

  console.log(array.length); //4

  console.log(array.toString()); //Bob,Tom,Jay,Tom
  console.log(array.join('|')); //Bob|Tom|Jay|Tom

  console.log(array.concat(['Dan'])); //['Bob', 'Tom', 'Jay', 'Tom', 'Dan']
  console.log(array.slice(1, 3)); //['Tom', 'Jay']

  console.log(array.includes('Tom')); //true
  console.log(array.indexOf('Tom')); //1
  console.log(array.lastIndexOf('Tom')); //3

  const array2 = ['Bob', ['Tom'], [['Jay']]];
  console.log(array2.flat()); //['Bob', 'Tom', ['Jay']]
  console.log(array2.flat(2)); //['Bob', 'Tom', 'Jay']   
}

function myFunction07_04_02() {
  const array = ['Bob', 'Tom', 'Jay', 'Dan'];
  const element = 'Tom';

  if (array.includes(element)) {
    console.log(`${element}이(가) 포함되어 있습니다.`);
  } else {
    console.log(`${element}이(가) 포함되어 있지 않습니다.`);
  }

  const index = array.indexOf(element);
  if (index > -1) {
    console.log(`${element}이(가) ${index} 위치에 포함되어 있습니다.`);
  } else {
    console.log(`${element}이(가) 포함되어 있지 않습니다.`);
  }
}

function myFunction07_04_03() {
  const array = [['Bob'], ['Tom'], ['Jay'], ['Dan']];
  const element = 'Tom';

  console.log(`${element}이(가) ${array.flat().indexOf(element)} 위치에 있습니다.`);
}

function myFunction07_04_04() {
  const array = ['Bob', 'Tom', 'Jay', 'Tom'];

  array.push('Dan');
  console.log(array); //['Bob', 'Tom', 'Jay', 'Tom', 'Dan']

  array.unshift('Ivy');
  console.log(array); //['Ivy', 'Bob', 'Tom', 'Jay', 'Tom', 'Dan']

  array.reverse();
  console.log(array); //['Dan', 'Tom', 'Jay', 'Tom', 'Bob', 'Ivy']

  array.sort();
  console.log(array); //['Bob', 'Dan', 'Ivy', 'Jay', 'Tom', 'Tom']

  array.copyWithin(4, 0, 2);
  console.log(array); //['Bob', 'Dan', 'Ivy', 'Jay', 'Bob', 'Dan']

  array.fill('Tom', 3, 5);
  console.log(array); //['Bob', 'Dan', 'Ivy', 'Tom', 'Tom', 'Dan']

  console.log(array.pop()); //Dan
  console.log(array); //['Bob', 'Dan', 'Ivy', 'Tom', 'Tom']

  console.log(array.shift()); //Bob
  console.log(array); //['Dan', 'Ivy', 'Tom', 'Tom']

  console.log(array.splice(2, 2, 'Kim')); //['Tom', 'Tom']
  console.log(array); //['Dan', 'Ivy', 'Kim']  
}

function myFunction07_04_05() {
  const array = ['Bob', 'Tom', 'Jay', 'Dan', 'Ivy'];

  array.splice(1, 2, 'Kim');
  console.log(array); //['Bob', 'Kim', 'Dan', 'Ivy']

  array.splice(1, 2);
  console.log(array); //['Bob', 'Ivy']

  array.splice(1, 0, 'Leo');
  console.log(array); //['Bob', 'Leo', 'Ivy']
}

function myFunction07_04_06() {
  const array = ['Bob', 'Tom', 'Jay'];

  array.forEach((value, index) => console.log(`${index}: Hello ${value}!`));
}

function myFunction07_04_07() {
  const array = ['Bob', 'Tom', 'Jay'];

  console.log(array.every(value => value.length === 3)); //true
  console.log(array.some(value => value === 'Tom')); //true
  console.log(array.find(value => value === 'Tom')); //'Tom'
  console.log(array.findIndex(value => value === 'Tom')); //1  

  console.log(array.filter(value => value.charAt(1) === 'o')); //['Bob', 'Tom']
  console.log(array.map(value => value.length)); //[3, 3, 3]
}

function myFunction07_04_08() {
  const array = ['Bob', 'Tom', 'Jay'];

  console.log(array.reduce((accumulator, current) => accumulator + current, 'Ivy')); //IvyBobTomJay
  console.log(array.reduceRight((accumulator, current) => accumulator + current)); //JayTomBob
}

function myFunction07_04_09() {
  const members = ['Bob', 'Tom', 'Jay'];

  for (const [index, member] of members.entries()) {
    console.log(`${index}: Hello ${member}!`);
  }
}
