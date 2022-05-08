function myFunction13_03_01() {
  const id = '********';
  const presentation = SlidesApp.openById(id);
  
  console.log(presentation.getName()); //프레젠테이션명
  console.log(presentation.getId()); //프레젠테이션 ID
  console.log(presentation.getUrl()); //프레젠테이션 URL
  
  console.log(presentation.getPageHeight()); //540
  console.log(presentation.getPageWidth()); //960  
}

function myFunction13_03_02() {
  const id = '********'; //프레젠테이션 ID
  const presentation = SlidesApp.openById(id);
  
  const slides = presentation.getSlides();
  console.log(slides.length); //2
  
  const slideId = '********'; //슬라이드 ID
  const slide = presentation.getSlideById(slideId);
  console.log(slide.getObjectId()); //슬라이드 ID
}

function myFunction13_03_03() {
  const id = '********';
  const presentation = SlidesApp.openById(id);

  presentation.appendSlide();
  presentation.insertSlide(1, SlidesApp.PredefinedLayout.TITLE);  
}
