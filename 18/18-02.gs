function myFunction18_02_01() {
  const folderId = '********'; //저장 폴더 ID
  const folder = DriveApp.getFolderById(folderId); //저장 폴더 ID

  const query = 'has:attachment';
  const threads = GmailApp.search(query, 0, 1);
  const messages = threads[0].getMessages();
  
  for (const message of messages) {
    const attachments = message.getAttachments();

    for (const attachment of attachments) {
      const subject = message.getSubject();
      const name = attachment.getName();
      console.log(`Subject: ${subject}, Attachment: ${name}`);

      folder.createFile(attachment);
    }
  }
}

function myFunction18_02_02() {
  const folderId = '********'; //저장 폴더 ID
  const folder = DriveApp.getFolderById(folderId); //저장 폴더 ID
  const files = folder.getFiles();
  
  const attachments = [];
  while (files.hasNext()) attachments.push(files.next());    
      
  const recipient = 'bob@example.com'; //받는 사람
  const subject = '첨부 파일 샘플'; 
  let body = '';
  body += '샘플 님\n';
  body += '\n';
  body += '이 메일은 첨부 파일이 있는 샘플 메일입니다.\n';
  body += '확인 바랍니다.';

  GmailApp.sendEmail(recipient, subject, body, {attachments: attachments});
}
