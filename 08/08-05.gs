function myFunction08_05_01() {
  const range = SpreadsheetApp.getActiveSheet().getRange('A2:E4');

  console.log(range.getA1Notation()); //A2:E4
  console.log(range.getRow()); //2
  console.log(range.getColumn()); //1
  console.log(range.getNumRows()); //3
  console.log(range.getNumColumns()); //5
  console.log(range.getLastRow()); //4
  console.log(range.getLastColumn()); //5
  
  console.log(range.isBlank()); //false
  console.log(range.isPartOfMerge()); //false
}

function myFunction08_05_02() {
  const sheet = SpreadsheetApp.getActiveSheet();

  console.log(sheet.getRange('A6').getValue());
  sheet.getRange('B6').setValue('GAS');

  console.log(sheet.getRange('A1:E2').getValues());
  
  const values = [
    ['Tom', 32, 'orange', 'noodle', 'programming'],
    ['Jay', 28, 'grape', 'kimchi', 'chess']
  ];
  sheet.getRange(3, 1, values.length, values[0].length).setValues(values);
}

function myFunction08_05_03() {
  const sheet = SpreadsheetApp.getActiveSheet();
  
  sheet.getRange('B5:D5').setFormulas([[
    '=SUM(B2:B4)',
    '=SUM(C2:C4)',
    '=SUM(D2:D4)'
  ]]);
  sheet.getRange('D2:D4').setFormulaR1C1('=RC[-2]*RC[-1]');
}

function myFunction08_05_04() {
  const sheet = SpreadsheetApp.getActiveSheet();
  sheet.clearFormats();

  //전체
  const rangeTable = sheet.getDataRange();
  rangeTable
    .setBorder(false, true, false, true, true, null)
    .setFontSize(14)
    .setFontFamily('메이리오')
    .setNumberFormat('#,##0');

  //제목
  const rangeHeader = sheet.getRange('A1:D1');
  rangeHeader
    .setBackgrounds([['yellow','yellow','yellow','orange']])
    .setHorizontalAlignment('center');

  //합계
  const rangeTotal = sheet.getRange('A5:D5');
  rangeTotal.setFontWeight('bold');

  //품명
  const rangeItemName = sheet.getRange('A2:A5');
  rangeItemName.setFontColors([['red'],['orange'],['purple'],['glay']]);
}

function myFunction08_05_05() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const row = sheet.getLastRow() - 1; //제목 제외
  const column = sheet.getLastColumn();

  const range = sheet.getRange(2, 1, row, column);
  range.sort([
    {column: 1, ascending: true},
    {column: 2, ascending: false}
  ]).removeDuplicates();
}
