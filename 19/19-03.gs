function myFunction19_03_01() {
  const d = new Date('2020/9/1 9:8:7.370');
  
  console.log(Utilities.formatDate(d, 'JST', 'yyyy/MM/dd HH:mm:ss'));
  console.log(Utilities.formatDate(d, 'JST', 'yy/M/d ah:m:s'));
  console.log(Utilities.formatDate(d, 'JST', 'yyyy年M月d日 H時m分s秒'));
  console.log(Utilities.formatDate(d, 'JST', "E MMM dd yyyy HH:mm:ss.S 'GMT'XX"));  
}
