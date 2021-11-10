function myFunction08_06_01() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const values = sheet.getDataRange().getValues();

  values.push(['Tom', 32, 'orange', 'noodle', 'programming']);
  console.log(values);

  values.splice(1, 1, ['Jay', 28, 'grape', 'kimchi', 'chess']);
  console.log(values);

  values.shift();
  console.log(values);

  sheet.clearContents();
  sheet.getRange(1, 1, values.length, values[0].length).setValues(values);
}

function myFunction08_06_02() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const values = sheet.getDataRange().getValues();
  
  const keys = sheet.getRange(1, 4, sheet.getLastRow()).getValues().flat();
  console.log(keys);

  const favorite = 'noodle';
  console.log(keys.includes(favorite));
  
  const row = keys.indexOf(favorite)
  console.log(row);
  
  const [name, age] = values[row];
  console.log(`${favorite}을(를) 좋아하는 사람은 ${age}살 ${name}입니다.`);
}

function myFunction08_06_03() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const values = sheet.getDataRange().getValues();
  
  const favorite = 'noodle';
  const target = values.find(record => {
    const [name, age, favorite1, favorite2, favorite3] = record;
    return favorite2 === favorite;
  });  
  console.log(target);
  
  const [name, age] = target;
  console.log(`${favorite}을(를) 좋아하는 사람은 ${age}살 ${name}입니다.`);
}

function myFunction08_06_04() {
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const values = ss.getActiveSheet().getDataRange().getValues();
  const header = values.shift();
  
  const targetValues = values.filter(record => {
    const [name, age, favorite1, favorite2, favorite3] = record;
    return age > 25;
  });
  
  targetValues.unshift(header);
  const targetSheet = ss.getSheetByName('출력 시트');
  targetSheet.getRange(1, 1, targetValues.length, targetValues[0].length).setValues(targetValues);

}
