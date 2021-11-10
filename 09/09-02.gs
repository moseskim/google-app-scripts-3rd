function myFunction09_02_01() {
  console.log(GmailApp.getInboxUnreadCount()); //받은편지함의 읽지 않은 스레드 수
  console.log(GmailApp.getStarredUnreadCount()); //별표편지함의 읽지 않은 스레드 수
  console.log(GmailApp.getSpamUnreadCount()); //스팸함의 읽지 않은 스레드 수
}

function myFunction09_02_02() {
  const recipient = 'bob@example.com';
  const subject = '샘플 메일';
  
  let body = '';
  body += '샘플님\n';
  body += '\n';
  body += '이 메일은 샘플 메일입니다.\n';
  body += '확인 바랍니다。';
  
  const options = {
    cc: 'tom@example.com, ivy@example.com',
    name: 'GAS로부터 전송'  
  };
  
  GmailApp.sendEmail(recipient, subject, body, options);
}

function myFunction09_02_03() {
  const recipient = 'bob@example.com';
  const subject = '샘플 메일';
  
  let body = '';
  body += '샘플님\n';
  body += '\n';
  body += '이 메일은 샘플 메일입니다.\n';
  body += '확인 바랍니다.';
  
  const options = {
    cc: 'tom@example.com, ivy@example.com',
    name: 'GAS로부터 전송'  
  };
  
  GmailApp.createDraft(recipient, subject, body, options);
}
