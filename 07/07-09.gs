function myFunction07_09_01() {
  console.log(Math.PI); //3.141592653589793
  console.log(Math.SQRT2); //1.4142135623730951
  console.log(Math.sqrt(3)); //1.7320508075688772
  console.log(Math.cbrt(27)); //3
  console.log(Math.hypot(3, 4)); //5
  
  console.log(Math.abs(-3)); //3
  console.log(Math.sign(-3)); //-1

  console.log(Math.ceil(10.5)); //11
  console.log(Math.floor(10.5)); //10
  console.log(Math.round(10.5)); //11
  console.log(Math.trunc(10.5)); //10

  console.log(Math.max(3,9,1,7,5)); //9
  console.log(Math.min(3,9,1,7,5)); //1

  console.log(Math.random()); //0 이상 1 미만의 난수
}

function myFunction07_09_02() {  
  const min = 5, max = 10;

  for (let i = 1; i <= 5; i++) {
    console.log(Math.floor(Math.random() * (max - min + 1) + min));   
  }
}

function myFunction07_09_03() {  
  const numbers = [3, 9, 1, 7, 5];
  
  console.log(Math.min(...numbers));  //1
  console.log(Math.max(...numbers));  //9
}
