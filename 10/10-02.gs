function myFunction10_02_01() {
  const folderId = 'xxxxxxxx';
  const folder = DriveApp.getFolderById(folderId);

  console.log(folder.getName()); //드라이브용 샘플

  const fileId = 'xxxxxxxx';
  const file = DriveApp.getFileById(fileId);

  console.log(file.getName()); //sea.png
}

function myFunction10_02_02() {
  const root = DriveApp.getRootFolder();
  console.log(root.getName()); //내 드라이브
}

function myFunction10_02_03() {
  const folderName = '작성한 폴더';
  DriveApp.createFolder(folderName);
    
  const fileName = '작성한_파일.txt';
  const content = 'Hello Drive!';
  DriveApp.createFile(fileName, content)  
}
