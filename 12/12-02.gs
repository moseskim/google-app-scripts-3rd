function myFunction12_02_01() {
  const activeDocument = DocumentApp.getActiveDocument();
  console.log(activeDocument.getName()); // 문서 이름

  const url = 'https://docs.google.com/document/d/********/edit#'; //URL
  const documentByUrl = DocumentApp.openByUrl(url);
  console.log(documentByUrl.getName()); // 문서 이름

  const id = '********'; // 문서 ID
  const documentById = DocumentApp.openById(id);
  console.log(documentById.getName()); // 문서 이름
}
