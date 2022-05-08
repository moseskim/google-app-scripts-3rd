function myFunction16_02_01() {
  const obj = {name: 'Bob', age: 25};
  console.log(obj, obj.age); //{ name: 'Bob', age: 25 } 25
  Logger.log('%s %s', obj, obj.age); //{name=Bob, age=25.0} 25.0

  const anyone = DriveApp.Access.ANYONE;
  console.log(anyone); //객체
  console.log(anyone.toString()); //ANYONE
  Logger.log(anyone); //ANYONE  
}

function myFunction16_02_02() {
  console.log('DEBUG 레벨 로그: 로그 내용');
  console.info('INFO 레벨 로그: 로그 내용');
  console.warn('WARN 레벨 로그: 로그 내용');
  console.error('ERROR 레벨 로그: 로그 내용');
}

function myFunction16_02_03() {
  const sheet = SpreadsheetApp.getActiveSheet();
  
  const timer1 = '셀을 하나씩';
  console.time(timer1);
  
  for (let i = 1; i <= 1000; i++) {
    const value = sheet.getRange(i, 1).getValue();
    sheet.getRange(i, 2).setValue(value);
  }
  
  console.timeEnd(timer1); //셀을 하나씩: 318580ms
  
  const timer2 = '셀을 모아서';
  
  console.time(timer2);
  
  const values = sheet.getRange(1, 2, 1000, 1).getValues();
  sheet.getRange(1, 3, values.length, values[0].length).setValues(values);
  
  console.timeEnd(timer2); //셀을 모아서: 333ms
}
