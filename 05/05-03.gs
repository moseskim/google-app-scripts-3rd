// 예제 5-17
const msg = 'Hello GAS!';
console.log(msg);

function myFunction05_03_01() {
}

// 예제 5-18
console.log('Hello!'); 

function myFunction05_03_02() {
  console.log('Good night...');
}

console.log('Good bye.'); 

/ /예제 5-19
function myFunction05_03_03() {
  console.log(`직사각형의 넓이: ${calcArea_(3, 4)}`);
  const calcArea_ = (x, y) => x * y;
}

// 예제 5-20
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

// 예제 5-21
function myFunction05_03_05() {
  const msgLocal = 'Hello Local!';
  
  if (true) {
    const msgBlock = 'Hello Block!';
  }

  console.log(msgGlobal); //Hello Global!
  console.log(msgLocal); //Hello Local!
  // console.log(msgBlock); //ReferenceError: msgBlock is not defined
}

// 예제 5-22
function myFunction05_03_06() {
  const msgLocal = 'Hello Local!';
  
  if (true) {
    const msgBlock = 'Hello Block!';
    
    console.log(msgGlobal); //Hello Global!
    console.log(msgLocal); //Hello Local!
    console.log(msgBlock); //Hello Block!
  }
}

// 예제 5-23
function myFunction05_03_07() {
  let num = 1;
  for (let i = 1; i <= 10; i++) {
    num *= 2;
    console.log(`i의 값: ${i}, num의 값: ${num}`);
    if (num > 50) break;
  }
}
