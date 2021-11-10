function myFunction12_07_01() {
  const id = '********';
  const body = DocumentApp.openById(id).getBody();
  
  let str = body.getText();
  str = str.replace('{사명}', '주식회사 ㅇㅇㅇ');
  str = str.replace('{직책}', '대표이사');
  str = str.replace('{이름}', 'ㅇㅇㅇ');

  body.setText(str);
  body.appendParagraph('처음 뵙겠습니다.');
}

function myFunction12_07_02() {
  const id = '********';
  const body = DocumentApp.openById(id).getBody();
  body.editAsText().setFontFamily('Batang');

  const paragraph = body.getParagraphs()[0];
  paragraph.editAsText().setFontSize(16);
}
