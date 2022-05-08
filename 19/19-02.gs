function myFunction19_02_01() {
  const id = '********'; //폴더 ID
  const folder = DriveApp.getFolderById(id); 
  const files = folder.getFiles();
  
  const blobs = [];
  while (files.hasNext()) blobs.push(files.next().getBlob());

  const zip = Utilities.zip(blobs);
  folder.createFile(zip).setName(folder.getName() + '.zip');
}

function myFunction19_02_02() {
  const id = '********'; //ZIP 파일 ID  
  const file = DriveApp.getFileById(id);
  const blobs = Utilities.unzip(file.getBlob());
  
  for (const blob of blobs) {
    console.log(`${blob.getName()} [Type: ${blob.getContentType()}]`);  
  }
}

function myFunction19_02_03() { 
  const values = SpreadsheetApp.getActiveSheet().getDataRange().getValues(); 
  const csv = values.reduce((str, row) => str + '\n' + row);
  const blob = Utilities.newBlob(csv, MimeType.CSV, '과일구매리스트.csv'); 
  
  const id = '********'; //저장 폴더 ID
  const folder = DriveApp.getFolderById(id);
  folder.createFile(blob);
}

function myFunction19_02_04() { 
  const values = SpreadsheetApp.getActiveSheet().getDataRange().getValues(); 
  const csv = values.reduce((str, row) => str + '\n' + row);
  const blob = Utilities.newBlob('', MimeType.CSV, '과일구매리스트_KSC5601.csv')
    .setDataFromString(csv, 'KSC5601');

  const id = '1Q7_PHAGpSjZUJyq9864_bbp6aveSchye'; //저장 폴더 ID
  const folder = DriveApp.getFolderById(id);
  folder.createFile(blob);
}

function myFunction19_02_05() {
  const id = '********'; //파일 ID
  const blob = DriveApp.getFileById(id).getBlob();
  const csv = blob.getDataAsString();
  
  const values = Utilities.parseCsv(csv);
  console.log(values);
  
  const sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange(7, 1, values.length, values[0].length).setValues(values);
}
