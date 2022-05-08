//나중에 실행한다
function myFunction14_03_01() {  
  const id = '********'; //설문지 ID
  const form = FormApp.openById(id);
  
  console.log(form.getTitle()); //가을 음악회 참가 신청 설문지
  console.log(form.getId()); //설문지 ID
  console.log(form.getDescription()); //이번 가을 음악회 참가 신청 설문지입니다.
  
  console.log(form.getEditUrl()); //설문지 편집 페이지 URL
  console.log(form.getSummaryUrl()); //설문지의 요약(summary) 페이지 URL
  
  const publishedUrl = form.getPublishedUrl();
  console.log(publishedUrl); //설문지 답변 페이지 URL
  console.log(form.shortenFormUrl(publishedUrl)); //단축된 답변 페이지 URL
}

function myFunction14_03_02() {  
  const id = '********'; //설문지 ID
  const form = FormApp.openById(id);
    
  //설정 → 응답 관련 항목
  console.log(form.collectsEmail()); //false
  console.log(form.requiresLogin()); //true
  console.log(form.hasLimitOneResponsePerUser()); //false
  console.log(form.canEditResponse()); //false
  console.log(form.isPublishingSummary()); //false
  
  //설정 → 프레젠테이션 관련 항목
  console.log(form.hasProgressBar()); //false
  console.log(form.getShuffleQuestions()); //false
  console.log(form.hasRespondAgainLink()); //true
  console.log(form.getConfirmationMessage()); //
  
  //송신지 및 응답 수신 관련 항목
  console.log(form.getDestinationId()); // 송신지 ID
  console.log(form.getDestinationType().toString()); //SPREADSHEET
  console.log(form.isAcceptingResponses()); //true
  console.log(form.getCustomClosedFormMessage()); //
}

function myFunction14_03_03() { 
  const form = FormApp.create('가을 음악회 참가 신청 설문지');
  
  form.addTextItem();
  form.addMultipleChoiceItem();
  form.addCheckboxItem();
  form.addListItem();
}

function myFunction14_03_04() {
  const id = '1hNebA10JDKFES8u5L_mAsQaboG5iprUCFZJ8-b9K5S8'; //설문지 ID
  const form = FormApp.openById(id);  
  
  const items = form.getItems();
  for (const item of items) console.log(item.getType().toString());
  
  const itemId = items[0].getId();
  console.log(itemId, form.getItemById(itemId).getType().toString());
}
