function myFunction10_04_01() {
  const id = 'xxxxxxxx';
  const file = DriveApp.getFileById(id); 

  console.log(file.getId()); //파일 ID
  console.log(file.getName()); //sea,png
  console.log(file.getDescription()); //바다 사진
  console.log(file.getMimeType()); //image/jpeg
  console.log(file.getSize()); //1412243

  console.log(file.getUrl()); //파일을 여는 URL
  console.log(file.getDownloadUrl()); //다운로드 URL

  console.log(file.getDateCreated()); //생성 일시(한국 표준시)
  console.log(file.getLastUpdated()); //최근 업데이트 일시(한국 표준시)

  console.log(file.isStarred()); //false
  console.log(file.isTrashed()); //false  
}

function myFunction10_04_02() {  
  const id = '********'; //파일 ID

  const file = DriveApp.getFileById(id);
    
  const movedFile = file.makeCopy('sea[사본을_다른_폴더로_이동].png');
  const destinationId = '********'; //이동할 폴더 ID
  const destination = DriveApp.getFolderById(destinationId);
  movedFile.moveTo(destination);
  
  const trashedFile = file.makeCopy('sea[사본을_휴지통으로_삭제].png');
  trashedFile.setTrashed(true);  
}
