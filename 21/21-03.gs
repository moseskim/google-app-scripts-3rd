//샘플21-3-1
// function onEdit(e) {
//  const {range, value, oldValue} = e;
//  const msg = `${range.getRow()}, ${range.getColumn()}: ${oldValue} → ${value}`;
//  Browser.msgBox(msg);
// }

function myFunction21_03_02(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const row = e.range.getRow();
  sheet.getRange(row, 5).setFormulaR1C1('=SUM(RC[-3]:RC[-1])')
}
