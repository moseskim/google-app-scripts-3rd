function myFunction10_03_01() {
  const id = 'xxxxxxxx';
  const folder = DriveApp.getFolderById(id);

  console.log(folder.getId()); //폴더 ID
  console.log(folder.getUrl()); //파일 ID
  console.log(folder.getName()); //드라이브용 샘플
  console.log(folder.getDescription()); //드라이브용 샘플 설명

  console.log(folder.getDateCreated()); //생성 일시(한국 표준시)
  console.log(folder.getLastUpdated()); //최근 업데이트 일시(한국 표준시)

  console.log(folder.isStarred()); //true
  console.log(folder.isTrashed()); //false
}

function myFunction10_03_02() {
  const id = 'xxxxxxxx';
  const folder = DriveApp.getFolderById(id);
  
  for (let i = 1; i <= 10; i++) {
    const name = String(i).padStart(2, '0');
    folder.createFolder(name);
  }
}

function myFunction10_03_03() {
  const id = '********'; //폴더 ID
  const folder = DriveApp.getFolderById(id);
  
  const name = 'hello.txt';
  const content = 'Hello GAS!';
  folder.createFile(name, content, MimeType.PLAIN_TEXT);
  
  const targetId = '********'; //파일ID
  folder.createShortcut(targetId);
}