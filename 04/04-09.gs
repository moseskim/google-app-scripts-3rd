function myFunction04_09_01() {
  Browser.msgBox('Hello');
}

function myFunction04_09_02() {
  try {
    Browser.msgBox('Hello');
  } catch(e) {
    console.log('예외가 발생했습니다: ' + e.message);
  } finally {
    console.log('스크립트 실행 완료!');
  }
}

function myFunction04_09_03() {
  const x = 0;
  if (x === 0) {
    throw new Error('x에 0이 대입되었습니다.');
  }   
}

function myFunction04_09_04() {
  const x = 0;
  try {
    if (x === 0) {
      throw new Error('x에 0이 대입되었습니다.');
    }   
  } catch(e) {
    console.log('예외가 발생했습니다: ' + e.message);
  }
}
