function myFunction12_06_01() {
  const id = '********';
  const paragraphs = DocumentApp.openById(id).getBody().getParagraphs();
  
  let text = paragraphs[0].editAsText();
  console.log(text.getText()); //텍스트 객체
  console.log(text.getType().toString()); //PARAGRAPH
  console.log(text.getParent().getType().toString()); //BODY_SECTION
  
  text = paragraphs[1].editAsText();
  console.log(text.getFontSize()); //24
  console.log(text.getFontFamily()); //Batang

  text = paragraphs[2].editAsText();
  console.log(text.getBackgroundColor()); //#ffff00
  console.log(text.getForegroundColor()); //#ff0000

  text = paragraphs[3].editAsText();
  console.log(text.getLinkUrl()); //https://hanbit.co.kr//

  text = paragraphs[4].editAsText();
  console.log(text.isBold()); //true
  console.log(text.isItalic()); //null
  console.log(text.isStrikethrough()); //null
  console.log(text.isUnderline()); //true

  text = paragraphs[5].editAsText();
  console.log(text.getTextAlignment().toString()); //SUPERSCRIPT
}

function myFunction12_06_02() {
  const id = '********';
  const paragraphs = DocumentApp.openById(id).getBody().getParagraphs();
  
  paragraphs[0].editAsText().setFontSize(20);

  paragraphs[1].editAsText()
    .setBackgroundColor('#FF8C00')
    .setForegroundColor('#FFFAFA');

  paragraphs[2].editAsText()
    .setBold(0, 3, true)
    .setItalic(4, 8, true)
    .setStrikethrough(9, 13, true)
    .setUnderline(14, 20, true);

  paragraphs[3].editAsText().setLinkUrl('https://hanbit.co.kr/');
}
