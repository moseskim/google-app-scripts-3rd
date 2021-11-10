function myFunction10_06_01() {
  const email = '***@**********'; //메일 주소
  
  const folderId = 'xxxxxxxx'; //폴더 ID
  const folder = DriveApp.getFolderById(folderId);
  
  console.log(folder.getAccess(email).toString()); //지정한 사용자의 권한
  console.log(folder.getOwner().getEmail()); //소유자의 메일 주소
  console.log(folder.getEditors().length); //편집자 수
  console.log(folder.getViewers().length); //뷰어 수
  console.log(folder.isShareableByEditors()); //True 또는 False
  
  const fileId = 'xxxxxxxx'; //파일 ID
  const file = DriveApp.getFileById(fileId); 

  console.log(file.getAccess(email).toString()); //지정한 사용자의 권한
  console.log(file.getOwner().getEmail()); //소유자의 메일 주소
  console.log(file.getEditors().length); //편집자 수
  console.log(file.getViewers().length); //뷰어 수
  console.log(file.isShareableByEditors()); //True 또는 False
}

function myFunction10_06_02() {
  const email = '***@**********'; //메일 주소

  const folderId = 'xxxxxxxx'; //폴더 ID
  const folder = DriveApp.getFolderById(folderId);
  folder.addEditor(email);
  
  const fileId = 'xxxxxxxx'; //파일 ID
  const file = DriveApp.getFileById(fileId);   
  file.addCommenter(email);
}

function myFunction10_06_03() {
  const email = '***@**********'; //메일 주소

  const folderId = 'xxxxxxxx'; //폴더 ID
  const folder = DriveApp.getFolderById(folderId);  
  folder.removeEditor(email);
  
  const fileId = 'xxxxxxxx'; //파일 ID
  const file = DriveApp.getFileById(fileId); 
  file.removeCommenter(email);
}

function myFunction10_06_04() { 
  const folderId = 'xxxxxxxx'; //폴더 ID
  const folder = DriveApp.getFolderById(folderId);
  
  console.log(folder.getSharingAccess().toString()); //공유 범위
  console.log(folder.getSharingPermission().toString()); //권한
  
  const fileId = 'xxxxxxxx'; //파일 ID
  const file = DriveApp.getFileById(fileId); 

  console.log(file.getSharingAccess().toString()); //공유 범위
  console.log(file.getSharingPermission().toString()); //권한
}

function myFunction10_06_05() { 
  const folderId = 'xxxxxxxx'; //폴더 ID
  const folder = DriveApp.getFolderById(folderId);
  folder.setSharing(DriveApp.Access.ANYONE, DriveApp.Permission.VIEW);
  
  const fileId = 'xxxxxxxx'; //파일 ID
  const file = DriveApp.getFileById(fileId); 
  file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.COMMENT);
}
