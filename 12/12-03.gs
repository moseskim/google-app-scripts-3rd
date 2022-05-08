function myFunction12_03_01() {
  const id = '********';
  const document = DocumentApp.openById(id);
  
  console.log(document.getName()); //문서 이름
  console.log(document.getId()); //문서 ID
  console.log(document.getUrl()); //문서 URL
  console.log(document.getLanguage()); //ko

  console.log(document.getBody().getType().toString()); //BODY_SECTION
  console.log(document.getHeader().getType().toString()); //HEADER_SECTION
  console.log(document.getFooter().getType().toString()); //FOOTER_SECTION
}

function myFunction12_03_02() {
  const document = DocumentApp.create('새 문서');

  document.addHeader().setText('머릿글 섹션');
  document.addFooter().setText('바닥글 섹션');
}
