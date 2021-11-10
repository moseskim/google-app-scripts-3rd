function myFunction09_06_01() {
  const threads = GmailApp.getInboxThreads(0, 1);
  const message = GmailApp.getMessagesForThreads(threads)[0][0];

  console.log(message.getId()); //메시지 ID
  console.log(message.getDate()); //메시지 일시 (한국 표준시)
  console.log(message.getSubject()); //샘플 메일

  console.log(message.getFrom()); //보낸사람
  console.log(message.getTo()); //To 주소
  console.log(message.getCc()); //Cc 주소
  console.log(message.getBcc()); //Bcc 주소
  console.log(message.getReplyTo()); //ReplyTo 주소

  console.log(message.isDraft()); //false
  console.log(message.isInChats()); //false
  console.log(message.isInInbox()); //true
  console.log(message.isInTrash()); //false
  console.log(message.isStarred()); //false
  console.log(message.isUnread()); //false
}

function myFunction09_06_02() {
  const threads = GmailApp.getInboxThreads(0, 1);
  const message = GmailApp.getMessagesForThreads(threads)[0][0];

  console.log(message.getBody());
  console.log(message.getPlainBody());
}

function myFunction09_06_03() {
  const threads = GmailApp.getInboxThreads(0, 1);
  const message = GmailApp.getMessagesForThreads(threads)[0][0];

  let replyBody = '';
  replyBody += '모두에게 답장합니다.\n';
  replyBody += '확인 바랍니다.';
  message.replyAll(replyBody);
  
  const recipient = 'bob@example.com';
  message.forward(recipient);  
}

function myFunction09_06_04() {
  const threads = GmailApp.getInboxThreads(0, 1);
  const message = GmailApp.getMessagesForThreads(threads)[0][2];

  message.star();
}

function myFunction09_06_05() {
  const threads = GmailApp.getInboxThreads(0, 1);
  const messages = threads[0].getMessages();

  GmailApp.starMessages(messages);
}
