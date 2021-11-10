function myFunction04_01_01() {
  if (5 < 10) {
    console.log('5 < 10 가 성립하면 출력됩니다.');
  }
  if (10 < 5) {
    console.log('10 < 5 가 성립하면 출력됩니다.');
  }
}

function myFunction04_01_02() { 
  const x = 5;
  if (x < 5) {
    console.log('x는 5보다 작습니다.');
  } else {
    console.log('x는 5 이상입니다.');
  } 
}

function myFunction04_01_03() { 
  const x = 5;
  if (x < 5) {
    console.log('x는 5보다 작습니다.');
  } else if (x < 10) {
    console.log('x는 5 이상이고 10보다 작습니다.');
  } else {
    console.log('x는 10 이상입니다.');
  }
}
