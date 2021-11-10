function myFunction07_08_01() {
  try{
    throw new Error('발생시킨 예외');
  } catch(e) {
    console.log(e.name);
    console.log(e.message);
    console.log(e.toString());
    console.log(e.stack);
  }
}

function myFunction07_08_02() {
  throw new TypeError('발생시킨 타입에 관한 예외');
}

function myFunction07_08_03_a_() {
  throw new Error('발생시킨 예외');
}

function myFunction07_08_03_b_() {
  myFunction07_08_03_a_();
}

function myFunction07_08_03_c() {
  try{
    myFunction07_08_03_b_();
  } catch(e) {
    console.log(e.stack);
  }
}
