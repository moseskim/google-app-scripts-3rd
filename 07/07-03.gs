function myFunction07_03_01() {
  let str = "My name is Bob.";

  console.log(str.length); //15
  console.log(str.charAt(0)); //M
  console.log(str.charCodeAt(0)); //77

  console.log(str.slice(3,7)); //name
  console.log(str.substring(3,7)); //name

  console.log(str.split(' ')); //[ 'My', 'name', 'is', 'Bob.' ]

  console.log(str.toLowerCase()); //my name is bob.
  console.log(str.toUpperCase()); //MY NAME IS BOB.

  console.log(str.startsWith('My')); //true
  console.log(str.startsWith('Bob', 11)); //true
  console.log(str.endsWith('Bob.')); //true
  console.log(str.endsWith('My', 2)); //true
  
  str = str.concat(" My dog's name is also Bob.");
  console.log(str); //My name is Bob. My dog's name is also Bob.

  console.log(str.indexOf('Bob')); //11
  console.log(str.lastIndexOf('Bob')); //38
  console.log(str.includes('Bob')); //true
    
  console.log('1234'.padStart(7, '0')); //0001234
  console.log('1234'.padEnd(7, '0')); //1234000

  console.log('Bob'.localeCompare('Abc')); //1
  console.log('Bob'.localeCompare('Bob')); //0
  console.log('Bob'.localeCompare('Cde')); //-1

  console.log('Bob'.repeat(3)); //BobBobBob
  console.log('   Bob   '.trim()); //Bob
}

function myFunction07_03_02() {
  const str = 'My name is Bob.';
  const subStr = 'Bob';

  if (str.includes(subStr)) {
    console.log(`${subStr}이(가) 포함되어 있습니다.`);
  } else {
    console.log(`${subStr}이(가) 포함되어 있지 않습니다.`);
  }  
  
  const position = str.indexOf(subStr);
  if (position > -1) {
    console.log(`${subStr}이(가) ${position} 위치에 포함되어 있습니다.`);
  } else {
    console.log(`${subStr}이(가) 포함되어 있지 않습니다.`);  
  }
}
