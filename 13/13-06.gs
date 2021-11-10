function myFunction13_06_01() {
  const id = '********';
  const presentation = SlidesApp.openById(id);
  const textRange = presentation.getSlides()[0].getShapes()[1].getText();
  
  console.log(textRange.asString()); //샘플プレゼンテーション
  
  console.log(textRange.getStartIndex()); //0
  console.log(textRange.getEndIndex()); //14
  console.log(textRange.getLength()); //14
  console.log(textRange.isEmpty()); //false
  
  console.log(textRange.getParagraphs().length); //1
  console.log(textRange.getListParagraphs().length); //0
  console.log(textRange.getRuns().length); //1
}

function myFunction13_06_02() {
  const id = '********';
  const presentation = SlidesApp.openById(id);
  const textRange = presentation.getSlides()[0].getShapes()[1].getText();
  
  console.log(textRange.asString()); //샘플プレゼンテーション
  
  const subTextRange = textRange.getRange(4, 8);
  
  console.log(subTextRange.asString()); //プレゼン
  console.log(subTextRange.getStartIndex()); //4
  console.log(subTextRange.getEndIndex()); //8
  console.log(subTextRange.getLength()); //4
}

function myFunction13_06_03() {
  const id = '********';
  const presentation = SlidesApp.openById(id);
  
  presentation.replaceAllText('{タイトル}', '샘플プレゼンテーション');
  presentation.replaceAllText('{日付}', '2021/02/24');
}
