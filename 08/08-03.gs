function myFunction08_03_01() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  console.log(ss.getId()); //스프레드시트 ID
  console.log(ss.getName()); //8장: 샘플 스크립트
  console.log(ss.getNumSheets()); //3
  console.log(ss.getUrl()); //스프레드시트 URL
}

function myFunction08_03_02() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const sheet = ss.getSheetByName('시트1');
  console.log(sheet.getName()); //시트1

  const sheets = ss.getSheets();

  console.log(sheets[0].getName()); //시트1
  console.log(sheets[1].getName()); //시트2
}
