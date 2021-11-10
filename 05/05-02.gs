// 샘플 5-2-1
const sayHello_ = function() {
  console.log('Hello!'); 
};

function sayGoodBye() {
  sayHello_();
  console.log('Good bye.'); 
}

function myFunction05_02_02() {
  console.log(`직사각형의 넓이: ${calcArea_(3, 4)}`); // 직사각형의 넓이: 12
}

const calcArea_ = function(x, y) {
  return x * y;
};

function myFunction05_02_06() {
  console.log(`정사각형의 넓이: ${calcSquareArea_(3)}`); // 정사각형의 넓이: 9
}

const calcSquareArea_ = x => x ** 2;
