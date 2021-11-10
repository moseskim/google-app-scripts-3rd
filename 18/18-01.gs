function myFunction18_01_01() {
  const folderId = '********'; //저장 폴더 ID
  const fileId = '********'; //JPG 이미지 파일 ID

  const folder = DriveApp.getFolderById(folderId);   
  const file = DriveApp.getFileById(fileId); 
  
  const sourceBlob = file.getBlob(); 
  console.log(sourceBlob.getName()); //sea.jpg
  console.log(sourceBlob.getContentType()); //image/jpeg

  const targetBlob = file.getAs(MimeType.BMP); 
  console.log(targetBlob.getName()); //sea.bmp
  console.log(targetBlob.getContentType()); //image/bmp

  folder.createFile(targetBlob); 
}

function myFunction18_01_02() {
  const folderId = '********'; //저장 폴더 ID
  const folder = DriveApp.getFolderById(folderId); 
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const blob = ss.getBlob();
  
  console.log(blob.getContentType()); //application/pdf
  console.log(blob.getName()); //과일구매리스트.pdf
  console.log(blob.isGoogleType()); //false

  folder.createFile(blob); 
}
