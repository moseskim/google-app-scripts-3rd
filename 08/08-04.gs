function myFunction08_04_01() {
  const sheet = SpreadsheetApp.getActiveSheet();

  console.log(sheet.getIndex()); //1
  console.log(sheet.getName()); //시트1
  console.log(sheet.getParent().getName()); //8장: 샘플 스크립트
  console.log(sheet.isSheetHidden()); //false
}

function myFunction08_04_02() {
  const sheet = SpreadsheetApp.getActiveSheet();
  
  console.log(sheet.getRange('B2').getA1Notation()); //B2
  console.log(sheet.getRange('D4:F6').getA1Notation()); //D4:F6
  console.log(sheet.getRange('2:2').getA1Notation()); //2:2
  console.log(sheet.getRange('B:B').getA1Notation()); //B:B

  console.log(sheet.getRange(4, 4).getA1Notation()); //D4
  console.log(sheet.getRange(4, 4, 3).getA1Notation()); //D4:D6
  console.log(sheet.getRange(4, 4, 3, 3).getA1Notation()); //D4:F6
}

function myFunction08_04_03() {
  const sheet = SpreadsheetApp.getActiveSheet();

  console.log(sheet.getDataRange().getA1Notation()); //A1:F6

  const row = sheet.getLastRow();
  console.log(row); //6

  const column = sheet.getLastColumn();
  console.log(column); //6

  const range = sheet.getRange(1, 1, row, column);
  console.log(range.getA1Notation()); //A1:F6
}

function myFunction08_04_04() {
  const sheet = SpreadsheetApp.getActiveSheet();
  
  sheet.appendRow(['Jay', 28, 'grape', 'noodle', 'chess']);
  sheet.appendRow([null, '=SUM(B2:B4)']);
}
