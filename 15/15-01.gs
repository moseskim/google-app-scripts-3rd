function myFunction15_01_01() {
  const str = '문자열을 간단히 번역할 수 있습니다.';
  console.log(LanguageApp.translate(str, 'ko', 'en'));
  console.log(LanguageApp.translate(str, 'ko', 'zh-CN'));
  console.log(LanguageApp.translate(str, 'ko', 'es'));
}

function myFunction15_01_02() {
  const id = '********'; //문서 ID
  const sourceFile = DriveApp.getFileById(id);

  const title = LanguageApp.translate(sourceFile.getName(), 'ko', 'en');
  const createFile = sourceFile.makeCopy(title);

  const document = DocumentApp.openById(createFile.getId());
  translateParagraphs_(document.getBody().getParagraphs());
  translateParagraphs_(document.getHeader().getParagraphs());
}

function translateParagraphs_(paragraphs) {
  for (const paragraph of paragraphs) {
    const text = paragraph.getText();
    if (text) paragraph.setText(LanguageApp.translate(text, 'ko' ,'en')); 
  }
}
