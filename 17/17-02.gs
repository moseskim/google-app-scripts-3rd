// 예제 17-1
function showAlert() {
  const ui = DocumentApp.getUi();
  const title = '경고 다이얼로그 예';
  const prompt = '원하는 버튼을 누르십시오.';
  const response = ui.alert(title, prompt, ui.ButtonSet.YES_NO);
  
  switch (response) {
    case ui.Button.YES:
      console.log('"네"를 선택했습니다.'); 
      break;
    case ui.Button.NO:
      console.log('"아니오"를 선택했습니다.');
      break;      
    case ui.Button.CLOSE:
      console.log('닫기 버튼을 눌렀습니다.');
  }
}

// 예제 17-2
function showPrompt() {
  const ui = DocumentApp.getUi();
  const title = '입력 다이얼로그 예';
  const prompt = '이름을 입력하십시오.';
  const response = ui.prompt(title, prompt, ui.ButtonSet.OK_CANCEL);
  const name = response.getResponseText();
  
  switch (response.getSelectedButton()) {
    case ui.Button.OK:
      console.log(`Hello ${name}!`);
      break;
    case ui.Button.CANCEL:
      console.log('이름이 입력되지 않았습니다.');
      break;      
    case ui.Button.CLOSE:
      console.log('닫기 버튼으로 다이얼로그를 닫았습니다.');
  }
}
