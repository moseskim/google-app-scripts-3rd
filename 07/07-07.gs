function myFunction07_07_01() {
  const str = "I'm Bob. Tom is my friend.";

  const reg = /.o./g;
  console.log(reg.test(str)); //true
  
  console.log(reg.toString()); ///.o./g
  console.log(reg.source); //.o.

  console.log(reg.global); //true
  console.log(reg.ignoreCase); //false
  console.log(reg.multiline); //false
}

function myFunction07_07_02() {
  const str = "I'm Bob. Tom is my friend.";
  const reg = /.o./g;

  console.log(reg.exec(str));
}

function myFunction07_07_03() {
  const str = "I'm Bob. Tom is my friend.";
  const reg = /.o./g;
 
  let result;
  while (result = reg.exec(str)) {
    console.log(`result: ${result[0]}, lastIndex: ${result.index}`);
  }
}

function myFunction07_07_04() {
  const str = "I'm Bob. Tom is my friend.";

  let reg = /.o./g;
  console.log(str.match(reg)); //[Bob, Tom]

  reg = /.o./;
  console.log(str.match(reg)); //[Bob]
}

function myFunction07_07_05() {
  const str = "I'm Bob. Tom is my friend.";
  const reg = /.o./g;
  
  console.log(str.replace(reg, 'Jay')); //I'm Jay. Jay is my friend.
}

function myFunction07_07_06() {
  const str = "I'm Bob. Tom is my friend.";
  const date = '2020/07/19 09:55:15';

  const reg = /[:\/\s]/g;
  console.log(str.split(reg)); //['I\'m', 'Bob.', 'Tom', 'is', 'my', 'friend.']
  console.log(date.split(reg)); //['2020', '07', '19', '09', '55', '15']
}
