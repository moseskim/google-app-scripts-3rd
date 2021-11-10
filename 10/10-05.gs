function myFunction10_05_01() {
  const id = 'xxxxxxxx'; //폴더 ID
  const targetFolder = DriveApp.getFolderById(id);

  const subFolders = targetFolder.getFolders();
  while (subFolders.hasNext()) {
    const folder = subFolders.next();
    console.log(folder.getName());
  }
}

function myFunction10_05_02() {
  const id = 'xxxxxxxx'; //폴더 ID
  const targetFolder = DriveApp.getFolderById(id);
  
  const files = targetFolder.getFilesByType(MimeType.JPEG);
  while (files.hasNext()) {
    const file = files.next();
    console.log(file.getName());
  }
}

function myFunction10_05_03() {
  const params = 'title contains "샘플" and starred = true';
  
  const folders = DriveApp.searchFolders(params);
  while (folders.hasNext()) {
    const folder = folders.next();
    console.log(folder.getName());
  }
}

function myFunction10_05_04() {
  const params = 'fullText contains "샘플" and "xxxxxxxx" in parents';
  
  const files = DriveApp.searchFiles(params);
  while (files.hasNext()) {
    const file = files.next();
    console.log(`${file.getName()}: ${file.getMimeType()}`);
  }
}
