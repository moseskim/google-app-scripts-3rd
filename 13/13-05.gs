function myFunction13_05_01() {
  const id = '********';
  const presentation = SlidesApp.openById(id);  
    
  const shape = presentation.getSlides()[2].getShapes()[5];
  
  console.log(shape.getTitle()); //사각형
  console.log(shape.getDescription()); //
  console.log(shape.getObjectId()); //객체 ID

  console.log(shape.getPageElementType().toString()); //SHAPE
  console.log(shape.getShapeType().toString()); //RECTANGLE
  
  console.log(shape.getLeft()); //왼쪽 위치
  console.log(shape.getTop()); //위쪽 위치
  console.log(shape.getWidth()); //폭
  console.log(shape.getHeight()); //높이
  console.log(shape.getRotation()); //회전 각도

  const image = presentation.getSlides()[3].getImages()[0];
  
  console.log(image.getPageElementType().toString()); //IMAGE
  console.log(image.getObjectId()); //객체 ID
  console.log(image.getSourceUrl()); //https://tonari-it.com/wp-content/uploads/sea.jpg
}

function myFunction13_05_02() {
  const id = '********';
  const presentation = SlidesApp.openById(id);  
 
  const shapeId = '********'; //셰이프 객체 ID
  const shape = presentation.getPageElementById(shapeId);
  
  shape
    .scaleHeight(2)
    .scaleWidth(-0.8)
    .setRotation(45)
    .bringToFront();
  
  const imageId = '********'; //이미지 객체 ID 
  const image = presentation.getPageElementById(imageId)
    
  image
    .setLeft(0)
    .setTop(0)
    .setWidth(480)
    .setHeight(360)
    .sendToBack();
}
