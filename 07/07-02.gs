function myFunction07_02_01() {
  const x = 1000 / 3;

  console.log(x.toString()); //333.3333333333333
  console.log(x.toExponential(4)); //3.3333e+2
  console.log(x.toFixed(4)); //333.3333
  console.log(x.toFixed()); //333
  console.log(x.toPrecision(4)); //333.3
  console.log(x.toPrecision(2)); //3.3e+2

  console.log(Number.isFinite(x)); //true
  console.log(Number.isInteger(x)); //false
  console.log(Number.isNaN(x)); //false
  
  console.log(Number.MAX_VALUE); //1.7976931348623157e+308
  console.log(Number.MIN_VALUE); //5e-324
  console.log(Number.NaN); //NaN
  console.log(Number.POSITIVE_INFINITY); //Infinity
  console.log(Number.NEGATIVE_INFINITY); //-Infinity
}
