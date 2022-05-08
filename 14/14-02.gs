function myFunction14_02_01() {
  const activeForm = FormApp.getActiveForm();
  console.log(activeForm.getTitle()); //설문지명
  
  const url = 'https://docs.google.com/forms/d/********/edit'; //URL
  const formByUrl = FormApp.openByUrl(url);
  console.log(formByUrl.getTitle()); //설문지명
  
  const id = '********'; //설문지 ID
  const formById = FormApp.openById(id);
  console.log(formById.getTitle()); //설문지명
}

function myFunction14_02_02() {
  FormApp.create('가을 음악회 참석 설문지');
}
