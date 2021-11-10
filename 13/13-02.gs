function myFunction13_02_01() {
  const activePresentation = SlidesApp.getActivePresentation();
  console.log(activePresentation.getName()); //프레젠테이션명
  const url = 'https://docs.google.com/presentation/d/********/edit#'; //URL
  const presentationByUrl = SlidesApp.openByUrl(url);
  console.log(presentationByUrl.getName()); //프레젠테이션명
  
  const id = '********'; //프레젠테이션 ID
  const presentationById = SlidesApp.openById(id);
  console.log(presentationById.getName()); //프레젠테이션명
}

