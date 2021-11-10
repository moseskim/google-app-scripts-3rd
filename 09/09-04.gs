function myFunction09_04_01() {
  const query = 'subject:스레드와 메시지를 확인한다.';
  const threads = GmailApp.search(query, 0, 1);

  console.log(threads[0].getFirstMessageSubject()); //스레드와 메시지를 확인한다
  console.log(threads[0].getId()); // 스레드 ID
  console.log(threads[0].getLastMessageDate()); //최신 메시지의 일시
  console.log(threads[0].getMessageCount()); //3
  console.log(threads[0].getPermalink()); //스레드 영구 링크
  console.log(threads[0].hasStarredMessages()); //false
  console.log(threads[0].isImportant()); //true
  console.log(threads[0].isInChats()); //false
  console.log(threads[0].isInInbox()); //true
  console.log(threads[0].isInSpam()); //false
  console.log(threads[0].isInTrash()); //false
  console.log(threads[0].isUnread()); //false
}

function myFunction09_04_02() {
  const query = 'subject:스레드와 메시지를 확인한다.';
  const threads = GmailApp.search(query, 0, 1);

  threads[0].markImportant();
  threads[0].markUnread();
  threads[0].moveToInbox();
}

function myFunction09_04_03() {
  const query = 'subject:스레드와 메시지를 확인한다.';
  const threads = GmailApp.search(query, 0, 1);

  GmailApp.markThreadsImportant(threads);
  GmailApp.markThreadsUnread(threads);
  GmailApp.moveThreadsToInbox(threads);
}
