function myFunction09_05_01() {
  const threads = GmailApp.getInboxThreads(0, 1);
  const messages = threads[0].getMessages();
  console.log(messages[0].getSubject()); //샘플 메일
}

function myFunction09_05_02() {
  const threads = GmailApp.getInboxThreads(0, 1);
  const messages = threads[0].getMessages();
  const id = messages[0].getId();

  const message = GmailApp.getMessageById(id);
  console.log(message.getSubject()); //샘플 메일
}

function myFunction09_05_03() {
  const threads = GmailApp.getInboxThreads(0, 2);
  const messagesForThreads = GmailApp.getMessagesForThreads(threads);
  
  for (const [i, thread] of messagesForThreads.entries()) {
    for (const [j, message] of thread.entries()) {
      console.log(`[${i}][${j}]: ${message.getSubject()}`);
    }
  }
}
