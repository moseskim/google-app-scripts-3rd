const msg = 'Hello GAS!';
console.log(msg);

function myFunction05_03_01() {
}

console.log('Hello!'); 

function myFunction05_03_02() {
  console.log('Good night...');
}

console.log('Good bye.'); 

function myFunction05_03_03() {
  console.log(`직사각형의 넓이: ${calcArea_(3, 4)}`);
  const calcArea_ = (x, y) => x * y;
}

// 샘플 5-3-4 ~ 샘플 5-3-6
const msgGlobal = 'Hello Global!';

function myFunction05_03_04() {
  const msgLocal = 'Hello Local!';
 
  if (true) {
    const msgBlock = 'Hello Block!';
  }
  
}

console.log(msgGlobal); //Hello Global!
console.log(msgLocal); //ReferenceError: msgLocal is not defined
console.log(msgBlock); //ReferenceError: msgBlock is not defined


function myFunction05_03_05() {
  const msgLocal = 'Hello Local!';
  
  if (true) {
    const msgBlock = 'Hello Block!';
  }

  console.log(msgGlobal); //Hello Global!
  console.log(msgLocal); //Hello Local!
  // console.log(msgBlock); //ReferenceError: msgBlock is not defined
}

function myFunction05_03_06() {
  const msgLocal = 'Hello Local!';
  
  if (true) {
    const msgBlock = 'Hello Block!';
    
    console.log(msgGlobal); //Hello Global!
    console.log(msgLocal); //Hello Local!
    console.log(msgBlock); //Hello Block!
  }
}

function myFunction05_03_07() {
  let num = 1;
  for (let i = 1; i <= 10; i++) {
    num *= 2;
    console.log(`i의 값: ${i}, num의 값: ${num}`);
    if (num > 50) break;
  }
}
