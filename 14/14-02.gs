function myFunction14_02_01() {
  const activeForm = FormApp.getActiveForm();
  console.log(activeForm.getTitle()); //설문지명
  
  const url = 'https://docs.google.com/forms/d/********/edit'; //URL
  const formByUrl = FormApp.openByUrl(url);
  console.log(formByUrl.getTitle()); //설문지명
  
  const id = '********'; //フォームID
  const formById = FormApp.openById(id);
  console.log(formById.getTitle()); //フォーム名
}

function myFunction14_02_02() {
  FormApp.create('もくもく会参加申込みフォーム');
  // const form = FormApp.create('もくもく会参加申込みフォーム');
  // form.setTitle('もくもく会参加申し込みフォーム');
}
