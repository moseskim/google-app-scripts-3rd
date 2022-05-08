//나중에 실행한다
function myFunction14_04_01() { 
  const id = '********'; //설문지 ID
  const form = FormApp.openById(id);  
  const item = form.getItems(FormApp.ItemType.MULTIPLE_CHOICE)[0];

  console.log(item.getTitle()); //사용하는 PC의 운영체제는 무엇입니까?
  console.log(item.getId()); //아이템 ID
  console.log(item.getHelpText()); //
  console.log(item.getType().toString()); //MULTIPLE_CHOICE
  console.log(item.getIndex()); //1

  console.log(item.asMultipleChoiceItem().isRequired()); //false
}

function myFunction14_04_02() {
  const title = '가을 모임 참가 신청 설문지';
  const description = '다음 모임 참가 신청 설문지입니다.';
  
  const form = FormApp.create(title);
  form.setDescription(description);    
  form.addTextItem().setTitle('이름').setRequired(true);
  
  form.addMultipleChoiceItem()
    .setTitle('사용하는 PC은 운영체제는 무엇입니까?')
    .setChoiceValues(['Windows', 'Mac'])
    .setRequired(true);  
  
  form.addCheckboxItem()
    .setTitle('관심이 있는 프로그래밍 언어는 무엇입니까?')
    .setChoiceValues(['VBA', 'Google Apps Script', 'Python'])
    .showOtherOption(true);
  
  form.addListItem()
    .setTitle('거주지 주소(시)는 어디입니까?')
    .setChoiceValues(['서울시', '부산시', '광주시', '대전시']);
}
