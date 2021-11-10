function myFunction07_06_01() {
  console.log(new Date()); //실행 시 일시
  console.log(new Date(2020, 7, 17, 10, 28, 15)); //Mon Aug 17 2020 10:28:15 GMT+0900 (한국 표준시)
  console.log(new Date('2020/07/17 10:28:15')); //Fri Jul 17 2020 10:28:15 GMT+0900 (한국 표준시)
  console.log(new Date(1594949295777)); //Fri Jul 17 2020 10:28:15 GMT+0900 (한국 표준시)
  
  const d = new Date();
  console.log(new Date(d)); // 실행 시 일시
}

function myFunction07_06_02() {
  const d = new Date(2020, 6, 17, 10, 28, 15, 777);
  
  console.log(d.getFullYear()); //2020
  console.log(d.getMonth()); //6(= 7월)
  console.log(d.getDate()); //17
  console.log(d.getDay()); //5(= 금요일)
  console.log(d.getHours()); //10
  console.log(d.getMinutes()); //28
  console.log(d.getSeconds()); //15
  console.log(d.getMilliseconds()); //777
  console.log(d.getTime()); //1594949295777
  
  console.log(d.getTimezoneOffset()); //-540
  
  d.setFullYear(2020);
  d.setMonth(0);
  d.setDate(1);
  d.setHours(1);
  d.setMinutes(11);
  d.setSeconds(11);
  d.setMilliseconds(111);

  console.log(d.toString()); //Wed Jan 01 2020 01:11:11 GMT+0900 (한국 표준시)
  console.log(d.toDateString()); //Wed Jan 01 2020
  console.log(d.toTimeString()); //01:11:11 GMT+0900 (한국 표준시)
  console.log(d.toJSON()); //2019-12-31T16:11:11.111Z
}

function myFunction07_06_03() {
  const start = new Date('2020/5/5 20:00');
  const end = new Date(start);
  
  end.setMinutes(start.getMinutes() + 120);
  console.log(start); //Tue May 05 2020 20:00:00 GMT+0900 (한국 표준시)
  console.log(end); //Tue May 05 2020 22:00:00 GMT+0900 (힌국 표준시)
}
