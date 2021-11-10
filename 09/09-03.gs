function myFunction09_03_01() {
  const threads = GmailApp.getInboxThreads(0, 3);  
  
  for (const thread of threads) {
    console.log(thread.getFirstMessageSubject());
  }
}

function myFunction09_03_02() {
  const threads = GmailApp.getInboxThreads(0, 1);
  const id = threads[0].getId();

  const thread = GmailApp.getThreadById(id);
  console.log(thread.getFirstMessageSubject()); //샘플 메일
}

function myFunction09_03_03() {
  const query = 'is:unread "설문폼에서 전송되었습니다."'
  const threads = GmailApp.search(query, 0, 10);
  
  for (const thread of threads) {
    console.log(thread.getFirstMessageSubject());
  }
}
