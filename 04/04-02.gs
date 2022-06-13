function myFunction04_02_01() { 
  const words1 = ['Google','Apps','Script'];
  const words2 = ['Google','Apps','Script'];
  console.log(words1 == words2); //false
  
  const personA = {name:'Bob'};
  const personB = {name:'Bob'};
  console.log(personA == personB); //false
}

function myFunction04_02_02() {  
  const words1 = ['Google','Apps','Script'];
  const words2 = words1;
  console.log(words1 == words2); //true
  
  const personA = {name:'Bob'};
  const personB = personA;
  console.log(personA == personB); //true
}

function myFunction04_02_03() { 
  console.log(5 == '5'); //true
  console.log(5 === '5'); //false
  
  console.log(5 != '5'); //false
  console.log(5 !== '5'); //true
}

function myFunction04_02_04() { 
  const x = 5, y = 10;
  if (x >= 5 && y >= 5 ) {
    console.log('x와 y가 모두 5 이상입니다.');
  }
  if (x >= 10 || y >= 10) {
    console.log('x 또는 y 중 하나가 10 이상입니다.');
  }
  if (!(x >= 10)) {
    console.log('x는 10 이상이 아닙니다.');
  }
}

function myFunction04_02_05() { 
  if (123) {
    console.log('123은 true');
  }
  if ('abc') {
    console.log("'abc'는 true");
  }
  if ([1, 2, 3]) {
    console.log('[1, 2, 3]은 true');
  }
  if ({lunch: 'curry'}) {
    console.log("{lunch: 'curry'}는 true");
  }
}

function myFunction04_02_06() { 
  if (!0) {
    console.log('0은 false');
  }
  if (!'') {
    console.log('빈 문자는 false');
  }
  if (!undefined) {
    console.log('undefined는 false');
  }
  if (!null) {
    console.log('null은 false');
  }
}
