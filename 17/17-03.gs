function myFunction17_03_01() {
  const ui = DocumentApp.getUi();
  
  ui.createMenu('다이얼로그')
    .addItem('경고' ,'showAlert')
    .addSeparator()
    .addSubMenu(
      ui.createMenu('하위 메뉴')
        .addItem('입력', 'showPrompt')
    )
    .addToUi();
}
