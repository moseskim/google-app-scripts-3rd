//後ほど実行する
function myFunction14_04_01() { 
  const id = '********'; //フォームID
  const form = FormApp.openById(id);  
  const item = form.getItems(FormApp.ItemType.MULTIPLE_CHOICE)[0];

  console.log(item.getTitle()); //お持ちのPCは？
  console.log(item.getId()); //アイテムID
  console.log(item.getHelpText()); //
  console.log(item.getType().toString()); //MULTIPLE_CHOICE
  console.log(item.getIndex()); //1

  console.log(item.asMultipleChoiceItem().isRequired()); //false
}

function myFunction14_04_02() {
  const title = 'もくもく会参加申込みフォーム';
  const description = '次回のもくもく会についての参加申込みフォームです。';
  
  const form = FormApp.create(title);
  form.setDescription(description);    
  form.addTextItem().setTitle('氏名').setRequired(true);
  
  form.addMultipleChoiceItem()
    .setTitle('お持ちのPCのOSは？')
    .setChoiceValues(['Windows', 'Mac'])
    .setRequired(true);  
  
  form.addCheckboxItem()
    .setTitle('興味があるプログラム言語は？')
    .setChoiceValues(['VBA', 'Google Apps Script', 'Python'])
    .showOtherOption(true);
  
  form.addListItem()
    .setTitle('お住まいの都道府県は？')
    .setChoiceValues(['東京都', '埼玉県', '千葉県', '神奈川県']);
}
