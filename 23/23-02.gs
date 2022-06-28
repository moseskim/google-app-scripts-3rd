// 예제 23-2
/** 사람을 나타내는 클래스 */
class Person {
  /**
   * Person 객체를 생성한다 
   * @param {string} name - 이름
   * @param {number} age - 나이
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  /**
   * 인사말을 로그에 출력한다
   */
  greet(){
    console.log(`Hello! I'm ${this.name}!`);  
  }
}

/**
 * Person 클래스의 인스턴스를 생성해서 반환하는 팩토리 함수
 *
 * @param {String} name - 이름
 * @param {Number} age ｰ 나이（기본값: 0.1）
 * @return {Person} - 생성한 Person 객체
 */
function createPerson(name, age) {
  return new Person(name, age);
}

/**
 * 부가세 포함 가격을 반환하는 함수
 *
 * @param {Number} price - 가격
 * @param {Number} taxRate - 부가세율（기본값은 0.1）
 * @return {Number} 부가세 포함 가격
 */
function includeTax(price, taxRate = 0.1) {
  return price * (1 + taxRate);
}

function test() {
  const p = createPerson('Bob', 25);
  console.log(p);
  p.greet();
  
  console.log(includeTax(1000));
  console.log(includeTax(1000, 0.08));

}

function myFunction23_02_02() {
  const p = MyLibrary.createPerson('Bob', 25); 
  console.log(p); //{ name: 'Bob', age: 25 }
  p.greet(); //Hello! I'm Bob!
  
  console.log(MyLibrary.includeTax(1000)); //1100
  console.log(MyLibrary.includeTax(1000, 0.08)); //1080
}
