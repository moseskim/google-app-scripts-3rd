function myFunction13_03_01() {
  const id = '********';
  const presentation = SlidesApp.openById(id);
  
  console.log(presentation.getName()); //プレゼンテーション名
  console.log(presentation.getId()); //プレゼンテーションID
  console.log(presentation.getUrl()); //プレゼンテーションのURL
  
  console.log(presentation.getPageHeight()); //540
  console.log(presentation.getPageWidth()); //960  
}

function myFunction13_03_02() {
  const id = '********'; //プレゼンテーションID
  const presentation = SlidesApp.openById(id);
  
  const slides = presentation.getSlides();
  console.log(slides.length); //2
  
  const slideId = '********'; //スライドID
  const slide = presentation.getSlideById(slideId);
  console.log(slide.getObjectId()); //スライドID
}

function myFunction13_03_03() {
  const id = '********';
  const presentation = SlidesApp.openById(id);

  presentation.appendSlide();
  presentation.insertSlide(1, SlidesApp.PredefinedLayout.TITLE);  
}