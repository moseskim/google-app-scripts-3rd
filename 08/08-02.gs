function myFunction08_02_01() {
  const ssActive = SpreadsheetApp.getActiveSpreadsheet();
  console.log(ssActive.getName()); //8장: 샘플 스크립트

  const url = 'https://docs.google.com/spreadsheets/d/xxxxxxxx/edit#gid=0';
  const ssByUrl = SpreadsheetApp.openByUrl(url);
  console.log(ssByUrl.getName()); //8장: 샘플 스크립트

  const id = 'xxxxxxxx';
  const ssById = SpreadsheetApp.openById(id);
  console.log(ssById.getName()); //8장: 샘플 스크립트
}

function myFunction08_02_02() {
  const sheet = SpreadsheetApp.getActiveSheet();
  console.log(sheet.getName()); //시트1
}
