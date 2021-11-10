function myFunction13_05_01() {
  const id = '********';
  const presentation = SlidesApp.openById(id);  
    
  const shape = presentation.getSlides()[2].getShapes()[5];
  
  console.log(shape.getTitle()); //長方形
  console.log(shape.getDescription()); //
  console.log(shape.getObjectId()); //オブジェクトID

  console.log(shape.getPageElementType().toString()); //SHAPE
  console.log(shape.getShapeType().toString()); //RECTANGLE
  
  console.log(shape.getLeft()); //左位置
  console.log(shape.getTop()); //上位置
  console.log(shape.getWidth()); //幅
  console.log(shape.getHeight()); //高さ
  console.log(shape.getRotation()); //回転角度

  const image = presentation.getSlides()[3].getImages()[0];
  
  console.log(image.getPageElementType().toString()); //IMAGE
  console.log(image.getObjectId()); //オブジェクトID
  console.log(image.getSourceUrl()); //https://tonari-it.com/wp-content/uploads/sea.jpg
}

function myFunction13_05_02() {
  const id = '********';
  const presentation = SlidesApp.openById(id);  
 
  const shapeId = '********'; //シェイプのオブジェクトID
  const shape = presentation.getPageElementById(shapeId);
  
  shape
    .scaleHeight(2)
    .scaleWidth(-0.8)
    .setRotation(45)
    .bringToFront();
  
  const imageId = '********'; //画像のオブジェクトID 
  const image = presentation.getPageElementById(imageId)
    
  image
    .setLeft(0)
    .setTop(0)
    .setWidth(480)
    .setHeight(360)
    .sendToBack();
}
