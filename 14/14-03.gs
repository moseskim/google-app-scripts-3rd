//後ほど実行する
function myFunction14_03_01() {  
  const id = '********'; //フォームID
  const form = FormApp.openById(id);
  
  console.log(form.getTitle()); //もくもく会参加申込みフォーム
  console.log(form.getId()); //フォームID
  console.log(form.getDescription()); //次回のもくもく会についての参加申込みフォームです。
  
  console.log(form.getEditUrl()); //フォームの編集ページのURL
  console.log(form.getSummaryUrl()); //フォームのサマリーページのURL
  
  const publishedUrl = form.getPublishedUrl();
  console.log(publishedUrl); //フォームの回答ページのURL
  console.log(form.shortenFormUrl(publishedUrl)); //短縮された回答ページのURL  
}

function myFunction14_03_02() {  
  const id = '********'; //フォームID
  const form = FormApp.openById(id);
    
  //設定→全般に関するもの
  console.log(form.collectsEmail()); //false
  console.log(form.requiresLogin()); //true
  console.log(form.hasLimitOneResponsePerUser()); //false
  console.log(form.canEditResponse()); //false
  console.log(form.isPublishingSummary()); //false
  
  //設定→プレゼンテーションに関するもの
  console.log(form.hasProgressBar()); //false
  console.log(form.getShuffleQuestions()); //false
  console.log(form.hasRespondAgainLink()); //true
  console.log(form.getConfirmationMessage()); //
  
  //回答の送信先と受付に関するもの
  console.log(form.getDestinationId()); //送信先ID
  console.log(form.getDestinationType().toString()); //SPREADSHEET
  console.log(form.isAcceptingResponses()); //true
  console.log(form.getCustomClosedFormMessage()); //
}

function myFunction14_03_03() { 
  const form = FormApp.create('もくもく会参加申込みフォーム');
  
  form.addTextItem();
  form.addMultipleChoiceItem();
  form.addCheckboxItem();
  form.addListItem();
}

function myFunction14_03_04() {
  const id = '********'; //フォームID
  const form = FormApp.openById(id);  
  
  const items = form.getItems();
  for (const item of items) console.log(item.getType().toString());
  
  const itemId = items[0].getId();
  console.log(itemId, form.getItemById(itemId).getType().toString());
}
