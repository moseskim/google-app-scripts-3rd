function myFunction13_04_01() {  
  const id = '********';
  const presentation = SlidesApp.openById(id);
  const slide = presentation.getSlides()[0];

  console.log(slide.getObjectId()); //スライドのオブジェクトID
  console.log(slide.getPageType().toString()); //SLIDE
  console.log(slide.getSlideLinkingMode().toString()); //NOT_LINKED
  console.log(slide.getSourcePresentationId()); //null
  console.log(slide.getSourceSlideObjectId()); //null
}

function myFunction13_04_02() {  
  const id = '********';
  const presentation = SlidesApp.openById(id);
  const slide = presentation.getSlides()[2];

  const pageElements = slide.getPageElements();
  for (const pageElement of pageElements) {
    console.log(pageElement.getTitle(), pageElement.getPageElementType().toString());
  }

  console.log();
  
  const shapes = slide.getShapes();
  for (const shape of shapes) {
    console.log(shape.getTitle(), shape.getShapeType().toString());
  }

  console.log();
  
  const images = slide.getImages();
  for (const image of images) {
    console.log(image.getTitle());
  }
}

function myFunction13_04_03() {
  const id = '********';
  const presentation = SlidesApp.openById(id);
  const slide = presentation.getSlides()[2];

  const pageElement = slide.getPageElements()[0];
  const objectId = pageElement.getObjectId();
  console.log(objectId); //オブジェクトID
  
  const pageElementById = presentation.getPageElementById(objectId);
  console.log(pageElementById.getTitle()); //タイトル
}

function myFunction13_04_04() {
  const id = '********';
  const presentation = SlidesApp.openById(id);
  const slide = presentation.getSlides()[3];
  
  slide.insertShape(SlidesApp.ShapeType.SMILEY_FACE);
  
  const imageUrl = 'https://tonari-it.com/wp-content/uploads/sea.jpg';
  slide.insertImage(imageUrl, 200, 100, 320, 240);
  
  slide.insertTextBox('Hello GAS!', 100, 350, 300, 100);
}